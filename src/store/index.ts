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
import ReduxThunk from 'redux-thunk'
import {combineReducers,createStore,applyMiddleware } from "redux"
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
let store = createStore(reducer,applyMiddleware(ReduxThunk)) 
export default store