<img width="1906" height="917" alt="image" src="https://github.com/user-attachments/assets/c5a57474-d077-4edc-8bf2-79ca2c99d748" />

## 🗪 Chat App

A chatting app made with the MERN Stack (MongoDB, Express, React, Node.js) and Tailwind CSS. Like a typical chatting app, it allows users to sign in and text other users on the app.

## 🛠 Technologies

* HTML
* Tailwind CSS
* JavaScript
* MongoDB
* Express
* React
* Node.js
* Vite

## 💡 Features

Here are the website's features:

* Login/Register page.
* Online users in the Contacts page.
* Chatting pages.
* Complementary colours used as background.
* Separate chat for selected users.

## ✍️ The Process

I wanted to develop my backend skills, so I decided to work on something that was more backend-heavy. I decided on this chat app, going with a very minimalistic design to ensure I didn't get sidetracked into focusing on the frontend (though there were relapses, but it helped for the most part lol).

To start with, I drafted my plan and picked a colour scheme for the app, using complementary colours to offer an artistic touch different from the usual chatting apps, but still with a reasonably straightforward design. 

I started simple, first creating a simple login/register page and then concentrating mostly on the backend to ensure everything was working properly (adding APIs and api request with axios, secured environment variables with dotenv, encrypting passwords with bycryptjs, handling HTTP requests with Express, linking the frontend to backend with cors, websocket server for the connections/auto-reconnections, etc). I then linked each user to the chatting app, ensuring their session and token were remembered. After most of the backend work was done, I went back to the frontend, bringing the chatting app page to life using React and styling it with Tailwind CSS.

Afterwards, I added interactability to the chatting app, ensuring users could select contacts and message them. I also made other necessary adjustments (eg, adaptability: changing the mobile view for the login page) and fixes along the way to ensure the app was functioning properly.

Side-note: There were so many errors that came up, and almost half of the time I spent on this project was on trying to find the problems and fix them, but in the end, it was so worth it! The satisfaction of fixing a bug is always amazing.

Finally, I was left with a chatting app for users with online/offline indications, making it easy to tell when other users are online to message them!

Overall, this was fundamentally a full-stack development challenge that aimed to help me better understand the MERN stack and, more importantly, the backend side of full-stack (and it was a success!)

## 🎓 What I Learned

I learnt so many things in this project. For example, with mongoDB, this was my first time using it in a proper project for autentication, database, and even ip access, and it was amazing! I also learnt how to apply user uniqueness and requirements with mongoose. 
As it was my first time using the full MERN stack, I learnt a great deal about Express (handling http requests and ap routes with it). I also learned so many useful add-ons like jsonwebtoken (for encoding/making tokens), bycryptjs (for encrypting passowrds), and lodash (for unique functions, eg preventing duplicates). 
Furthermore, I got more comfortable using Tailwind which I used to avoid in the past since I didn't exactly welcome writing my CSS in the same place as my html/React, but it turned out to be not so bad!
Of course I also learned how to fix so many errors and what causes those erroes as well (like state overwrite errors among others). Overall, I learnt a lot and have grown so much through this project.

## 🛠️ How it can be improved

* Style that horizontal scroll in the chat page.
* Improve the UI of the app

## 📜 Running the project

To run the project, follow these steps:

* Clone the repository to your local machine
* Install dependencies: 'npm install'.
* Run development server: 'npm run dev'.
* Open 'http://localhost:5173' in your browser

## 📸 App Preview
Login Page:

<img width="1906" height="917" alt="image" src="https://github.com/user-attachments/assets/c5a57474-d077-4edc-8bf2-79ca2c99d748" />

Chat Page:

<img width="1902" height="917" alt="image" src="https://github.com/user-attachments/assets/7a7d1b6a-8b6a-47dc-a6f9-8c20e5af1d50" />

Login Page Phone:

<img width="603" height="913" alt="image" src="https://github.com/user-attachments/assets/e4500ab6-5932-4289-aab8-cbcc70ee9408" />

# Login Page Evolution:

From:

<img width="1882" height="890" alt="image" src="https://github.com/user-attachments/assets/225c7ff8-de48-4c93-a1d6-709750cc1c3a" />

To:

<img width="1906" height="917" alt="image" src="https://github.com/user-attachments/assets/ee246a24-0ad7-4542-8153-8244b6c3a4ce" />
<img width="603" height="913" alt="image" src="https://github.com/user-attachments/assets/1c297c3f-7f49-4929-a09d-246310d1f612" />


# Chat Page Evolution:
From:

<img width="1902" height="912" alt="image" src="https://github.com/user-attachments/assets/78952a50-d91f-4778-abbc-fbcb0a300161" />

To: 

<img width="1902" height="917" alt="image" src="https://github.com/user-attachments/assets/8f500b1b-3376-4cdc-8156-18e8faf07078" />

<img width="1903" height="917" alt="image" src="https://github.com/user-attachments/assets/85b13283-692b-4eb2-bbfb-291aa68f70a0" />


# Icon attribution

<a href="https://www.flaticon.com/free-icons/chats" title="chats icons">Chats icons created by Wahyu Adam - Flaticon</a>
