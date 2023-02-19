import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Context/AuthProvider';

const AllSeller = () => {
    const { user } = useContext(AuthContext)

    const { data: AllSeller = [], isLoading, refetch } = useQuery({
        queryKey: ['allSeller'],
        queryFn: () => fetch('http://localhost:5000/allSeller')
            .then(res => res.json())
    })

    const handleDelete = id => {
        fetch(`http://localhost:5000/sellerDelete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success('This product is successfully deleted')
                    refetch()
                }
                console.log(data);
            })
    }

    return (
        <div>
            <h1>All Seller: {AllSeller.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            AllSeller.map((seller, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{seller.seller}</td>
                                <td>{user?.email}</td>
                                <td><button onClick={() => handleDelete(seller._id)} className='btn btn-xs'>Delete</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;