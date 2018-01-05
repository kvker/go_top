<template lang="pug">
  z-view.home-view
    z-view.top-buttons
      z-vertical-button.left(@click='evaluate')
        z-view.circle
          z-text ☆
        template(slot="bottom")
          z-text.title 给好评
      z-vertical-button.right(@click='$router.push("/rule")')
        z-view.circle
          z-text ?
        template(slot="bottom")
          z-text.title 玩法了解
    z-view.remind
      z-text.start-time 下期开始时间
      z-view.detail
        z-text 今天 20:00
        z-text |
        z-text ¥50000 奖金
    z-view.card
      z-img.user-head(src="#", alt='head')
      z-text.username 心聆赵君
      z-view.info
        z-view.left
          z-text.title 账户余额
          z-text.detail ¥0
        z-view.right
          z-text.title 周排名
          z-text.detail -
      z-view.life
        z-text.title 额外生命值
        z-view.love
          z-view.ll
            z-view.lc
          z-view.lr
            z-view.lc
          z-text.count 1
        z-button.get-more(@click='$router.push("/more")') 获取更多
    z-view.bottom-buttons
      z-button.left(@click='$router.push("/rank")') 排行榜
      z-button.right(@click='invite') 邀请好友
</template>

<script>
import { zVerticalButton } from "koala-ui";

export default {
  components: {
    zVerticalButton
  },
  methods: {
    evaluate(type) {
      alert('点击评价')
    },
    invite(type) {
      alert('点击邀请')
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

    .left, .right {
      width: 80px;
      margin-top: 24px;
      
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

  .remind {
    width: 100%;
    padding: 0 20%;
    margin-top: 40px;
    color: white;
    text-align: center;

    .start-time {
      font-size: 12px;
    }

    .detail {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      font-weight: 800;
    }
  }

  .card {
    position: relative;
    left: e('calc(50% - 150px)');
    display: flex;
    flex-direction: column;
    align-items: center;
    width: @width;
    height: @width;
    border-radius: 10px;
    background: white;
    margin-top: 32px;

    @width: 300px;

    .user-head {
      width: 40px;
      height: 40px;
      margin-top: 32px;
    }

    .username {
      margin: 16px 0;
      line-height: 40px;
    }

    @d8line: 1px solid #d8d8d8;

    .info {
      display: flex;
      border-top: @d8line;
      border-bottom: @d8line;

      .left {
        border-right: @d8line;
      }

      .left, .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: @width / 2;
        height: @width / 3;
        

        .title {
          font-size: 14px;
          color: #999;
        }

        .detail {
          font-size: 40px;
          color: purple;
        }
      }
    }

    .life {
      display: flex;
      flex: 1;
      justify-content: space-around;
      align-items: center;
      width: @width;
      color: #999;

      .title {
        width: 96px;
        font-size: 14px;
      }
      
      .love {
        position: relative;
        top: 4px;
        width: 24px;
        line-height: 24px;
        text-align: center;

        .count {
          top: -4px;
          position: relative;
          color: white;
        }

        @loveWidth: 24px;

        .ll, .lr {
          position: absolute;
          top: 0;
          left: 0;
          width: @loveWidth;
          height: @loveWidth;
          background: red;
          transform: rotateZ(45deg);
          z-index: 0;

          .lc {
            position: absolute;
            width: @loveWidth;
            height: @loveWidth;
            border-radius: 50%;
          }
        }

        .ll {
          
          .lc {
            left: -@loveWidth / 2;
            background: red;
          }
        }

        .lr {

          .lc {
            top: -@loveWidth / 2;
            background: red;
          }
        }
      }

      .get-more {
        width: 96px;
        height: 32px;
        border-radius: 20px;
        border: @d8line;
        background: transparent;
        color: #999;
      }
    }
  }

  .bottom-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;

    .left, .right {
      width: 40%;
      height: 40px;
      margin: 0 5%;
      border-radius: 20px;
      background: rgba(200, 200, 200, .2);
      color: white;
      font-size: 14px;
    }
  }
}
</style>
