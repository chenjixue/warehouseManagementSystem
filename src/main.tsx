
import React from "react"
import ReactDom from "react-dom"
import store from "./store/index"
import Test from "./components/test"
import { Provider } from 'react-redux'
import  App   from './router/router'
let a = (<Provider store={store}>
     <App></App>
   </Provider>)
ReactDom.render(a,document.getElementById("app"))