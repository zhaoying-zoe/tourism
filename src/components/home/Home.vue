<template>
  <div class="home">
    <HomeHeader />
    <Swiper />
  </div>
</template>
<script>
import HomeHeader from "./pages/Header";
import Swiper from "@/components/home/pages/swiper";

export default {
  components: {
    HomeHeader,
    Swiper,
  },
};
</script>