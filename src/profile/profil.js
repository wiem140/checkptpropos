import React from 'react';
import '../App.css';
import { checkPropTypes } from 'prop-types';

const Profil = ({fullName, bio, profession, children }) => { 
    return(

  <div>

 
    <div className="img">
  
      <img src="img.jpg"  /> {checkPropTypes.children}
    </div>
  
 <div className="info">

 
  <span >Name:</span>
   <h2 style={{ color:'pink', fontStyle: "time new Rome"}}>  {fullName}</h2>
  <span >Bio:</span>
  <span>{bio}</span>
  <br />
  <span >Profession:</span> 
<span style={{fontSize: 18, color: 'blue'}}>{profession}</span>

</div>
</div>

    );
    }

    
    
    Profile.defaultProps = {
        fullName: "Your Name",
        bio: "Your Bio",
        profession: "Your Profession",
        children: 'img.jpg'
       
    }
    
    Profile.propTypes = {
        fullName: propTypes.string,
        bio: propTypes.string,
        profession: propTypes.string,
        children: propTypes.string,
     
    }
    
    export default Profil;