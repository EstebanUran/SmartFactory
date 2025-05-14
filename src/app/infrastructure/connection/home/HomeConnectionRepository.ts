import { http } from '../../../../common/infrastructure/connection/Http'
import type { RequestCallEntity } from '../../../../common/infrastructure/connection/interfaces/RequestCallEntity'
import { UtilsInfrastructure } from '../../../../hooks/utilsInfrastructure'

export class HomeConnectionRepository {
  getDataApi<T>(): RequestCallEntity<T> {
    const url = `https://copernico.taismartfactory.cloud/api/api/Loadtfunction`
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluZXMiLCJVc2VyTGFuZ3VhZ2UiOiJlcy1FUyIsIlVzZXJBZ2VudCI6IlBvc3RtYW5SdW50aW1lLzcuNDMuNCIsIlVzZXJNYWlsIjoiIiwiVG9rZW5VdGNFeHBpcmF0aW9uIjoiNS8xNC8yMDI1IDEyOjIxOjM5IEFNIiwiVXNlcklwIjoiNS4xNzkuODYuNjgiLCJuYmYiOjE3NDcxNTMyOTksImV4cCI6MTc0NzE4MjA5OSwiaWF0IjoxNzQ3MTUzMjk5LCJpc3MiOiJ0YWkiLCJhdWQiOiJ0YWkifQ.N3dNhjqtP_lRHPKgn9IE6uMZeUhkPNBwaPM21p7nroQ'
    const controller = UtilsInfrastructure.loadAbort()
    const response = {
      call: http.post<T>(
        url,
        {
          FuncName: 'Tai.Backend.Qplant',
          ActiveActor: 'WKU11',
          FuncParam01: 'OEEMONITOR2',
          FuncParam02: 'SPAIN',
          FuncParam03: '',
          FuncParam04: '',
          FuncParam05: '',
          TraceLog: 'Y'
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          signal: controller.signal
        }
      ),
      controller
    }
    return response
  }
}
