Quora Post Clone
A full-stack web application that mimics basic post, edit, and delete features for a Quora-like site.
🚀 Features
View Posts: See a list of all current posts

Create New Post: Add a new Quora-style post easily

Edit Post: Change content of existing posts (inline or via edit page)

Delete Post: Remove unwanted posts

Animated UI: Modern card layouts, animated buttons, and color effects

🛠️ Tech Stack
Backend: Node.js, Express.js

Frontend: EJS (Embedded JavaScript templates)

Styling: Custom CSS (responsive, animated)

UUID: For unique post IDs

📁 Project Structure
REST_CLASS/
├── node_modules/
├── public/
│   └── style.css
├── views/
│   ├── edit.ejs
│   ├── index.ejs
│   ├── new.ejs
│   └── show.ejs
├── index.js
├── package.json
└── README.md

⚡ Getting Started
Clone the repo
git clone https://github.com/yourusername/quora-post-clone.git

Install dependencies
npm install

Start the server
nodemon index.js or node index.js

Open in browser
Go to http://localhost:3030/posts
💡 Usage
Access all posts at /posts

Click "Create New Post" to add a post

Use "Edit" to change content, or "Delete" to remove a post

Button animations and color bars add a modern look!

✨ Customization
Style: Edit public/style.css for layout and color changes

Templates: Edit .ejs files in /views/ to update UI or add new features

🙏 Credits
Original by Sachin Kumar Ojha.
Inspired by Quora, built with Node.js & Express.