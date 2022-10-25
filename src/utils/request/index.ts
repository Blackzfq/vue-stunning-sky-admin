import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { LocalKey, weblocal } from '@/hooks/localStorage'

const { getLocalStorage } = weblocal()

interface Result<T> {
  code: number
  msg: string
  data: T
}

interface Params<T> {
  url: string
  data?: T
  config?: AxiosRequestConfig
  params?: T
  userType?: number
}

export default class Request {
  // axios实例
  public axiosInstance: AxiosInstance

  // 基础配置，url、timeout
  public baseConfig: AxiosRequestConfig = { baseURL: import.meta.env.VITE_APP_BASE_API, timeout: 60000 }

  // 通用请求方法
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance.request(config)
  }

  // GET请求方法 (常用于获取数据)
  public GET<T>(params: Params<T>): Promise<AxiosResponse<Result<T>>> {
    return this.axiosInstance.get(params.url, {
      ...params.config,
      params: { ...(params.params as object), userType: params.userType },
    })
  }

  // POST请求方法 (常用于提交表单等具有隐匿性的数据)
  public POST<T>(params: Params<T>): Promise<AxiosResponse<Result<T>>> {
    return this.axiosInstance.post(params.url, params.data || {}, {
      ...params.config,
      params: { ...(params.params as object), userType: params.userType },
    })
  }

  // PUT请求方法 (常用于提交数据修改)
  public PUT<T>(params: Params<T>): Promise<AxiosResponse<Result<T>>> {
    return this.axiosInstance.put(params.url, params.data || {}, {
      ...params.config,
      params: { ...(params.params as object), userType: params.userType },
    })
  }

  // DELETE请求方法 (常用删除数据)
  public DELETE<T>(params: Params<T>): Promise<AxiosResponse<Result<T>>> {
    return this.axiosInstance.delete(params.url, {
      ...params.config,
      params: { ...(params.params as object), userType: params.userType },
    })
  }

  // 创建基于基础配置的axios实例
  constructor(config: AxiosRequestConfig) {
    // 实例化
    this.axiosInstance = axios.create(Object.assign(this.baseConfig, config))

    // 请求拦截器
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 处理请求前的header
        const token = getLocalStorage(LocalKey.TOKEN)
        if (token) {
          config.headers!.Authorization = `Bearer ${token}`
        }
        return config
      },
      (err: any) => {
        // 请求错误，此处使用ant message进行提示
        ElMessage.error('请求发生错误')
        return Promise.reject(err)
      }
    )

    // 响应拦截器
    this.axiosInstance.interceptors.response.use(
      (res: AxiosResponse) => {
        const {
          data: { code, msg, data },
        } = res
        if (code === 200) return data
        ElMessage.error(msg || '未知错误信息')
        return Promise.reject(res)
      },
      (err: any) => {
        // 超出 2xx 范围的状态码都会触发该函数
        const msg = ''
        switch (err.response.status) {
          case 400:
            ElMessage.error('请求错误(400)')
            break
          case 401:
            ElMessage.error('未授权，请重新登录(401)')
            // 这里可以做清空storage并跳转到登录页的操作
            break
          case 403:
            ElMessage.error('拒绝访问(403)')
            break
          case 404:
            ElMessage.error('请求出错(404)')
            break
          case 408:
            ElMessage.error('请求超时(408)')
            // 这里可以修改状态为超时状态或重新发起请求
            break
          case 500:
            ElMessage.error('服务器错误(500)')
            break
          case 501:
            ElMessage.error('服务未实现(501)')
            break
          case 502:
            ElMessage.error('网络错误(502)')
            break
          case 503:
            ElMessage.error('服务不可用(503)')
            break
          case 504:
            ElMessage.error('网络超时(504)')
            break
          case 505:
            ElMessage.error('HTTP版本不受支持(505)')
            break
          default:
            ElMessage.error(`连接出错(${err.response.status})!`)
        }
        return Promise.reject(err.response)
      }
    )
  }
}
