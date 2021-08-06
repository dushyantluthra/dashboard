import React from 'react'
import './Users.css'
import { useState, useEffect } from 'react'
import QuickFilteringGrid from '../Components/DataGrid/QuickFilteringGrid'
import Searchbar from '../Components/common/Searchbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '../Components/common/Button';

const Users = () =>{


    const [userData, setUserData] = useState()
useEffect(()=>{
    requestData()
}, []);

async function requestData(){
    const res = await fetch('https://randomuser.me/api/?results=500');
    const json = await res.json();
    setUserData(json.results)
   
}


function Dat() {
    return (
        
            <div style={{width:'100%', height:'100%'}}>
        <div className="user-title">
    User Records<div className="user-search">
    <Searchbar/>
    <div style={{ marginLeft:'0.8em'}}><Button text="+ Add" bcolor="#0D5F9A"/></div>    
    </div>
    </div>
    <div className="user-data">
    <QuickFilteringGrid items={userData}/>
    </div>
    </div>
     
    )
}


return(
    <div className="user-wrapper">
    {(userData)?  <Dat/> : <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100%', width:'100%'}}>
    <h1><CircularProgress/></h1>
</div>}
  
    </div>
)

}

export default Users