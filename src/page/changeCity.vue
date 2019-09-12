<template>
  <div class="page-changeCity">
    <el-row>
      <Province />
    </el-row>
    <el-row>
      <Hot
        title="热门城市:"
        :list="hotList"
      />
    </el-row>
    <el-row>
      <Hot
        title="最近访问:"
        :list="rencentList"
      />
    </el-row>
    <el-row>
      <Category />
    </el-row>
  </div>
</template>
<script>
import api from '@/api/index.js'
import Hot from '@/components/changeCity/hot.vue'
import Province from '@/components/changeCity/province.vue'
import Category from '@/components/changeCity/category.vue'
export default {
  components: {
    Province,
    Hot,
    Category
  },
  data () {
    return {
      hotList: [],
      rencentList: []
    }
  },
  created() {
    api.getHotCity().then(res=>{
      this.hotList=res.data.data.map(item=>item.name)    
    });
    api.getRecentsCity().then(res=>{
      this.rencentList=res.data.data.map(item=>item.name)    
    })
  }, 
}
</script>
<style lang="scss">
// @import "@/assets/css/changecity/changecity.scss";
</style>
