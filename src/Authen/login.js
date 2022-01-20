import { useState, useEffect } from 'react'
import './login.scss'
import { Button, Input } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import ProFile from './Profile'

function Login() {
    const [usernames, setUsername] = useState('');
    const [passwords, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const handleSubmit = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        var urlencoded = new URLSearchParams();
        urlencoded.append("username", usernames);
        urlencoded.append('password', passwords);
        console.log(urlencoded.username);
        var requestOptions = {
            method: 'POST',
            //  headers: myHeaders,
            body: urlencoded,
            // redirect: 'follow'
        };
        fetch("https://reqres.in/api/login", requestOptions)
            .then(reponse => {
                if (reponse.status === 200) {
                    console.log(reponse.status);
                    return reponse.json();
                }
                throw Error(reponse.status)
            })
            .then(result => {
                console.log(result);
                localStorage.setItem("Token", result.token)
                setIsLogin(true);
                toast.success("Login Success")

            })
            .catch(error => {
                console.log('error', error);
                toast.error("Login Fail");
            });
    }
    const onLogoutSucess = () => {
        setUsername('');
        setPassword('');
        setIsLogin(false);
    }
    return (

        <>
            {/* {localStorage.getItem("Token") !== null ? <ProFile /> : */}
            {isLogin === true ? <ProFile onLogoutSucess={onLogoutSucess} /> :
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12  text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <i className="fas fa-user-alt icon"></i>
                            <label className='input'>UserName</label>
                            <Input value={usernames} onChange={e => setUsername(e.target.value)} type='text' className='from-control' placeholder='Enter your usename' />

                        </div>
                        <div className='col-12 form-group login-input'>
                            <i className="fas fa-lock icon"></i>
                            <label className='input'>PassWord</label>
                            <div className='custom-password' >
                                <Input value={passwords} onChange={e => setPassword(e.target.value)} type={show === false ? 'password' : 'text'} className='from-control' placeholder='Enter your password' />
                                <span onClick={() => setShow(!show)}>
                                    {show && show === true ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}


                                </span>
                            </div>

                        </div>
                        <div className='col-12'>
                            <Button className='btn btn-primary' onClick={handleSubmit}>Login</Button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot'>Forgot your password</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span>Or Login with:</span>
                        </div>

                        <div className='col-12 text-center mt-3'>
                            <i className="fab fa-google-plus-g goggle"></i>
                            <i className="fab fa-facebook-f face"></i>
                        </div>
                    </div>


                </div>
            }
        </>
    )
}
export default Login;