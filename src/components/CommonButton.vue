<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue';
import type { PropType, StyleValue } from 'vue';

const instance = getCurrentInstance();
const commonButton = ref<HTMLDivElement | null>(null);

if (instance && instance.proxy) {
  // @ts-ignore
  const tv = instance.proxy.$tv;
  // console.log('proxy .tv ', tv);
  if (tv && tv.setOnFocusChangeListener) {
    tv.setOnFocusChangeListener((element: HTMLDivElement, focus: boolean) => {
      if (commonButton.value === element) {
        console.log('common button focus changed ', ', ', focus);
        // const style: CSSProperties = this.style;
      }
    });
  }
}

const props = defineProps({
  title: {
    type: String
  },
  customStyle: {
    type: Object as PropType<StyleValue>
  },
  titleStyle: {
    type: Object as PropType<StyleValue>
  }
});

const onFocused = (event: Event) => {
  if (event.target) {
    const element = event.target as HTMLDivElement;
    // console.log('back button focused ', event.target.setAttribute);
    element.setAttribute('class', 'common_button button_focused');
  }
};
const onBlur = (event: Event) => {
  if (event.target) {
    const element = event.target as HTMLDivElement;
    // console.log('back button focused ', event.target.setAttribute);
    element.setAttribute('class', 'common_button');
  }
};
</script>

<template>
  <div
    ref="commonButton"
    v-focusable
    class="common_button"
    :style="customStyle"
    @onFocus="onFocused"
    @onBlur="onBlur"
  >
    <span :style="titleStyle" class="button_title">{{ title }}</span>
  </div>
</template>

<style scoped>
.common_button {
  background-color: #3782ff;
  border-radius: 10px;
  margin: 24px 30px;
  padding: 20px 30px;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button_title {
  font-size: 20px;
  /* font-weight: 800; */
  text-align: center;
  color: #fff;
  padding: 10px 0px;
}

.button_focused {
  margin: 20px 30px;
  border: 4px solid #fff;
}
</style>
