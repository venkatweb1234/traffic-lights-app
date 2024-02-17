# Traffic lights App

A Simple Traffic lights App built with React, Styled Components, and incorporating best practices for design and testing.

## Table of Contents

- [Overview](#overview)
- [Components](#components)
  - [TrafficLights](#trafficlightapp)
- [Solution Design](#solution-design)
- [Common](#common functions)
- [React Testing](#react-testing)
- [Styled Components](#styled-components)
- [App.tsx](#apptsx)
- [Usage](#usage)
- [Installation](#installation)

## Overview

This Traffic lights App is a feature-rich solution designed to streamline task management. It leverages React for a robust user interface, while Styled Components provide a visually appealing and responsive design.

- Implement a traffic light system. We are required to have 4 sets of lights, as follows.

- Lights 1: Traffic is travelling south
- Lights 2: Traffic is travelling west
- Lights 3: Traffic is travelling north
- Lights 4: Traffic is travelling east

- The lights in which traffic is travelling on the same axis can be green at the same time. During normal hours all lights stay green for 20 seconds, but during peak times north and south lights are green for 40 seconds while west and east are green for 10 seconds. Peak hours are 0800 to 1000 and 1700 to 1900. Yellow lights are shown for 5 seconds before red lights are shown. Red lights stay on until the cross-traffic is red for at least 4 seconds, once a red light goes off then the green is shown for the required time(eg the sequence is reset).

- Bonus: At this intersection north bound traffic has a green right-turn signal, which stops the south bound traffic and allows north bound traffic to turn right. This is green at the end of north/south green light and stays green for 10 seconds. During this time north bound is green, north right-turn is green and all other lights are red.

## Components

### TrafficLights

The main component serving as the entire point for the TrafficLights App. Manages the overall application structure, including C# .NET web-api end point data displayed in this TrafficLights component.

## Common

Defines TypeScript common function for traffic lights.

## React Testing

Test cases are written using React Testing Library to ensure the functionality and correctness of each component, reducer, and action. The testing suite covers a comprehensive range of scenarios to guarantee a robust application.

## Styled Components

Styled Components are employed for consistent and visually appealing styling. The design is responsive, adapting to various screen sizes, and adheres to modern design principles.

## App.tsx

The main application file where the Traffic Lights App component is rendered. This file serves as the entry point for the React application.

## Usage

To use the Traffic Lights App, follow these steps:

1. Clone the repository: `git clone https://github.com/venkatweb1234/traffic-lights-app.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start or yarn start`
4. Start the test use this command: `npm test`

## Out Put Images

South, North, East, west traffic lights color will be appeared based on endpoint response. here end point is "https://localhost:7286/TrafficLight/GetTrafficData"

Here I mentioned only 3 screen shots, but based on the time colors will appeared, please note that.

- ![Reference Screenshot](src\output\TrafficLightsGreen.png)
- ![Reference Screenshot](src\output\TrafficLightsRed.png)
- ![Reference Screenshot](src\output\TrafficLightsYellow.png)
