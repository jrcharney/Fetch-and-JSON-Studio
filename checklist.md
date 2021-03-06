# 26.6. Studio Fetch & JSON

## 26.6.1. Get Started

1. Fork the [studio repository](https://github.com/LaunchCodeEducation/Fetch-and-JSON-Studio/) to your own Github account.
3. Clone the repository to your computer.

## 26.6.2. Requirements

1. Add code that runs on the `window load` event.
    1. This is done because we can't interact with the HTML elements until the page has loaded.
2. Make a GET request using `fetch` to the astronauts API https://handlers.education.launchcode.org/static/astronauts.json
    1. Do this part inside the `load` event handler.
3. Add each astronaut returned to the web page.
    1. Use the HTML template shown below.
    2. Be sure to use the exact HTML including the CSS classes. (starter code contains CSS definitions)

### 26.6.2.1. Example JSON

Notice that it's an array of objects, due to the outer [ and ]. That means you will have to use a loop to access each object inside the JSON array.

```json
[
   {
      "id": 1,
      "active": false,
      "firstName": "Mae",
      "lastName": "Jemison",
      "skills": [
            "Physician", "Chemical Engineer"
      ],
      "hoursInSpace": 190,
      "picture": "mae-jemison.jpg"
   },
   {
      "id": 2,
      "active": false,
      "firstName": "Frederick",
      "lastName": "Gregory",
      "skills": [
            "Information Systems", "Shuttle Pilot", "Fighter Pilot", "Helicopter Pilot", "Colonel USAF"
      ],
      "hoursInSpace": 455,
      "picture": "frederick-gregory.jpg"
   },
   {
      "id": 3,
      "active": false,
      "firstName": "Ellen",
      "lastName": "Ochoa",
      "skills": [
            "Physics", "Electrical Engineer"
      ],
      "hoursInSpace": 979,
      "picture": "ellen-ochoa.jpg"
   },
   {
      "id": 4,
      "active": false,
      "firstName": "Guion",
      "lastName": "Bluford",
      "skills": [
            "Aerospace Engineer", "Philosophy", "Physics", "Colonel USAF",
            "Fighter Pilot"
      ],
      "hoursInSpace": 686,
      "picture": "guion-bluford.jpg"
   },
   {
      "id": 5,
      "active": false,
      "firstName": "Sally",
      "lastName": "Ride",
      "skills": [
            "Physicist", "Astrophysics"
      ],
      "hoursInSpace": 343,
      "picture": "sally-ride.jpg"
   },
   {
      "id": 6,
      "active": true,
      "firstName": "Kjell",
      "lastName": "Lindgren",
      "skills": [
            "Physician", "Surgeon", "Emergency Medicine"
      ],
      "hoursInSpace": 15,
      "picture": "kjell-lindgren.jpg"
   },
   {
      "id": 7,
      "active": true,
      "firstName": "Jeanette",
      "lastName": "Epps",
      "skills": [
            "Physicist", "Philosophy", "Aerospace Engineer"
      ],
      "hoursInSpace": 0,
      "picture": "jeanette-epps.jpg"
   }
]

```

### 26.6.2.2. HTML Template

Create HTML in this exact format for each astronaut, but include data about that specific astronaut. For example the HTML below is what should be created for astronaut Mae Jemison. All HTML created should be added to the `<div id="container">` tag.

Do NOT copy and paste this into your HTML file. Use this as a template to build HTML dynamically for each astronaut returned from the API.


```html
<div class="astronaut">
   <div class="bio">
      <h3>Mae Jemison</h3>
      <ul>
         <li>Hours in space: 190</li>
         <li>Active: false</li>
         <li>Skills: Physician, Chemical Engineer</li>
      </ul>
   </div>
   <img class="avatar" src="images/mae-jemison.jpg">
</div>
```

### 26.6.2.3. Expected Results

After your code loads the data and builds the HTML, the web page should look like:

![picture of example]()

*Example of what resulting page should look like.*


## 26.6.3. Bonus Missions

1. Display the astronauts sorted from most to least time in space.
2. Make the "Active: true" text green, for astronauts that are still active (active is true).
3. Add a count of astronauts to the page.