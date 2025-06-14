# 🎮 Ocean of Game

**Ocean of Game** একটি Full Stack Web Application যেখানে ব্যবহারকারীরা বিভিন্ন গেম ব্রাউজ করতে পারে, নতুন গেম অ্যাড করতে পারে, আপডেট ও ডিলিট করতে পারে। এটি React ও Node.js/MongoDB ব্যবহার করে তৈরি করা হয়েছে।

---

## 🔗 Live Links

- 🔸 **Client Live Site:** [https://soft-malasada-8d2680.netlify.app](https://soft-malasada-8d2680.netlify.app)
- 🔸 **Server API Link:** [https://games-iota-two.vercel.app/games](https://games-iota-two.vercel.app/games)

---

## 🛠️ Technologies Used

### ✅ Client Side (Frontend)

- React.js
- React Router DOM
- Tailwind CSS
- Daisy UI
- Axios (for fetching data)
- Vite (for fast build and development)

### ✅ Server Side (Backend)

- Node.js
- Express.js
- MongoDB (Database)
- Vercel (for server deployment)
- dotenv (for secure environment variables)
- CORS & JSON middleware

---

## 📁 Features Implemented

### 🌐 Client-Side Features:

- 🔎 All games list দেখতে পারবে `/` হোম রাউটে
- ➕ নতুন গেম Add করা যাবে
- 🛠️ গেম Edit/Update করা যাবে
- ❌ গেম Delete করা যাবে
- 🔗 প্রতিটি গেমের জন্য unique ID ব্যবহার করে ডেটা লোড করা হয়েছে
- ✅ রাউটিং সিস্টেম: Home, Add Game, Update Game, Game Details

### 🖥️ Server-Side Features:

- 📦 RESTful API তৈরি করা হয়েছে:
  - `GET /games` – সব গেমের ডেটা রিটার্ন করে
  - `GET /games/:id` – নির্দিষ্ট গেমের ডেটা রিটার্ন করে
  - `POST /games` – নতুন গেম ডাটাবেজে সংযুক্ত করে
  - `PUT /games/:id` – গেমের তথ্য আপডেট করে
  - `DELETE /games/:id` – গেম ডিলিট করে

- 🔒 `.env` ফাইলে DB credentials নিরাপদে রাখা হয়েছে

---

## ⚙️ MongoDB Collection Structure

- **Database Name:** `Ocean-Of-Game`
- **Collections:**
  - `games` → গেমের ইনফো সংরক্ষণ করে
  - `users` → (optional future use)

---

## 🔮 Future Improvements

- 🔐 User Authentication (Firebase Auth)
- ⭐ Game Rating System
- 💬 User Review/Comment System
- 🔍 Filtering and Sorting Option

---

## 👨‍💻 Author

> Developed by [Md Riyajul Islam Akash](https://www.linkedin.com/in/mdriyajulislam/)  
> 📧 Email: hafejmohammadakash@gmail.com  
> 🔗 GitHub: [mdriyajulislamakash11](https://github.com/mdriyajulislamakash11)

---

## 📸 Screenshots

> (Screenshots can be added here if you want to include a preview)

---

## 📌 Note

Ensure that you have added a `.env` file in your server-side project root with:

```env
DB_USER=your_mongodb_user
DB_PASSWORD=your_mongodb_password
