import React from "react";

import * as Icon from "react-bootstrap-icons"
export default function Header(props) {
    const {image,name,profesi} = props
    return(
        <div className="flex flex-col justify-center items-center gap-2 p-10 w-full shadow-lg
         rounded-md ">
            <div className="relative w-fit">
                <div className="w-[160px] h-[160px] bg-center bg-cover">
                    <img src={image} alt="profil" className="rounded"  >
                        
                    </img>
                </div>
                <div className="rounded-full absolute text-primaryBlue-main right-0 z-10 top-0 w-fit bg-white p-[9px]">
                    <Icon.CameraFill size={20}/>
                </div>              
            </div>
            <h1 className="font-rajdhani text-center text-black capitalize heading-l-bold">{name}</h1>
            <p className="font-rajdhani heading-s-medium text-black text-center capitalize">{profesi}</p>
        </div>
    )
}