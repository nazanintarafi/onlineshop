import React from 'react';
import ReactPlayer from "react-player";
import "./responsivePlayer.css";

const ReasponsivePlayer=({ url })=>{
    return(
        <div className="player-wrapper">
            <ReactPlayer
                className="react-player"
                url={url}
                width="100vw"
                height="100%"
                controls={true}
            />
        </div>
    )
}
export default ReasponsivePlayer;