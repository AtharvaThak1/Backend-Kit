# Backend Kit

Production-ready utilities for Express.js applications.

Backend Kit helps you bootstrap Express projects faster with built-in middleware, response helpers, async error handling, JWT authentication, environment validation, and more.

## 📚 Documentation

Full documentation is available at:

**https://backend-kit-doc-website-git-main-atharvas-projects-79e62a8e.vercel.app/**

---

## Features

* 🚀 Easy Express initialization
* 🔥 Async route handler
* 📦 Standardized API responses
* 🛡 Global error handling
* 🔑 JWT Authentication middleware
* 🌍 Environment variable validation
* 🎫 JWT Token generation helper
* ⚡ ES Module support

---

## Installation

```bash
npm install @avtdev/backend-kit
```

---

## Quick Start

```js
import express from "express";
import { init } from "@avtdev/backend-kit";

const app = express();

init(app);

app.get("/", (req, res) => {
  res.success({
    message: "Hello World",
  });
});

app.listen(3000);
```

---

## Included Middleware

### init()

Automatically configures:

* Express JSON parser
* CORS
* Helmet
* Morgan logger
* Response helpers

```js
import { init } from "@avtdev/backend-kit";

init(app);
```

---

## Response Helpers

### Success Response

```js
res.success(data);
```

Response:

```json
{
  "success": true,
  "message": "Success",
  "data": {}
}
```

### Created Response

```js
res.created(data);
```

### Bad Request

```js
res.badRequest("Invalid input");
```

### Unauthorized

```js
res.unauthorized("Authentication required");
```

### Forbidden

```js
res.forbidden("Access denied");
```

### Not Found

```js
res.notFound("Resource not found");
```

### Server Error

```js
res.serverError();
```

---

## Async Handler

Avoid repetitive try/catch blocks.

```js
import { asyncHandler } from "@avtdev/backend-kit";

router.get(
  "/users",
  asyncHandler(async (req, res) => {
    const users = await User.find();

    res.success(users);
  }),
);
```

---

## Global Error Handler

```js
import { errorHandler } from "@avtdev/backend-kit";

app.use(errorHandler);
```

---

## AppError

Create custom errors with status codes.

```js
import { AppError } from "@avtdev/backend-kit";

throw new AppError("User not found", 404);
```

---

## JWT Authentication

Protect routes using JWT tokens.

```js
import { auth } from "@avtdev/backend-kit";

router.get("/profile", auth(), (req, res) => {
  res.success(req.user);
});
```

### Request Header

```http
Authorization: Bearer YOUR_TOKEN
```

---

## Generate Token

```js
import { generateToken } from "@avtdev/backend-kit";

const token = generateToken(
  {
    id: user.id,
    role: user.role,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d",
  },
);
```

---

## Environment Validation

Validate required environment variables before starting your application.

```js
import { env } from "@avtdev/backend-kit";

env(["PORT", "JWT_SECRET", "MONGO_URI"]);
```

---

## Example

```js
import express from "express";
import {
  init,
  auth,
  asyncHandler,
  errorHandler,
} from "@avtdev/backend-kit";

const app = express();

init(app);

app.get(
  "/profile",
  auth(),
  asyncHandler(async (req, res) => {
    res.success(req.user);
  }),
);

app.use(errorHandler);

app.listen(3000);
```

---

## Documentation

For complete guides, API references, examples, and updates:

👉 https://backend-kit-doc-website-git-main-atharvas-projects-79e62a8e.vercel.app/

---

## Roadmap

Upcoming features:

* Role-based access control
* Request validation
* Rate limiting
* File uploads
* Pagination helpers
* Swagger integration
* Redis caching
* Socket.IO utilities
* CLI project generator

---

## License

MIT

---

Made with ❤️ by Atharva
