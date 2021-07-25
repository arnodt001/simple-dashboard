# Simple Dashboard

This project contains a simple `angular` application and `node` microservice.

The `node` microservice has on end point to fetch a list of users. The list also contains
allocated data cap and current data usage of each user.

The `angular` application displays a dashboard that contains the list of users. When selecting a user display the detail dsta usage of the selected user. 

## Prerequisites

Both projects have dependencies on that `node` and `npm`. 

Please download and install the latest version of [Node.js](https://nodejs.org/en/download/).

The microservice project have a dependency on `maven`.

Run `npm install -g maven` to install the `maven` plugin globally.

## Running the `node` microservice

Change directory to `dashboard-service` directory.

Run `mvn compile`.

Run `npm start`

This will start the service on the default port 3500 

## Running the `angular` application

Change directory to `dashboard-ui` directory.

Run `npm install`.

Run `npm start`

This will start the application on the default port 4200
