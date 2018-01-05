<template lang="pug">
  z-view.home-view
    z-view.top-buttons
      zVerticalButton.left
        z-view.circle
          z-text ☆
        template(slot="bottom")
          z-text.title 给好评
      zVerticalButton.right(@click='click("right")')
        z-view.circle
          z-text ?
        template(slot="bottom")
          z-text.title 玩法了解
</template>

<script>
import { zVerticalButton } from "koala-ui";

export default {
  components: {
    zVerticalButton
  },
  methods: {
    click(type) {
      this.$router.push('//rule')
    }
  }
};
</script>

<style scoped lang="less">
.home-view {
  widows: 100%;
  height: 100%;
  background: purple;

  .top-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // height: 40px;

    .left, .right {
      width: 80px;
      margin-top: 8px;
      
      .circle {
        width: 30px;
        line-height: 30px;
        border-radius: 50%;
        text-align: center;
        background: rgba(200, 200, 200, .2);
        color: white;
      }

      .title {
        font-size: 12px;
        color: #ddd;
      }
    }
  }
}
</style>
