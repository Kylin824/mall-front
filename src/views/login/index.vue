<template>
  <div class="login-container">
<!--    <el-button-->
<!--        type="primary"-->
<!--        icon="el-icon-user-solid"-->
<!--        :loading="loading"-->
<!--        @click.native.prevent="handleLogin"-->
<!--    >-->
<!--      登录-->
<!--    </el-button>-->

    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="用户名" type="text" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="用户名" type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'MallLogin',
  data() {
    const validateUsername = (rule, value, callback) => {
      const valid_map = ['admin', 'editor']
      if (!valid_map.indexOf(value.trim()) >= 0) {
        callback(new Error('用户名无效'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 6) {
        callback(new Error('密码长度不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '12345'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.$router.push('home')
    },
    resetForm() {
      this.$refs['loginForm'].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
