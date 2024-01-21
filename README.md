# Let's Learn About Plants!

Are your plant fronds dying left and right? Did someone gift you a plant that you're worried you may unalive? Fear not, this plant
app will help you.

## Description

You are a user who needs a plant app that tells you how to take care of your plants. 

When you first arrive to the app, you see a handful of cards on the page. Each card corresponds to one plant and includes a photo and common name of the plant.

You also have the option to hover over each card to learn more. When you hover over each card, the card expands and shows more information about each plant. Additional plant details include water and sunlight requirements, and the scientific name of the plant.

At the top of the page, you have the option to add a new plant to the page.

## Learning Goals

- Set up four different event listeners to respond to user events: DOM ContentLoaded, Mouseover, Mouseout, Submit

- Use `fetch()` to make a "GET" request, then render the returned toys to the DOM
- Use `fetch()` to make a "POST" request to create a new toy, then add it to the DOM

## Getting Started

All of the plant data is stored in the `db.json` file. You'll want to access this data using a JSON server. Run `json-server --watch db.json` to start the server.

1. Let's tackle adding the form to the page first. Create a variable called "addPlants" using "let" and set its value to false.

2. Create a "DOM Content Loaded" event listener. This event should fire when your HTML document loads completely.

3. Inside your "DOM Content Loaded" event, create a variable for a button called "addBtn" and set it to the HTML element with the id of "new-plant-btn".

4. Now create a variable called "plantFormContainer" and set it to the HTML element with the class "container"

5. Create a click event on the "addBtn" button. When the click event fires, toggle the "addPlant" variable from "false" to "true" and vice versa. If the "addPlant" is true, make the form visible and set the the display style property to "block". If the "addPlant" variable is false, set the display property to "none", hiding the form. Your should now be able to click to add a new plant and the form will display or go away.

6. Let's fetch out data. Access the list of plants for our mock json server. The data is an array of objects.

7. Create a function that renders each plant to the page. For each plant, a card should display a photo of the plant and it's common name. You will need to create the following HTML elements: "div" (coresponds to a variable called "card"), "h1" (coresponds to the common name of the plant), "img" (coresponds to the default image of the plant).

8. Once you get each plant card to diplay onto the page with its common name and a photo, you'll need to adjust the styles of the card and the image using the following: 
        img.style.width = '300px';
        img.style.height = '250px';
        img.style.objectFit = 'cover';
    
        card.style.width = '25%';
        card.style.height = '20%';
        card.style.objectFit = 'cover'; 

9. Cool! Let's get our additional info onto these plant cards. You'll need to create a few more HTML elements. To start, create a variable called "additionalInfo" that creates an HTML element called "div". Add a class list to it that coresponds with "hidden". The other elements you need are below. "AdditionalInfo" should be appended to each one using the class list "hidden".
    - a "p" that coresponds with the scientific name of the plant
    - an "h4" that coresponds with sunlight requirements
    - an "h3" that coresponds with watering requirenents

9. Now add the scientific name, sunlight and watering requirements of each plant to their respective cards. 

10. Add two events listeners -- "mousover" and "mouseout" -- that show the scientific name, sunlight and watering requirements of each plant to their card each time a user mouses over the card. And they should disappear and only the common name of the plant and image should show when a user mouses out of the card.

11. Nice! Now let's get our form to take in some new plant data. Create a variable called "plantForm" and set it to the HTML element class "add-plant-form". 

12. Create a submit event that takes in a new plant object that takes in all of the values from the form. 

13. Once the form is submitted, a new plant card should be rendered to the page and your db.json should update using a POST request. It should look something like this:
 fetch("http://localhost:3000/plant", {
        method: "POST",
        headers: {"Content-Type": "application/json"
    },
    body: JSON.stringify(NewPlantObject)
})
    .then(resp => resp.json())
    .then(newPlantData => console.log(newPlantData))

BOOM! You've done it, happy plantin!

## Authors

Hayley Sanchez

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## Acknowledgments

Inspiration, code snippets, etc.
* (https://github.com/learn-co-curriculum/phase-1-practice-toy-tale)
* perenual.com -- data comes from perenual.com, a buy and sell site for plants with an API.