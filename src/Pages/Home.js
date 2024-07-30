import React from 'react';
import Header from "./Header";
import "../Style/Home.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
    const { user } = useSelector((state) => state.auth);
    return(
        <>
           <div className="home-body">
            <Header />
                <div className="centered">
                    <div className="flex-con"> 
                        <div className="main-text">
                            <h1>Your Farm's digital guardian</h1>
                        </div>
                        {!user?
                        (<div className="cta">
                            <div className="sign-up spanner">
                                <div>
                                    <span>New User</span>
                                    <img src="/assets/arrow_forward.svg" alt=''/>
                                </div>
                                <button className="wave-text act-btn">
                                    <span><Link to="/signup" className="non-link">Sign up</Link></span>
                                    <svg class="lg lg-stroke lg-arc" width="100%" height="18" viewBox="0 0 59 18"><path d="M.945.149C12.3 16.142 43.573 22.572 58.785 10.842" pathLength="1"/></svg>
                                </button>
                            </div>
                            <div className="login spanner">
                                <div>
                                    <span>Existing Account</span>
                                    <img src="/assets/arrow_forward.svg" alt='' />
                                </div>
                                <button className="wave-text act-btn">
                                    <span><Link to="/login" className="non-link">Login</Link></span>
                                    <svg class="lg lg-stroke lg-arc" width="100%" height="18" viewBox="0 0 59 18"><path d="M.945.149C12.3 16.142 43.573 22.572 58.785 10.842" pathLength="1"/></svg>
                                </button>
                            </div>
                        </div>)
                        
                        :
                        <div className="cta"> 
                            <div className="login spanner">
                                <div>
                                    <span>Want to try it out?</span>
                                    <img src="/assets/arrow_forward.svg" alt='' />
                                </div>
                                <button className="wave-text act-btn">
                                    <span><Link to="/tracker" className="non-link">Tracker</Link></span>
                                    <svg class="lg lg-stroke lg-arc" width="100%" height="18" viewBox="0 0 59 18"><path d="M.945.149C12.3 16.142 43.573 22.572 58.785 10.842" pathLength="1"/></svg>
                                </button>
                            </div>

                        </div>
}


                    </div>
            
                    </div>
                <div className="image-block">
                    
                    <img src="/img/avocado-tree-bro1.png" className="spotlight" alt=''/>
                    <img src="/img/avocado-tree-bro2.png" className="spotlight" alt=''/>
                    <img src="/img/avocado-tree-bro1.png" className="spotlight" alt=''/>
                    <img src="/img/avocado-tree-bro2.png" className="spotlight" alt=''/>
                    <img src="/img/avocado-tree-bro1.png" className="spotlight" alt=''/>
                    <img src="/img/avocado-tree-bro2.png" className="spotlight" alt=''/>
                    <img src="/img/avocado-tree-bro1.png" className="spotlight" alt=''/>
                    <img src="/img/avocado-tree-bro2.png" className="spotlight" alt=''/>
                    <img src="/img/avocado-tree-bro1.png" className="spotlight" alt=''/>
                    <img src="/img/avocado-tree-bro2.png" className="spotlight" alt=''/>

                </div>
                <div className="decor-text"> 
                    at.
                </div>
           </div>
        </>
    )
}

export default Home;