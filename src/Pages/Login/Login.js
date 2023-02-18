import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

    const { login, providerLogin } = useContext(AuthContext)


    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";


    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleLogin = data => {

        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });


            })
            .catch(error => console.log(error))
    }

    const googleProvider = new GoogleAuthProvider()
    const handleGoogle = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                navigate(from, { replace: true })
            })
            .then(err => console.log(err))
    }

    return (
        <div className='h-500 flex justify-center my-10'>
            <div className='w-96 p-6 shadow-lg rounded-lg'>
                <h1 className='text-3xl font-bold text-center'>Login</h1>

                <form onSubmit={handleSubmit(handleLogin)} >
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", {
                            required: true,

                        })} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        {errors.message}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                            minLength: { value: 6, message: 'password must be 6 chare' }
                            // pattern: /^[A-Za-z]+$/i
                        })} type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <small>  <p>{errors.password && errors.password.message}</p></small>
                    </div>



                    <button className='btn btn-primary w-full max-w-xs my-5 '>Login</button>

                </form>
                <p >New to this website? Please, <small className='text-center underline font-bold text-red-600' ><Link to='/signup'>Signup</Link> </small></p>
                <p className='divider'>OR</p>
                <button onClick={handleGoogle} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;