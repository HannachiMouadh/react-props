import React from 'react';
import PropTypes from "prop-types";

function Profile (props) {
   function handleName() {
          alert(props.fullname)
      }
      const { version = "16" } = props;
      const styleOb1 = {
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textDecoration: "none",
        fontSize: "16px",
      }
      const styleOb2 = {
        display: "inlineBlock",
        textAlign: "center",
        margin: "0 auto"
      }
    return <div style={styleOb2}>
        <h1>React {version} Documentation</h1>
        <h1>{props.fullname}</h1>
        <h1>{props.bio}</h1>
        <h1>{props.profession}</h1>
        <img src="./imageInPublic.jpg" alt="sunset">{props.children}</img>
        <button style={styleOb1} onClick={handleName}>Click Me</button>
    </div>;
  }
  Profile.propTypes = {
    fullname: PropTypes.string,
    version: PropTypes.number,
    bio: PropTypes.string,
    profession: PropTypes.string
  };
  
  export default Profile;