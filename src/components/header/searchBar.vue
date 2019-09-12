<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col
        :span="3"
        class="left"
      >
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt="美团"
        >
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            class="el-input"
            placeholder="请输入内容"
            @focus="focus"
            @blur="blur"
            @input="input"
          />
          <el-button
            class="el-button"
            type="primary"
            icon="el-icon-search"
          />
          <dl
            v-if="isHotPlace"
            class="hotPlace"
          >
            <dt>热门搜素</dt>
            <dd
              v-for="(item,index) in hotPlaceList"
              :key="index"
            >
              <router-link :to="{name:'goods',params:{name:item}}">
                {{ item }}
              </router-link>
            </dd>
          </dl>
          <dl
            v-if="isSearchList"
            class="searchList"
          >
            <dd
              v-for="(item,index) in searchList"
              :key="index"
            >
              <router-link :to="{name: 'goods',params:{name:item}}">
                {{ item }}
              </router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a
            v-for="(item,index) in suggestList"
            :key="index"
            href="#"
          >{{ item }}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from '@/api/index.js'
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      searchList: ['火锅', '火锅自助餐', '火锅 呷哺呷哺', '火锅2人餐'],
      hotPlaceList: [],
      suggestList: []
    }
  },
  created(){
    api.searchHotWorld().then(res=>{
      this.hotPlaceList=res.data.data;
      this.suggestList=res.data.data;
    })
  },
  computed: {
    isHotPlace: function () {
      return this.isFocus && !this.searchWord
    },
    isSearchList: function () {
      return this.isFocus && this.searchWord
    }
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      let self = this
      setTimeout(function () {
        self.isFocus = false
      }, 200)
    },
    input(){
      api.getSearchList().then((res)=>{
      let val=this.searchWord
      this.searchList=res.data.data.list.filter(item=>{
        return item.indexOf(val)>-1;});
      })
    }
  },
}
</script>
<style lang="scss">
@import "@/assets/css/public/header/search.scss";
</style>
