/*
多个接口api模块
*/
import ajax from './ajax'
const URL='/api'

// 1.根据经纬度获取位置详情
export  const reqAddress=(geohash)=>ajax(`${URL}/position/${geohash}`)
// 2.获取食品分类列表
export  const reqFoodCategorys=()=>ajax(URL+'/index_category')
// 3.根据经纬度获取商铺列表
export  const reqShopList=(latitude,longitude)=>ajax(URL+'/shops',{latitude,longitude})
// 4.根据经纬度和关键字搜索商铺列表
export  const reqSearchShop=(geohash,keyword)=>ajax(URL+'/search_shops',{geohash,keyword})
// 5.用户名密码登陆
export  const reqPwdLogin=({name,pwd,captcha})=>ajax(URL+'/login_pwd',{name,pwd,captcha},'POST')
// 6.发送短信验证码
export  const reqSendCode=(phone)=>ajax(URL+'/sendcode',{phone})
// 7.手机号验证码登陆
export  const reqSmsLogin=(phone ,code)=>ajax(URL+'/login_sms',{phone ,code},'POST')
// 8.根据会话获取用户信息
export  const reqUserInfo=()=>ajax(URL+'/userinfo')
// 9.用户登出
export  const reqLogout=()=>ajax(URL+'/logout')

//获取评价信息
export  const reqShopRatings=()=>ajax('/ratings')
//获取食物信息
export  const reqShopGoods=()=>ajax('/goods')
//获取商家信息
export  const reqShopInfo=()=>ajax('/info')
