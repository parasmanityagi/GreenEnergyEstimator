import React from 'react'

const ContactUs = () => {
    return (
        <section id="contact-us" className="bg-gray-50 py-12">
            <div className="container">
                <div className="">
                    <h2 className="text-3xl font-bold text-green-600 text-center mb-6">Contact Us</h2>
                    <p className="text-lg text-gray-600 text-center mb-8">
                        Have questions or need assistance? Reach out to us using the form below!
                    </p>
                    <form className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-lg text-gray-700 mb-2">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                                required
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-lg text-gray-700 mb-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                                required
                            />
                        </div>
                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-lg text-gray-700 mb-2">
                                Message:
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Write your message here"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                                required
                            ></textarea>
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-green-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactUs