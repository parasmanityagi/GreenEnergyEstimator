
import React, { useState, useEffect, useContext, useRef } from 'react';
import { dataContext } from '../../context/GeeContext';

const Main = () => {
    const { formSectionRef } = useContext(dataContext);
    const [formData, setFormData] = useState({
        energyRequirement: '', panelPower: '', panelCost: '', installationCost: '',
        maintenanceCost: '', longitude: '', latitude: ''
    });
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);

    const resultSectionRef = useRef(null);

    useEffect(() => {
        if (results && !results.error && resultSectionRef.current) {
            resultSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [results]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const calculateResults = async (e) => {
        e.preventDefault();

        const { energyRequirement, panelPower, panelCost, installationCost, maintenanceCost, longitude, latitude } = formData;

        if (!energyRequirement || !panelPower || !panelCost || !installationCost || !maintenanceCost ||
            !longitude || !latitude || isNaN(maintenanceCost)) {
            setResults({
                error: 'Please fill all inputs properly.',
            });
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(
                `https://power.larc.nasa.gov/api/temporal/daily/point?parameters=ALLSKY_SFC_SW_DWN&latitude=${latitude}&longitude=${longitude}&start=20240101&end=20240131&format=JSON&community=RE`
            );
            const data = await response.json();

            const irradianceValues = Object.values(data.properties.parameter.ALLSKY_SFC_SW_DWN);
            const averageIrradiance = irradianceValues.reduce((sum, value) => sum + value, 0) / irradianceValues.length;

            const energyOutputPerPanelPerDay = (panelPower / 1000) * averageIrradiance;
            const energyRequirementInKWh = energyRequirement;
            const numberOfPanels = Math.ceil(energyRequirementInKWh / energyOutputPerPanelPerDay);

            const totalCost =
                numberOfPanels * (parseFloat(panelCost) + parseFloat(installationCost)) +
                (parseFloat(maintenanceCost) / 100) * (numberOfPanels * parseFloat(panelCost));

            const breakdown = {
                panelCount: numberOfPanels,
                totalCost: totalCost.toFixed(2),
                panelCostBreakdown: `${numberOfPanels} x ${panelCost}`,
                installationCostBreakdown: `${numberOfPanels} x ${installationCost}`,
                maintenanceCostBreakdown: `${maintenanceCost}% annual maintenance`,
                averageIrradiance: `${averageIrradiance.toFixed(2)} kWh/m²/day`,
            };

            setResults(breakdown);
        } catch (error) {
            console.error('Error fetching data:', error);
            setResults({
                error: 'Failed to fetch irradiance data. Please try again later.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="bg-gray-100 py-12">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <section className="text-center mb-8">
                        <h1 className="text-xl sm:text-3xl font-bold text-green-600">GreenEnergyEstimator</h1>
                        <p className="text-sm sm:text-lg text-gray-600 mt-2">
                            Calculate the total cost and the number of solar panels required to set up your solar energy system.
                            Simply fill in your details below to get started!
                        </p>
                    </section>

                    {/* Form Section */}
                    <form ref={formSectionRef} id="estimator-form" onSubmit={calculateResults} className="space-y-6">
                        {/* Energy Requirements */}
                        <div>
                            <label htmlFor="energyRequirement" className="block text-sm sm:text-lg text-gray-700 mb-2">
                                Desired Power Output (kW):
                            </label>
                            <input
                                type="number"
                                id="energyRequirement"
                                placeholder="Enter power requirement in kW (e.g., 2)"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                                value={formData.energyRequirement}
                                onChange={handleInputChange}
                                required
                                step="any"
                                inputMode="numeric"
                                onKeyDown={(e) => {
                                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                                        e.preventDefault();
                                    }
                                }}
                                onWheel={(e) => e.target.blur()}
                            />
                        </div>

                        {/* Panel Specifications */}
                        <div>
                            <label htmlFor="panelPower" className="block text-sm sm:text-lg text-gray-700 mb-2">
                                Power Output Per Panel (Watts):
                            </label>
                            <input
                                type="number"
                                id="panelPower"
                                placeholder="e.g., 400"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                                value={formData.panelPower}
                                onChange={handleInputChange}
                                required
                                step="any"
                                inputMode="numeric"
                                onKeyDown={(e) => {
                                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                                        e.preventDefault();
                                    }
                                }}
                                onWheel={(e) => e.target.blur()}
                            />
                        </div>

                        {/* Cost Per Panel */}
                        <div>
                            <label htmlFor="panelCost" className="block text-sm sm:text-lg text-gray-700 mb-2">
                                Cost Per Panel (Your Currency):
                            </label>
                            <input
                                type="number"
                                id="panelCost"
                                placeholder="e.g., 2000"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                                value={formData.panelCost}
                                onChange={handleInputChange}
                                required
                                step="any"
                                inputMode="numeric"
                                onKeyDown={(e) => {
                                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                                        e.preventDefault();
                                    }
                                }}
                                onWheel={(e) => e.target.blur()}
                            />
                        </div>

                        {/* Optional Installation Costs */}
                        <div>
                            <label htmlFor="installationCost" className="block text-sm sm:text-lg text-gray-700 mb-2">
                                Installation Cost Per Panel (Optional):
                            </label>
                            <input
                                type="number"
                                id="installationCost"
                                placeholder="e.g., 50"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                                value={formData.installationCost}
                                onChange={handleInputChange}
                                step="any"
                                inputMode="numeric"
                                onKeyDown={(e) => {
                                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                                        e.preventDefault();
                                    }
                                }}
                                onWheel={(e) => e.target.blur()}
                            />
                        </div>

                        {/* Maintenance Cost Percentage */}
                        <div>
                            <label htmlFor="maintenanceCost" className="block text-sm sm:text-lg text-gray-700 mb-2">
                                Maintenance Cost Percentage (Annual, Optional):
                            </label>
                            <input
                                type="number"
                                id="maintenanceCost"
                                placeholder="e.g., 5"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                                value={formData.maintenanceCost}
                                onChange={handleInputChange}
                                step="any"
                                inputMode="numeric"
                                onKeyDown={(e) => {
                                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                                        e.preventDefault();
                                    }
                                }}
                                onWheel={(e) => e.target.blur()}
                            />
                        </div>

                        {/* Longitude */}
                        <div>
                            <label htmlFor="longitude" className="block text-sm sm:text-lg text-gray-700 mb-2">
                                Enter Longitude:
                            </label>
                            <input
                                type="number"
                                id="longitude"
                                placeholder="e.g., 70"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                                value={formData.longitude}
                                onChange={handleInputChange}
                                step="any"
                                inputMode="numeric"
                                onKeyDown={(e) => {
                                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                                        e.preventDefault();
                                    }
                                }}
                                onWheel={(e) => e.target.blur()}
                            />
                        </div>

                        {/* Latitude */}
                        <div>
                            <label htmlFor="latitude" className="block text-sm sm:text-lg text-gray-700 mb-2">
                                Enter Latitude:
                            </label>
                            <input
                                type="number"
                                id="latitude"
                                placeholder="e.g., 30"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                                value={formData.latitude}
                                onChange={handleInputChange}
                                step="any"
                                inputMode="numeric"
                                onKeyDown={(e) => {
                                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                                        e.preventDefault();
                                    }
                                }}
                                onWheel={(e) => e.target.blur()}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-fit px-6 bg-green-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-green-700 transition"
                        >
                            {loading ? 'Calculating...' : 'Estimate'}
                        </button>
                    </form>

                    {/* Error Section */}
                    {results?.error && (
                        <section className="bg-red-100 text-red-700 mt-4 p-4 rounded-lg shadow-md">
                            <p>{results.error}</p>
                        </section>
                    )}

                    {/* Result Section */}
                    {results && !results.error && (
                        <section
                            id="result-section"
                            ref={resultSectionRef}
                            className="bg-green-50 mt-6 rounded-lg shadow-md p-6"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Results</h2>
                            <p className="text-lg text-gray-700">
                                Number of Panels Required: <span className="font-bold text-green-600">{results.panelCount}</span>
                            </p>
                            <p className="text-lg text-gray-700">
                                Estimated Total Cost: <span className="font-bold text-green-600">{results.totalCost}</span>
                            </p>
                            <p className="text-lg text-gray-700">
                                Cost Breakdown:
                                <ul className="list-disc list-inside mt-2 text-gray-600">
                                    <li>{results.panelCostBreakdown}</li>
                                    <li>{results.installationCostBreakdown}</li>
                                    <li>{results.maintenanceCostBreakdown}</li>
                                    <li>{results.averageIrradiance}</li>
                                </ul>
                            </p>
                        </section>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Main;

