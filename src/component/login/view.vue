<template lang="pug">
  z-view.homepage
    z-view.top
      z-text 知识来冲顶
      z-text 奖金任你领
    z-view.bottom
      z-button.phone-login 手机号码登录
      z-button.wechat-login 微信登录
      z-text.remind 注册即表示你已同意
      router-link.link-delegate(to="delegate") 用户协议及隐私条款
</template>

<script>
export default {

};
</script>

<style scoped lang="less">
.homepage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: purple;

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
