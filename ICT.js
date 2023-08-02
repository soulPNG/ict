// Database with names and hard-coded events
const database = [
  {
    name: "Emily",
    events: ["800m Run", "High Jump"], // Events do Not update as they are hard coded! (Proof of concept)
  },
  {
    name: "James",
    events: ["100m Sprint", "Long Jump"],
  },
  {
    name: "Sophia",
    events: ["800m Run", "Long Jump"],
  },
  {
    name: "Benjamin",
    events: ["100m Sprint", "High Jump"],
  },
  {
    name: "Olivia",
    events: ["800m Run", "Long Jump"],
  },
];

// Function to populate the dropdown with unique names from the database
function populateDropdown(database) {
  const dropdown = document.getElementById("select-ca14");
  // Get unique names using a Set and map each name to an option element in the dropdown
  const uniqueNames = new Set(database.map(person => person.name));
  uniqueNames.forEach(name => {
    const option = document.createElement("option");
    option.text = name;
    option.value = name;
    dropdown.add(option);
  });
}

// Function to update checkbox selections based on the selected name
function updateCheckboxes(selectedName) {
  const selectedPerson = database.find(person => person.name === selectedName);

  // Clear previous checkbox selections
  const checkboxes = document.querySelectorAll('input[name="checkbox[]"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });

  // Check relevant checkboxes based on selected person's events
  selectedPerson.events.forEach(event => {
    const checkbox = document.querySelector(`input[value="${event}"]`);
    if (checkbox) {
      checkbox.checked = true;
    }
  });
}

// Populate the dropdown with names (e.g., Emily, James, etc.)
populateDropdown(database);

// Handle dropdown selection change
const dropdown = document.getElementById("select-ca14");
dropdown.addEventListener("change", function() {
  const selectedName = this.value;
  // Update checkbox selections when the dropdown selection changes
  updateCheckboxes(selectedName);
});
// Handle the form submission when the Submit button is clicked
document.getElementById("submitBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the selected name from the dropdown
  const selectedName = document.getElementById("select-ca14").value;

  // Get the selected events from the checkboxes
  const checkboxes = document.querySelectorAll('input[name="checkbox[]"]:checked');
  const selectedEvents = Array.from(checkboxes).map(checkbox => checkbox.value);

  // Display the selected name and events (You can modify this part as needed)
  console.log("Selected Name:", selectedName);
  console.log("Selected Events:", selectedEvents);

  // Update the database with the selected events for the selected name
  updateDatabase(selectedName, selectedEvents);

  // Show the "Thank you!" message and hide the form
  document.getElementById("myForm").style.display = "none";
  document.querySelector(".u-form-send-success").style.display = "block";
});
