interface appConfig {
    appCode: string,
    appVersion: string,
    deviceType: number,
    deviceId: string,
    deviceOS: string,
}
interface cities {
    businessCities: Array<string>,//业务城市
    administrativeCities: Array<string>//行政城市
}
interface globalSettings{
    loading:boolean,
    needLoad:boolean,
    envNo:number
}
interface searchParams{
    userSearchPrarams: Array<string>
}
interface sowTask{
    taskList:Array<string>
}
interface user{
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
interface userPermission{
    permissions:Array<string>
}
interface visualWarehouse{
    warehouseList:Array<string>
}
interface warehouseConfig{
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