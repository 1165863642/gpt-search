import { ElMessage } from 'element-plus'
// import { UserModule } from '@/store/modules/user'
// import router from '@/router'
// import { logout } from '@/api/users'

const base = import.meta.env.NODE_BASE_URL

type Method = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'

export interface Options {
  method: Method
  data?: object | string
  param?: {
    [key: string]: string
  }
  needAuth?: boolean
  noBaseURL?: boolean
  noHandleWrap?: boolean
  noErrorToast?: boolean
}

/**
 * 发起 HTTP 请求。
 *
 * 使用方法详见 https://git.reallct.com/athena/frontend/-/wikis/%E5%85%AC%E7%94%A8%E5%87%BD%E6%95%B0/request
 * @param url 要请求的地址
 * @param options 选项
 * @returns 处理结果
 */
export default async function request<T>(url: string, options: Options): Promise<T> {
  let body = options.data
  const param = options.param
  // const needAuth = options.needAuth
  const urlElement = new URL(options.noBaseURL ? url : `${base}${url}`)

  // 头部初始化
  const headers: {
    [key: string]: string
  } = {}

  if (typeof body === 'object' && !(body instanceof FormData)) {
    headers['Content-Type'] = 'application/json'
    body = JSON.stringify(body)
  }

  // if (typeof needAuth === 'undefined' || needAuth) {
  //   headers.token = UserModule.token
  // }

  // URL 参数初始化
  if (typeof param !== 'undefined') {
    Object.keys(param).forEach((k) => {
      urlElement.searchParams.append(k, param[k])
    })
  }

  // 发起请求
  try {
    const dataLoader = await fetch(urlElement.toString(), {
      method: options.method,
      headers,
      body
    })
    // if (!dataLoader.ok) {
    //   let message = `请求失败，服务端返回 ${dataLoader.status}`
    //   if (dataLoader.status === 401) {
    //     message = '需要登录'
    //   }
    //   if (dataLoader.status === 403) {
    //     message = '该用户没有权限'
    //   }
    //   if (dataLoader.status === 500) {
    //     message = '发生未知错误'
    //   }
    //   if (!options.noErrorToast) {
    //     ElMessage({
    //       message,
    //       type: 'error',
    //       duration: 5 * 1000
    //     })
    //     // if (dataLoader.status === 401) {
    //     //   logout()
    //     //   router.push(`/login?redirect=${router.currentRoute.fullPath}`)
    //     // }
    //   }
    //   return Promise.reject(new Error(message))
    // }
    const output = await dataLoader.json()
    if (options.noHandleWrap) {
      return output
    }
    // if (!output.success) {
    //   let message = `请求失败：发生未知错误，代码 ${output.code}`
    //   if (output.message) {
    //     message = `请求失败：${output.message}`
    //   }
    //   if (Number(output.code) === 403) {
    //     message = '该用户没有权限'
    //   }
    //   if (!options.noErrorToast) {
    //     ElMessage({
    //       message,
    //       type: 'error',
    //       duration: 5 * 1000
    //     })
    //   }
    //   return Promise.reject(new Error(message))
    // }
    return output.data
  } catch (e) {
    ElMessage({
      message: '处理请求时发生了异常',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(e)
  }
}
