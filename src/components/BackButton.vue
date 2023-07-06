<script lang="ts">
import { ref, onMounted, type StyleValue, type PropType, defineProps } from 'vue';

// const backButton = ref<any>(null);

// onMounted(() => {
//   if (backButton.value) {
//     // console.log('back button type: ', typeof backButton.value.init);
//     backButton.value.setOnFocusChangeListener(() => {

//     });
//   }
// })

export default {
  created() {
    // @ts-ignore
    console.log('back button created');
  },
  data() {
    return {};
  },
  props: {
    style: {
      type: Object as PropType<StyleValue>,
    }
  },
  unmounted() {
    // @ts-ignore
    const tv = this.$tv;
    // console.log(typeof tv.init);
    if (tv && tv.resetFocusClassName) {
      tv.resetFocusClassName();
    }
  },
  methods: {
    onPress() {
      this.$router.back();
    },
    onFocused(event: Event) {
      if (event.target) {
        const element = event.target as HTMLDivElement;
        // console.log('back button focused ', event.target.setAttribute);
        element.setAttribute('class', 'back_button button_focus');
      }
    },
    onBlur(event: Event) {
      if (event.target) {
        const element = event.target as HTMLDivElement;
        // console.log('back button focused ', event.target.setAttribute);
        element.setAttribute('class', 'back_button');
      }
    }
  }
};
</script>

<template>
  <div
    :style="style"
    id="back_button"
    ref="backButton"
    v-focusable
    class="back_button"
    @click="onPress"
    @onFocus="onFocused"
    @onBlur="onBlur"
  >
    返回
  </div>
</template>

<style scoped>
.back_button {
  font-size: 28px;
  background-color: #3782ff;
  color: #fff;
  padding: 10px 0px;
  text-align: center;
  border-radius: 10px;
  margin: 24px 30px;
  box-sizing: content-box;
  padding: 20px 30px;
  min-width: 200px;
}

.button_focus {
  margin: 20px 30px;
  border: 4px solid #fff;
}
</style>
