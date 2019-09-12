<template>
  <div
    class="m-header"
    style="box-shadow: 0 2px 27px 0 rgba(0,0,0,.1);"
  >
    <el-row>
      <top-bar />
    </el-row>
    <el-row>
      <search-bar />
    </el-row>
  </div>
</template>
<script>
import topBar from './topBar'
import searchBar from './searchBar'
export default {
  components: {
    topBar,
    searchBar
  }
}
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss";
</style>
