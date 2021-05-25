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
}
const RouteWithSubRoutes  = (route)=>{
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} ></route.component>
            )}
        />
      
    );
}
function Sandwiches(){
    return (<div><Link to="/tacos">Tacos</Link></div>)
}
function Tacos({routes}):React.ReactElement{
    return (
      <div>
        <h2>Tacos</h2>
        <ul>
          <li>
            <Link to="/tacos/bus">Bus</Link>
          </li>
          <li>
            <Link to="/tacos/cart">Cart</Link>
          </li>
        </ul>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes {...route}></RouteWithSubRoutes>
          ))}
        </Switch>
      </div>
    );
}
function Bus(){
    return (<div>bus</div>)
}
function Cart(){
    return (<div>Cart</div>)
}
export default class App extends React.Component {
    routes: (routeObject)[] = [
        {
            path: "/sandwiches",
            component: Sandwiches
        },
        {
            path: "/tacos",
            // component: Tacos,
            routes: [
                {
                    path: "/tacos/bus",
                      component: Bus
                },
                {
                    path: "/tacos/cart",
                      component: Cart
                }
            ]
        }
    ];
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (<Router>
                <ConfigRouter config={this.routes}/>
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
