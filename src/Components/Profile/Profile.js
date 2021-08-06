import './Profile.css';
import React from 'react';
import Button from '../common/Button';
import Avatar from '@material-ui/core/Avatar'; 

const Profile = () => {
	return (
		<div className='profile-wrapper'>
			<div className='profile-title'>Profile</div>
			<div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <div className='profile-left'>
				<div className='profile-image'>
            <Avatar alt="Remy Sharp" src="http://placecorgi.com/300/300" style={{ width:'120px', height:'120px'}}/>

                </div>
				<div>
                <button  className='change-btn'>Change</button></div>
			</div>
			<div className='profile-right'>
				<form className='profile-form'>
					<div style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between'}}>
						<label htmlFor='firstname' className='pf-label'>
                        First Name
							<input
								className='input-pf pname'
								type='text'
								defaultValue='Surya'
								placeholder='First Name'
								required></input>
						</label>
                        
						<label htmlFor='lastname' className='pf-label'>
						Last Name	
                        <input
								className='input-pf pname'
								type='text'
								defaultValue='Wiguna'
								placeholder='Last Name'
								required></input>
						</label>
					</div>
					<label htmlFor='dateofbirth' className='pf-label'>
						Date of Birth
						<input
							className='input-pf'
							type='date'
							defaultValue='2014-02-09'
							placeholder='Enter Date'
							required></input>
					</label>
                    <label htmlFor='phonenumber' className='pf-label'>
						Phone Number
						<input
							className='input-pf'
							type='number'
                            maxLength="10"
							defaultValue='0123456789'
							placeholder='Enter Phone Number'
							required></input>
					</label>
                    <label htmlFor='address' className='pf-label'>
						Address
						<input
							className='input-pf'
							type='text'
							defaultValue='suryawigunaa@gmail.com'
							placeholder='Enter Address'
							required></input>
					</label>
				</form>
			</div>
            
  </div>    
  
  <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}}>
            <Button text="Save" bcolor="#519BD0"/>
            </div>
		</div>
	);
};

export default Profile;
