# Product List App

A React application that dynamically displays a list of products using **props** and **map()**. Featured products are highlighted with a ⭐. This project demonstrates core React concepts including **component structure, props, conditional rendering, and dynamic content**.

## Features

- Display product name, price, and category
- Highlight featured products with a ⭐
- Built with React functional components
- Dynamic rendering using `map()`
- Clean, readable, and beginner-friendly code

## Component Structure

This app uses a **parent-child component architecture**:

- **Parent Component (`App`)**  
  - Holds the **product data array**  
  - Passes the data to the child component via **props**  
  - Renders the main page header

- **Child Component (`ProductList`)**  
  - Receives the product data from the parent via **props**  
  - Uses the `map()` function to **dynamically render** each product  
  - Conditionally displays a ⭐ for featured products  

## Developer: [Hazel Arevalo](https://linkedin.com/in/harevalo123)