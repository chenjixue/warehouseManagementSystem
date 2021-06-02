
import React ,{useState,FC,useCallback } from "react"
import  Style from  "./app.scss"
import { CSSTransition,TransitionGroup} from 'react-transition-group'
import {Button} from "antd"
import "./transtion/transtion.scss"
function App():React.ReactElement{
    // return (<div className={Style.appPrompt}>
    //     <div className={Style.appNotice}>您可以将本系统添加到桌面上，以更方便快捷的方式开展工作哦</div>
    //             <div>
    //                 {/* <el-button size="medium" type="primary" @click="deferredPrompt">添加到桌面应用</el-button> */}
    //             </div>
    //     </div>)

    const [count,setCount] =  useState(true);
     /** 跳转到某个路由之前触发 **/
    const onEnter = useCallback(()=>{
        setCount(!count);
    }, []);
    return (<div>
        <CSSTransition
          in={count}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          appear={true}
          onEntered={el => {
			/*这里是钩子函数
			onEnter:入场动画第一时刻的时候触发
			onEntering: 入场动画第二时刻的时候触发
			onEntered：入场动画结束了触发
			onExit:出场的第一个时刻触发
			onExiting: 出场的第二个时刻触发
			onExited：出场结束触发
			*/
            console.log(el)
          }}
         >
         <div className={Style.appPrompt}>
                <div className= {Style.appNotice}>您可以将本系统添加到桌面上，以更方便快捷的方式开展工作哦</div>
                <div>
                      <Button type="primary" onClick={onEnter}>添加应用到桌面</Button>
                </div>
            
         </div>
        </CSSTransition>
        {/* <Button type='primary' onClick={this.targetInput}>
          点击切换
        </Button> */}
      </div>)
}
export default App