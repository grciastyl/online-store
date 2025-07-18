import "./About.css";
import { useState } from "react";

function About() {
    //We are going to apply all of the logic here
    const [visibleEmail, setVisibleEmail] = useState(false);
    //visibleEmail is the state variable, SetVissibleEmail is the function to update it


    function showEmail() {
        setVisibleEmail(true);

    }




    return (
        <div className="about page">
            <h3>About Us</h3>
            <div className="photo-description">
                <img className="Aspen" src="./images/Aspen.jpg" alt="Aspen" />
                <h3 className="narrative">We strive to provide the highest quality products, fresh from the foot of Pikes Peak to your home! </h3>
            </div>
            <div className="box">
                {visibleEmail ? <h5>Christopher.garcia@SDGKU.edu</h5> : <label>Click the button to see my email</label>}
                <br />
                {
                    !visibleEmail
                        ? <button onClick={showEmail} className="btn btn-sm btn-success">Show Email</button>
                        : null
                }
            </div>
        </div>
    );
}

export default About