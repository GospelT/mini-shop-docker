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
