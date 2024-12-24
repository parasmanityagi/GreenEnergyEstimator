# GreenEnergyEstimator

GreenEnergyEstimator is a web application that calculates the total cost and number of solar panels required to set up a solar energy system. Users can input their energy requirements, panel specifications, and location to get accurate estimations.

## Demo

You can try the live demo of the application [here](https://greenenergyestimator.netlify.app/).

## Features

- Calculate the number of solar panels required based on energy requirements and panel specifications.
- Estimate total costs, including panel costs, installation costs, and maintenance costs.
- Fetch average solar irradiance data from NASA's POWER API for accurate calculations.
- Smooth scrolling to results section after calculation.

## Tech Stack

- **Frontend**: React.js, TailwindCSS
- **API**: NASA POWER API for solar irradiance data

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/parasmanityagi/GreenEnergyEstimator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd GreenEnergyEstimator
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Usage

1. Fill in the form with the following details:
   - Desired Power Output (kW)
   - Power Output Per Panel (Watts)
   - Cost Per Panel
   - Installation Cost Per Panel
   - Maintenance Cost Percentage (Annual)
   - Longitude and Latitude of your location

2. Click the **Estimate** button.
3. View the calculated results, including:
   - Number of panels required
   - Total cost
   - Cost breakdown
   - Average irradiance



## License

This project is not currently licensed. You may contact the author for more information on usage rights.


