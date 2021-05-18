export interface appConfig {
    appCode: string,
    appVersion: string,
    deviceType: number,
    deviceId: string,
    deviceOS: string,
}
export interface cities {
    businessCities: Array<string>,//业务城市
    administrativeCities: Array<string>//行政城市
}
export interface globalSettings{
    loading:boolean,
    needLoad:boolean,
    envNo:number
}
export interface searchParams{
    userSearchPrarams: Array<string>
}
export interface sowTask{
    taskList:Array<string>
}
export interface user{
    checkState: boolean,
    token:string,
    userInfo:object,
    choosenRole:Array<string>,
    choosenOrg:string,
    choosenWarehouse:string,
    roleInfoList:Array<string>,
    originRole:Array<string>,
    chooseRoleInfoList:object,
    promptDate:string,
    installedApp:boolean,
    serviceId:string,
    messageList:object
}
export interface userPermission{
    permissions:Array<string>
}
export interface visualWarehouse{
    warehouseList:Array<string>
}
export interface warehouseConfig{
    forceProductionDate: boolean,
    orgWorkTime:string
}
interface gloalState{
    appConfig:appConfig
    cities:cities
    globalSettings:globalSettings
    searchParams:searchParams
    sowTask:sowTask
    user:user
    userPermission:userPermission
    visualWarehouse:visualWarehouse
    warehouseConfig:warehouseConfig
}
export default gloalState