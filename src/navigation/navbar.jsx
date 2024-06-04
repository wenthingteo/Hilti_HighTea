import React from "react";
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import hiltiLogo from '../assets/hiltilogo.png';

function Navbar() {
    // const navigation = useNavigate();

    // const goToHome = () => {
    //     navigation("/");
    // }

    // const goToMockIV = () => {
    //     navigation("/mock_interview");
    // }

    // const goToAIPersona = () => {
    //     navigation("/ai_persona");
    // }

    // const goToJobRecommendation = () => {
    //     navigation("/job_recommendation");
    // }

    // const goToProfile = () => {
    //     navigation("/profile");
    // }

    return (
        <nav className="font-Cascadia bg-white shadow fixed w-full z-20 top-0 start-0">
            <div className="max-w-screen-xl flex flex-row justify-between items-center mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img 
                        // src={hiltiLogo } 
                        // alt="hilti logo" 
                        // className="h-10" 
                        // // onClick={goToHome}
                    />

                    <div
                        className="items-center justify-between w-full px-3 md:flex md:w-auto md:order-1"
                        id="navbar_sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                            <li>
                                <button
                                    // onClick={goToHome}
                                    type="button"
                                    className="text-white text-2xl bg-[#D2051E] font-bold rounded text-md px-5 py-1 text-center active:text-[#D2051E]"
                                >
                                    HILTI
                                </button>
                            </li>
                            
                            <li>
                                <button
                                    // onClick={goToMockIV}
                                    type="button"
                                    className="text-black hover:text-[#FF0000] font-medium rounded-lg text-md px-4 py-2 text-center active:text-[#D2051E]"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    // onClick={goToAIPersona}
                                    type="button"
                                    className="text-black hover:text-[#FF0000] font-medium rounded-lg text-md px-4 py-2 text-center active:text-[#D2051E]"
                                >
                                    Application History
                                </button>
                            </li>
                            <li>
                                <button
                                    // onClick={goToJobRecommendation}
                                    type="button"
                                    className="text-black hover:text-[#FF0000] font-medium rounded-lg text-md px-4 py-2 text-center active:text-[#D2051E]"
                                >
                                    Hilti Mate
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="cursor-pointer px-2 py-1 rounded-lg"
                    // onClick={goToProfile}
                >
                    <i className="far fa-user-circle text-[#D2051E] hover:text-black hover:scale-110 text-2xl" ></i>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;