import React from "react"
import ReactDom from "react-dom"
import { connect } from 'react-redux'
let Test:React.FC<{state:any}> = ({state})=>{
     return <div>{state.a}</div>
}
export default connect((state)=>({
    state:state
}),(dispatch)=>{

})(Test)