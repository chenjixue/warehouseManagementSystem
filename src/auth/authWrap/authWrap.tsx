import  React  from "react"
import { connect } from 'react-redux'
import stateInterFace from "../../store/state"
//函数组件使用高阶组件做权限判断
export function WrapComponent(Components){
    return class  WrapComponent extends React.Component<{btnPermissions:Array<string>,permission:string}>{
        constructor(props){
            super(props)
            this.state={
            }
        }
        render(){
            let btnPermissions =  this.props.btnPermissions
            if(btnPermissions.includes(this.props.permission)){
                return  (<Components></Components>)
            }else{
                return  <></>
            }
        }
    }
}
//类组件使用注解,做权限判断 
export function AuthComponent(target:any){
    return class extends target{
           render(){
            let btnPermissions =  this.props.btnPermissions
            if(btnPermissions.includes(this.props.permission)){
                return  super.render()
            }else{
                return  <></>
            }
           }
    }
}
// export default connect((state:stateInterFace)=>({a:state.appConfig.appCode}),(dispatch)=>{

// })()