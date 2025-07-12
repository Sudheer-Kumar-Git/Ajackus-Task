document
  .getElementById("employeeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const department = form.department.value.trim();
    const role = form.role.value.trim();

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const newEmp = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      department,
      role,
    };

    console.log("New Employee:", newEmp);
    alert("Employee added! (In-memory only)");

    form.reset();
  });

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function cancelForm() {
  window.location.href = "dashboard.ftl";
}
