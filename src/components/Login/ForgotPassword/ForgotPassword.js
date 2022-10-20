import React from 'react';
import './ForgotPassword.css'
const ForgotPassword = () => {
    return (
        <div className='background relative' >
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl items=center justify-center forgot-pass-portion text-white">
                        <div class="card-body w-full bg-opacity-25 ">


                            <div class="form-control pt-12">
                                <label class="label">
                                    <span class="label-text text-white">Email</span>
                                </label>
                                <input type="text" class="input input-bordered input-field bg-opacity-10 px-24" />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-white">Password</span>
                                </label>
                                <input type="text" class="input input-bordered input-field bg-opacity-10 " />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-white">Confirm Password</span>
                                </label>
                                <input type="text" class="input input-bordered input-field bg-opacity-10" />

                            </div>
                            <div class="form-control mt-6 pt-24 flex items-center">

                                <button class="btn bg-rosewood next-btn border-0">Next</button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img className='forgotpass-mandela-left' src="https://i.ibb.co/nP7CWy8/leftbg.png" alt="mandela" />


            <img className='forgotpass-mandela-right' src="https://i.ibb.co/xH7HRQJ/rightbg.png" alt="" />

        </div>
    );
};

export default ForgotPassword;