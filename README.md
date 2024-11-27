![GitHub Actions](https://github.com/felixopk/Task-App/actions/workflows/deploy.yml/badge.svg)

# Task App with CI/CD Pipeline

## 🌟 Overview
This project demonstrates a fully automated CI/CD pipeline for a **Task App** using **Docker**, **GitHub Actions**, and **AWS EC2**.

## 🚀 Features
- **Frontend:** React-based UI for task management.
- **Backend:** Node.js REST API with MongoDB integration.
- **CI/CD:** GitHub Actions pipeline automating Docker builds and deployments.
- **Deployment:** Hosted on AWS EC2 with Docker containers.

## 🛠️ Key Technologies
- **Docker:** Containerization of frontend and backend.
- **GitHub Actions:** Continuous Integration and Deployment.
- **AWS EC2:** Hosting the application.
- **SSH:** Secure deployment using Docker and SSH keys.

## 🔧 Challenges and Solutions
- **Challenge:** Resolving Docker networking issues between frontend and backend.
  - **Solution:** Configured containers to communicate using a bridge network.
- **Challenge:** Permission errors on AWS EC2.
  - **Solution:** Added `ec2-user` to the Docker group and ensured SSH key permissions were set correctly.

## 🚀 Deployment
The app is live and can be accessed via:
- **Frontend:** `http://<SERVER_HOST>:3000`
- **Backend API:** `http://<SERVER_HOST>:5000`

## 📂 Repository Structure
Task-App/ ├── backend/ # Node.js API code ├── frontend/ # React app code ├── .github/ # GitHub Actions workflows └── README.md # Project documentation

## 🎯 Future Improvements
- Add unit and integration tests.
- Enable autoscaling for the EC2 instance using AWS ECS or Kubernetes
