We start with setting server/backend of the project by installing necessary dependencies.

--> npm init -y
--> npm install express mongoose cors

Then we make server.js file. This will be the entry point for the server-side-code.

We had defined a Model 'Task.js' in model file. In this we have defined all schemas our task model will have, i.e title and description.

Then in routes folder we have defined routes for various CRUD operation. Like get task, get task by id and delete task by id.

We can do this both above things in server.js file only, but to reduce complexity and practing standard coding methods we adopted this form.

In server.js file we imported necessary files and called route.js file. Also made established connection to mongodb database.

# Frontend Part

We first initiated to react app
--> npx create-react-app task-manager

Then some more modeules have been downloaded like axios, react-router-dom and tailwind-css

We have made two components TaskList and TaskForm.

In TaskForm, we can create new task by adding title and description. (Using POST operation we defined in routes folder of backend).

In TaskList we are calling all the task that have been created using GET (defined in routes folder of backend). We have also used delete operation. This delete operation taked task \_id as parameter and delete the task that matches the passed \_id. And update the TaskList.
