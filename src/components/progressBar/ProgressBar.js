import React, { useEffect } from 'react';

const ProgressBar = () => {
    const progresChange = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const progressBars = document.getElementsByClassName("progressBar");
        if(progressBars.length>0) {
            for(const pB of progressBars) {
                pB.style.width = scrolled + "%";
            }
        }
    }

    useEffect(() => {
        progresChange();
        window.addEventListener("scroll", progresChange);
    }, [])
    
    return (
        <div className="progressBar"></div>
    );
}

export default ProgressBar;