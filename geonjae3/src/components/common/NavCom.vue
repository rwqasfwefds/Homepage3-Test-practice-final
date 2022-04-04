<template>
  <nav id="main">
    <div class="pull-left">
      <ul class="outer-menu">
        <li
          class="outer-menu-item"
          v-on:mouseover="about = true"
          v-on:mouseleave="about = false"
        >
          <span class="menu-title">About</span>
          <ul class="inner-menu" v-if="about">
            <li class="inner-menu-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="inner-menu-item">
              <router-link to="/register">회원가입</router-link>
            </li>
          </ul>
        </li>
        <li
          class="outer-menu-item"
          v-on:mouseover="infor = true"
          v-on:mouseleave="infor = false"
        >
          <span class="menu-title">게시판</span>
          <ul class="inner-menu" v-if="infor">
            <li class="inner-menu-item">
              <router-link to="/#">공지</router-link>
            </li>
            <li class="inner-menu-item">
              <router-link to="/#">자유 게시판</router-link>
            </li>
          </ul>
        </li>
        <li
          class="outer-menu-item"
          v-on:mouseover="data = true"
          v-on:mouseleave="data = false"
        >
          <span class="menu-title">오시는 길</span>
          <ul class="inner-menu" v-if="data">
            <li class="inner-menu-item">
              <router-link to="/#">버스</router-link>
            </li>
            <li class="inner-menu-item">
              <router-link to="/#">지하철</router-link>
            </li>
            <li class="inner-menu-item">
              <router-link to="/#">주차장</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="pull-right">
      <div class="search-bar">
        <form>
          <input type="text" class="input-search" />
          <input type="submit" class="input-search-submit" value="검색" />
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      about: false,
      infor: false,
      data: false,
    };
  },
};
</script>

<style scoped>
@import '../../assets/css/navigation.css'
</style>
