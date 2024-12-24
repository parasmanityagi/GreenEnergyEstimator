import React from 'react'

const AboutUs = () => {
    return (
        <section id="about-us" className="bg-white py-12">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-green-600 mb-6">About Us</h2>
                    <p className="text-lg text-gray-600">
                        At <span className="font-bold text-green-600">GreenEnergyEstimator</span>, we are committed to promoting
                        sustainable energy solutions. Our mission is to provide users with accurate and easy-to-understand tools to help
                        them transition to renewable energy.
                    </p>
                    <p className="text-lg text-gray-600 mt-4">
                        Whether you're a homeowner, business owner, or solar enthusiast, we aim to make solar energy accessible and
                        affordable for everyone.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs