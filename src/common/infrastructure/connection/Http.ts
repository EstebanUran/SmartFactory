import axios from 'axios'

const get = async <T>(url: string, headers: any) => {
  const response: T = await axios.get(url, headers).catch(function (error) {
    if (error.response) {
      throw error.response
      return error
    }
  })
  return response
}

const post = async <T>(url: string, body: any, headers: any = {}) => {
  const response: T = await axios.post(url, body, headers).catch(function (error) {
    if (error.response) {
      throw error.response
      return error
    }
  })
  return response
}

const put = async <T>(url: string, body: any, headers: any) => {
  const response: T = await axios.put(url, body, headers).catch(function (error) {
    if (error.response) {
      throw error.response
      return error
    }
  })
  return response
}

const _delete = async <T>(url: string, headers: any = {}) => {
  const response: T = await axios.delete(url, headers).catch(function (error) {
    if (error.response) {
      throw error.response
      return error
    }
  })
  return response
}

export const http = {
  get,
  post,
  put,
  _delete
}
