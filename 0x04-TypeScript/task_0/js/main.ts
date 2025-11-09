interface Student {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Lukman",
  middleName: "Modibbo",
  lastName: "Said",
  age: 26,
  location: "Abuja",
};

const student2: Student = {
  firstName: "Khadeejat",
  middleName: "Modibbo",
  lastName: "Bashir",
  age: 18,
  location: "Abuja",
};

const studentsList: Student[] = [student1, student2];

// Create table and header
const studentTable = document.createElement("table");
const headerRow = document.createElement("tr");

// Define table headers
const headers = ["First Name", "Middle Name", "Last Name", "Location"];

// Create header cells
headers.forEach((text) => {
  const th = document.createElement("th");
  th.textContent = text;
  headerRow.appendChild(th);
});

studentTable.appendChild(headerRow);

// Populate table rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const middleNameCell = document.createElement("td");
  middleNameCell.textContent = student.middleName;

  const lastNameCell = document.createElement("td");
  lastNameCell.textContent = student.lastName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(middleNameCell);
  row.appendChild(lastNameCell);
  row.appendChild(locationCell);

  studentTable.appendChild(row);
});

// Add the table to the page
document.body.appendChild(studentTable);
