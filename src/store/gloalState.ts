import gloalState from "./state"
const state: gloalState = {
    appConfig: {
        appCode: `SupplyChainSAAS`,
        appVersion: `1.0.0`,
        deviceType: 3,
        deviceId: ``,
        deviceOS: ``,
    },
    cities: {
        businessCities: [],//业务城市
        administrativeCities: []//行政城市
    },
    globalSettings:{
        loading:false,
        needLoad:true,
        envNo:0
    },
    searchParams:{
        userSearchPrarams: []
    },
    sowTask:{
        taskList:[]
    },
    user:{
        checkState: false,
        token:'',
        userInfo:{},
        choosenRole:[],
        choosenOrg:'',
        choosenWarehouse:'',
        roleInfoList:[],
        originRole:[],
        chooseRoleInfoList:{},
        promptDate:null,
        installedApp:false,
        serviceId:'',
        messageList:{}
    },
    userPermission:{
        permissions: []
    },
    visualWarehouse:{
        warehouseList: []
    },
    warehouseConfig:{
        forceProductionDate: false,
        orgWorkTime:''
    }
}
export default state