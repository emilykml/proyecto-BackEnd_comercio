# Proyecto API con NODE EXPRESS
How to build an API with NODE Express and My SQL. It also shows operations of a basic CRUD (Create, Read, Update, Delete) for both brands and products.

# Getting Started
### Prerequisites
Before you begin, make sure you have the following prerequisites installed:

- Node.js and npm: You can download and install them from https://nodejs.org/.
  
### Installation
Clone the repository:
 ```sh
git clone <repository-url>
 ```

Install the required dependencies:
 ```sh
npm install
 ```

Start the server:
 ```sh
npm start
 ```
The server will start running at http://localhost:8000/.

# Database Schema

The app uses a MySQL database with two tables: brands and products. Here is the schema:

![estructura BD](https://github.com/emilykml/proyecto-BackEnd_comercio/assets/135590740/b61c30ce-3647-46d8-b49f-d2a3bb255078)


### Brand:
id (Primary Key)
brand_name (String)

### Product:
id (Primary Key)
product_name (String)
description (Text)
price (Decimal)
stock (Integer)
brands_id (Foreign Key referencing brands.id)

# API Endpoints
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/30200003-dc4157f5-3684-4dee-84ff-daf728744f8f?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D30200003-dc4157f5-3684-4dee-84ff-daf728744f8f%26entityType%3Dcollection%26workspaceId%3Ddb0156dd-f346-4872-82b4-50dbb0d75dcb)

## Brand
GET /brand: Get all brands.
POST /brand: Create a new brand.
PUT /brand/🆔 Update a brand by ID.
DELETE /brand/🆔 Delete a brand by ID.

## Product
GET /products: Get all products.
POST /products: Create a new product.
PUT /products/🆔 Update a product by ID.
DELETE /products/🆔 Delete a product by ID.

# Testing
The repository includes unit tests for the API endpoints. You can run the tests using the following command:

 ```sh
npm test
 ```
