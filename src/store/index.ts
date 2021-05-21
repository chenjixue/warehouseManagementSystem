import {
    appConfig,
    cities,
    globalSettings,
    searchParams,
    sowTask,
    user,
    userPermission,
    visualWarehouse,
    warehouseConfig,
} from "./reducer"
import {combineReducers,createStore} from "redux"
const  reducer = combineReducers({
    appConfig,
    cities,
    globalSettings,
    searchParams,
    sowTask,
    user,
    userPermission,
    visualWarehouse,
    warehouseConfig
})
let store = createStore(reducer) 
export default store