//定义一个全局的接口路径 方便后期维护更改
const BASE_URL = 'http://localhost:8082'
//导出封装函数
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			//传入post或默认为get请求方式
			method:options.method || 'GET',
			//传入数据或默认为空
			data:options.data || {},
			//传入回调函数
			success:(res)=>{
				if(res.data.status !== 0){
					return uni.showToast({
						title:'获取数据失败'
					})
				}
				resolve(res)
			},
			fail:(err)=>{
				uni.showToast({
					title:'请求接口失败'
			})
			reject(err)
			}
		})
	})
}