import axios from 'axios'
import interceptors from './interceptors'
const apis = {
    baseURL: "https://api.zbztb.cn/api/public/v1"
}


const ajax = axios.create({
    baseURL: apis.baseURL
})

//请求拦截
interceptors(ajax)

/**
 * 获取 swiperList
 */
export const getSwiperList = () => {
    return ajax.get('/home/swiperdata')
}

/**
 * 获取 cateList
 */
export const getCateList = () => {
    return ajax.get('/home/catitems')
}

/**
 * 获取 floorList
 */
export const getFloorList = () => {
    return ajax.get('/home/floordata')
}

/**
 * 获取 分类
 */
export const getCategoriesList = () => {
    return ajax.get('/categories')
}
    // getSwiperList: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
    // getCatitemsList: 'https://api.zbztb.cn/api/public/v1/home/catitems',
    // getFloorDataList: 'https://api.zbztb.cn/api/public/v1/home/floordata',

    // getCategoriesList: 'https://api.zbztb.cn/api/public/v1/categories',
    // getGoodList: 'https://api.zbztb.cn/api/public/v1/goods/search',
    // getGoodsDetail: 'https://api.zbztb.cn/api/public/v1/goods/detail',