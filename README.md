VirtuWear - Online Dress Shopping Platform
VirtuWear is an innovative e-commerce platform that offers a unique virtual dress fitting experience using 3D modeling technology. It allows users to visualize how a dress will look on them before making a purchase.

Project Overview :
VirtuWear addresses common challenges in online shopping, such as uncertainty in fit and style. Our platform enables users to select a dress, upload a front-facing photo, and view a 3D model of themselves wearing the dress, helping them make confident purchase decisions.

Current Features :

User Authentication:
Users can sign up, log in, and manage their accounts.
Product Catalog:

A wide range of dresses is available for browsing and purchase.
Admin can add, update, and delete products via the admin dashboard.

3D Model Generation (In Progress):

Users can upload a front-facing image, and the system uses PIFu to generate a 3D model of them.
The "View in 3D" feature is partially implemented up to the 3D model generation stage.
The texture generation of the 3D model of user is yet to be implemented.
Admin Interface:

Admin can manage products (add, update, and delete dresses) and monitor sales.

Upcoming Features :

Completion of 3D Model Viewing :
Currently, we are able to generate the 3D model using PIFu. Next steps include applying the selected dress to the 3D model and allowing users to interact with it in real time using Three.js.
Chatbot Integration:
A chatbot feature for real-time customer assistance is planned for future updates.

Technology Stack :

Front-End
React: For dynamic and interactive user interfaces.
Three.js: Will be used for rendering 3D models on the web once the feature is fully implemented.
Back-End
Node.js: Handles server-side operations and API communication.
Express.js: Framework used for building the back-end server.
Database :
MongoDB: Used for storing user accounts, product data, and sales records.

3D Modeling :
PIFu: Generates 3D models from 2D photos of users.
OpenPose: Detects key points on the user's body to ensure proper fitting.
OpenCV: Used to overlay the dress on the user's photo.
Blender: Employed for texture mapping and refining 3D model outputs.
OpenPose & PIFu: Used for body key point detection and generating 3D models.

Installation and Setup Instructions :

Clone the Repository
git clone https://github.com/your-repo/virtuwear.git
cd virtuwear
Install Dependencies

Install both server-side and client-side dependencies :
npm install
cd client
npm install
Start the Application

Start the back-end server :
npm run server
Start the front-end React application:
bash
Copy code
cd client
npm start
Database Setup

Make sure MongoDB is set up and running.
Create necessary tables/collections for storing user, product, and sales data.
Environment Variables

Set up your .env file with the following environment variables:
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASS=your_database_password
PORT=5000

How to Contribute :

Fork the repository.
Create a feature branch :
git checkout -b feature/new-feature

Commit your changes :
git commit -m "Add new feature"

Push to the branch :
git push origin feature/new-feature
Open a pull request.

Contact :
For queries and support, please contact us.
