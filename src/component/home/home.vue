<template lang="pug">
  z-page.home(:mainPage="true")
    transition(:name="transitionName", @before-enter="beforeEnter", @after-enter="afterEnter")
      router-view(:afterEnter="hasEnter")
</template>

<script>
export default {
  mounted() {
    this.$router.push("/login")
  },
  data() {
    return {
      transitionName: "push",
      hasEnter: false,
    }
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      if (to.path === "/") this.transitionName = "pop";
      else if (from.path === "/") this.transitionName = "push";
      else this.transitionName = toDepth >= fromDepth ? "push" : "pop";
    }
  },
  methods: {
    beforeEnter(el, done) {
      this.hasEnter = false;
    },
    afterEnter(el, done) {
      this.hasEnter = true;
    }
  }
};
</script>

<style scoped lang="less">
.home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: purple;

  .push-enter {
    left: 100%;
  }

  .push-enter-active {
    transition: left 0.3s ease;
  }

  .push-enter-to,
  .push-leave {
    left: 0;
    opacity: 1;
  }

  .push-leave-active {
    transition: all 0.3s ease;
  }

  .push-leave-to {
    left: -50%;
    opacity: 0.8;
  }

  .pop-enter {
    left: -50%;
    opacity: 0.8;
  }

  .pop-enter-active {
    transition: all 0.3s ease;
  }

  .pop-enter-to,
  .pop-leave {
    left: 0;
    opacity: 1;
  }

  .pop-leave-active {
    transition: left 0.3s ease;
  }

  .pop-leave-to {
    left: 100%;
  }

  .top,
  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 50%;
  }

  .top {
  }

  .bottom {

    button {
      width: 80%;
      height: 40px;
      border: 0;
      border-radius: 20px;

      &.phone-login {
      margin-bottom: 8px;
        color: #ddd;
        background: transparent;
        font-size: 14px;
      }

      &.wechat-login {
        margin-bottom: 24px;
        color: purple;
        background: yellow;
        font-size: 16px;
      }
    }

    .littleFontSize {
      font-size: 12px;
      text-decoration: none;
    }

    .remind {
      .littleFontSize;
      color: #999;
      margin-bottom: 8px;
    }

    .link-delegate {
      .littleFontSize;
      color: white;
      margin-bottom: 16px;
    }
  }
}
</style>
