import { appConfigInterface,citiesInterface,globalSettingsInterface,searchParamsInterface,
  sowTaskInterface,userInterface,userPermissionInterface,visualWarehouseInterface,warehouseConfigInterface
} from "./action"
let appConfigActions:appConfigInterface ={
  setAppVersion:(text) => ({type:""}),
  setDeviceId:(text) => ({type:""}),
  setDeviceOS:(text) => ({type:""}),
  getVersionInfo:(text) => ({type:""})
}
let  citiesActions:citiesInterface ={
    setAdministrativeCities:(text) => ({type:""}),
    updateCitiesOfProvince:(text) => ({type:""}),
    setBusinessCities:(text) => ({type:""})
}
let globalSettingsActions:globalSettingsInterface ={
     disableLoading:(text) => ({type:""}),
     enableLoading:(text) => ({type:""}),
     updateEnvConfig:(text) => ({type:""}),
     disableFullScreenLoading:(text) => ({type:""}),
     enableFullScreenLoading:(text) => ({type:""}),
     getEnvConfig:(text) => ({type:""}),
}
let  searchParamsActions:searchParamsInterface ={
     saveParams:(text) => ({type:""}),
     delParams:(text) => ({type:""}),
     saveParamsName:(text) => ({type:""}),
}
let  sowTaskActions:sowTaskInterface ={
     saveTask:(text) => ({type:""}),
     delTask:(text) => ({type:""}),
     saveTaskProcess:(text) => ({type:""}),
     deleteTask:(text) => ({type:""}),
}
let   userActions:userInterface={
  clearUserInfo: (text) => ({type:""}),
  updateUserToken:(text) => ({type:""}),
  updateUserInfo:(text) => ({type:""}),
  updateUserRole:(text) => ({type:""}),
  updateUserWarehouse:(text) => ({type:""}),
  updateUserOrg:(text) => ({type:""}),
  updateRoleInfoList:(text) => ({type:""}),
  updateOriginRole:(text) => ({type:""}),
  updateChooseRoleInfoList:(text) => ({type:""}),
  updateInstalledState:(text) => ({type:""}),
  updateServiceId:(text) => ({type:""}),
  updateMessageList:(text) => ({type:""}),
  updateMessageStatus:(text) => ({type:""}),
  //异步
  login:(text) => ({type:""}),
  getUserInfo:(text) => ({type:""}),
  ssoGetUserInfo:(text) => ({type:""}),
  getUserInfoSelf:(text) => ({type:""}),
  confirmPromptChoice:(text) => ({type:""}),
  logout:(text) => ({type:""}),
  getInfoMessage:(text) => ({type:""}),
}
let userPermissionActions:userPermissionInterface={
  addPermissions:(text) => ({type:""}),
  getPagePermission:(text) => ({type:""})
}
let  visualWarehouseActions:visualWarehouseInterface={
  saveConfig:(text) => ({type:""}),
  persistConfig:(text) => ({type:""}),
}
let  warehouseConfigActions:warehouseConfigInterface={
  setFPDSetting:(text) => ({type:""}),
  setWorkTime:(text) => ({type:""}),
  getProductionDateSetting:(text) => ({type:""}),
  getWarehouseWorkTime:(text) => ({type:""}),
}