<template>
  <section class="banner">
    <div class="banner-inner">
      <!-- LOGO -->
      <a class="banner-left" href="/">
        <img class="logo" src="./images/ew_icon.png" alt="logo">
        <span class="split"></span>
        <span class="title">三尺科技</span>
      </a>
      <!-- 菜单 -->
      <div class="banner-right">
        <router-link
          active-class="banner-link-active"
          v-for="route in routerLink"
          :key="route.path"
          class="banner-right-link"
          :to="route.path"
        >{{route.label}}
        </router-link>
        <el-dropdown trigger="click" size="medium">
          <div class="user-bg"></div>
          <el-dropdown-menu slot="dropdown" class="banner-dropdown-menu">
            <el-dropdown-item class="banner-logout-row">
               <span class="banner-logout-row-inner">
                 <span>Admin</span>
                 <span class="logout-btn" @click="logout">退出</span>
               </span>
             </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/setting">个人设置</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </section>
</template>

<script>
import { removeToken } from '@/helpers/auth'

export default {
  name: 'Banner',
  data() {
    return {
      activeIndex: '1',
      routerLink: [
        { path: '/home', label: '首页' },
        { path: '/component/table/index', label: '组件' }
      ]
    }
  },
  created() {},
  methods: {
    logout() {
      removeToken()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  min-height: 56px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  text-align: center;
  .banner-inner {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 100%;
    width: calc(100% - 120px);
    .banner-left {
      .logo {
        width: 40px;
        vertical-align: middle;
        border-right: 1px solid #ececec;
        margin-right: 20px;
      }
      .title {
        font-weight: 900;
        color: #284979;
        font-size: 18px;
        vertical-align: middle;
      }
    }
    .banner-right {
      display: flex;
      height: 100%;
      align-items: center;
      .banner-right-link {
        display: flex;
        margin-right: 20px;
        height: 100%;
        align-items: center;
        padding: 0 14px;
        text-align: center;
      }
      .user-bg {
        width: 30px;
        height: 30px;
        background: url(./images/qy_user.png)no-repeat 0 2px;
        background-size: 46px;
        cursor: pointer;
      }
    }
  }
}
</style>
<style lang="less">
.banner-link-active {
  color: #66b1ff;
  border-bottom: 2px solid #66b1ff;
}
.banner-dropdown-menu {
  background: red;
  padding: 0 !important;
  margin-top: 20px !important;
  .banner-logout-row {
    &:hover {
      background: #fff !important;
      color: #000 !important;
    }
    .banner-logout-row-inner {
      display: flex;
      height: 100%;
      justify-content: space-between;
      cursor: pointer;
      .logout-btn:hover {
        color: #66b1ff;
      }
    }
    cursor:auto
  }
  .el-dropdown-menu__item {
    height: 46px!important;
    line-height: 46px!important;
    min-width: 140px !important;
    border-bottom: 1px solid #ececec;
    font-size: 14px;
    color: #000;
  }
  .popper__arrow {
    display: none !important;
  }
}
</style>
