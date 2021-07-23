import React from 'react'
import '../App.css';
import propTypes  from 'prop-types';

const Profil = ({fullName, bio, profession,handleAlert,children }) => { 
  
  
    return(

  <div>

 
    <div className="img">
  
      <img src="img.jpg" alt="" /> {propTypes.children}
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
<div className="bout">
<button className="btn " onClick={ e => { handleAlert(fullName)}}>{handleAlert}
                    Click me
                    </button>
                    </div>
</div>

    );
    }

    
    
    Profil.defaultProps = {
        fullName: "Your Name",
        bio: "Your Bio",
        profession: "Your Profession",
        children: 'img.jpg'
       
    }
    
    Profil.propTypes = {
        fullName: propTypes.string,
        bio: propTypes.string,
        profession: propTypes.string,
        children: propTypes.string,
     
    }
    
    export default Profil;