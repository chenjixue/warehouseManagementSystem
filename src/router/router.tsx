import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
interface routeObject {
    path: string
    routes?: Array<routeObject>
    component?: React.ComponentType<any>
}export default class App extends React.Component<{routes:Array<routeObject>},{}> {
    // routes: (routeObject)[] = [
    //     {
    //         path: "/sandwiches",
    //         component: Sandwiches
    //     },
    //     {
    //         path: "/tacos",
    //         routes: [
    //             {-
    //                 path: "/tacos/bus",
    //                   component: Bus
    //             },
    //             {
    //                 path: "/tacos/cart",
    //                   component: Cart      
    //             }
    //         ]
    //     }
    // ];
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (<Router>
                <ConfigRouter config={this.props.routes}/>
            </Router>)
    }
}
function ConfigRouter({config}:{config?:routeObject[]|undefined, [propName: string]: any;}):React.ReactElement{
    let routeArr = config.map(value =>{
            if(!value.routes){
                return  <Route path={value.path}><value.component></value.component></Route>
            }
            return <Route  path={value.path}><ConfigRouter config={value.routes}></ConfigRouter></Route>
     })
    return <Switch>{routeArr}</Switch> 
}