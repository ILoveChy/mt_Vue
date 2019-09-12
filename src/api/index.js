
import axios from '../axios'

var api={
    searchHotWorld(params){
       return axios.get('/api/meituan/header/searchHotWords.json',params)
    },
    getSearchList(params){
        return axios.get('/api/meituan/header/search.json',params)
    },
    getMenuList(params){
        return axios.get('/api/meituan/index/nav.json',params)
    },
    resultsByKeywords(params){
        return axios.get('/api/meituan/index/resultsByKeywords.json',params)
    },
    getGoodsList(params){
        return axios.get('/api/meituan/list/goodsList.json',params)
    },
    getClassify(params){
        return axios.get('/api/meituan/list/classify.json',params)
    },
    getAreaList(params){//目前有些问题
        return axios.get('/api/meituan/list/areaList.json',params)
    },
    getHotCity(params){
        return axios.get('/api/meituan/city/hot.json',params)
    },
    getRecentsCity(params){
        return axios.get('/api/meituan/city/recents.json',params)
    },
    getProvince(params){
        return axios.get('/api/meituan/city/province.json',params)
    },
    getPosition(params){
        return axios.get('/api/meituan/city/getPosition.json',params)
    },
    getCityList(params){
        return axios.get('/api/meituan/city/cityList.json',params)
    },
    login (params) {
        return axios.get('/api/meituan/login', params)
      },
    register (params) {
      return axios.get('/api/meituan/register', params)
    }
}

export default api