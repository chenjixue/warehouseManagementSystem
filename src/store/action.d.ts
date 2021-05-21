
export interface  appConfigInterface{
    setAppVersion:(text:any) => object,
    setDeviceId:(text:any) => object,
    setDeviceOS:(text:any) => object,
    getVersionInfo:(text:any) => object,
}
export interface  citiesInterface{
    setAdministrativeCities:(text:any) => object
    updateCitiesOfProvince:(text:any) => object
    setBusinessCities:(text:any) => object
}
export interface globalSettingsInterface{
    disableLoading:(text:any) => object,
    enableLoading:(text:any) => object,
    updateEnvConfig:(text:any) => object,
    disableFullScreenLoading:(text:any) => object,
    enableFullScreenLoading:(text:any) => object,
    getEnvConfig:(text:any) => object,
}
export interface searchParamsInterface{
    saveParams:(text:any) => object,
    delParams:(text:any) => object,
    saveParamsName:(text:any) => object,
}
export interface sowTaskInterface{
    saveTask:(text:any) => object,
    delTask:(text:any) => object,
    saveTaskProcess:(text:any) => object,
    deleteTask:(text:any) => object,
}
export interface  userInterface  {
    clearUserInfo: (text:any) => object,
    updateUserToken:(text:any) => object,
    updateUserInfo:(text:any) => object,
    updateUserRole:(text:any) => object,
    updateUserWarehouse:(text:any) => object,
    updateUserOrg:(text:any) => object,
    updateRoleInfoList:(text:any) => object,
    updateOriginRole:(text:any) => object,
    updateChooseRoleInfoList:(text:any) => object,
    updateInstalledState:(text:any) => object,
    updateServiceId:(text:any) => object,
    updateMessageList:(text:any) => object,
    updateMessageStatus:(text:any) => object,
    //异步
    login:(text:any) => object,
    getUserInfo:(text:any) => object,
    ssoGetUserInfo:(text:any) => object,
    getUserInfoSelf:(text:any) => object,
    confirmPromptChoice:(text:any) => object,
    logout:(text:any) => object,
    getInfoMessage:(text:any) => object,
}
export interface userPermissionInterface{
    addPermissions:(text:any) => object,
    getPagePermission:(text:any) => object,
}
export interface visualWarehouseInterface{
    saveConfig:(text:any) => object,
    persistConfig:(text:any) => object,
}
export interface warehouseConfigInterface{
    setFPDSetting:(text:any) => object,
    setWorkTime:(text:any) => object,
    getProductionDateSetting:(text:any) => object,
    getWarehouseWorkTime:(text:any) => object,
}