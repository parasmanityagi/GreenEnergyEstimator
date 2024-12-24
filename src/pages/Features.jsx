import React from 'react'

const Features = () => {
    return (
        <section id="features" className="bg-gray-50 py-12">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-green-600 mb-6">Features</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Discover how GreenEnergyEstimator simplifies the process of setting up your solar energy system.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Accurate Estimations</h3>
                            <p className="text-gray-600">
                                Get precise calculations for the number of solar panels and total costs based on your inputs.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Customizable Inputs</h3>
                            <p className="text-gray-600">
                                Adjust panel specifications, installation costs, and maintenance details as per your needs.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">User-Friendly Interface</h3>
                            <p className="text-gray-600">
                                A simple and intuitive design makes it easy to estimate your solar energy system requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features