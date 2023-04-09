import React from 'react'
import Logo from "../assets/myphotos/pic4.jpg";

function Photo() {
    return (
        <div className="bg-[#0a192f] sm:flex justify-evenly  pt-8">
            <img
                src={Logo}
                alt=""
                style={{ width: "250px" }}
                className=" ml-10 rounded-full shadow-md shadow-[#040c16] sm:hover:scale-110 duration-500"
            />
        </div>
    )
}

export default Photo