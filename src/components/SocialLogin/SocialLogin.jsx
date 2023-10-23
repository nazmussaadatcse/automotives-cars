import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../AuthProvider';


const SocialLogin = () => {

    const {handleGoogleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogIn = ()=>{
        handleGoogleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Logged In Successfully!',
                showConfirmButton: false,
                timer: 1500
              })
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.log(error.message);
        })
    }


    return (
        <div>
            <div className="flex justify-center">
                <div className=" text-center shadow-md rounded-md p-2">
                <p className="font-semibold text-red-900">Login with Google</p>
            <button onClick={handleGoogleLogIn} className="rounded-full text-2xl shadow-md text-red-700 hover:bg-purple-950 hover:rounded-full p-2"><FaGoogle></FaGoogle></button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;