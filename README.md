# WebApp Template (Typescript, React, Express)

This template for a WebApp contains an Express.js REST API written in Typescript as the Backend, and a React SPA written in Typescript as the Frontend.
When deployed to production the Express app servers the precomplied React SPA at the `/` route.

---

## Getting Started

**Prerequisites**

The Following need to be installed before you can run this webapp locally.

- Node.js
- Docker

### Setup Instructions

1. Create a .env file to manage Environment Variables for the Express app.

```bash
cp facade/.env.dev facade/.env
```

2. Start the Express App

```bash
cd facade # switch to the Express app context
yarn      # install dependencies
yarn dev  # start the express web server
```

3. Start the React App (In a new terminal)

```bash
cd ui      # switch into the React app context
yarn       # install dependencies
yarn start # start the React Scripts web server
```

4. Verify when navigating to `localhost:3000/api/health` the word `healthy` is displayed on the screen.

---

## Configuration and Environment Variables

The Express App uses the `dotenv` and `config` packages for simple and flexible configuration between deployments.

When configuring the Express app there are 3 important files you need to know about.

1. The `.env` file is where you declare your environment variables for a given environment (i.e. dev, staging, prod etc.)
2. The `config/default.json` file defines the default config values that will be used unless overwritten by an environment variable.
3. The `config/custom-environment-variables.json` file maps environment variables to the config field that environment variable overwrites. For example in `default.json` the port config field is set to a value of 8000, but by declaring a SERVICE_PORT environment variable that default value would be overwritten by whatever values was provided to the environment variable.

---

## API Docs

When the Express app is started with `NODE_ENVIRONMENT=development` OpenAPI 3.0 Docs can be found at `localhost:8000/docs`. Rendering the OpenAPI yaml file into a Swagger UI is done for you, however documenting of the endpoints is still up to you.

---

## Tests

Jest has been configured for the Express app. Run the following commands to execute the test suite. Once again you are responsbile for writing your tests.

```bash
cd facade
yarn test
```

If you want code coverage reports use `yarn test:coverage`.
