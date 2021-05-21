
import React from "react"
import ReactDom from "react-dom"
import store from "./store/index"
import Test from "./components/test"
import { Provider } from 'react-redux'
let a = (<Provider store={store}>
    <Test></Test>
   </Provider>)
ReactDom.render(a,document.getElementById("app"))