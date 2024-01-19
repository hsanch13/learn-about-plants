let addPlant = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-plant-btn");
  const plantFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addPlant = !addPlant;
    if (addPlant) {
      plantFormContainer.style.display = "block";
    } else {
      plantFormContainer.style.display = "none";
    }
  });
});

fetch("http://localhost:3000/plant")
    .then(resp => resp.json())
    .then(plantData => renderPlantCards(plantData))

const plantCollection = document.querySelector("#plant-collection")
//console.log(plantCollection)

function renderPlantCards(plantArray){
    //console.log(plantArray)
    plantArray.forEach((plantObject) => {
        // console.log(plantObject) // key: id, common name, scientific_name, default_image, sunlight, watering
        
        const card = document.createElement("div")
        card.className = "card"
        //console.log(card)

        const h1 = document.createElement("h1")
        h1.textContent = plantObject.common_name
        //console.log(plantObject.common_name)
        card.appendChild(h1)

        const img = document.createElement("img")
        img.src = plantObject.default_image.original_url 
        //console.log(plantObject.default_image.original_url)
        img.alt = plantObject.common_name
        img.className = "plant-photo"
        card.appendChild(img)

        // const p = document.createElement("p")
        // p.textContent = plantObject.scientific_name
        // //console.log(plantObject.scientific_name)
        // card.appendChild(p)

        // const h4 = document.createElement("h4")
        // h4.textContent = plantObject.sunlight
        // //console.log(plantObject.sunlight)
        // card.appendChild(h4)

        // const h3 = document.createElement("h3")
        // h3.textContent = plantObject.watering
        // //console.log(plantObject.watering)
        // card.appendChild(h3)

        // //console.log(card)

        // Apply image styles
    img.style.width = '300px';
    img.style.height = '250px';
    img.style.objectFit = 'cover';

    card.style.width = '25%';
    card.style.height = '20%';
    card.style.objectFit = 'cover';
    
    plantCollection.appendChild(card)
    })
}

