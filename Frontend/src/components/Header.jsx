import React from 'react'

function Header() {
    return (
        <>
            <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50 bg-slate-950">
                <div className="flex flex-wrap items-center justify-between gap-5 w-full">
                    <a href="javascript:void(0)" className="max-sm:hidden"><img src="data:image/png;base64,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" alt="logo" className="h-12" /></a>
                    <a href="javascript:void(0)" className="hidden max-sm:block"><img src="https://readymadeui.com/readymadeui-short.svg" alt="logo" className="w-9" /></a>
                    <h2 className='text-gray-50 text-2xl'>YouTube</h2>

                    {/* <div id="collapseMenu"
                        className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
                        <button id="toggleClose" className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                                <path
                                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                    data-original="#000000"></path>
                                <path
                                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                    data-original="#000000"></path>
                            </svg>
                        </button>

                        <ul
                            className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                            <li className="mb-6 hidden max-lg:block">
                                <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-36" />
                                </a>
                            </li>
                            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
                                <a href='javascript:void(0)'
                                    className="hover:text-blue-700 text-blue-700 block font-medium text-[15px]">Home</a>
                            </li>
                            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"><a href='javascript:void(0)'
                                className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]">Team</a>
                            </li>
                            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"><a href='javascript:void(0)'
                                className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]">Feature</a>
                            </li>
                            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"><a href='javascript:void(0)'
                                className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]">Blog</a>
                            </li>
                            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"><a href='javascript:void(0)'
                                className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]">About</a>
                            </li>
                            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"><a href='javascript:void(0)'
                                className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]">Contact</a>
                            </li>
                        </ul>
                    </div> */}

                    <div className="flex px-4 py-3 rounded-md border-2 w-96 border-blue-500 overflow-hidden max-w-md mx-auto">
                        <input type="email" placeholder="Search Something..."
                            className="w-full outline-none bg-transparent text-gray-600 text-sm" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="32px" className="fill-gray-600">
                            <path
                                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                            </path>
                        </svg>
                    </div>

                    <div className="flex max-lg:ml-auto space-x-4">
                        <button
                            className="px-4 py-2 text-sm rounded-full font-medium tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all">Login</button>
                        <button
                            className="px-4 py-2 text-sm rounded-full font-medium tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all">Sign
                            up</button>

                        <button id="toggleOpen" className="lg:hidden">
                            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header