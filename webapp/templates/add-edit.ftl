<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Add Employee</title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <div class="form-container">
    <h2>Add Employee</h2>
    <form id="employeeForm">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" required>
      </div>

      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" required>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-group">
        <label for="department">Department</label>
        <input type="text" id="department" name="department" required>
      </div>

      <div class="form-group">
        <label for="role">Role</label>
        <input type="text" id="role" name="role" required>
      </div>

      <div class="form-buttons">
        <button type="button" onclick="window.location.href='dashboard.ftl'">Cancel</button>
        <button type="submit">Add</button>
      </div>
    </form>
  </div>

  <script src="/js/form.js"></script>
</body>
</html>
