# SJBlog ✍️

A full-stack blogging platform with a public reading experience and an **admin dashboard** to write, publish and manage blogs and comments. It has a React (Vite) frontend and an Express + MongoDB backend, with ImageKit for image uploads and the Gemini API for AI features.

**🌐 Live Demo:** [sj-blog-ten.vercel.app](https://sj-blog-ten.vercel.app/)

---

## ✨ Features

### Public site
- 🏠 **Home page** with a header, blog list and newsletter section
- 📰 **Blog cards and listing** to browse published posts
- 📄 **Single blog page** with rich-text content
- 💬 **Comments** on blog posts
- 📱 **Responsive UI** built with React

### Admin dashboard
- 🔐 **Admin login** with protected routes (auth middleware on the server)
- 📊 **Dashboard** with an overview of blogs and comments
- ➕ **Add blog** with a rich-text editor and image upload
- 📋 **List and manage blogs** (publish, unpublish, delete)
- 🗨️ **Comment management** (review and moderate comments)
- 🤖 **AI assistance with Gemini** <!-- describe exactly what: e.g. generating blog content from a title -->
- 🖼️ **Image uploads** via Multer, stored and optimized with ImageKit

---

## 🛠️ Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React, Vite, React Router, Context API, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB with Mongoose |
| Media | ImageKit, Multer |
| AI | Google Gemini API |
| Deployment | Vercel (client and server deployed separately) |

---

## 🏗️ Architecture

```
┌───────────────┐    Axios (token)    ┌────────────────────┐
│  React app    │ ──────────────────► │   Express API      │
│  Context API  │ ◄────────────────── │   routes → controllers │
└───────────────┘                     └─────────┬──────────┘
                                                │ auth middleware protects admin routes
                       ┌────────────┬───────────┼────────────┐
                       ▼            ▼           ▼            
                   MongoDB       ImageKit     Gemini API
                (Blog, Comment)  (images)     (AI content)
```

**Request flow:** the user acts in the React UI → Axios calls an Express route → the middleware checks authentication on admin routes → the controller reads or writes MongoDB (uploading images to ImageKit when needed) → the JSON response updates the UI through the app's Context.

---

## 📁 Project Structure

```
SJBlog/
├── client/                         # React frontend (Vite)
│   └── src/
│       ├── components/             # BlogCard, BlogList, Header, Navbar, Footer, NewsLetter, Loader
│       │   └── admin/              # Login, Sidebar, BlogTableItem, CommentTableItem
│       ├── context/AppContext.jsx  # Global state and shared API logic
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Blog.jsx
│       │   └── admin/              # Layout, Dashboard, AddBlog, ListBlog, Comments
│       ├── assets/
│       ├── App.jsx
│       └── main.jsx
│
└── server/                         # Express backend
    ├── configs/                    # db.js, imagekit.js, gemini.js
    ├── controllers/                # blogController.js, adminController.js
    ├── middleware/                 # auth.js, multer.js
    ├── models/                     # Blog.js, Comment.js
    ├── routes/                     # blogRoutes.js, adminRoutes.js
    └── server.js                   # Entry point
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- A MongoDB database (local or Atlas)
- Accounts for ImageKit and Google AI Studio (Gemini)

### 1. Clone the repo

```bash
git clone https://github.com/Shivanshu-Jha/SJBlog.git
cd SJBlog
```

### 2. Set up the server

```bash
cd server
npm install
```

Create `server/.env`:

```env
# Names below are examples; make sure they match the ones used in your code
MONGODB_URI=
ADMIN_EMAIL=
ADMIN_PASSWORD=
JWT_SECRET=
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=
GEMINI_API_KEY=
```

Start the server:

```bash
npm run server     # or: npm start
```

### 3. Set up the client

```bash
cd ../client
npm install
```

Create `client/.env`:

```env
VITE_BASE_URL=http://localhost:3000
```

```bash
npm run dev
```


## 🌍 Deployment

The client and server are deployed as separate Vercel projects, each with its own `vercel.json`. Set the environment variables in Vercel, point `VITE_BASE_URL` at the deployed server, and allow the client's URL in the server's CORS settings.

