<template>
  <div>
    <el-button
        type="primary"
        icon="el-icon-s-goods"
        @click.native.prevent="handleLogout"
    >
      退出
    </el-button>
  </div>
</template>

<script>
export default {
  name: "MallHome",
  methods: {
    handleLogout() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
