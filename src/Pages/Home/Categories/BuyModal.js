
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const BuyModal = ({ modalData, setModalData }) => {

    const { user } = useContext(AuthContext)
    const { brand, product, resalePrice } = modalData;
    const navigate = useNavigate();
    // console.log(user);

    const handleOrderData = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const product = form.product.value;
        const price = form.price.value;
        const phone = form.phone.value;

        const orderData = {
            name: name,
            email: email,
            product: product,
            price: price,
            phone: phone
        }
        // console.log(orderData)
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setModalData(null)
                    toast.success('Your order is successfully completed')
                    navigate('/dashboardLayout/myOrder')
                }
            })

    }

    return (
        <div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">{brand}</p>
                    <div className="form-control w-full max-w-xs">

                        <form onSubmit={handleOrderData} >
                            <label className="label">
                                <span className="label-text-alt">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                <span className="label-text-alt">Email</span>
                            </label>
                            <input name='email' type="text" defaultValue={user?.email} disabled className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                <span className="label-text-alt">Product</span>
                            </label>
                            <input name='product' type="text" defaultValue={product} disabled className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                <span className="label-text-alt">Price</span>
                            </label>
                            <input name='price' type="text" defaultValue={resalePrice} disabled className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                <span className="label-text-alt">Phone</span>
                            </label>
                            <input name='phone' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                            <button className='btn btn-secondary my-4 w-full max-w-sm' >Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyModal;