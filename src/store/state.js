const conf = window.serverConfig
const getApi = "//cmbx.vip.imlun.com/top10" //conf.api
const postApi = "//cmbx.vip.imlun.com/my_score" //conf.api
const assetsHttp = "https://static-1253880502.cosgz.myqcloud.com/cmbx/";
// const dataJSON = require('../data/singer');
import dataJSON from '../data/singer'
export default {
    //localStorage
    "cache": {
        "key": "PAGEKETS_CAHE"
    },

    //api
    "request": {
        "PGuser": "/index.php?c=user&a=getUserInfo",
        "PGcity": "http://weixin1.zhenyongkj.com/home/api/city" //http://127.0.0.1:3000/city
    },

    "user": {
        "appId": "wxf8b4f85f3a794e77",
        "timestamp": 1487662162,
        "nonceStr": "BfLDa9BlMChZotAU",
        "signature": "d07ad32ddde55c3e5b4cb719b8a162faec3dd46d",
        "title": "马自达2017冰雪试驾",
        "link": window.location.href,
        "imgUrl": "http://obsiq8rn7.bkt.clouddn.com/hanlanda_share.jpg?2017"
    },

    "userinfo": {
        "name": "",
        "mobile": ""
    },

    //当前位置
    "currents": {
        "mathInfo": {
            "point": 0,
            "score": 0
        },
        "conf": {
            "point": 0,
            "score": 0
        },
        "person": {
            "name": "",
            "face": "",
            "uid": ""
        }
    },
    //分享第三方獲取到的數據
    "shareTird": {
        "type": 0,
        "uid": 0,
        "token": "",
        "kind": ""
    },
    //设置home信息
    "home": dataJSON || {}
}