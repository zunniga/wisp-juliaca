// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

// const ContactView = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   })

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     // Handle form submission here
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4 py-8 lg:py-16">
//         <div className="grid lg:grid-cols-2 gap-0 max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
//           {/* Left Side - Contact Info */}
//           <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-500 p-8 lg:p-12 flex flex-col justify-between min-h-[400px] lg:min-h-[600px]">
//             {/* Decorative dots pattern */}
//             <div className="absolute top-8 right-8 grid grid-cols-6 gap-2 opacity-30">
//               {Array.from({ length: 24 }).map((_, i) => (
//                 <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
//               ))}
//             </div>

//             {/* Contact Us Text */}
//             <div className="flex-1 flex items-center">
//               <div className="transform -rotate-90 origin-left">
//                 <h2 className="text-white text-2xl lg:text-3xl font-bold tracking-[0.3em] whitespace-nowrap">
//                   CONTACT US
//                 </h2>
//               </div>
//             </div>

//             {/* Social Media Icons */}
//             <div className="mt-auto">
//               <h3 className="text-white text-lg font-semibold mb-6">Follow Us On</h3>
//               <div className="flex space-x-4">
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//                 >
//                   <Facebook className="w-5 h-5 text-white" />
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//                 >
//                   <Twitter className="w-5 h-5 text-white" />
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//                 >
//                   <Instagram className="w-5 h-5 text-white" />
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
//                 >
//                   <Linkedin className="w-5 h-5 text-white" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Contact Form */}
//           <div className="bg-white dark:bg-gray-800 p-8 lg:p-12">
//             <div className="max-w-md mx-auto lg:max-w-none">
//               <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//                 Get In Touch With Us
//               </h1>
//               <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
//                 There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration
//                 in some form.
//               </p>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <Input
//                       type="text"
//                       name="fullName"
//                       placeholder="Full Name"
//                       value={formData.fullName}
//                       onChange={handleInputChange}
//                       className="h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Input
//                       type="email"
//                       name="email"
//                       placeholder="Email Address"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <Input
//                       type="tel"
//                       name="phone"
//                       placeholder="Phone Number"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className="h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
//                     />
//                   </div>
//                   <div>
//                     <Input
//                       type="text"
//                       name="subject"
//                       placeholder="Subject"
//                       value={formData.subject}
//                       onChange={handleInputChange}
//                       className="h-12 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Textarea
//                     name="message"
//                     placeholder="Type Your Message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     rows={6}
//                     className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 resize-none"
//                     required
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-12 text-base font-medium rounded-lg transition-colors"
//                 >
//                   Send Message
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ContactView
