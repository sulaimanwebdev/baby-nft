import React from 'react'

const Loader = () => {
    return (
        <div className="loader" style={{zIndex: 1000000000}}>
            
            <img src="/bg.png" alt="" className="loaderBG" />
            <div className="capCont">
            <img src="/bottle1.png" alt="" className="cap" />
            <img src="/bottle2.png" alt="" className="full_bottle bothBottle" />
            </div>
            <div className="loaderText"><div className="text_animation textAnimation1">BABY</div> <div className="text_animation textAnimation2">BOOM</div> <div className="text_animation textAnimation3">CLUB</div></div>

        </div>
    )
}

export default Loader