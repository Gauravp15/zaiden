import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const GetInTouchBtn = ({setCommonFormState}) => {
    return (
        <button className="get-in-touch-btn" onClick={() => setCommonFormState(true)}><span className="call-icon"><FontAwesomeIcon icon={faPhone} color="#222222" /></span><span className="call-text">Get in touch</span></button>
    )
}