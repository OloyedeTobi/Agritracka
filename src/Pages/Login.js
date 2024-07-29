import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearErrorMessage, clearSuccessMessage } from '../Redux/authSlice';
import { useNavigate } from 'react-router-dom';
import '../Style/SignUp.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, successMessage } = useSelector((state) => state.auth);

    useEffect(() => {
        if (successMessage) {
            alert(successMessage);
            navigate('/tracker');
        }
        return () => {
            dispatch(clearErrorMessage());
            dispatch(clearSuccessMessage());
        };
    }, [successMessage, navigate, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ username, password }));
    };

    const renderError = () => {
        if (typeof error === 'string') {
            return error;
        }
        if (error && error.detail) {
            return error.detail;
        }
        return 'An error occurred. Please try again.';
    };

    return (
        <div className="su-con">
            <div className="left-img">
                <img src='/img/woman-holding-basket-full-different-vegetables.jpg' alt="Decorative" />
                <div className='overlay'></div>
            </div>
            <div className="form">
                <h1 className='center'>Welcome back to <span>Agritracka</span></h1>
                {error && <p className="error">{renderError()}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="em-psw">
                        <div>
                            <label>Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                required
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className='su'>
                            <button type="submit" disabled={loading}>
                                {loading ? 'Loading...' : 'Login'}
                            </button>
                        </div>
                    </div>
                </form>
                <div className="divider">
                    <p>or</p>
                </div>
                <div className="alt-su">
                    <button>
                        <img src='/img/google-logo1.png' alt="Google logo" />
                        <span>Login With Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
