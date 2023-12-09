# Automotive Brand Cars

[Visit Automotive Brand Cars](https://auto-motives-cars.web.app)

[Backend](https://github.com/nazmussaadatcse/automotives-cars-server)


Automotive Brand Cars is a full-stack web application designed to provide users with access to a wide range of car products, as well as the ability to manage and customize their car selections. The project leverages various technologies, including React, React Router, Firebase Authentication, MongoDB database, and Express backend, to ensure a good user experience.

## Features

- **User Authentication**: Users can log in using either an email and password combination or via Google login. The authentication system ensures that only authorized users can access specific features.
  
- **Protected Routes**: Private routes restrict unauthorized access to certain sections of the application, such as adding products, updating product information, viewing the cart, and exploring product details. Unauthorized attempts are redirected to the login page.
  
- **Product Categories**: Cars are categorized into six different brands. Users can browse products of their preferred brand to find the car that suits their preferences.
  
- **Product Details**: Detailed information about each car product is available, allowing users to make informed decisions. Specifications, images, descriptions, and pricing for each product are provided, and users can add products to their cart.
  
- **Cart**: Logged-in users can add car products to their cart for future purchase. The cart feature provides a smart shopping experience, allowing users to review selections or remove products.
  
- **Add and Update Products**: Authenticated users can add new car products to the database or update existing product details, contributing to the product catalog.
  
- **Responsive Design**: The web application is designed to be responsive, ensuring a consistent and visually appealing user interface on various screen sizes and devices.

## Technologies Used

- **React**: Provides a dynamic and interactive user interface for the front-end of the application.
  
- **React Router**: Efficiently handles routing, allowing for navigation and route protection.
  
- **Firebase Authentication**: Supports email/password and Google login methods for user authentication.
  
- **MongoDB**: A NoSQL database system used for storing and retrieving product information and user data on the back end.

Explore the Automotive Brand Cars application to discover a diverse selection of cars and manage your car selections effortlessly.



## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running
- Firebase account for Authentication setup

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/automotives-cars.git
    cd automotives-cars
    ```

2. **Install Dependencies**
    - Backend:
    ```bash
    cd backend
    npm install
    ```

    - Frontend:
    ```bash
    cd frontend
    npm install
    ```

3. **Configuration**
    - Set up Firebase Authentication and MongoDB credentials in the project.

4. **Running the Application**
    - Backend Server:
    ```bash
    cd backend
    npm nodemon index.js
    ```

    - Frontend:
    ```bash
    cd frontend
    npm run dev
    ```

5. **Access**
    - Open a browser and go to `http://localhost:5173` to access Automotives Cars.


## Acknowledgments

- This project uses Firebase Authentication for user management.
- Material UI and Tailwind CSS for frontend design.
