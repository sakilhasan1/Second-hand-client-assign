import React from 'react';

const phone = ({ phone, setModalData }) => {
    const {
        brand, product, image,
        location, originalPrice,
        resalePrice, seller,
        useTime, whenItPosted
    } = phone;

    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {brand}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>product: {product}</p>
                <p>Location : {location}</p>
                <p>OriginalPrice: {originalPrice}</p>
                <p>ResalePrice : {resalePrice}</p>
                <p>Seller : {seller}</p>
                <p>UseTime : {useTime}</p>
                <p>WhenItPosted : {whenItPosted}</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setModalData(phone)} htmlFor="my-modal-3" className="btn btn-secondary">Bye Now</label>
                </div>
            </div>
        </div>
    );
};

export default phone;