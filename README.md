# Home automation Frontend

## Introduction
I needed a simple, easy to use frontend for my Home Automation system. The frontend will eventually run on a wall mounted tablet in the kitchen.

## Tech Stack
### React

The entire frontend is written in React, combined with React Router for navigation.

### Firebase

Authentication is done with Google's Firebase, I did not allow any external parties to connect (google connect or registration with email) for the simple reason that this controls my house and I didn't want to open this to the world.

### Axios & Socket IO

[Axios](https://github.com/axios/axios) is used for the REST API connection, at first the entire idea was to only use the REST API, however, I soon started to get some issues and started to move to a Websockets connection. For the Websockets connection I used [Socket IO](https://socket.io/). Future plans are to move everything to Websockets.

### OpenWeatherMap

To be able to show weather information on the dashboard, I used a free and open weather api, [OpenWeatherMap](https://openweathermap.org/).

### Material UI

To give the frontend a better look, I opted to use [Material UI](https://mui.com/).

## Features
- Safe Login/Logout
- Material design
- Switching entity states
- weather widget
- Entity state viewing
- Other awesome features yet to be implemented

## Setup

Clone this repo and run ```npm install``` to install all the dependencies.

## Usage

Clone this repo and after you run ```npm install``` the dependencies will be installed. Now run ```npm run``` or ```yarn start``` to start the local server, in your browser, head over to ```localhost:3000``` and you will see the login screen.
## Future

As the app will be used on a daily basis, I will keep improving it. My plans for added features and improvements:

- Move the REST API connection to Websockets
- Add RTSP streams for camera viewing
- Make the app Mobile responsive
- Dockerize the app for internal hosting 