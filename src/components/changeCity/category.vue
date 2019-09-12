<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择:</dt>
      <dd v-for="(item,index) in list" :key="index">
        <a :href="'#city-'+item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      v-for="(item,index) in cityGroup"
      :id="'city-'+index"
      :key="index"
      class="m-category-section"
    >
      <dt>{{ index }}</dt>
      <dd>
        <span @click="changeCity(city)" v-for="city in item" :key="city.id">{{ city.name }}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: [],
      cityGroup: {}
    };
  },
  created() {
    api.getCityList().then(res => {
      let obj = {};
      res.data.data.forEach(item => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      });
      this.cityGroup = obj;
    });
  },
  methods: {
    changeCity(item) {
      this.$store.dispatch("setPosition", item);
      this.$router.push({ name: "index" });
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/category.scss";
</style>
