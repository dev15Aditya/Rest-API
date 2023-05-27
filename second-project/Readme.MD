In this example, I have defined several endpoints that handle different HTTP methods:

-> GET /users: This endpoint retrieves all users.
-> GET /users/:id: This endpoint retrieves a single user by ID.
-> POST /users: This endpoint creates a new user.
-> PUT /users/:id: This endpoint updates an existing user by ID.
-> DELETE /users/:id: This endpoint deletes a user by ID.

We also use express.json() middleware to parse JSON request bodies. The endpoints use various Express methods to handle the HTTP requests and send appropriate responses.
