
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const navigate = useNavigate()

    const handleAddProduct = (event) => {
        event.preventDefault()
        const form = event.target;
        const brand = form.brand.value;
        const product = form.product.value;
        const image = form.image.value;
        const location = form.location.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const seller = form.seller.value;
        const useTime = form.useTime.value;
        const whenItPosted = form.whenItPosted.value;

        const addData = {
            brand: brand,
            product: product,
            image: image,
            location: location,
            originalPrice: originalPrice,
            resalePrice: resalePrice,
            seller: seller,
            useTime: useTime,
            whenItPosted: whenItPosted
        }
        console.log(addData)

        fetch('http://localhost:5000/add', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Your product is successfully posted')
                    navigate('/')
                }
            })

    }

    const { data: specialties = [] } = useQuery({
        queryKey: ['addSpecialty'],
        queryFn: () => fetch('http://localhost:5000/addSpecialty')
            .then(res => res.json())
    })



    return (
        <div className='h-[500] flex justify-center '>

            <div className='w-[124] shadow-xl p-12'>
                <form onSubmit={handleAddProduct} >

                    <section className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <div>
                            <label className="label">
                                <span className="label-text-alt">Brand</span>
                            </label>
                            <select name='brand' type="text" className="select select-bordered w-full max-w-xs">
                                {
                                    specialties &&
                                    specialties?.map(specialty => <option
                                        key={specialty._id}
                                        value={specialty.brand}
                                    >{specialty.brand}</option>)
                                }


                            </select>

                            <label className="label">
                                <span className="label-text-alt">Product</span>
                            </label>
                            <input name='product' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />


                            <label className="label">
                                <span className="label-text-alt">Location</span>
                            </label>
                            <input name='location' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                <span className="label-text-alt"> OriginalPrice</span>
                            </label>
                            <input name='originalPrice' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text-alt"> ResalePrice</span>
                            </label>
                            <input name='resalePrice' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                <span className="label-text-alt"> Seller</span>
                            </label>
                            <input name='seller' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                <span className="label-text-alt">UseTime</span>
                            </label>
                            <input name='useTime' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                            <label className="label">
                                <span className="label-text-alt"> When It Posted</span>
                            </label>
                            <input name='whenItPosted' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                        </div>
                    </section>
                    <label className="label">
                        <span className="label-text-alt">Image</span>
                    </label>
                    <input name='image' type="text" placeholder="image" className="input input-bordered w-full max-w-sm mx-5" />

                    <button className='btn btn-secondary my-4 w-full ' >ADD PRODUCT</button>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;