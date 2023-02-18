

import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signup, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignup = data => {
        console.log(data);

        signup(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/')
                    })


            })
            .catch(error => console.log(error))
    }

    return (
        <div className='h-500 flex justify-center my-10'>
            <div className='w-96 p-6 shadow-lg rounded-lg'>
                <h1 className='text-3xl font-bold text-center'>Signup</h1>

                <form onSubmit={handleSubmit(handleSignup)} >

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input {...register("name", {
                            required: true,

                        })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        {errors.message}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">email</span>
                        </label>
                        <input {...register("email", {
                            required: true,

                        })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        {errors.message}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">password</span>
                        </label>
                        <input {...register("password", {
                            minLength: { value: 6, message: 'password must be 6 chare' }
                            // pattern: /^[A-Za-z]+$/i
                        })} type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <small>  <p>{errors.password && errors.password.message}</p></small>
                    </div>

                    <button className='btn btn-primary w-full max-w-xs my-5 '>Signup</button>

                </form>
                <p className='text-center'>Already have an account? Please  <small className='font-bold text-purple-600 underline'><Link to='/login'>Login</Link></small></p>
            </div>
        </div>
    );
};

export default Signup;