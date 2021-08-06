import React from 'react';
import './Searchbar.css'
// import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";



const searchbar = (props) => {
    
    return (
        <div className="Search-input">
           
            <div className="input-field">
            
            <TextField
            style={{paddingLeft:'1em'}}
            placeholder={props.placeholdertext}

  InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
          <SearchIcon style={{color:"#858585"}}/>
        </IconButton>
      </InputAdornment>
    )
  }}
/>
            
            
            </div>
            
          </div>
    );
};

export default searchbar;