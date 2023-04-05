import { AxiosError } from "axios"
import api from "./api"

export type ApiResponse = {
  status: number
  data?: any
  error?: boolean
  message?: any
}

export async function get(
  path: string,
  params?: Record<string, unknown>
): Promise<ApiResponse> {
  try {
    const response = await api.get(path, {
      params
    })

    return response
  } catch (error) {
    const err = error as AxiosError

    return {
      status: err.response?.status || 0,
      error: true,
      message: ''
    }
  }
}

// export async function post(
//   path: string,
//   body: any,
//   header?: Record<string, unknown>
// ): Promise<ApiResponse> {
//   const token = getAuthorizationToken()

//   try {
//     const response = await api.post(path, body, {
//       headers: {
//         Authorization: token,
//         ...header
//       }
//     })

//     return response
//   } catch (error) {
//     const err = error as AxiosError

//     return {
//       status: err.response?.status || 0,
//       error: true,
//       message: ''
//     }
//   }
// }

// export async function put(
//   path: string,
//   body: any,
//   header?: Record<string, unknown>
// ): Promise<ApiResponse> {
//   const token = getAuthorizationToken()

//   try {
//     const response = await api.put(path, body, {
//       headers: {
//         Authorization: token,
//         ...header
//       }
//     })

//     await fakeRequest(2000, {})

//     return response
//   } catch (error) {
//     const err = error as AxiosError

//     return {
//       status: err.response?.status || 0,
//       error: true,
//       message: ''
//     }
//   }
// }

// export async function del(
//   path: string,
//   params?: Record<string, unknown>,
//   header?: Record<string, unknown>
// ): Promise<ApiResponse> {
//   const token = getAuthorizationToken()

//   try {
//     const response = await api.delete(path, {
//       params,
//       headers: {
//         Authorization: token,
//         ...header
//       }
//     })

//     await fakeRequest(2000, {})

//     return response
//   } catch (error) {
//     const err = error as AxiosError

//     return {
//       status: err.response?.status || 0,
//       error: true,
//       message: ''
//     }
//   }
// }

// export async function fakeRequest(
//   time: number,
//   values?: Record<string, any>
// ): Promise<ApiResponse> {
//   await new Promise(resolve => setTimeout(resolve, time))

//   return { status: 200, data: values }
// }
