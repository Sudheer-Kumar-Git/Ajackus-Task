<#-- Mock employee data -->
<#assign employees = [ 
  { "id": 1, "firstName": "Alice", "lastName": "Smith", "email": "alice@example.com", "department": "HR", "role": "Manager" },
  { "id": 2, "firstName": "Bob", "lastName": "Johnson", "email": "bob@example.com", "department": "IT", "role": "Developer" },
  { "id": 3, "firstName": "Charlie", "lastName": "Lee", "email": "charlie@example.com", "department": "Finance", "role": "Analyst" }
]>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Employee Directory</title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <header class="header">
    <h1>Employee Directory</h1>
    <input type="text" id="searchInput" placeholder="Search by name or email">
  </header>

  <section class="toolbar">
    <label>Sort:
      <select id="sortSelect">
        <option value="">--Select--</option>
        <option value="firstName">First Name</option>
        <option value="department">Department</option>
      </select>
    </label>
    <label>Show:
      <select id="paginationSelect">
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>
    </label>
  </section>

  <div class="main-content">
    <div class="employee-grid" id="employeeList">
      <#list employees as emp>
        <div class="card">
          <h3>${emp.firstName} ${emp.lastName}</h3>
          <p><strong>Email:</strong> ${emp.email}</p>
          <p><strong>Department:</strong> ${emp.department}</p>
          <p><strong>Role:</strong> ${emp.role}</p>
          <div class="btn-group">
            <button class="edit-btn" data-id="${emp.id}">Edit</button>
            <button class="delete-btn" data-id="${emp.id}">Delete</button>
          </div>
        </div>
      </#list>
    </div>

    <aside class="filters">
      <h3>Filter Employees</h3>
      <input type="text" id="filterFirstName" placeholder="First Name">
      <input type="text" id="filterDepartment" placeholder="Department">
      <input type="text" id="filterRole" placeholder="Role">
      <button onclick="applyFilters()">Apply</button>
      <button onclick="resetFilters()">Reset</button>
    </aside>
  </div>

  <footer>
    <p>© 2025 Employee Directory App. All rights reserved.</p>
  </footer>

  <script>
    // Injected employee data for JS
    const employeeData = [
      <#list employees as emp>
        {
          id: ${emp.id},
          firstName: "${emp.firstName}",
          lastName: "${emp.lastName}",
          email: "${emp.email}",
          department: "${emp.department}",
          role: "${emp.role}"
        }<#if emp_has_next>,</#if>
      </#list>
    ];
  </script>
  <script src="/js/app.js"></script>
</body>
</html>
