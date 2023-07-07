<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import CommonButton from '@/components/CommonButton.vue';

const instance = getCurrentInstance();
if (instance && instance.proxy) {
  // @ts-ignore
  // console.log(instance.proxy.$tv.value);
}

const content = ref('');

const { userAgent, platform } = navigator;

type IMovie = {
  title: string;
  url: string;
};

const matchMovieData = (input: string): IMovie => {
  let title = '';
  let imgUrl = '';

  let result = input.match(/<div class="subject-collection-subject-name-text">(.+?)<\/div>/);
  if (result) {
    // console.log('title ', result[1]);
    title = result[1];
    const spanIndex = title.indexOf('<span');
    if (spanIndex > 0) {
      title = title.substring(0, spanIndex);
    }
  }

  result = input.match(/https:\/\/\S+\.(jpg|png)/);
  if (result) {
    // console.log(result[0]);
    imgUrl = result[0];
  }
  return {
    title,
    url: imgUrl
  };
};

const startTransform = () => {
  const str = content.value;
  const list = str.split('\n');
  console.log('length ', list.length);
  const data: IMovie[] = [];
  list.forEach((item) => {
    if (item) {
      data.push(matchMovieData(item));
    }
  });
  console.log(JSON.stringify(data));
};

const exitApp = () => {
  window.electronApp.appExit();
};
</script>

<template>
  <div class="about">
    <div class="props_title">
      <span>userAgent: </span><span>{{ userAgent }}</span>
      <p>
        <span>platform: </span><span>{{ platform }}</span>
      </p>
    </div>
    <RouterLink to="/movies">
      <div id="about_first_link" v-focusable class="link">Go To Movies Page</div>
    </RouterLink>

    <CommonButton title="退出" @on-click="exitApp"> </CommonButton>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  padding: 0 50px;
}
.link {
  padding: 10px 22px;
  font-size: 28px;
  color: #000;
  margin: 10px 0;
}

.focus {
  background-color: aqua;
  border-radius: 8px;
}

.text_area {
  min-width: 600px;
  min-height: 700px;
  padding: 20px;
  font-size: 14px;
  display: block;
}

span:nth-child(1) {
  font-size: 20px;
}

span:nth-child(2) {
  font-size: 20px;
  font-weight: 500;
}
</style>
