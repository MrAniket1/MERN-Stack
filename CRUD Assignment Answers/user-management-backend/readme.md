
**Test Documentation for User Management Backend**

**1. Registration Endpoint**

- **Test Case 1:** Valid Registration
  - Description: Test a successful user registration with valid input data.
  - Steps:
    1. Make a POST request to `/api/users/register`.
    2. Provide valid `name`, `email`, and `password` in the request body.
  - Expected Outcome:
    - Response status code: 201 (Created)
    - Response body: { "msg": "User registered successfully" }

- **Test Case 2:** Invalid Registration (Missing Fields)
  - Description: Test registration with missing mandatory fields.
  - Steps:
    1. Make a POST request to `/api/users/register`.
    2. Omit one or more of the mandatory fields (`name`, `email`, `password`) in the request body.
  - Expected Outcome:
    - Response status code: 400 (Bad Request)
    - Response body: { "msg": "All input fields are required" }

**2. Login Endpoint**

- **Test Case 3:** Valid Login
  - Description: Test a successful user login with valid credentials.
  - Steps:
    1. Make a POST request to `/api/users/login`.
    2. Provide valid `email` and `password` in the request body.
  - Expected Outcome:
    - Response status code: 200 (OK)
    - Response body: { "msg": "User login successfully" }

- **Test Case 4:** Invalid Login (Missing Fields)
  - Description: Test login with missing mandatory fields.
  - Steps:
    1. Make a POST request to `/api/users/login`.
    2. Omit one or both of the mandatory fields (`email`, `password`) in the request body.
  - Expected Outcome:
    - Response status code: 400 (Bad Request)
    - Response body: { "msg": "All input fields are required" }

- **Test Case 5:** Invalid Login (Nonexistent User)
  - Description: Test login with an email that is not associated with any user account.
  - Steps:
    1. Make a POST request to `/api/users/login`.
    2. Provide a valid `email` but with an incorrect or non-existent `password`.
  - Expected Outcome:
    - Response status code: 404 (Not Found)
    - Response body: { "msg": "No account associated with this email" }

- **Test Case 6:** Invalid Login (Wrong Password)
  - Description: Test login with an email that is associated with a user account but using an incorrect password.
  - Steps:
    1. Make a POST request to `/api/users/login`.
    2. Provide a valid `email` and an incorrect `password`.
  - Expected Outcome:
    - Response status code: 401 (Unauthorized)
    - Response body: { "msg": "Password is wrong" }

**3. Miscellaneous**

- **Test Case 7:** Internal Server Error
  - Description: Test scenarios leading to internal server errors.
  - Steps:
    1. Perform actions that could potentially cause server errors (e.g., invalid MongoDB connection).
  - Expected Outcome:
    - Response status code: 500 (Internal Server Error)
    - Response body: { "msg": "Internal server error" }

**Note:** Ensure you have your Express.js server running (`node app.js` or `npm start`) and your MongoDB server operational while performing the tests.
