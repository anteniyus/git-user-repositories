## Table of contents

- [Git User Repositories](#git-user-repositories)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)

# Git User Repositories

This project uses **GitHub REST API** for fetching user repositories.

It has a simple form for entering the username, and a list to show the 
user's repositories.
Also, you can go to the repository page of each item in the list by clicking on the 
corresponding row in the table,
and there is a reset button to clear the list, and the input field.

Also, it is available to pass the username like below:

> host/git/repositories/sampleUsername

The list will be automatically filled by repositories of the **_sampleUsername_**.

This project uses Redux to manage username and list state.

## Building

Building The Guardian requires the following tools:

- Git (obviously)
- Node.js

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

All scripts that are available in create-react-app.

> You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
>
> To learn React, check out the [React documentation](https://reactjs.org/).

## Deployment

For deployment, you can use nginx as web server.

- First create the production build with this command:

  > npm run build

- Then download the [Nginx](https://nginx.org/en/download.html) and place extracted
  folder somewhere like: _C:/nginx_.

- After that, we must change the configuration file for serving the static files
  generated in step one.
  For this, Open the nginx.conf file located in: extractedPath/conf like: _C:/nginx/conf_.

Now assuming our application build folder is the following path:

_D:/projects/git-user-repositories/build_

- In the conf file, change server part like below:

```text
server {

    listen       5050;  #or any other ports
    server_name  localhost;

    location / {
        root   "D:/projects/git-user-repositories/build";    #the application build folder
        try_files  $uri /index.html;
    }
}
```

Done. Start the Nginx.
