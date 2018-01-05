<template>
  <z-page
    id="app"
    :mainPage="true"
    background="transparent">
    <homepage />
    <transition
      :name="transitionName"
      @before-enter="beforeEnter"
      @after-enter="afterEnter">
      <router-view
        :afterEnter="hasEnter" />
    </transition>
  </z-page>
</template>

<script>
import Homepage from './component/homepage/homepage.vue'

export default {
  components: {
    Homepage,
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
      else this.transitionName = toDepth > fromDepth ? "push" : "pop";
    }
  },
  methods: {
    itemClick(item) {
      console.log(item)
      this.$router.push('/test')
    },
    beforeEnter(el, done) {
      this.hasEnter = false;
    },
    afterEnter(el, done) {
      this.hasEnter = true;
    }
  }
}
</script>


<style scoped lang='less'>
#app {
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
}
</style>
