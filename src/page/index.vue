<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <m-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :nav="iStyle" />
      </el-col>
      <el-col :span="24">
        <m-container :nav="recomment" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import MMenu from '../components/index/menu'
import MLife from '../components/index/life'
import MContainer from '../components/index/container'
export default {
  components: {
    MMenu,
    MLife,
    MContainer
  },
  data () {
    return {
      iStyle: {
        class: 'istyle',
        title: '有格调',
        list: [
          {
            tab: 'all',
            text: '全部'
          },
          {
            tab: 'food',
            text: '约会聚餐'
          },
          {
            tab: 'spa',
            text: '丽人SPA'
          },
          {
            tab: 'movie',
            text: '电影演出'
          },
          {
            tab: 'travel',
            text: '品质出游'
          }
        ]
      },
      recomment: {
        class: 'youhui',
        title: '狠优惠',
        list: [{
          tab: 'all',
          text: '全部'
        },
        {
          tab: 'food',
          text: '美食'
        },
        {
          tab: 'xiuxian',
          text: '休闲'
        }]
      }
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
