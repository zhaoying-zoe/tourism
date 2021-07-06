<template>
  <div class="header-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in swiperList" :key="index">
        <img :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperList: [
        {
          id: "1",
          imgUrl: require("@/assets/img/swiper1.png"),
        },
        {
          id: "2",
          imgUrl: require("@/assets/img/swiper2.png"),
        },
        {
          id: "3",
          imgUrl: require("@/assets/img/swiper3.png"),
        },
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true, // 自动轮播
      },
    };
  },
};
</script>

<style scoped lang='stylus'>
.header-swiper {
  background-color: #ccc;
  height: 0;
  padding-bottom: 26.67%;
}

.header-swiper img {
  width: 100%;
  height: 4rem;
}

.header-swiper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
</style>