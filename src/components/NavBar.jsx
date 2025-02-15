"use client"
import React, { Fragment } from 'react'

const isAdminView = false
const isAuthUser = true
function NavBar() {
    return (<>
        <div className='bg-white fixed w-full border-b border-gray-200 ' >
             <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <div className='flex items-center cursor-pointer' >
                     <span className='text-2xl font-bold whitespace-nowrap'>
                        E-commerce
                     </span>
                </div>
                <div className='flex md:order-2 gap-2 '>
                   {!isAdminView && isAuthUser ?(
                      <Fragment>
                        <button>Account</button>
                        <button>Cart</button>
                    </Fragment> 
                   ):null }
                   
                    

                </div>
             </div>
        </div>
    </>)
}

export default NavBar