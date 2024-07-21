import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const timeout = 60 * 1000

export class Request {
  public instance!: AxiosInstance

  constructor() {
    this.instance = axios.create({
      timeout
    })
    this.interceptor()
  }

  private interceptor() {
    this.instance.interceptors.response.use(response => {
      const { data } = response
      const { code } = data || {}

      if (code !== undefined && code !== 0) {
        this.msgLoader(code)
      }

      return data
    })
  }

  private msgLoader(code: number) {
    const msg = `Error: ${code}`
    throw new Error(msg)
  }

  public async upload(data: any, url = '/upload', config: AxiosRequestConfig = {}) {
    const res = await this.instance.post(url, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
      timeout,
      ...config
    })
    return res
  }
}

const request = new Request() as any

export default { upload: request.upload.bind(request), ...request.instance }
