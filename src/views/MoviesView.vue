<script setup lang="ts">
import { onMounted, ref, type CSSProperties } from 'vue';
import BackButton from '@/components/BackButton.vue';
import CommonButton from '@/components/CommonButton.vue';

type IMovie = {
  title: string;
  url: string;
};
// const backButton = ref<any>(null);

const MovieDataList = [
  {
    title: '小说家的电影',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2870976733.jpg'
  },
  {
    title: '祝你好运，里奥·格兰德',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2872943472.jpg'
  },
  {
    title: '子弹列车',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2873950053.jpg'
  },
  {
    title: '不要抬头',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2730833093.jpg'
  },
  {
    title: '爱情神话',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2772925591.jpg'
  },
  {
    title: '还是觉得你最好',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2879301401.jpg'
  },
  {
    title: '沼泽深处的女孩',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2883601331.jpg'
  },
  {
    title: '不',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2879326392.jpg'
  },
  {
    title: '渔港的肉子酱',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2871666892.jpg'
  },
  {
    title: '泰国洞穴救援',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2680301852.jpg'
  },
  {
    title: 'Tinder诈骗王',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2841987393.jpg'
  },
  {
    title: '龙之家族 第一季',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2874976551.jpg'
  },
  {
    title: '万物生灵 第三季',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2881356802.jpg'
  },
  {
    title: '真相捕捉 第二季',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2885213932.jpg'
  },
  {
    title: '9号秘事 第七季',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2871308891.jpg'
  },
  {
    title: '少年法庭',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2867989683.jpg'
  },
  {
    title: '弱小英雄',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2883202973.jpg'
  },
  {
    title: '二十五，二十一',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2867903173.jpg'
  },
  {
    title: '财阀家的小儿子',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2882015921.jpg'
  },
  {
    title: '经典杯子蛋糕',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2877840131.jpg'
  },
  {
    title: '妻子变成小学生',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2854778851.jpg'
  },
  {
    title: '德凯奥特曼',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2874665601.jpg'
  },
  {
    title: '静雪',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2881441401.jpg'
  },
  {
    title: '大侦探 第七季',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2867146843.jpg'
  },
  {
    title: '半熟恋人',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2808055043.jpg'
  },
  {
    title: '开始推理吧',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2874271301.jpg'
  },
  {
    title: '死神 千年血战篇',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2877408292.jpg'
  },
  {
    title: '鬼灭之刃 游郭篇',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2851359433.jpg'
  },
  {
    title: '辉夜大小姐想让我告白：究极浪漫',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2702426153.jpg'
  },
  {
    title: '擅长捉弄的高木同学 第三季',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2772967062.jpg'
  },
  {
    title: '夏日重现',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2867588013.jpg'
  },
  {
    title: 'JOJO的奇妙冒险 石之海 Part.2',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2870644922.jpg'
  },
  {
    title: '众神之地',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2875636481.jpg'
  },
  {
    title: '风味人间 第四季',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2883894763.jpg'
  },
  {
    title: 'jeen-yuhs: 坎耶·维斯特三部曲',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2868389211.jpg'
  },
  {
    title: '麦兜故事',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p804938713.jpg'
  },
  {
    title: '魁拔Ⅲ战神崛起',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2202613921.jpg'
  },
  {
    title: '无间道',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2564556863.jpg'
  },
  {
    title: '枪火',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1538646661.jpg'
  },
  {
    title: '岁月神偷',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p456666151.jpg'
  },
  {
    title: '少年派的奇幻漂流',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1784592701.jpg'
  },
  {
    title: '人再囧途之泰囧',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1793720172.jpg'
  },
  {
    title: '无间道',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2564556863.jpg'
  },
  {
    title: '猫鼠游戏',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p453924541.jpg'
  },
  {
    title: '钢琴家',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1381339291.jpg'
  },
  {
    title: '蓝色大门',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2650516283.jpg'
  },
  {
    title: '谍影重重',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1597183981.jpg'
  },
  {
    title: '蜘蛛侠',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p457050361.jpg'
  },
  {
    title: '生化危机',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2174120073.jpg'
  },
  {
    title: '情人',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1674536431.jpg'
  },
  {
    title: '落水狗',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1851340431.jpg'
  },
  {
    title: '笑傲江湖2：东方不败',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p838966341.jpg'
  },
  {
    title: 'E.T.外星人',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p984732992.jpg'
  },
  {
    title: '控方证人',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2367853261.jpg'
  },
  {
    title: '大卫·雷奇',
    url: 'https://img2.doubanio.com/view/personage/raw/public/293061221b580e7b75f379c84e16a822.jpg'
  },
  {
    title: '文牧野',
    url: 'https://img2.doubanio.com/view/celebrity/raw/public/p1563174692.41.jpg'
  },
  {
    title: '张艺谋',
    url: 'https://img2.doubanio.com/view/personage/raw/public/c18c0962e339ca8b6f1d9e8be73cc8d1.jpg'
  },
  {
    title: '钟孟宏',
    url: 'https://img2.doubanio.com/view/personage/raw/public/015d3dce256d945d0db58709a688b4a2.jpg'
  },
  {
    title: '白敬亭',
    url: 'https://img2.doubanio.com/view/personage/raw/public/956c3479db29c846cf17aa085d6a9a5f.jpg'
  },
  {
    title: '孙锡久',
    url: 'https://img2.doubanio.com/view/personage/raw/public/b359a3c29087b030f43e216b23716282.jpg'
  },
  { title: '汤唯', url: 'https://img2.doubanio.com/view/celebrity/raw/public/p1507363720.81.jpg' },
  {
    title: '宇宙探索编辑部',
    url: 'https://img2.doubanio.com/view/personage/raw/public/31015b94eacfff1fbc59fd3aaf763f61.jpg'
  },
  {
    title: '坚如磐石',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2607353063.jpg'
  },
  {
    title: '奥本海默',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2876555451.jpg'
  },
  {
    title: '沙丘2',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2891479232.jpg'
  },
  {
    title: '闪电侠',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2892365111.jpg'
  },
  {
    title: '三体',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2886492021.jpg'
  },
  {
    title: '狂飙',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2886376181.jpg'
  },
  {
    title: '模仿犯',
    url: 'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2887590312.jpg'
  }
];

