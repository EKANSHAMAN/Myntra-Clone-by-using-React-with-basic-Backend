# Myntra Clone -- React & Redux

A frontend-focused Myntra-inspired e-commerce UI built with **React**,
**Redux Toolkit**, **React Router**, **Bootstrap**, and **React Icons**.

The project also includes a small **Node.js + Express backend**. The
backend is mainly used to provide product data through API endpoints.
The main focus of this project is the React frontend and its Redux-based
cart functionality.

## Live Demo

-   **Frontend:** https://myntra-clone-eight-fawn.vercel.app
-   **Backend API:** https://myntraclonebackend-3gey.onrender.com/items

## Features

### Product Listing

-   Displays products fetched from the backend API.
-   Shows product image, brand, description, rating, price, original
    price, and discount.
-   Responsive layout built using Bootstrap.

### Cart / Bag Functionality

The main interactive feature of the project is the shopping bag/cart.

-   Clicking **Add to Bag** adds the product to the cart.
-   The button changes from **Add to Bag** to **Remove** after the
    product is added.
-   The bag quantity in the top-right navigation updates according to
    the number of products in the cart.
-   Clicking the **Bag** opens the cart page.
-   The cart page displays the products currently added to the bag.
-   Products can be removed from the cart from the cart page.
-   The cart state is managed using **Redux Toolkit**.

### Routing

The application uses **React Router** for navigation between pages,
including the product listing and bag/cart page.

### Backend

A basic Express backend is included for API communication.

Available endpoints:

``` text
GET  /items
GET  /items/:id
POST /items
```

The backend is intentionally simple and is mainly used to demonstrate
API calling from the React frontend.

## Technologies Used

### Frontend

-   React 19
-   Redux Toolkit
-   React Redux
-   React Router DOM
-   Bootstrap 5
-   React Icons
-   Vite
-   JavaScript / JSX
-   ESLint

### Backend

-   Node.js
-   Express.js
-   Body Parser
-   Dotenv
-   JavaScript

## Project Structure

``` text
Myntra-Clone-by-using-React-with-basic-Backend/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── server/
│   ├── data/
│   │   └── items.js
│   ├── app.js
│   ├── package.json
│   └── ...
│
└── README.md
```

> Folder names may differ slightly depending on the final project
> structure.

## Getting Started

### Prerequisites

Install **Node.js** (preferably the current LTS version) and npm.

Check that they are installed:

``` bash
node -v
npm -v
```

No separate installation is required for React, Redux, Bootstrap,
Express, or the other packages. They are listed in the project's
`package.json` files and will be installed using `npm install`.

## Run the Backend

Open a terminal in the project root and enter the server directory:

``` bash
cd server
```

Install backend dependencies:

``` bash
npm install
```

Start the backend:

``` bash
npm start
```

The backend will run locally on:

``` text
http://localhost:8080
```

You can test the API at:

``` text
http://localhost:8080/items
```

## Run the Frontend

Open another terminal and enter the client directory:

``` bash
cd client
```

Install frontend dependencies:

``` bash
npm install
```

Start the Vite development server:

``` bash
npm run dev
```

Vite will display the local development URL in the terminal, usually:

``` text
http://localhost:5173
```

## Frontend Dependencies

The frontend uses the following main packages:

``` text
@reduxjs/toolkit
bootstrap
react
react-dom
react-icons
react-redux
react-router-dom
```

The development tools include Vite and ESLint.

You do not need to install these packages individually. Running:

``` bash
npm install
```

inside `client` installs them from `client/package.json`.

## Backend Dependencies

The backend uses:

``` text
express
body-parser
dotenv
```

Again, you only need:

``` bash
npm install
```

inside `server`.

## API Configuration

For local development, the frontend can communicate with:

``` text
http://localhost:8080
```

For the deployed application, the frontend uses the deployed Render
backend:

``` text
https://myntraclonebackend-3gey.onrender.com
```

If the project uses a Vite environment variable, create a `.env` file
inside `client`:

``` env
VITE_API_URL=https://myntraclonebackend-3gey.onrender.com
```

Then API calls can be written as:

``` javascript
fetch(`${import.meta.env.VITE_API_URL}/items`)
```

Do not add `/items` to the `VITE_API_URL` value itself, because the
endpoint is appended in the code.

## Deployment

The project is deployed as two separate services.

### Frontend -- Vercel

The `client` directory is deployed as the React/Vite frontend.

Typical Vercel settings:

``` text
Root Directory: client
Build Command: npm run build
Output Directory: dist
```

Environment variable:

``` text
VITE_API_URL=https://myntraclonebackend-3gey.onrender.com
```

### Backend -- Render

The `server` directory is deployed as the Node/Express backend.

Typical Render settings:

``` text
Root Directory: server
Build Command: npm install
Start Command: npm start
```

The backend uses Render's provided port:

``` javascript
const PORT = process.env.PORT || 8080;
```

## Important Note About the Backend

This project uses a basic backend primarily for API communication and
product data.

If product data is stored in a local file, this setup is suitable for a
learning/demo project but is not intended to be a production-grade
database solution. A real e-commerce application would normally use a
persistent database such as MongoDB or PostgreSQL.

## Project Limitations

This project is primarily focused on the frontend UI and Redux cart
functionality.

The following areas are intentionally limited:

-   No real authentication/login system.
-   No real payment gateway.
-   No real order processing.
-   No production-grade database.
-   Backend is basic and mainly supports product API requests.
-   The Bag page primarily demonstrates viewing cart items and removing
    items.
-   Profile, Wishlist, search, checkout, and other e-commerce features
    are not implemented as full production features unless explicitly
    added to the project.

## Learning Goals

This project demonstrates:

-   Building a React application with reusable components.
-   Managing global state with Redux Toolkit.
-   Using Redux actions and reducers.
-   Fetching data from a REST API.
-   Connecting a React frontend to an Express backend.
-   Implementing cart/bag functionality.
-   Using React Router for navigation.
-   Styling a frontend using Bootstrap.
-   Deploying a frontend and backend separately.
-   Connecting a Vercel frontend to a Render backend.


## Author

**Ekansh Narayan Mishra**

This project was created as a React/Redux frontend-focused Myntra clone
with a basic Express backend for API communication.
