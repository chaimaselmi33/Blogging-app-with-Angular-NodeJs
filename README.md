# Blog Application

## About This Project

This blog application is designed using **Figma**, featuring a clean and user-friendly interface. It is powered by the **Express.js** framework on the backend and **Angular** on the frontend, with **Bootstrap** used for a structured layout. The application's data is managed through a **MySQL** database.

## Preview

![Image](https://github.com/user-attachments/assets/33df60e9-7559-4563-8698-caa63ed1c80b)

## How to Run

To run the project locally, follow these steps for both the client (Angular) and server (Express.js):

1- Install the app dependencies with : npm install
2- Run the project with : npm run start

### ⚠️ **Note**: 
This project requires a MySQL database. You need to manually create post and category tables with the following fields before running the backend:

```sql
CREATE TABLE category (
  id_category INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE post (
  id_post INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  author VARCHAR(100),
  content TEXT,
  id_category INT,
  post_Img VARCHAR(255),
  FOREIGN KEY (id_category) REFERENCES category(id_category)
);```




