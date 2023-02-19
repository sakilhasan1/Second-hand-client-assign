import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Context/AuthProvider';

const AllBuyer = () => {
    const { user } = useContext(AuthContext)

    const { data: AllBuyer = [], isLoading, refetch } = useQuery({
        queryKey: ['allBuyer'],
        queryFn: () => fetch('http://localhost:5000/allBuyer')
            .then(res => res.json())
    })

    if (isLoading) {
        return 'Loading'
    }
    const handleDelete = id => {
        fetch(`http://localhost:5000/buyerDelete/${id}`, {
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

    // const handleDelete = id => {
    //     console.log(id);
    //     fetch(`http://localhost:5000/sellerDelete/${id}`, {
    //         method: 'DELETE',

    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             refetch()
    //         })
    // }

    return (
        <div>
            <h1>All Seller: {AllBuyer.length}</h1>
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
                            AllBuyer.map((buyer, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{user?.email}</td>
                                <td><button onClick={() => handleDelete(buyer._id)} className='btn btn-xs'>Delete</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;