/*
数据模拟测试接口
*/
import Mock from 'mockjs'
import data from  './data'

//模拟食物数据
Mock.mock('/goods',{code:0,data:data.goods})
//模拟商家详情数据
Mock.mock('/info',{code:0,data:data.info})
//模拟评价数据
Mock.mock('/ratings',{code:0,data:data.ratings})
