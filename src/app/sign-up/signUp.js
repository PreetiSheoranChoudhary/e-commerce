


// "use client"
// import { Input } from "@/components/ui/input"
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// import { registrationFormControls } from "@/utils"

// const isRegistered = false
// export default function Register() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
//         {isRegistered
//           ? <h2 className="text-2xl font-semibold text-center text-gray-800"> Sign in for an account</h2>
//           : <h2 className="text-2xl font-semibold text-center text-gray-800">Registration Successfully !</h2>
//         }
//         {isRegistered
//           ? (
//             <button className="w-full py-3 mt-4 bg-blue-600 rounded-sm text-white hover:bg-blue-700" > Login</button>
//           )
//           : <div className="mt-6 w-full mr-0 mb-0 ml-0 relative space-y-8">
//             {registrationFormControls.map((controlItem) =>
//               controlItem.componentType === "input" ? (
//                 <Input key={controlItem.id} type={controlItem.type} placeholder={controlItem.placeholder} label={controlItem.label} value={controlItem.value} />
//               ) : controlItem.componentType === "select" ? (
//                 <Select>
//                   <SelectTrigger className="w-[180px]">
//                     <SelectValue placeholder="Select a role" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>
//                       <SelectItem value="customer">Customer</SelectItem>
//                       <SelectItem value="admin">Admin</SelectItem>
//                     </SelectGroup>
//                   </SelectContent>
//                 </Select>
//               ) : null
//             )}
//             <button className="w-full py-3 mt-4 bg-blue-600 rounded-sm text-white hover:bg-blue-700" > Register</button>
//           </div>
//         }

//       </div>

//     </div>
//   )
// }