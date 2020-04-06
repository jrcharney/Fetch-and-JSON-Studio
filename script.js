/* @file: scripts.js
 */

// Run this when the page load 
window.addEventListener('load',(event) => {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then((res) => {
        res.json().then((json) => { // CONVERT TO JSON!
            // all the stuff we coded DOM STYLE!
            //console.log(json);
            let container = document.getElementById("container");
            let astro_count = document.createElement("p");
            astro_count.innerHTML = `Current Astronaut Count: ${json.length}.`;
            container.appendChild(astro_count);
            json.sort((a,b) => b.hoursInSpace - a.hoursInSpace);
            // felt like using a map instead of a for-loop
            json.map((rec) => {
              // create elements
              let astronaut = document.createElement("div");
              // astronaut.className = "astronaut";   // as space-separated string
              astronaut.classList.add("astronaut");   // as comma-separated arguments
              let bio = document.createElement("div");
              bio.classList.add("bio");
              let header = document.createElement("h3");
              header.innerHTML = `${rec.firstName} ${rec.lastName}`; 
              bio.appendChild(header);
              let list = document.createElement("ul");
              let item = document.createElement("li");
              let item1 = item.cloneNode();
              item1.innerHTML = `Hours in space: ${rec.hoursInSpace}`;
              list.appendChild(item1);
              let item2 = item.cloneNode();
              if(rec.active){     // if true
                  item2.style.setProperty("color","green");
              }
              item2.innerHTML = `Active: ${rec.active}`;
              list.appendChild(item2);
              let item3 = item.cloneNode();
              // NOTE: rec.skills is an array!
              item3.innerHTML = `Skills: ${rec.skills}`;
              list.appendChild(item3);
              bio.appendChild(list);
              let avatar = document.createElement("img");
              avatar.classList.add("avatar");
              avatar.setAttribute("src",`${rec.picture}`);
              // append everything in the end!
              astronaut.appendChild(bio);
              astronaut.appendChild(avatar);
              container.appendChild(astronaut);
            });
        });
    })
  });