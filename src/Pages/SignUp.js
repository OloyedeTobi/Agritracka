import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser, clearErrorMessage, clearSuccessMessage } from '../Redux/authSlice';
import { useNavigate } from 'react-router-dom';
import '../Style/SignUp.scss';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, successMessage } = useSelector((state) => state.auth);

    useEffect(() => {
        if (successMessage) {
            alert(successMessage);
            navigate('/login');
        }
        return () => {
            dispatch(clearErrorMessage());
            dispatch(clearSuccessMessage());
        };
    }, [successMessage, navigate, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        dispatch(signupUser({ firstName, lastName, email, password }));
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
        <>
            <div className="su-con">
                <div className="left-img">
                    <img src='/img/woman-holding-basket-full-different-vegetables.jpg' alt="Decorative" />
                    <div className='overlay'></div>
                </div>
                <div className='flex'>
                    <div className="form">
                        {/* <img className="bg-fig" src='/img/flower.svg' alt="Background decoration" /> */}
                        <h1>Welcome to <span>Agritracka</span></h1>
                        {error && <p className="error">{renderError()}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="fn-ln">
                                <div>
                                    <label>First Name</label><br/>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder="First Name"
                                        className='in'
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Last Name</label><br/>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder="Last Name"
                                        className='in'
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email address"
                                        className='in'
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Create password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className='in'
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Confirm password</label>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirm Password"
                                        className='in'
                                        required
                                    />
                                </div>
                                <div className='su'>
                                    <input type='submit' disabled={loading} value={loading ? 'Loading...' : 'Sign Up'} />
                                </div>
                                <div className="divider">
                                    <p> or </p>
                                </div>
                                <div className="alt-su">
                                    <button>
                                        <img src='/img/google-logo1.png' alt="Google logo" />
                                        {/* Button text or content goes here */}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
