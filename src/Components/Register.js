import React from 'react';


function Register() {
    return (
        <form>
            <section className="vh-100 main-background">
                <div className="container py-5 h-100 ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong article-style">
                        <div className="card-body p-5 text-center">

                            <h3 className="mb-5">Sign up</h3>

                            <div className="form-outline mb-4">
                                <input type="name" id="typeUsername" className="form-control form-control-lg" placeholder='Username'/>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="email" id="typeEmail" className="form-control form-control-lg" placeholder='Email'/>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" id="typePassword" className="form-control form-control-lg" placeholder='Password'/>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" id="confirmPassword" className="form-control form-control-lg" placeholder='Confirm Password'/>
                            </div>


                            <div className="form-check d-flex justify-content-center mb-4">
                                <p>Already have an account? </p><div className='mx-3'><a href="" >Login</a></div>
                            </div>

                            <button className="btn btn-primary btn-lg btn-block w-100" type="submit">Register</button>

                    

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </form>
    );
}

export default Register;