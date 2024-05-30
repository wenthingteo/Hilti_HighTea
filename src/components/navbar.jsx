import React from "react";
import { useNavigate } from "react-router-dom";
import hiltilogo from "../assets/hilti_logo.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
    const navigation = useNavigate();

    const goToMockIV = () => {
        navigation("/mock_interview");
    }

    const goToAIPersona = () => {
        navigation("/ai_persona");
    }

    const goToJobRecommendation = () => {
        navigation("/job_recommendation");
    }

    const goToProfile = () => {
        navigation("/profile");
    }

    return (
        <nav class="bg-white shadow fixed w-full z-20 top-0 start-0">
            <div class="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img 
                    src={hiltilogo} 
                    alt="Hilti Logo" 
                    className="h-10" />

                    <div
                        className="items-center justify-between w-full px-3 md:flex md:w-auto md:order-1"
                        id="navbar_sticky"
                    >
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                            <li>
                                <button
                                    onClick={goToMockIV}
                                    type="button"
                                    class="text-black hover:text-[#FF0000] font-medium rounded-lg text-md px-4 py-2 text-center"
                                >
                                    Mock Interview
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={goToAIPersona}
                                    type="button"
                                    class="text-black hover:text-[#FF0000] font-medium rounded-lg text-md px-4 py-2 text-center"
                                >
                                    AI Persona Mapping
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={goToJobRecommendation}
                                    type="button"
                                    class="text-black hover:text-[#FF0000] font-medium rounded-lg text-md px-4 py-2 text-center"
                                >
                                    Job Recommendation
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    class="cursor-pointer px-2 py-1 rounded-lg"
                    onClick={goToProfile}
                >
                    <i className="far fa-user-circle text-[#D2051E] hover:text-black hover:scale-110 text-2xl" ></i>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;