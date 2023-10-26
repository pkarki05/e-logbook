
// Define the URL of the JSON API.
const apiUrl = " https://restcountries.com/v3.1/all?fields=name";

// Select the dropdown element.
const dropdown = document.getElementById("countryDropdown");

// Function to fetch data from the JSON API and populate the dropdown.
async function populateDropdown() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Sort the data alphabetically by country name.
    data.sort((a, b) => {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    // Clear any existing options in the dropdown.
    dropdown.innerHTML = '<option value="">Select a country</option>';

    // Iterate through the JSON data and add options to the dropdown.
    data.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.name.common; // Set the value from the JSON data.
      option.text = country.name.common; // Set the display text from the JSON data.
      dropdown.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching and populating data:", error);
  }
}

// Call the function to populate the dropdown.
populateDropdown();
