module.exports = {
  // ... other configurations ...
  build: {
    // Use a reverse proxy to route requests to your Spring Boot app
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
};
