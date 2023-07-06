<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';
import { RouterLink } from 'vue-router';
// import { focusable } from 'vue-tv-focusable';

import { getCurrentInstance, onMounted, reactive } from 'vue';


const onAboutClick = () => {
  console.log('about link focused');

  const instance = getCurrentInstance();
  const ele = document.querySelector('#about_first_link');
  console.log('ele ', ele);
  if (instance && instance.proxy) {
    // @ts-ignore
    // const firstLinkPath = instance.proxy.$tv.readXPath();
    // console.log('first lint xPath: ', firstLinkPath);
  }
};

const { userAgent, platform, hardwareConcurrency } = navigator;
</script>

<template>
  <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/home/index">
          <div v-focusable class="nav_button">Home</div>
        </RouterLink>
        <RouterLink to="/home/about">
          <div v-focusable class="nav_button" @click="onAboutClick">About</div>
        </RouterLink>
      </nav>
    </div>
  </header>
  <router-view></router-view>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.nav_button {
  padding: 10px 22px;
  font-size: 30px;
}

.focus {
  background-color: aqua;
  border-radius: 8px;
  color: #333;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-direction: column;
    align-items: center;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
