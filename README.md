# 🩸 BloodServe – Blood Donation Management Platform
### A Role base project (Admin, Donor, Volunteer)
BloodServe is a **full-stack MERN-based blood donation management system** designed to connect blood donors with recipients efficiently. The platform allows users to create blood donation requests, search for donors, manage donations, and support the initiative through donations.

🔴 **Live Project:** https://bloodserve-69cba.web.app/  
📦 **Client Repository:** https://github.com/nafiz512/BloodServe  
🛠 **Server Repository:** https://github.com/nafiz512/BloodServe-Server  

---


## ✨ Features Overview

### 👥 Authentication & Roles
- Firebase Authentication (Email/Password)
- Role-based access (Admin, Donor, User)
- Protected routes for sensitive actions

### 🩸 Blood Donation Requests
- Create blood donation requests
- Update existing donation requests
- Track request status (Pending /Inprogress)
- Location-based filtering (District & Upazila)

### 🔍 Donor Search
- Search donors by:
  -District & Upazila
  - Blood group
  - Location
- Responsive search & filtering system

### 💳 Donation & Funding System
- Stripe payment integration
- Secure checkout session
- Donation success & cancellation handling
- Transaction-based donation records

### 🧑‍💼 Admin Dashboard
- Manage users
- Manage donation requests
- Control platform activities

### 🌍 Location Support
- Bangladesh districts & upazilas
- Dynamic upazila loading based on district

### 🎨 UI & UX
- Modern responsive UI (Tailwind CSS)
- Dark mode support
- Clean dashboard layout

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router
- React Hook Form
- Tailwind CSS
- Axios
- Firebase Authentication
- SweetAlert2
- Daisyui

### Backend
- Node.js
- Express.js
- MongoDB
- Stripe API
- JWT Authentication
- CORS & Middleware

### Deployment
- **Client:** Firebase Hosting
- **Server:** Node hosting (Vercel)
- **Database:** MongoDB Atlas

---

## 📂 Project Structure

### Client (Frontend)
```
src/
│── components/
│── pages/
│── hooks/
│── context/
│── routes/
│── assets/
│── main.jsx
│── App.jsx
```
---

## ⚙️ Environment Variables

### Client (`.env`)
VITE_image_host_key=xxx
VITE_apiKey=xxx
VITE_authDomain=xxx
VITE_projectId=xxx
VITE_storageBucket=xxx
VITE_messagingSenderId=xxx
VITE_appId=xxx
VITE_API_IMGBB=xxx

### Server (`.env`)
DB_PASSWORD=xxx
DB_USER=xxx
STRIPE_SECRET=xxx
Domain=xxxx
FIREBASE_SERVICE_KEY=xxx


---

## 🚀 Installation & Setup

### 1️⃣ Clone Repositories

```bash
git clone https://github.com/nafiz512/BloodServe
git clone https://github.com/nafiz512/BloodServe-Server

cd BloodServe
npm install
npm run dev

cd BloodServe-Server
npm install
nodemon index.js
```
---
##🔐 Security Measures
JWT-based authorization
Role-based route protection
Stripe secure checkout
Environment variable protection
Server-side validation
---


##👨‍💻 Author

Nafiz Muntasir
-📧 Email: nafizmuntasir512@gmail.com

-🌐 GitHub: https://github.com/nafiz512
---
##📜 License

This project is licensed under the MIT License.
