import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../Context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)

            })
    }, [user?.email, refresh])


    const handleDelete = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success('This product is successfully deleted')
                    setRefresh(!refresh)
                }
                console.log(data);
            })
    }
    return (
        <div>
            <h1 className='text-xl font-bold'>My Orders: {orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders &&
                            orders?.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.product}</td>
                                <td>{order.price}</td>
                                <td>{order.phone}</td>
                                <Link to={`/dashboardLayout/payment/${order._id}`}><td><button className='btn btn-xs btn-secondary'>Pay</button></td></Link>
                                <td><button onClick={() => handleDelete(order._id)} className='btn btn-xs'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;