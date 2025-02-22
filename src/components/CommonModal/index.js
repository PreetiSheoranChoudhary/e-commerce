"use client "

import { Transition, Dialog } from "@headlessui/react"


export default function CommonModal({ modalTitle, mainContent ,showButtons, buttonComponent, show, setShow }) {
    return (
        <Transition show={show} as={Fragment}>
        <Dialog as="div" className={"relative z-10"} onClose={setShow}>
            <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-900"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity"/>
                {/* <Dialog.Panel className="fixed inset-0 bg-black bg-opacity-50" /> */}
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="fixed inset-y-0 right-0 max-w-full pl-10 flex">
                              <Transition
                                 as={Fragment}
                                 enter="ease-in-out duration-900"
                                 enterFrom="opacity-0"
                                 enterTo="opacity-100"
                                 leave="ease-in-out duration-500"
                                 leaveFrom="opacity-100"
                                 leaveTo="opacity-0"
                            >
                               
                                    <Dialog as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    <div className="flex h-full flec-col overflow-scroll bg-white shadow-xl">
                                         <div className="flex-1 overflow-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                   {modalTitle} </Dialog>
                                            </div>
                                            <div className="mt-8">
                                                   {mainContent}
                                            </div>
                                        </div> 
                                        {
                                            showButtons ? <div className="border-t border-gray-300 px-4 py-6 sm:px-6">{buttonComponent} </div> : null
                                        } 
                                    </div>
                                    </Dialog>
                                    
                                </Transition>
                        </div>
                    </div>
                </div>
            </Transition>
        </Dialog>
        </Transition>
    )
}