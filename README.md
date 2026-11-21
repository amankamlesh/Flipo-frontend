# 🛒 Flipo — Full-Stack E-Commerce Application

A modern, responsive, full-stack e-commerce platform built using **React, TypeScript, Redux Toolkit, Node.js, Express, and MongoDB**.

Flipo delivers a complete online shopping experience with product discovery, cart management, Google authentication, secure payment integration, order tracking, and a feature-rich admin dashboard.

This repository contains the **frontend application**. The backend is maintained in a separate repository.

### 🔗 Project Links

- **Frontend Repository:** [Flipo-frontend](https://github.com/amankamlesh/Flipo-frontend)
- **Backend Repository:** [Flipo-ecommerce](https://github.com/amankamlesh/Flipo-ecommerce)
- **Developer:** [Aman Mahor](https://github.com/amankamlesh)

---

## 🚀 Features

### 🛍️ Customer Features

- **Google Authentication:** Sign in securely using Firebase Authentication.
- **Product Catalog:** Browse products with images, prices, categories, and availability.
- **Advanced Product Search:** Search products by name, filter by category and maximum price, and sort by price.
- **Shopping Cart:** Add or remove products, update quantities, and view automatically calculated totals.
- **Checkout:** Enter shipping details and complete payments using Stripe.
- **Coupon Discounts:** Apply valid coupon codes during checkout.
- **Order Management:** View order history, track order status, and access order details.
- **Responsive Design:** SCSS-based layouts for desktop and mobile devices.
- **Notifications:** User-friendly success and error messages using React Hot Toast.

### 📊 Admin Dashboard

The application includes a dedicated dashboard with role-based access for administrators.

- **Dashboard Analytics:** Overview of sales, revenue, transactions, and other business metrics.
- **Product Management:** Add, update, and delete products.
- **Inventory Management:** Manage product pricing, stock, categories, and images.
- **Customer Management:** View and manage registered customers.
- **Order Management:** Monitor orders and update their status from Processing to Shipped to Delivered.
- **Data Visualization:** Interactive bar, line, and pie charts using Chart.js.
- **Coupon Management:** Create and manage discount coupons.
- **Additional Utilities:** Stopwatch and coin toss applications.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React 18, TypeScript |
| Build Tool | Vite |
| Styling | SCSS / Sass |
| State Management | Redux Toolkit, React Redux |
| API Integration | RTK Query, Axios |
| Routing | React Router DOM |
| Authentication | Firebase Authentication |
| Payments | Stripe, React Stripe.js |
| Data Visualization | Chart.js, React Chart.js 2 |
| Notifications | React Hot Toast |
| Icons | React Icons |
| Backend | Node.js, Express.js, TypeScript |
| Database | MongoDB, Mongoose |
| Image Uploads | Multer |
| Backend Caching | NodeCache |

---

## 🏗️ Application Architecture

Flipo follows a client-server architecture with separate frontend and backend repositories.

```text
                  CLIENT
                     |
             React + TypeScript
                     |
          Redux Toolkit / RTK Query
                     |
              REST API (HTTP)
                     |
              Express.js Server
                     |
           Controllers / Middleware
                     |
                MongoDB
                     
External Services:
  Firebase Authentication → Google Sign-In
  Stripe                  → Online Payments
```

**Frontend:** Handles the user interface, routing, client-side state, API communication, and checkout experience.

**Backend:** Handles product management, user records, order processing, inventory updates, coupon validation, and payment intent creation.

**Database:** MongoDB stores product, user, order, and coupon information.

---

## 📂 Project Structure

```text
Flipo-frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── admin/
│   │   │   ├── AdminSidebar.tsx
│   │   │   ├── Charts.tsx
│   │   │   ├── DashboardTable.tsx
│   │   │   └── TableHOC.tsx
│   │   ├── cart-item.tsx
│   │   ├── header.tsx
│   │   ├── loader.tsx
│   │   ├── product-card.tsx
│   │   └── protected-route.tsx
│   │
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── charts/
│   │   │   ├── management/
│   │   │   ├── apps/
│   │   │   ├── dashboard.tsx
│   │   │   ├── products.tsx
│   │   │   ├── customers.tsx
│   │   │   └── transaction.tsx
│   │   ├── home.tsx
│   │   ├── search.tsx
│   │   ├── cart.tsx
│   │   ├── login.tsx
│   │   ├── shipping.tsx
│   │   ├── checkout.tsx
│   │   ├── orders.tsx
│   │   └── order-Details.tsx
│   │
│   ├── redux/
│   │   ├── api/
│   │   │   ├── userApi.ts
│   │   │   ├── productAPI.ts
│   │   │   ├── orderAPI.ts
│   │   │   └── dashboardAPI.ts
│   │   ├── reducer/
│   │   │   ├── cartReducer.ts
│   │   │   └── userReducer.ts
│   │   └── store.ts
│   │
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── firebase.ts
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

---

## ⚙️ Installation and Setup

### Prerequisites

Make sure the following are installed:

- Node.js and npm
- Git
- MongoDB (local instance or MongoDB Atlas)
- Firebase project with Google authentication enabled
- Stripe account with API keys

### 1. Clone the frontend repository

```bash
git clone https://github.com/amankamlesh/Flipo-frontend.git
cd Flipo-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the frontend project root.

```env
VITE_SERVER=http://localhost:4000

# Firebase Configuration
VITE_FIREBASE_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STO_BUCKET=your_storage_bucket
VITE_MESSAG_SENID=your_messaging_sender_id
VITE_APPID=your_firebase_app_id

# Stripe Publishable Key
VITE_STRIPE_KEY=your_stripe_publishable_key
```

**Note:** The Firebase variable names match the current `src/firebase.ts` implementation. Never place a Stripe secret key or other server-side credentials in frontend environment variables.

### 4. Configure and start the backend

Clone the backend repository in a separate directory.

```bash
git clone https://github.com/amankamlesh/Flipo-ecommerce.git
cd Flipo-ecommerce
npm install
```

Create a backend `.env` file:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
STRIPE_KEY=your_stripe_secret_key
```

Build and start the backend:

```bash
npm run build
npm start
```

The backend runs on:

```text
http://localhost:4000
```

The backend currently configures CORS for the deployed frontend domain. For local development, update the backend CORS configuration to allow your local Vite origin.

### 5. Start the frontend

From the frontend directory, run:

```bash
npm run dev
```

Open the local URL displayed by Vite, typically:

```text
http://localhost:5173
```

---

## 🔐 Authentication and Authorization

Flipo uses **Firebase Authentication** for Google Sign-In.

Authentication flow:

1. The user signs in with their Google account through Firebase.
2. Firebase returns the authenticated user's information.
3. The frontend communicates with the backend to register or retrieve the corresponding user record.
4. User information is maintained in Redux.
5. Protected routes control access to authenticated pages and admin interfaces.

The frontend uses a reusable `ProtectedRoute` component for route-level authorization.

**Security note:** Client-side route protection is for navigation and user experience. Production deployments must independently verify authenticated identities and permissions on the backend.

---

## 🛒 Shopping Cart and State Management

Flipo uses **Redux Toolkit** to maintain shopping cart state.

The cart reducer manages:

- Cart items and product quantities
- Subtotal and total price
- Shipping charges
- Tax calculations
- Coupon discounts
- Shipping information
- Cart reset after checkout

### Price Calculation

```text
Subtotal = Sum(Product Price × Quantity)

Tax = 18% of Subtotal

Shipping Charges:
  Subtotal > ₹1,000 → Free
  Otherwise         → ₹200

Total = Subtotal + Tax + Shipping - Discount
```

RTK Query is used for API data fetching, caching, and cache invalidation when product or order data changes.

---

## 💳 Payment Integration

Flipo integrates **Stripe Payment Intents** and **React Stripe.js** for online payments.

### Checkout Workflow

```text
Add Products to Cart
         ↓
Review Cart Summary
         ↓
Enter Shipping Details
         ↓
Backend Creates Stripe PaymentIntent
         ↓
Customer Confirms Payment
         ↓
Payment Success
         ↓
Backend Creates Order
         ↓
Product Stock Updated
         ↓
Customer Views Order History
```

Payment details are handled through Stripe's payment components rather than custom card-input fields.

For production use, payment verification and order fulfillment should be strengthened with server-side Stripe webhook verification.

---

## 📈 Admin Analytics

The admin dashboard provides insights into e-commerce operations.

It includes:

- Revenue and transaction summaries
- Product and customer statistics
- Order and inventory insights
- Bar charts for comparative analysis
- Line charts for trends
- Pie charts for distribution analysis

The charts are implemented using **Chart.js** and **React Chart.js 2**.

---

## 🌐 Backend API Integration

The frontend communicates with the Express backend through REST APIs.

**Base URL:**

```text
http://localhost:4000/api/v1
```

### Main API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/product/latest` | Fetch latest products |
| GET | `/product/all` | Search and filter products |
| GET | `/product/categories` | Fetch product categories |
| POST | `/product/new` | Create product (admin) |
| PUT | `/product/:id` | Update product (admin) |
| DELETE | `/product/:id` | Delete product (admin) |
| POST | `/user/new` | Register user record |
| GET | `/user/:id` | Fetch user details |
| POST | `/order/new` | Create order |
| GET | `/order/my` | Fetch customer orders |
| GET | `/order/all` | Fetch all orders (admin) |
| POST | `/payment/create` | Create Stripe PaymentIntent |
| GET | `/payment/discount` | Validate coupon |
| GET | `/dashboard/stats` | Fetch dashboard statistics |

Additional routes support transaction management, coupon administration, and chart data.

---

## 📱 Responsive UI

The frontend uses reusable React components and modular SCSS stylesheets.

The interface is designed to adapt to different screen sizes while maintaining consistent navigation, product cards, forms, cart layouts, and dashboard elements.

---

## 🧩 Key Technical Concepts

This project demonstrates practical experience with:

- Component-based UI architecture
- Type-safe development using TypeScript
- Centralized state management with Redux Toolkit
- Data fetching and cache invalidation using RTK Query
- RESTful API integration
- Authentication and protected routing
- Third-party payment gateway integration
- Database-backed CRUD operations
- Image uploads and inventory management
- Asynchronous programming and error handling
- Dashboard analytics and data visualization
- React lazy loading and code splitting

---

## 🔮 Future Improvements

- Strengthen backend authentication and authorization
- Add server-side payment verification with Stripe webhooks
- Improve transaction handling and order reliability
- Add product reviews and ratings
- Implement wishlist functionality
- Introduce automated testing
- Improve accessibility and SEO
- Add order notifications
- Enhance error handling and loading states
- Optimize images and application performance

---

## 👨‍💻 Author

**Aman Mahor**

B.Tech — Electrical Engineering  
National Institute of Technology, Surat

Passionate about software development, full-stack engineering, and building scalable web applications.

- **GitHub:** [@amankamlesh](https://github.com/amankamlesh)
- **LinkedIn:** [Aman Mahor](https://www.linkedin.com/in/aman-mahor-4589a6229/)

---

### ⭐ Support

If you find this project useful, consider giving the repository a star!

**Built with React, TypeScript, Redux Toolkit, Express.js, and MongoDB.**
