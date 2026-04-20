# Mini Shop Microservices (Docker Practice Project)

This project is a simple microservices-based backend system built using Docker.  
It contains three services:

- User Service (Python / FastAPI)
- Product Service (Python / FastAPI)
- API Gateway (Node.js / Express)


## Architecture

- User Service → manages users
- Product Service → manages products
- Gateway → combines both services into one API

All services run in separate Docker containers and communicate over HTTP.


## How to Run

Make sure you have Docker and Docker Compose installed.

### 1. Start/stop all service 
docker compose up --build
docker compose down

# Mini Shop Microservices - Testing Steps

- Check running containers: Run: docker ps Ensure gateway, user-service, and product-service
  are running.
- Test user service directly: Run: curl http://localhost:8001/users Expected: [] or list of users.

- Test product service directly: Run: curl http://localhost:8002/products Expected: [] or list of
  products.

- Test API Gateway: Run: curl http://localhost:8000/users Run: curl http://localhost:8000/products
  Expected: same results as direct services.
  
- Check logs if something fails: Run: docker compose logs gateway Look for errors like
  ENOTFOUND or ECONNREFUSED.

- Verify Docker networking: Inside gateway container run: curl http://user-service:8001/users
