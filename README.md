# Employee Directory Web Application

A responsive and interactive Employee Directory built using **HTML**, **CSS**, **JavaScript**, and **FreeMarker templates**. This application simulates CRUD operations using in-memory data with client-side interactivity.

---

## 🚀 Features

* 📋 Employee Dashboard with list/grid view
* 🔍 Search by name or email
* 🎛️ Filter by First Name, Department, Role
* ↕️ Sort by First Name or Department
* 🔢 Pagination (10/25/50/100 per page)
* 🧾 Add/Edit Employee form with validation
* 🗑️ Delete functionality
* 📱 Fully responsive layout for desktop, tablet, and mobile

---

## 📁 Project Structure

```
employee-directory/
│
├── templates/
│   ├── dashboard.ftl       # Dashboard view with mock data rendering
│   └── add-edit.ftl        # Add/Edit form page
│
├── css/
│   └── styles.css          # Common styles
│
├── js/
│   ├── app.js              # Dashboard logic (filters, search, sort, pagination)
│   └── form.js             # Form validation and in-memory submission
│
├── public/
│   └── images/             # (Optional) Placeholder avatars/icons
│
├── index.html              # Optional entry (only for static preview)
└── README.md               # This file
```

---

## 📦 Setup Instructions

1. Clone the repo:

```bash
git clone https://github.com/your-username/employee-directory.git
cd employee-directory
```

2. Ensure you have a FreeMarker server setup (or use embedded Java server like Jetty).

3. Place the `.ftl` files inside your `/templates` directory configured in your server.

4. Make sure static assets (CSS/JS) are properly served by your server configuration.

5. Launch your server and open the `dashboard.ftl` in browser.

---

## 📸 Screenshots (optional)

* Dashboard View
* Add/Edit Form
* Filters and Search in action

---

## 🤔 Reflection

### Challenges Faced:

* Integrating dynamic data with FreeMarker and client-side JavaScript
* Keeping filtering/sorting/search state consistent during pagination
* Ensuring form validation worked well without backend

### What I'd Improve with More Time:

* Add full edit functionality with pre-filled form
* Store data in `localStorage` to persist across reloads
* Implement infinite scroll as an alternative to pagination
* Add avatar images and better visual design

---

## 📄 License

Free to use for educational or demo purposes.

---

Made with ❤️ for the frontend evaluation task.
