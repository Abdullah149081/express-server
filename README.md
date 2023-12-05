# express-server


## Installation

To install all dependencies, use the following command:

```
yarn
```

## Run and build

To run the project in development mode:

```
npm run dev
```

To build the project:

```
npm run build
```

### Code formatting and Error handling
To fix errors:
```
npm run lint:fix 
```
To format code:

```
npm run prettier:fix
```

## Database credentials in the .env file.
Ensure that you have a .env file in your project root with the following credentials:
```
PORT=
DB_URL=
BCRYPT_SALT_ROUNDS=
DEFAULT_PASSWORD=
```

## Configuration

Check and modify any necessary configuration files or environment variables. These can usually be found in the project root or in a dedicated config directory.

## Troubleshooting

If you encounter any issues, refer to the following troubleshooting steps:

### Issue: Unable to connect to the database
This error may occur if the database configuration is incorrect. Double-check your database credentials in the .env file.

### Issue: Port already in use
If you encounter a "Port already in use" error, it means the specified port is occupied. Change the PORT value in your .env file or identify and stop the process using the specified port.
