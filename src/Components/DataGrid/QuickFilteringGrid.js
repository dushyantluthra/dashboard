import React from 'react';
import {DataGrid} from '@material-ui/data-grid';


const QuickFilteringGrid = (props) =>{

const {items} = props

let i=0
const Rows = [
  
];
for (const {gender: g, dob:{age:a}, name:{first:firstName}, login:{username:userName,}, phone:p  } of items){
  Rows.push({"id":i,"Age":a, "Gender":g, "Name":firstName, "Username": userName, "Phone":p})
 i=i+1
}

// console.log(Rows);

const Columns = [
  { field: 'id', width:'', headerAlign:'center'},
  {field: 'Phone',width: 160, headerAlign:'center' },
  { field: 'Username', width: 190, headerAlign:'center' },
  { field: 'Name', width: 160, headerAlign:'center' },
  {field:'Gender',width: 180, headerAlign:'center' },
  { field: 'Age', width: 150, headerAlign:'center' },
];



  return(
     <div style={{ height: '90%', width: '100%', display:'flex',  }}>
      <DataGrid rowHeight={45} rows={Rows} columns={Columns} style={{display:'flex',flexGrow:'1', fontFamily:'Lato', fontWeight:'500', borderRadius:'20px', }}/>
    </div>
  
  )
}


export default QuickFilteringGrid