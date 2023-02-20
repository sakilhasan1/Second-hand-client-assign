import React from 'react';
import phon from '../../../Assets/Image/ip.png'
const Card = () => {
    return (
        <div className="hero my-12">
            <div className="hero-content flex-col lg:flex-row">
                <img className='w-1/2' src={phon} alt='' />
                <div>
                    <h1 className="text-5xl font-bold text-pink-600">Nice Phone</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Phone</button>
                </div>
            </div>
        </div>
    );
};

export default Card;