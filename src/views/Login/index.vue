<template>
  <section class="login-page">
    <section class="login-logo">
      <div class="login-top">
        <img src="./images/logo_login.png" alt="logo">
        <span class="title">欢迎使用 移步到微企业办公管理平台</span>
      </div>
    </section>
    <section class="login-main">
      <el-form  class="login-form" :model="loginForm" label-position="left" hide-required-asterisk>
        <div class="title-container">
          <h3 class="title">账号登录</h3>
        </div>
        <!-- 账号 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="邮箱地址/手机号码"
            name="username"
            type="text"
            tabindex="1"
            autocomplete="on"
          >
            <span class="svg-container" slot="prefix">
              <svg-icon icon="user" />
            </span>
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            :key="passwordType"
            :type="passwordType"
            ref="password"
            v-model="loginForm.password"
            placeholder="请输入密码"
            name="password"
            autocomplete="on"
            @keyup.enter.native="handleLogin"
          >
            <span class="svg-container" slot="prefix">
              <svg-icon icon="password" />
            </span>
            <span class="show-pwd" @click="showPwd" slot="suffix">
              <svg-icon :icon="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </el-input>
        </el-form-item>
        <!-- 登录 -->
        <el-button
          class="login-btn"
          :loading="loading"
          type="primary"
          @click.native.prevent="handleLogin"
        >
          登录
        </el-button>
      </el-form>
    </section>

    <div class="copyright">
      Copyright © 2015-2019 广州三尺信息科技有限公司 All Rights Reserved
    </div>
  </section>
</template>

<script>
import { setToken } from '@/helpers/auth'

export default {
  name: '',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      passwordType: 'password',
      loading: false
    }
  },
  created() {},
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        setToken('AUTH')
        const redirect = this.$route.query.redirect || '/'
        this.$router.push(redirect)
      }, 300)
    }
  }
}
</script>

<style lang="less" scoped>
.login-page {
  background: #fff;
  width: 100%;
  height: 100%;
  background: url(./images/qy_main_bg.jpg)no-repeat 0 0;
  background-size: cover;
  .login-logo {
    height: 200px;
    background: url(./images/qy_login_banner.jpg)no-repeat 0 0;
    background-size: cover;
    .login-top {
      text-align: center;
      & > img {
        height: 60px;
        margin-right: 20px;
        vertical-align: middle;
      }
      & > .title {
        font-size: 32px;
        line-height: 200px;
        color: #fff;
      }
    }
  }

  .login-main {
    width: 240px;
    max-width: 100%;
    margin: 20px auto;
    .svg-container {
      color: #7f8785;
      padding-left: 4px;
      font-size: 16px;
    }
  }

  .login-btn {
    width: 100%;
    background: #64C3A9;
  }

  .copyright {
    position: fixed;
    bottom: 10px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #9b9b9b;
  }
}
</style>
