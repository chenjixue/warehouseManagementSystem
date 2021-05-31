import  React  from "react"

function WrapComponent(Components){
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
