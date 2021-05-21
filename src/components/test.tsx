import React from "react"
import { connect } from 'react-redux'
import stateInterFace from "../store/state"
let Test:React.FC<{a:any}> = ({a})=>{
     return <div>{a}</div>
}
export default connect((state:stateInterFace)=>({
    a:state.appConfig.appCode
}),(dispatch)=>{

})(Test)