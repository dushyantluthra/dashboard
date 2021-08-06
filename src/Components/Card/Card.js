import './Card.css'
import React from 'react';
import {
	SystemUpdateAltRounded,
	LocalOfferOutlined,
	ThumbUpAltOutlined,
	PeopleOutline,
} from '@material-ui/icons';


const Card = (props) => {

    const iconList = (i) => {
        if(i === 'SystemUpdateAltRounded'){
            return <SystemUpdateAltRounded/>
        }
        else if(i === 'LocalOfferOutlined'){
            return <LocalOfferOutlined/>
        }
        else if(i === 'ThumbUpAltOutlined'){
            return <ThumbUpAltOutlined/>
        }
        else{
            return <PeopleOutline/>
        }
    }

    return (
<div className="card-container" style={{background: props.backgroundcolor}}>
<div style={{display:'flex', flexDirection:"column", width:'100%'}}>
<div className="icon">{iconList(props.icon)}</div>
<div className="text">{props.text}</div>
<div className="number">{props.number}</div>
</div>              
        </div>
    );
};

export default Card;