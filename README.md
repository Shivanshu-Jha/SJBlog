# 📝 SJBlogs

SJBlogs is a full-stack blogging platform that empowers users to create, manage, and share blog posts with ease. It features an admin dashboard, secure authentication, and a responsive frontend for readers. Built with React and Express, and backed by MongoDB, it provides a scalable and modern blogging experience.

## 🌐 Live Demo
Check it out here: [sj-blog-ten.vercel.app](https://sj-blog-ten.vercel.app/)

## 📁 Project Structure

SJBlogs/

├── client/           # React frontend  
├── server/           # Express backend APIs  
├── models/           # Mongoose models (User, Blog, Comment)  
├── public/           # Static assets  
└── .gitignore        # Sensitive file exclusions  

## 🛠️ Tech Stack

- **Frontend:** React, Context API, Axios  
- **Backend:** Node.js, Express  
- **Database:** MongoDB (Atlas)  
- **Authentication:** JWT-based login for admin users  
- **Deployment:** Vercel  

## ⚙️ Features

- ✍️ Create, edit, and delete blog posts  
- 🔐 Admin authentication with JWT tokens  
- 💬 Comment management system  
- 📦 RESTful API integration between frontend and backend  
- 🧪 Modular codebase for scalability and testing  
- 🚀 Deployed seamlessly on Vercel  

## 🚀 Getting Started

### Prerequisites
- Node.js  
- MongoDB (local or Atlas cluster)  
- Vercel (optional for deployment)  

### Installation

```bash
# Clone the repo
git clone https://github.com/Shivanshu-Jha/SJBlog.git
cd SJBlog 



# Install dependencies:
cd server
npm install

cd client
npm install

