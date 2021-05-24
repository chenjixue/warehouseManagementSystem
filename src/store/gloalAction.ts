// import { appConfigInterface,citiesInterface,globalSettingsInterface,searchParamsInterface,
//   sowTaskInterface,userInterface,userPermissionInterface,visualWarehouseInterface,warehouseConfigInterface
// } from "./createAction"
import {
  appConfigCreateActionInterface,
  citiesCreateActionInterface, globalSettingsCreateActionInterface, searchParamsCreateActionInterface,
  sowTaskCreateActionInterface, userCreateActionInterface, userPermissionCreateActionInterface, visualWarehouseCreateActionInterface, warehouseConfigCreateActionInterface
} from "./createAction"
let appConfigActions: appConfigCreateActionInterface = {
  setAppVersion: (text:(string|number)) => ({ type: "", appVersion: text }),
  setDeviceId: (text:(string|number)) => ({ type: "", deviceId: text }),
  setDeviceOS: (text:(string|number)) => ({ type: "", deviceOS: text }),
  //异步
  getVersionInfo: (text) => (dispatch) => {

  }
}
let citiesActions: citiesCreateActionInterface = {
  setAdministrativeCities: (text:Array<any>) => ({ type: "", administrativeCities: text }),
  updateCitiesOfProvince: (text: {
    indexArr: Array<any>,
    children: Array<any>,
    [propName: string]: any
  }) => ({ type: "", obj:text}),
  setBusinessCities: (text:Array<any>) => ({ type: "", businessCities:text})
}
let globalSettingsActions: globalSettingsCreateActionInterface = {
  disableLoading: (text) => ({ type: "" }),
  enableLoading: (text) => ({ type: "" }),
  updateEnvConfig: (text:{variableDataObject:any, [propName: string]: any}) => ({ type: "",envConfig:text}),
  //异步
  disableFullScreenLoading: (text) => (dispatch) => {

  },
  enableFullScreenLoading: (text) => (dispatch) => {

  },
  getEnvConfig: (text) => (dispatch) => {

  }
}
let searchParamsActions: searchParamsCreateActionInterface = {
  //异步
  saveParams: (text) => (dispatch) => {

  },
  delParams: (text) => (dispatch) => {

  },
  saveParamsName: (text) => (dispatch) => {

  }
}
let sowTaskActions: sowTaskCreateActionInterface = {
  saveTask: (text:object) => ({ type: "",payload:text}),
  delTask: (text:(string|number)) => ({ type: "",taskNo:text}),
  //异步
  saveTaskProcess: (text) => (dispatch) => {

  },
  deleteTask: (text) => (dispatch) => {

  }
}
let userActions: userCreateActionInterface = {
  clearUserInfo: (text) => ({ type: "" }),
  updateUserToken: (text:string) => ({ type: "",token:text}),
  updateUserInfo: (text:string) => ({ type: "",user:text}),
  updateUserRole: (text:string) => ({ type: "",role:text}),
  updateUserWarehouse: (text:string) => ({ type: "" ,role:text}),
  updateUserOrg: (text:string) => ({ type: "",orgId:text }),
  updateRoleInfoList: (text:Array<number|string>) => ({ type: "",roleList:text }),
  updateOriginRole: (text:string) => ({ type: "" ,originRole:text}),
  updateChooseRoleInfoList: (text:string) => ({ type: "" ,roleList:text}),
  updateInstalledState: (text:string) => ({ type: "" ,choice:text}),
  updateServiceId: (text:string) => ({ type: "" ,serviceId:text}),
  updateMessageList: (text:any) => ({ type: "" ,data:text}),
  updateMessageStatus: (text:object) => ({ type: "" ,data:text}),
  //异步
  login: (text) => (dispatch) => {

  },
  getUserInfo: (text) => (dispatch) => {

  },
  ssoGetUserInfo: (text) => (dispatch) => {

  },
  getUserInfoSelf: (text) => (dispatch) => {

  },
  confirmPromptChoice: (text) => (dispatch) => {

  },
  logout: (text) => (text) => (dispatch) => {

  },
  getInfoMessage: (text) => (dispatch) => {

  },
}
let userPermissionActions: userPermissionCreateActionInterface = {
  addPermissions: (text:object) => ({ type: "", data:text}),
  //异步
  getPagePermission: (text) => (dispatch) => {

  },
}
let visualWarehouseActions: visualWarehouseCreateActionInterface = {
  saveConfig: (text:object) => ({ type: "",config:text}),
  //异步
  persistConfig: (text) => (dispatch) => {

  },
}
let warehouseConfigActions: warehouseConfigCreateActionInterface = {
  setFPDSetting: (text:string) => ({ type: "",forceProductionDate:text}),
  setWorkTime: (text:string) => ({ type: "",orgWorkTime:text}),
  //异步
  getProductionDateSetting: (text) => (dispatch) => {

  },
  getWarehouseWorkTime: (text) => (dispatch) => {

  },
}