
// Function to handle form submission

function handleFormSubmit(event) {
  event.preventDefault();

  // Get form inputs
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const streetAddress = document.getElementById("streetAddress").value;
  const postalCode = document.getElementById("postalCode").value;
  const city = document.getElementById("city").value;
  const country = document.getElementById("countryDropdown").value;
  const label = document.getElementById("labelDropdown").value;

  // Create a new row in the table
  const table = document.querySelector(".table tbody");
  const newRow = table.insertRow(-1);
  const cellIndex = newRow.insertCell(0);
  const cellFirstName = newRow.insertCell(1);
  const cellLastName = newRow.insertCell(2);
  const cellLabel = newRow.insertCell(3);
  const cellAddress = newRow.insertCell(4);
  const cellPhone = newRow.insertCell(5);
  const cellEmail = newRow.insertCell(6);

  // Set the values for the new row
  cellIndex.textContent = table.rows.length - 0; // Incremental row number
  cellFirstName.textContent = firstName;
  cellLastName.textContent = lastName;
  cellLabel.textContent = label;
  cellAddress.textContent = `${streetAddress}, ${postalCode}, ${city}, ${country}`;
  cellPhone.textContent = phone;
  cellEmail.textContent = email;

  // Clear the form inputs
  document.querySelector("form").reset();

  // Close the modal
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.hide();
}

// Attach an event listener to the "Save changes" button
const saveChangesButton = document.querySelector(".modal-footer button");
saveChangesButton.addEventListener("click", handleFormSubmit);
