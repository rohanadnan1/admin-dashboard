# User Management Dashboard

Welcome to the User Management Dashboard! This project allows you to manage user information efficiently and effectively.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. You can verify your installation by running:

```bash
node -v
npm -v
```
## Clone the Repository
Start by cloning the repository to your local machine:
```bash
git clone https://github.com/rohanadnan1/admin-dashboard.git
```
## Install Packages
Navigate into the project directory:
```bash
cd admin-dashboard
```
## Install the packages
```bash
npm install 
```
## Run the application locally
```bash
npm run dev
```
Open the application in http://localhost:5173 

## How this application will work?
- You will be directed to /login
<img width="1414" alt="Screenshot 2024-11-07 at 4 06 53 PM" src="https://github.com/user-attachments/assets/8d82134a-16da-41bd-9a43-c7739077487f">

 #### Enter one of these email and password and you will be directed to /dashboard

```bash
[
  {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com",
    "username": "alice123"
  },
  { "id": 2, "name": "Bob", "email": "bob@example.com", "username": "bobby" },
  {
    "id": 3,
    "name": "Charlie",
    "email": "charlie@example.com",
    "username": "charlie12"
  }
]
password: 12345
```

<img width="1438" alt="Screenshot 2024-11-07 at 4 11 01 PM" src="https://github.com/user-attachments/assets/0a1aa4ba-8772-454c-94c1-12763d42f41e">

- Here through the sidebar you can navigate to different pages
- After clicking on the chats logo you will be directed to /chats

<img width="1439" alt="Screenshot 2024-11-07 at 4 17 45 PM" src="https://github.com/user-attachments/assets/7dae2b1c-126d-4822-9320-af68462d04c1">

- You can send a message
- You can delete all the recent chats all this is frontend functionality (no backend involved)
- After clicking on the top logo you will be directed to /user-management

<img width="1438" alt="Screenshot 2024-11-07 at 4 20 15 PM" src="https://github.com/user-attachments/assets/31268266-feed-4663-88a2-449fff50cd1c">

#### This is the most interactive page of the whole app

- You can sort users by clicking on sort users and you can sort by either rating or name

<img width="1439" alt="Screenshot 2024-11-07 at 4 22 47 PM" src="https://github.com/user-attachments/assets/78149a1d-8b7b-481f-b915-b723bf3432b0">

- You can edit the delete the user by clicking on delete button

<img width="1429" alt="Screenshot 2024-11-07 at 4 24 18 PM" src="https://github.com/user-attachments/assets/c68f64e1-5502-4fd9-84b6-cc144dd2eb87">

- You can edit the user by clicking on the user and you will be navigated to /user-management/:id

<img width="1440" alt="Screenshot 2024-11-07 at 4 25 42 PM" src="https://github.com/user-attachments/assets/2697ba9f-a877-4be4-ac5c-c52598945243">

- Here the changes you will made will be shown real-time in the application

## Key points to understand
- As this is just a frontend application we are storing data in redux store and despite of it being a great store management system the state will remain there while we move to different pages but after a hard refresh the data comes back to its original state
- You cannot go to any of the routes without logging in if you try you will be redirected to /login
- If you want to go to /login route there is no other way than you logging out of the application
