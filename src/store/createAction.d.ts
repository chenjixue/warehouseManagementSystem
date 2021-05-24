

export interface  appConfigCreateActionInterface{
    setAppVersion:(text:any) => {
        type:string,
        appVersion:(string|number)
    },
    setDeviceId:(text:any) => {
        type:string,
        deviceId:(string|number)
    },
    setDeviceOS:(text:any) => {
        type:string,
        deviceOS:(string|number)
    },
    //异步
    getVersionInfo:(text:any) => (dispatch)=> void,
}
export interface  citiesCreateActionInterface{
    setAdministrativeCities:(text:any) => {
        type:string,
        administrativeCities:Array<any>
    }
    updateCitiesOfProvince:(text:any) => {
        type:string,
        obj:{
            indexArr:Array<any>,
            children:Array<any>
        }
    }
    setBusinessCities:(text:any) => {
        type:string,
        businessCities:Array<any>
    }
}
export interface globalSettingsCreateActionInterface{
    disableLoading:(text:any) => {type:string},
    enableLoading:(text:any) => {type:string},
    updateEnvConfig:(text:any) => {type:string,envConfig:{variableDataObject:any}},
    //异步
    disableFullScreenLoading:(text:any) => (dispatch)=> void,
    enableFullScreenLoading:(text:any) => (dispatch)=> void,
    getEnvConfig:(text:any) => (dispatch)=> void,
}
export interface searchParamsCreateActionInterface{
    //异步
    saveParams:(text:any) => (dispatch)=> void,
    delParams:(text:any) => (dispatch)=> void,
    saveParamsName:(text:any) => (dispatch)=> void,
}
export interface sowTaskCreateActionInterface{
    saveTask:(text:any) => {type:string,payload:object},
    delTask:(text:any) => {type:string,taskNo:(string|number)},
    //异步
    saveTaskProcess:(text:any) => (dispatch)=> void,
    deleteTask:(text:any) => (dispatch)=> void,
}
export interface  userCreateActionInterface  {
    clearUserInfo: (text:any) => {type:string},
    updateUserToken:(text:any) => {type:string,token:string},
    updateUserInfo:(text:any) => {type:string,user:string},
    updateUserRole:(text:any) => {type:string,role:string},
    updateUserWarehouse:(text:any) => {type:string,role:string},
    updateUserOrg:(text:any) => {type:string,orgId:string},
    updateRoleInfoList:(text:any) => {type:string,roleList:Array<number|string>},
    updateOriginRole:(text:any) => {type:string,originRole:string},
    updateChooseRoleInfoList:(text:any) => {type:string,roleList:string},
    updateInstalledState:(text:any) => {type:string,choice:string},
    updateServiceId:(text:any) => {type:string,serviceId:string},
    updateMessageList:(text:any) => {type:string,data:any},
    updateMessageStatus:(text:any) => {type:string,data:object},
    //异步
    login:(text:any) => (dispatch)=> void,
    getUserInfo:(text:any) => (dispatch)=> void,
    ssoGetUserInfo:(text:any) => (dispatch)=> void,
    getUserInfoSelf:(text:any) => (dispatch)=> void,
    confirmPromptChoice:(text:any) => (dispatch)=> void,
    logout:(text:any) => (dispatch)=> void,
    getInfoMessage:(text:any) => (dispatch)=> void,
}
export interface userPermissionCreateActionInterface{
    addPermissions:(text:any) => {type:string,data:object},
    //异步
    getPagePermission:(text:any) => (dispatch)=> void
}
export interface visualWarehouseCreateActionInterface{
    saveConfig:(text:any) => {type:string,config:object},
    //异步
    persistConfig:(text:any) => (dispatch)=> void,
}
export interface warehouseConfigCreateActionInterface{
    setFPDSetting:(text:any) => {type:string,forceProductionDate:string},
    setWorkTime:(text:any) => {type:string,orgWorkTime:string},
    //异步
    getProductionDateSetting:(text:any) => (dispatch)=> void,
    getWarehouseWorkTime:(text:any) => (dispatch)=> void,
}