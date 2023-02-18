import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { brand, image, description } = category;
    return (
        <div

            className="card card-compact w-64 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center">
                    <Link to={`/category/${brand}`}>
                        <button className="btn btn-secondary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Category;