<template>
  <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item
        v-for="item in imgList"
        :key="item.url"
      >
        <a :href="item.url">
          <img :src="item.img">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgList: [{
        url: 'http://hotel.meituan.com/',
        img: 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
      }, {
        url: 'https://bj.meituan.com/meishi/',
        img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
      }, {
        url: 'http://waimai.meituan.com/',
        img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
      }, {
        url: 'http://maoyan.com/',
        img: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
      }, {
        url: 'https://paidui.meituan.com/?activity_code=169_00038142',
        img: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
      }]
    }
  }
}
</script>
