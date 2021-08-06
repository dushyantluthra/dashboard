import React from 'react'
import './RightWidget.css'



const DummyData=[
    {
        taskName:'Meeting with suppliers from Kuta Bali',
        taskTime:'14.00-15.00',
        taskLocation:'at Sunset Road, Kuta, Bali ',
        color:'#9BDD7C'
    },

    {
        taskName:'Check operation at Giga Factory 1',
        taskTime:'18.00-20.00',
        taskLocation:'at Central Jakarta  ',
        color: '#6972C3'

    },

]
const RightWidget = () => {
    return (
        <div className="right-wrapper">
            <div className="right-title">
            <div className="right-title-left">
            Today's Schedule</div>
            <div className="right-title-right" style={{cursor:'pointer'}}>
            See All
            </div>
            </div>
            

            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly' , height:'100%'}}>

            {DummyData.map((e)=>{
                return(

            <div className="right-widget-tasks" key={e.taskName}>
            <div style={{display:'flex', flexDirection:'row', height:'fit-content'}}>
            <div className="color-bar" style={{background:`${e.color}`, height:'100%', width:'5px'}}>
            </div>
            <div style={{display:'flex', flexDirection:'column', height:'fit-content'}}>
            <div className="task-heading">
            {e.taskName}</div>
            <div className="task-time">
            {e.taskTime}</div>
            <div className="task-location">
            {e.taskLocation}</div>
            </div>
            </div>
            </div>
                )
            })}
            
            </div>

            </div>
    )
}

export default RightWidget
