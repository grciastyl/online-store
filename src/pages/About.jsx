import "./About.css";
import { useState } from "react";

function About() {
    //We are going to apply all of the logic here
    const [visibleEmail, setVisibleEmail] = useState(false);
    //visibleEmail is the state variable, SetVissibleEmail is the function to update it


function showEmail(){
    setVisibleEmail(true);
    
}




    return (
        <div className="about">
            <h3>About Us</h3>
            <div className="box">
                <h2>Chris</h2>
                { visibleEmail ? <h5>Christopher.garcia@SDGKU.edu</h5> : <label>Click the button to see my email</label> }
                <br />
                {
                    !visibleEmail
                    ? <button onClick={showEmail} className="btn btn-outline-primary">Show Email</button>
                    :null
                }
            </div>
        </div>
    );
}

export default About