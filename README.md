# Socialgram
## Installation

- `git clone <this_url> && cd <repo_name>`
- install npm on client and server. do the cd on 2 separate terminals
  - `cd client`
  - `nvm use 18.13.0`
  - `npm install`
  - `cd server`
  - `nvm use 18.13.0`
  - `npm install`
 - in your server terminal, run
 ```bash
    npm run dev
```
 - in your client terminal, run npm start
- This project uses mongoose. Please install mongoose to your computer if you don't have it.

- Next create a .env file in server. It should contain the following information.
```bash
   MONGO_URL = ' '
   JWT_SECRET = ' '
   PORT = 3001
```
- Next create a .env file in client. It should contain the following information.
```bash
   REACT_APP_SERVER_URL=http://localhost:3001
```

## Description

Developed MERN Stack social media app. Secured and maintained sign-up/in users' data by developing encrypted information utilizing Bcrypt, Dotenv, and JWT.Used Redux Toolkit for state management and Redux Persist for storing in local storage Utilized Multer for file uploads, React-dropzone for image uploading and Formik and Yup for form and form validation Users are able to add/remove friends and visit other users’ profile pages, Like/unlike and add/delete comments on their posts and switch dark/light mode.
<br>

[Click here to see it in action!](https://halisa-socialgram-app.netlify.app)
<br>
## 

![image](https://github.com/lisa1501/Socialgram_mern_app/blob/main/images/signUp:signIn.png)
![image](https://github.com/lisa1501/Socialgram_mern_app/blob/main/images/homepage.png)
![image](https://github.com/lisa1501/Socialgram_mern_app/blob/main/images/comment.png)
![image](https://github.com/lisa1501/Socialgram_mern_app/blob/main/images/profilepage.png)




## Documentation 

https://github.com/refinedev/refine

## MVP

There are the minimum must-haves for the project

1. Users could sign up and sign in the application

2. User could post their post , add friends, write a comment to other users post.

3. User could visit other user profile page.
   
4. User able to change the theme of the application

## Technologies Used

1.  JavaScript
2.  MongoDB
3.  React Router
4.  React
5.  Theme Change 

## Future Updates

1.  Users search other users by name

2.  Users could update and delete their profile and posts.
