let filteredData = [...employeeData];
let currentPage = 1;
let rowsPerPage = 10;

function renderEmployees(data) {
  const employeeList = document.getElementById("employeeList");
  employeeList.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageData = data.slice(start, end);

  pageData.forEach((emp) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${emp.firstName} ${emp.lastName}</h3>
      <p><strong>Email:</strong> ${emp.email}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
      <p><strong>Role:</strong> ${emp.role}</p>
      <div class="btn-group">
        <button class="edit-btn" onclick="editEmployee(${emp.id})">Edit</button>
        <button class="delete-btn" onclick="deleteEmployee(${emp.id})">Delete</button>
      </div>
    `;
    employeeList.appendChild(card);
  });
}

function filterData() {
  const nameFilter = document
    .getElementById("filterFirstName")
    .value.toLowerCase();
  const deptFilter = document
    .getElementById("filterDepartment")
    .value.toLowerCase();
  const roleFilter = document.getElementById("filterRole").value.toLowerCase();

  filteredData = employeeData.filter(
    (emp) =>
      emp.firstName.toLowerCase().includes(nameFilter) &&
      emp.department.toLowerCase().includes(deptFilter) &&
      emp.role.toLowerCase().includes(roleFilter)
  );

  currentPage = 1;
  renderEmployees(filteredData);
}

function searchData() {
  const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase();
  filteredData = employeeData.filter(
    (emp) =>
      emp.firstName.toLowerCase().includes(searchValue) ||
      emp.lastName.toLowerCase().includes(searchValue) ||
      emp.email.toLowerCase().includes(searchValue)
  );
  currentPage = 1;
  renderEmployees(filteredData);
}

function sortData() {
  const sortBy = document.getElementById("sortSelect").value;
  filteredData.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  renderEmployees(filteredData);
}

function paginateChange() {
  rowsPerPage = parseInt(document.getElementById("paginationSelect").value);
  currentPage = 1;
  renderEmployees(filteredData);
}

function deleteEmployee(id) {
  const index = employeeData.findIndex((emp) => emp.id === id);
  if (index !== -1) {
    employeeData.splice(index, 1);
    filteredData = [...employeeData];
    renderEmployees(filteredData);
  }
}

function editEmployee(id) {
  alert(`Edit functionality not implemented yet for ID: ${id}`);
}

function resetFilters() {
  document.getElementById("filterFirstName").value = "";
  document.getElementById("filterDepartment").value = "";
  document.getElementById("filterRole").value = "";
  filteredData = [...employeeData];
  renderEmployees(filteredData);
}

// Event listeners
document.getElementById("searchInput").addEventListener("input", searchData);
document.getElementById("sortSelect").addEventListener("change", sortData);
document
  .getElementById("paginationSelect")
  .addEventListener("change", paginateChange);

// Initialize
renderEmployees(filteredData);
