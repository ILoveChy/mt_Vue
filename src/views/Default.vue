<template>
  <div class="layout-default">
    <el-container>
      <el-header
        height
        style="padding:0"
      >
        <my-header />
      </el-header>
      <el-main style="overflow:unset;padding:0">
        <router-view />
      </el-main>
      <el-footer height>
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import myHeader from '../components/header/index'
import myFooter from '../components/footer/index'
export default {
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style lang="scss">
@import "@/assets/css/public/layout.scss";
@import "@/assets/css/public/footer.scss";
</style>
