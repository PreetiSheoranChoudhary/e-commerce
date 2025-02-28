"use client"

import { Transition, Dialog } from "@headlessui/react"
import { Fragment } from "react"

export default function CommonModal({
    modalTitle,
    mainContent,
    showButtons,
    buttonComponent,
    show = false,  // Default to false to avoid undefined errors
    setShow,
    showModalTitle
}) {
    return (
        <Transition show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setShow}>
                <Transition.Child
                    as={"div"}
                    enter="ease-in-out duration-900"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity" />
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="fixed inset-y-0 right-0 max-w-full pl-10 flex">
                                <Transition.Child
                                    as={"div"}
                                    enter="ease-in-out duration-900"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Dialog.Panel className="text-lg font-medium leading-6 text-gray-900">
                                        <div className="flex h-full flex-col overflow-scroll bg-white shadow-xl">
                                            <div className="flex-1 overflow-auto px-4 py-6 sm:px-6">
                                                {showModalTitle ? (
                                                    <div className="flex items-start justify-between">
                                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                            {modalTitle}
                                                        </Dialog.Title>
                                                    </div>
                                                ) : null}
                                                <div className="mt-20">{mainContent}</div>
                                            </div>
                                            {showButtons ? (
                                                <div className="border-t border-gray-300 px-4 py-6 sm:px-6">
                                                    {buttonComponent}
                                                </div>
                                            ) : null}
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    )
}
