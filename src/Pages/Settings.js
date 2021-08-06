import React from 'react'
import './Settings.css'
import Profile from '../Components/Profile/Profile'
import Account from '../Components/Account/Account'
import Security from '../Components/Security/Security'
import Danger from '../Components/Danger/Danger'

const Settings = () =>{
return(
    <div className="settings-container">
    <div className="settings-left">
    <Profile/>
    </div>
    <div className="settings-right">
    <div className="settings-widget-1" style={{width:'100%'}}>
    <Account/></div>
    <div className="settings-widget-2" style={{width:'100%'}}>
   <Security/></div>
    <div className="settings-widget-3" style={{width:'100%'}}>
    <Danger/></div>
    </div>
    </div>
)
}

export default Settings 