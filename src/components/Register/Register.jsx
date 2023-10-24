import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";



const Register = () => {

    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState('');

    setTimeout(() => {
        setPasswordError('');
    }, 5000);


    const handleRegister = event => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo');
        console.log(name, email, password, photo);

        // Perform password validation
        if (password.length < 6) {
            setPasswordError('must be 6 characters long.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError('required one capital letter.');
            return;
        }
        if (!/[!@#$%^&*]/.test(password)) {
            setPasswordError('at least one special character.');
            return;
        }
        setPasswordError('');


        createUser(email, password)
            .then(result => {
                console.log(result);

                // update profile and set name, photo
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })

                    .then(() => {
                        console.log('profile updated')
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Registered Successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                // returning to previous route 
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content p-12 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6 text-xl">
                        Automotive Brand Cars is a full-stack web application designed to provide users with access to a wide range of car products, as well as the ability to manage and customize their car selections. The project have various technologies, including React, React Router, Firebase Authentication, MongoDB database and express back-end, to ensure a good user experience.

                    </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        {passwordError && (
                            <p className="text-red-500 text-sm font-semibold">{passwordError}</p>
                        )}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center mb-4">Already have an account? <Link className="font-semibold text-green-700" to={"/login"}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;