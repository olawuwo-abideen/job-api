# Jobapi

Build a Backend to job search and recruitment application that connects job seekers with employers and streamlines
the hiring process. This application aims to provide job seekers with
opportunities and for employers to post job listings and manage candidate applications.

## Features

- **User**: User can register, login, logout, update password, verify username, update profile and update password.

## Built With:

- javaScript
- node
- express
- dotenv
- mongoose
- nodemon
- cors
- cookie-parser
- bcryptjs
- express-async-error
- helmet
- joi
- swagger-ui-express
- jsonwebtoken
- http-status-code
- moment

## Installation

- clone the repository

```sh

git clone git@github.com:olawuwo-abideen/job-api.git

```

- navigate to the folder

```sh

cd job-api.git

```

## Run the app in development mode

Open a terminal window session, or the equivalent on your machine, and enter the following command to install all the
Node modules needed to run the app:

```sh
npm install

```

After doing an `npm install` enter the following `npm start` command:

```sh

npm start

```

This will start the app and set it up to listen for incoming connections on port 3000. Open up your browser of
your choice and go to the url

```sh

http://localhost:3000

```

to start using the app.

## API Endpoints

The following API endpoints are available:

- BaseUrl https://localhost:3000/

- `POST /api/v1/register` - Register a user
- `POST /api/v1/login` - Login a user
- `GET /api/v1/logout` - Logout a user
- `PATCH /api/v1/updateuser` - Update a user

- `POST /api/v1/job` - Create a job
- `GET /api/v1/jobs` - Get all jobs
- `GET /api/v1/jobs/stats` - Show job statistics
- `GET /api/v1/job/:id` - Get a job
- `PATCH /api/v1/job/:id` - Update a job
- `DELETE /api/v1/job/:id` - Delete a job

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/olawuwo-abideen/job-api/issues).

## Authors

👤 **Olawuwo Abideen**

- GitHub: [@Olawuwo Abideen](https://github.com/olawuwo-abideen)
- Twitter: [@Olawuwo Abideen](https://twitter.com/olawuwo_abideen)
- LinkedIn: [@Olawuwo Abideen](https://www.linkedin.com/in/olawuwo-abideen/)
