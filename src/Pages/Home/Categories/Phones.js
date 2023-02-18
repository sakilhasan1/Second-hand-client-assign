import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Phone from './Phone';

const Phones = () => {
    const phones = useLoaderData()
    console.log(phones);
    return (
        <section>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    phones?.map(phone => <Phone
                        key={phone._id}
                        phone={phone}
                    ></Phone>)
                }
            </div>

        </section>
    );
};

export default Phones;