"use client"
import { GlobalContext } from "@/context";
import Glob from "@/context/index";
import { adminNavOptions, navOptions, styles } from "@/utils";
import { Fragment, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import CommonModal from "./CommonModal";


const isAdminView = false
const isAuthUser = true
const user = {
    role: "admin"
}

function NavItems({isModalView = false}) {
    return (
        <div className={`items-center justify-between w-full md:flex md:w-auto ${
            isModalView ? "" : "hidden"
        }`}
            id="nav-items">
            <ul className={`flex flex-col p-4 md:p-o mt-4 font-medium  rounded-lg md:flex-row md:mt-0 md:space-x-4 md:space-y-0 md:border-0 bg-white ${isModalView ? "border-none" : "border border-gray-100"}`}>
                {isAdminView ? adminNavOptions.map(items => (
                    <li key={items.id} className="cursor-pointer block py-3 pl-3 pr-4 text-gray-900 rounded  md:p-2">
                        {items.label}
                    </li>
                )) : navOptions.map(items => (
                    <li key={items.id} className="p-2">
                        {items.label}
                    </li>)
                )}
            </ul>

        </div>
    )
}

// const isAdminView = pathName.includes("admin-view");

function NavBar() {
    const { showNavModal, setShowNavModal } = useContext(GlobalContext)
    return (<>
        <nav className='bg-white fixed w-full border-b border-gray-200 ' >
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <div className='flex items-center cursor-pointer' >
                    <span className='text-2xl font-bold whitespace-nowrap'>
                        E-commerce
                    </span>
                </div>
                <div className='flex md:order-2 gap-2 '>
                    {!isAdminView && isAuthUser ? (
                        <Fragment>
                            <button className={styles.button}>Account</button>
                            <button className={styles.button}>Cart</button>
                        </Fragment>
                    ) : null}
                    {
                        user?.role === "admin" ?
                            isAdminView ? <button className={styles.button}>client view </button> : <button className={styles.button}>admin view</button>
                            : null
                    }
                    {isAuthUser ? <button className={styles.button}>Logout</button> : <button className={styles.button}>Login</button>}
                    <button className="inline-flex items-center  p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                        onClick={() => setShowNavModal(true)}
                    ><span className="sr-only">Open main menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify"><path d="M3 12h18" />
                            <path d="M3 18h18" /><path d="M3 6h18" />
                        </svg>
                    </button>
                </div>
                <NavItems />
            </div>
        </nav>
        <CommonModal
            showModalTitle={false}
            mainContent={<NavItems isModalView={true} />}
            show={showNavModal} 
            setShow={setShowNavModal}  />
    </>)
}

export default NavBar