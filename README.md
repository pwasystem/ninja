# Ninja

Ninja is an HTTP and RESTful server built with Node.js, designed to facilitate the development of web applications by providing a straightforward and efficient server framework.

## Features

- **HTTP Server:** Handles basic HTTP requests and responses.
- **RESTful API Support:** Facilitates the creation of RESTful endpoints for web services.
- **Docker Integration:** Includes a Dockerfile for containerized deployment.

## Prerequisites

- **Node.js:** Ensure that Node.js is installed on your system.
- **Docker (Optional):** If you plan to deploy the server using Docker, ensure Docker is installed.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/pwasystem/ninja.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd ninja
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Start the Server:**

   ```bash
   node index.js
   ```

   The server will start, and you can access it at `http://localhost:3000`.

2. **Access the Server:**

   Open a web browser and navigate to `http://localhost:3000` to see the server in action.

## Docker Deployment

1. **Build the Docker Image:**

   ```bash
   docker build -t ninja-server .
   ```

2. **Run the Docker Container:**

   ```bash
   docker run -p 3000:3000 ninja-server
   ```

   The server will be accessible at `http://localhost:3000`.

## Project Structure

```
ninja/
├── http/
│   └── server.js
├── node_modules/
├── Dockerfile
├── LICENSE
├── README.md
├── favicon.ico
├── index.js
├── make_docker.bat
├── ninja.js
├── package-lock.json
└── package.json
```

- **http/server.js:** Contains the HTTP server implementation.
- **index.js:** Main entry point of the application.
- **ninja.js:** Core server logic and configurations.
- **Dockerfile:** Configuration for building the Docker image.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your enhancements or bug fixes.

## License

This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or suggestions, please open an issue in the [GitHub repository](https://github.com/pwasystem/ninja).
