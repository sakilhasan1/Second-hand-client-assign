import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyModal from './BuyModal';
import Phone from './Phone';

const Phones = () => {
    const phones = useLoaderData()

    const [modalData, setModalData] = useState({})

    return (
        <section>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    phones?.map(phone => <Phone
                        key={phone._id}
                        phone={phone}
                        setModalData={setModalData}

                    ></Phone>)
                }
            </div>
            {
                modalData && <BuyModal
                    modalData={modalData}
                    setModalData={setModalData}
                ></BuyModal>
            }
        </section>
    );
};

export default Phones;