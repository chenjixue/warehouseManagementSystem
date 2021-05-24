import {appConfig,cities,globalSettings,searchParams,sowTask,user,userPermission,visualWarehouse,warehouseConfig} from "./state"
import gloalState from "./gloalState"
interface action{
    type:string,
    data:any
}
interface getSearchParamsData{
    path:string,
    userId:string,
    cityId:string, 
    warehouseId:string
}
const appConfig:(state:appConfig,action:action)=>object = (state:appConfig = gloalState.appConfig,action={type:"",data:""})=>{
    switch(action.type){
        case "appCode": return Object.assign({},state,{appCode:action.data})
        case "appVersion":return Object.assign({},state,{appVersion:action.data})
        case "deviceType":return Object.assign({},state,{deviceType:action.data})
        case "deviceId":return Object.assign({},state,{deviceId:action.data})
        case "deviceOS":return Object.assign({},state,{deviceOS:action.data})
        default: return state
    }
}
const cities:(state:cities,action:action)=>object = (state:cities = gloalState.cities,action:action={type:"",data:""})=>{
    switch(action.type){
        case "businessCities": return Object.assign({},state,{businessCities:action.data})
        case "administrativeCities":return Object.assign({},state,{administrativeCities:action.data})
        default: return state
    }
}
const globalSettings:(state:globalSettings,action:action)=>object = (state:globalSettings = gloalState.globalSettings , action:action={type:"",data:""})=>{
    switch(action.type){
        case "loading": return Object.assign({},state,{loading:action.data})
        case "needLoad":return Object.assign({},state,{needLoad:action.data})
        case "envNo":return Object.assign({},state,{envNo:action.data})
        default: return state
    }
}
const searchParams:(state:searchParams,action:action)=>object = (state:searchParams =gloalState.searchParams ,action:action={type:"",data:""})=>{
    switch(action.type){
        case "userSearchPrarams": return Object.assign({},state,{userSearchPrarams:action.data,getSearchParams:(data:getSearchParamsData)=>{}})
        default: return state
    }
}
const sowTask:(state:sowTask,action:action)=>object = (state:sowTask = gloalState.sowTask,action:action={type:"",data:""})=>{
    switch(action.type){
        case "taskList": return Object.assign({},state,{taskList:action.data, getTask: ()=>{}})
        default: return state
    }
}
const user:(state:user,action:action)=>object = (state:user = gloalState.user,action:action={type:"",data:""})=>{
    switch(action.type){
        case "checkState": return Object.assign({},state,{checkState:action.data})
        case "token": return Object.assign({},state,{token:action.data})
        case "userInfo": return Object.assign({},state,{userInfo:action.data})
        case "choosenRole": return Object.assign({},state,{choosenRole:action.data})
        case "choosenOrg": return Object.assign({},state,{choosenOrg:action.data})
        case "choosenWarehouse": return Object.assign({},state,{choosenWarehouse:action.data})
        case "roleInfoList": return Object.assign({},state,{roleInfoList:action.data})
        case "originRole": return Object.assign({},state,{originRole:action.data})
        case "chooseRoleInfoList": return Object.assign({},state,{chooseRoleInfoList:action.data})
        case "promptDate": return Object.assign({},state,{promptDate:action.data})
        case "installedApp": return Object.assign({},state,{installedApp:action.data})
        case "serviceId": return Object.assign({},state,{serviceId:action.data})
        case "messageList": return Object.assign({},state,{messageList:action.data})
        default: return state
    }
}
const userPermission:(state:userPermission,action:action)=>object = (state:userPermission = gloalState.userPermission,action:action={type:"",data:""})=>{
    switch(action.type){
        case "userSearchPrarams": return Object.assign({},state,{userSearchPrarams:action.data,getPermission:()=>{}})
        default: return  state
    }
}
const visualWarehouse:(state:visualWarehouse,action:action)=>object = (state:visualWarehouse = gloalState.visualWarehouse ,action:action ={type:"",data:""})=>{
    switch(action.type){
        case "warehouseList": return Object.assign({},state,{warehouseList:action.data,getWarehouseConfig:()=>{}});
        default: return  state
    }
}
const warehouseConfig:(state:warehouseConfig,action:action)=>object = (state:warehouseConfig = gloalState.warehouseConfig,action:action ={type:"",data:""})=>{
     let newState = Object.assign({},state,{getSettingValue:()=>{}})
    switch(action.type){
        case "forceProductionDate": return Object.assign({},newState,{forceProductionDate:action.data})
        case "orgWorkTime": return Object.assign({},newState,{orgWorkTime:action.data});
        default:  return newState
    }
}
export  {
    appConfig, 
    cities, 
    globalSettings, 
    searchParams, 
    sowTask, 
    user, 
    userPermission, 
    visualWarehouse, 
    warehouseConfig, 
}