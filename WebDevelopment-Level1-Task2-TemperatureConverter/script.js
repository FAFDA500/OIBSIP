const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const errorMessage = document.getElementById("errorMessage");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");

convertBtn.addEventListener("click", convertTemperature);

function convertTemperature() {

    const inputValue = temperatureInput.value;
    const unit = unitSelect.value;

    // Check empty input
    if (inputValue.trim() === "") {
        showError("Please enter a temperature value.");
        return;
    }

    const temperature = Number(inputValue);

    // Check non-numeric input
    if (!Number.isFinite(temperature)) {
        showError("Please enter a valid numeric temperature.");
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    // Convert based on selected unit
    if (unit === "celsius") {

        celsius = temperature;

        fahrenheit = (temperature * 9 / 5) + 32;

        kelvin = temperature + 273.15;

    } else if (unit === "fahrenheit") {

        fahrenheit = temperature;

        celsius = (temperature - 32) * 5 / 9;

        kelvin = celsius + 273.15;

    } else if (unit === "kelvin") {

        kelvin = temperature;

        celsius = temperature - 273.15;

        fahrenheit = (celsius * 9 / 5) + 32;
    }

    // Absolute zero validation
    if (kelvin < 0) {
        showError(
            "Invalid temperature! Temperature cannot be below absolute zero."
        );
        return;
    }

    hideError();

    // Display results
    celsiusResult.textContent =
        `${celsius.toFixed(2)} °C`;

    fahrenheitResult.textContent =
        `${fahrenheit.toFixed(2)} °F`;

    kelvinResult.textContent =
        `${kelvin.toFixed(2)} K`;
}

function showError(message) {

    errorMessage.textContent = message;
    errorMessage.style.display = "block";

    resetResults();
}

function hideError() {

    errorMessage.textContent = "";
    errorMessage.style.display = "none";
}

function resetResults() {

    celsiusResult.textContent = "-- °C";
    fahrenheitResult.textContent = "-- °F";
    kelvinResult.textContent = "-- K";
}