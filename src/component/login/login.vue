<template lang="pug">
  z-page.login(:mainPage="true", :noHeader="true", backgroung="transparent")
    login-view
</template>

<script>
import loginView from './view.vue'

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
