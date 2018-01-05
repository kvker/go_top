<template lang="pug">
  z-page.login(:mainPage="true", backgroung="transparent")
    login-view
</template>

<script>
import loginView from '../component/login/view.vue'

export default {
  components: {
    loginView,
  },
  data() {
    return {
      
    }
  },
}
</script>


<style scoped lang='less'>
.login {
  
}
</style>
