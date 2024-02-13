# CRUD_ExpressJs_PostgreSQL_Assignment
Code to perform CRUD operation using ExpressJs(framework of NodeJs) and postgreSQL as a database 
# ![CRUD Operation with ExpreeJs](project-logo.png)

## Getting Started

### Prerequisites

Run the following command to install dependencies:

```shell
npm install
```

### Environment variables

This project depends on some environment variables.
If you are running this project locally, create a `.env` file at the root for these variables.
Your host provider should included a feature to set them there directly to avoid exposing them.

Here are the required ones:

```

PORT = 8801

DB_HOST = ''
USERNAME = ''
PASSWORD = ''
DB_NAME = ''

DIALECT = ''

```

### Run the project

Run the following command to run the project in development:

```shell
npm run start:dev
```

Run the following command to run the project in production :
    This command will build the project and then run bundled file stored in dist folder
```shell
npm run start:prod
```
