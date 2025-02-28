



export default function Register() {
return(
    <div className="flex justify-center items-center h-screen">
        <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center text-gray-800">Register</h2>
            <form className="mt-6">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email Address</label>
                    <input type="email" id="email" placeholder="abc@gmail.com" className="w-full p-3 rounded-lg border border-gray-200" />
                    </div>
                    <div className="mb-5">
                    <label htmlFor="Name" className="block mb-2 text-sm text-gray-600">Name</label>
                    <input type="text" id="text" placeholder=" write your name " className="w-full p-3 rounded-lg border border-gray-200" />
                    </div>
                </form>
                </div>

    </div>
)
}