const assets: IMovie[] = [];

for (let i = 0; i < 70; i += 1) {
  let title = '';
  const step = i % 3;
  let url = '';
  if (step === 0) {
    title =
      'Crossing the Heaven and Earth, Following My Heart, Tang San Shuang Divine Clothes Appear';
    url = '/src/assets/imgs/douluo.png';
  } else if (step === 1) {
    title = 'Bone shattering, dust soaking, blood soaking, and coming back again';
    url = '/src/assets/imgs/perfect_world.jpg';
  } else {
    title = 'Fighting for the Clear Sky';
    url = '/src/assets/imgs/fighter.jpeg';
  }
  assets.push({
    title: `${title}: ${i + 1}`,
    url
  });
}

const list = assets;

onMounted(() => {
  // backButton.value.focusClassName = 'button_focus';
});

let imageCount = 0;
const urlMap: { [key: string]: boolean } = {};

const checkAllImageLoad = () => {
  if (imageCount === list.length) {
    console.log('all image load done ');
    const array = [...list];
    let index = 0;
    while (index < array.length) {
      const item = array[index];
      if (urlMap[item.url]) {
        array.splice(index, 1);
      } else {
        index += 1;
      }
    }

    // console.log('result: ', array.length, ' of ', list.length);
    // console.log(JSON.stringify(array));
  }
};

const onLoadImgError = (e: Event) => {
  imageCount += 1;
  if (e.target) {
    const imgEle = e.target as HTMLImageElement;
    // console.log(imgEle.src);
    urlMap[imgEle.src] = true;
  }
  checkAllImageLoad();
};
const onImageLoad = () => {
  imageCount += 1;
  checkAllImageLoad();
};

const buttonStyle: CSSProperties = {
  padding: '10px 30px',
  margin: '10px 10px',
  flex: 1
};
</script>

<template>
  <div class="root">
    <BackButton />
    <h1>Guess: Exciting Content For You</h1>
    <div class="top_button_container">
      <CommonButton :title-style="{ padding: 0 }" :style="buttonStyle" title="All" />
      <CommonButton :title-style="{ padding: 0 }" :style="buttonStyle" title="Fiction" />
      <CommonButton :title-style="{ padding: 0 }" :style="buttonStyle" title="Love" />
      <CommonButton :title-style="{ padding: 0 }" :style="buttonStyle" title="Comedy" />
      <CommonButton :title-style="{ padding: 0 }" :style="buttonStyle" title="Action" />
      <CommonButton :title-style="{ padding: 0 }" :style="buttonStyle" title="Feature" />
    </div>
    <h1>HK: enough to whatch at once!</h1>
    <div class="grid">
      <div v-focusable class="cell" v-for="item in list" :key="item.title">
        <img class="image" @load="onImageLoad" @error="onLoadImgError" :src="item.url" />
        <p class="badge_title">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.root {
  width: 100%;
  padding: 20px 16px;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  background-color: rgba(14, 71, 161);
}

h1 {
  font-size: 38px;
  font-weight: 800;
  color: white;
  padding: 0 20px;
}

.poster_row {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  justify-content: flex-start;
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 33%);
  /* max-width: 1280px; */
  width: 100%;
}
.cell {
  margin: 5% 5%;
  /* transform: scale(1); */
  /* width: 20%; */
  /* height: 80%; */
  transition: transform 500ms;
  /* background-color: #fca; */
  border-radius: 10px;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: content-box;
}

.focus {
  /* margin: 14px 12px; */
  transform: scale(1.2);
  transition: transform 500ms;
  position: relative;
  animation: borderAnimation 4s linear infinite;
  border: 10px solid;
  border-radius: 20px;
}

@keyframes borderAnimation {
  0% {
    border-image: linear-gradient(to right, red, yellow, green, blue, purple) 4;
  }
  100% {
    border-image: linear-gradient(to right, purple, blue, green, yellow, red) 4;
  }
}

/* .focus::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-radius: 14px;
  transform: translate(-4px, -4px);
  background-image: linear-gradient(to left top, #12f, #fff);
  background-clip: border-box;
  background-origin: border-box;
  z-index: -1;
  box-sizing: content-box;
} */

.top_button_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  height: 80px;
}

.image {
  flex: 1;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  /* width: 100px; */
  /* height: 100px; */
}

.badge_title {
  background-color: #666;
  color: #fff;
  font-size: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
  overflow: hidden;
  padding: 5px 10px;
  border-radius: 0 0 10px 10px;
}
</style>
