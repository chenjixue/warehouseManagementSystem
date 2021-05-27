
import React from "react"
import ReactDom from "react-dom"
import store from "./store/index"
import Test from "./components/test"
import { Provider } from 'react-redux'
import  App   from './router/router'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
window.onhashchange =function(e){
  let newHashCode = e.newURL.split("#")[1]
  let url = e.newURL.split("#")[0]
  // console.log(e.newURL.split("#")[1],"onhashChange")
  if(newHashCode !== "/login"){
     window.location.href=`${url}#/login`
  }
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
let routes : Array<any> = [
        {
            path: "/sandwiches",
            component: Sandwiches
        },
        {
            path: "/tacos",
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
let a = (<Provider store={store}>
     <App routes={routes}></App>
   </Provider>)
ReactDom.render(a,document.getElementById("app"))