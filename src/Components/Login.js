import React from 'react';


function Login() {
    return (
        <form>
            <section className="vh-100 main-background">
                <div className="container py-5 h-100 ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong article-style">
                        <div className="card-body p-5 text-center">

                            <h3 className="mb-5">Sign in</h3>

                            <div className="form-outline mb-4">
                            <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder='Email'/>
                            
                            </div>

                            <div className="form-outline mb-4">
                            <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder='Password'/>
                            
                            </div>

                            <div className="form-check d-flex justify-content-center mb-4">
                                <p>Don't have an account? </p><div className='mx-3'><a href="" >Register</a></div>
                            </div>

                            <div className="form-check d-flex justify-content-end mb-4">
                                <a href=""> Forgot my password</a>
                            </div>

                            <button className="btn btn-primary btn-lg btn-block w-100" type="submit">Login</button>

                    

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </form>
    );
}

export default Login;