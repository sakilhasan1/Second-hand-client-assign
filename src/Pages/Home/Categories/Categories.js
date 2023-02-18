import React from 'react';
import { useQuery } from 'react-query';
import Category from './Category';
import Phones from './Phones';

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
            .then(res => res.json())
    })

    return (
        <section className='my-10'>
            <h1 className='text-center text-2xl font-bold text-rose-500 mb-10'>Categories section</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  '>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                },
                {
                    categories.map(category => <Phones
                        key={category._id}
                        category={category}
                    ></Phones>)
                }

            </div>
        </section>
    );
};

export default Categories;