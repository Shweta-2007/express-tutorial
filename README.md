# Installing Express

- npm install express --save
- npm install nodemon --save-dev
- npm install lodash
- npm install ejs => Templating Engines: Helps in when we start to inject dynamic content variables and logic into these views.

# EJS

<% const name = "shweta" %> => This will not show on the frontend, It will be used at backend.

  <p><%= name %></p>   => Now this will print shweta on the frontend. When we want to show something on frontend, we use = sign after first %

# Request Types:

- GET: Used to read/retrieve data from a web server
- POST: Used to send data (file, form data, etc.) to the server.
- PUT: Used to modify the data on the server. It replaces the entire content at a particular location with data that is passed in the body payload. If there are no resources that match the request, it will generate one.
- PATCH: PATCH is similar to PUT request, but the only difference is, it modifies a part of the data. It will only replace the content that you want to update.
- DELETE: Used to delete the data on the server at a specified location.
