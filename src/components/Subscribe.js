import React from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import '../styles/subscribe.css'

const Subscribe = () => {

    return(
        <div className="subs">
            <div>
            <p className="subscribe">Subscribe</p>
            </div>
            <div>
                <form>
                <input type="text" value='e-mail adress' className="input-form"></input>
                <button className="button-form">Send</button>
                </form>
            </div>

        </div>
    )
}

export default Subscribe;