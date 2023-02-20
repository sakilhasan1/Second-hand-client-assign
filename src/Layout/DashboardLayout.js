import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Header from '../Shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [isAdmin, setIsAdmin] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/users/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsAdmin(data.isAdmin)
            })
    }, [email])


    return (
        <section>

            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-40 bg-base-100 text-base-content font-bold underline">
                        <Link to='/dashboardLayout/myOrder'><li>My Orders</li></Link>
                        <Link to='/dashboardLayout/addProduct'><li>Add a product</li></Link>

                        {
                            isAdmin &&
                            <>
                                <Link to='/dashboardLayout/allSeller'><li>All Seller</li></Link>
                                <Link to='/dashboardLayout/allBuyer'><li>All Buyer</li></Link>
                                <Link to='/dashboardLayout/allUser'><li>All User</li></Link>
                            </>

                        }
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default DashboardLayout;