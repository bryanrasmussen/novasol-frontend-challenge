## Background
This is a coding challenge for a frontend developer position at Novasol. The task is for us to see your coding skills and logical problem solving. If you pass the test then you will be invited to a second interview which will be based on your solution and will have a more technical focus.

## Starting the challenge

In the project directory, run these commands:

1. Install required packages
### `npm ci`

2. Start local development server
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.




## Requirements:
This coding challenge is based on a React application. You will have to use SCSS to style the UI (configuration has already been set up in webpack). Showcase your frontend skills to display this information in the best possible way. Do not use any UI framework like material or semantic. You can use lighweight scss frameworks (like sierra - http://sierra-library.github.io/) only.
There is no need for Redux or other state management libraries in this simple app, so go for built in state management options.

Please do use a version-control system (preferably git -- you can just zip the whole folder including the .git folder).

We expect you to spend 4-8 hours on this task.

## Challenge description:
At Novasol, we rent out a lot of summer houses. We would like to see a nice looking list of summer houses on a webpage based on mocked data provided (mockData.json). Showcase your frontend skills to display the information in the best possible way.

## Task
As a property manager at Novasol I want to be able to view properties and details on a web page. Create a nice looking list of properties that display this data.

Property details have following fields displayed:
<ul>
  <li>Property picture</li>
  <li>Number of bedrooms</li>
  <li>number of bathrooms</li>
  <li>Guest count that can be accomodated</li>
  <li>
    Address
    <ul>
      <li>Line1 (Required)</li>
      <li>Line2 (Optional)</li>
      <li>Postcode (Required)</li>
      <li>City (Required)</li>
    </ul>
  </li>
  <li>Price per night</li>


</ul>

## Task 2
To make it easier to see where exactly those properties are located, we want you to display them on a map (use google maps api for geolocation - getting coordinates from adress) on a separate page. The page should display the map only, and basic navigation to go back to the main property list page.
Suggestion: You could use state to show the map without reloading the page. Responsive page is a bonus.

When a property marker is clicked, we want to see basic info of the property as well. Marker popup should display a box with property a small property image (use google for finding images of houses), property type, and address.

## Optional
A nice looking UI and good code structure with tests will be a plus.

Complete the tasks according to your skill level. It's better to do less, but with a good code structure than complete everything with messy code. Show us your best and good luck!


