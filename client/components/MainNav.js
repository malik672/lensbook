
import React from "react"


function MainNav() {
    return (

        <nav className="sticky top-0 z-40 navbar navbar-expand-lg w-full bg-slate-900  text-slate-100  drop-shadow-2xl ">
            <div className="px-8 mx-auto">
                <div className="flex justify-between">
                    <div className="flex space-x-4 py-1 my-2">

                        {/* LOGO */}
                        <div className="flex">
                            <h1 className="flex text-left text-xl font-bold items-center mr-4">
                                <span className="font-light">lens</span>Book
                            </h1>
                        </div>

                        {/* SEARCH */}
                        <div className="hidden md:flex justify-between shadow-xl relative text-center text-black p-1 rounded-[40px] bg-slate-700 min-w-[350px]">
                            <div className="m-1 pl-2">
                                <p>search</p>
                            </div>

                            <div className="m-1 pr-2">
                                <svg
                                    width={22}
                                    height={21}
                                    viewBox="0 0 22 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M15.7446 13.5765C17.0155 11.8423 17.5847 9.69215 17.3384 7.55627C17.092 5.42038 16.0483 3.45627 14.416 2.05687C12.7837 0.657469 10.6833 -0.0740105 8.53481 0.00877302C6.38636 0.0915565 4.34839 0.982498 2.82862 2.50335C1.30886 4.0242 0.419376 6.06281 0.33813 8.21132C0.256884 10.3598 0.989866 12.4598 2.39043 14.0911C3.791 15.7224 5.75586 16.7647 7.89192 17.0095C10.028 17.2543 12.1777 16.6835 13.911 15.4114H13.9097C13.9491 15.4639 13.9911 15.5138 14.0383 15.5623L19.0915 20.6154C19.3376 20.8617 19.6714 21.0002 20.0196 21.0003C20.3678 21.0004 20.7017 20.8622 20.948 20.6161C21.1943 20.37 21.3327 20.0361 21.3328 19.688C21.3329 19.3398 21.1948 19.0059 20.9486 18.7596L15.8955 13.7064C15.8486 13.6589 15.7981 13.6151 15.7446 13.5752V13.5765ZM16.0832 8.53126C16.0832 9.47924 15.8965 10.4179 15.5337 11.2938C15.1709 12.1696 14.6392 12.9654 13.9689 13.6357C13.2986 14.306 12.5028 14.8377 11.627 15.2005C10.7511 15.5633 9.81244 15.75 8.86446 15.75C7.91648 15.75 6.97778 15.5633 6.10196 15.2005C5.22614 14.8377 4.43036 14.306 3.76003 13.6357C3.08971 12.9654 2.55798 12.1696 2.1952 11.2938C1.83243 10.4179 1.64571 9.47924 1.64571 8.53126C1.64571 6.61673 2.40625 4.78061 3.76003 3.42683C5.11381 2.07305 6.94993 1.31251 8.86446 1.31251C10.779 1.31251 12.6151 2.07305 13.9689 3.42683C15.3227 4.78061 16.0832 6.61673 16.0832 8.53126V8.53126Z"
                                        fill="#F8FAFC"
                                    />
                                </svg>
                            </div>
                        </div>

                    </div>
                    <div className="flex">

                        {/* PRIMARY NAV */}
                        <div className=" hidden md:flex items-center space-x-6 px-3">
                            <a href="#" className=" hover:text-slate-500" >Market</a>
                            <a href="#" className=" hover:text-slate-500">Dashboard</a>
                            <a href="#" className=" hover:text-slate-500">Write</a>
                            <a href="#" className=" hover:text-slate-500">Publish</a>
                            <a href="#" className=" hover:text-slate-500">FAQ</a>
                        </div>
                        {/* RAINBOW WALLET */}
                        <div className=" hidden md:flex p-3">
                            <div className=" hover:text-slate-300 hover:bg-gradient-to-br from-[#3a42e1] to-[#620c90] flex items-center px-4 ml-16 bg-slate-700 rounded">
                                WALLET
                            </div>
                        </div>

                        {/* Mobile Button goes here */}
                        <div className="md:hidden flex items-center">
                            <button className="mobile-menu-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* MOBILE MENU */}

            <div className="mobile-menu md:hidden mx-6 mt-10">
                <div className="md:hidden flex justify-between shadow-xl relative text-center text-black p-1 rounded-[40px] bg-slate-700 min-w-[350px]">
                    <div className="m-1 pl-2">
                        <p>search</p>
                    </div>
                    <div className="m-1 pr-2">
                        <button>
                            <svg
                                width={22}
                                height={21}
                                viewBox="0 0 22 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M15.7446 13.5765C17.0155 11.8423 17.5847 9.69215 17.3384 7.55627C17.092 5.42038 16.0483 3.45627 14.416 2.05687C12.7837 0.657469 10.6833 -0.0740105 8.53481 0.00877302C6.38636 0.0915565 4.34839 0.982498 2.82862 2.50335C1.30886 4.0242 0.419376 6.06281 0.33813 8.21132C0.256884 10.3598 0.989866 12.4598 2.39043 14.0911C3.791 15.7224 5.75586 16.7647 7.89192 17.0095C10.028 17.2543 12.1777 16.6835 13.911 15.4114H13.9097C13.9491 15.4639 13.9911 15.5138 14.0383 15.5623L19.0915 20.6154C19.3376 20.8617 19.6714 21.0002 20.0196 21.0003C20.3678 21.0004 20.7017 20.8622 20.948 20.6161C21.1943 20.37 21.3327 20.0361 21.3328 19.688C21.3329 19.3398 21.1948 19.0059 20.9486 18.7596L15.8955 13.7064C15.8486 13.6589 15.7981 13.6151 15.7446 13.5752V13.5765ZM16.0832 8.53126C16.0832 9.47924 15.8965 10.4179 15.5337 11.2938C15.1709 12.1696 14.6392 12.9654 13.9689 13.6357C13.2986 14.306 12.5028 14.8377 11.627 15.2005C10.7511 15.5633 9.81244 15.75 8.86446 15.75C7.91648 15.75 6.97778 15.5633 6.10196 15.2005C5.22614 14.8377 4.43036 14.306 3.76003 13.6357C3.08971 12.9654 2.55798 12.1696 2.1952 11.2938C1.83243 10.4179 1.64571 9.47924 1.64571 8.53126C1.64571 6.61673 2.40625 4.78061 3.76003 3.42683C5.11381 2.07305 6.94993 1.31251 8.86446 1.31251C10.779 1.31251 12.6151 2.07305 13.9689 3.42683C15.3227 4.78061 16.0832 6.61673 16.0832 8.53126V8.53126Z"
                                    fill="#F8FAFC"
                                />
                            </svg>
                        </button>
                    </div>

                </div>



                {/* PRIMARY NAV */}
                <div className="pt-10 md:hidden items-center md:space-x-6 md:px-3">
                    <a href="#" className=" p-4 text-sm hover:text-slate-300 hover:bg-gradient-to-br from-[#0f5f4b] to-[#09152f] block">Market</a>
                    <a href="#" className=" p-4 text-sm hover:text-slate-300 hover:bg-gradient-to-br from-[#0f5f4b] to-[#09152f] block">Dashboard</a>
                    <a href="#" className=" p-4 text-sm hover:text-slate-300 hover:bg-gradient-to-br from-[#0f5f4b] to-[#09152f] block">Write</a>
                    <a href="#" className=" p-4 text-sm hover:text-slate-300 hover:bg-gradient-to-br from-[#0f5f4b] to-[#09152f] block">Publish</a>
                    <a href="#" className=" p-4 text-sm hover:text-slate-300 hover:bg-gradient-to-br from-[#0f5f4b] to-[#09152f] block">FAQ</a>
                </div>
                {/* RAINBOW WALLET */}
                <div className=" flex md:hidden p-4 md:p-3 justify-center">
                    <div className="block p-4 px-auto\\\ hover:text-slate-300 hover:bg-gradient-to-br from-[#3a42e1] to-[#620c90] items-center md:ml-16 bg-slate-700 rounded">
                        WALLET
                    </div>
                </div>

            </div>
        </nav>

        
    )
}

export default MainNav