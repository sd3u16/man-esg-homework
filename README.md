# ESG Score Viewer

## Overview

This application displays ESG scores for different companies. It supports:

- Searching for companies by name.
- Viewing ESG scores for specific dates.
- Score highlights
- I have given the companies more unique names (e.g Letter followed by hash and number A#1, B#1, etc) to ease the search and filter functionality

## Technology Choices

- React: For building a component-based, dynamic UI.
- Context API: Not used for this small app but can be implemented for wider state management.
- CSS: For styling and responsive design on multiple devices
- JSON: for backend

## Frontend Responsibilities

- For searching and filtering
- displays data in a dynamic way
- highlights metrics based on threshold - if score is higher than 80, means it's good so it's highlighted in green

## Assumptions

- JSON data is static and directly imported

## Running the Project

1. Install dependencies: `npm install` or `yarn install`
2. Start the development server: `npm start` or `yarn start`
3. Open `http://localhost:3000` in your browser.


## Deploying the project online for demonstration
To make things easy, I have deployed the project on Netlify and it can be accessed via link below:

https://esg-homework.netlify.app/
