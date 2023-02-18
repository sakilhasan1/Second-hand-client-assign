import React from 'react';
import phoneRa from '../../../Assets/Image/phoneRa.jpg'
const Banner = () => {
    return (
        <div className="hero my-5 h-[20rem] rounded-lg rounded-sm " style={{ backgroundImage: `url(${phoneRa})` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-fuchsia-500">Second hand Phone</h1>
                    <p className="mb-5 text-rose-400">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;