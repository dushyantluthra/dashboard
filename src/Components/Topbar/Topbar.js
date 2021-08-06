import React from 'react';
import { NotificationsNone } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import Searchbar from '../common/Searchbar';
import "./Topbar.css"






const Topbar = (props) => {
    return (
        <div className="topbar-wrapper">
            <div className="left">
            <div className="screen-name">
            {props.currentscreen}
            </div>
            </div>
            <div className="right">
            <div className="search-bar"><Searchbar placeholdertext={"Saerch..."} bgcolor={"black"} textcolor={"white"}/></div>
            <div className="notification-icon"><NotificationsNone/></div>
            <div className="avatar-image"><Avatar alt="Remy Sharp" src="http://placecorgi.com/300/300" style={{ width:'30px', height:'30px'}}/></div>
            
            </div>
        </div>
    );
};

export default Topbar;