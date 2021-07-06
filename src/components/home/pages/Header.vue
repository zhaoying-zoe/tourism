<template>
  <div class="home-header">
    <div class="header-left">
      <span class="iconfont">&#xe612;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe605;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">北京<span class="iconfont">&#xe6aa;</span></div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="stylus">
@import '~css/var.styl';

/* 头部 */
.home-header {
  display: flex;
  width: 100%;
  line-height: 0.88rem;
  font-size: 0.3rem;
  color: $textColor;
  background-color: $bgColor;
}

/* 头部左侧 */
.header-left {
  width: 0.8rem;
  text-align: center;
}

/* 头部搜索 */
.header-search {
  margin: 0.12rem 0;
  padding-left: 0.2rem;
  line-height: 0.6rem;
  flex: 1;
  font-size: 0.28rem;
  color: #e4e7ea;
  background-color: #ffffff;
  border-radius: 0.1rem;
}

/* 头部右侧 */
.header-right {
  font-size: 0.28rem;
  padding: 0 0.2rem;
}
</style>