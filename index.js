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
        //console.log(plantObject) // key: id, common name, scientific_name, default_image, sunlight, watering
        
        const card = document.createElement("div")
        card.className = "card"
        //console.log(card)

        const h1 = document.createElement("h1")
        h1.textContent = plantObject.common_name
        //console.log(plantObject.common_name)
        card.appendChild(h1)

        const img = document.createElement("img")
        img.src = plantObject.default_image ? plantObject.default_image.original_url : "placeholder_url";
        //console.log(plantObject.default_image.original_url)
        img.alt = plantObject.common_name
        img.className = "plant-photo"
        card.appendChild(img)
        //console.log(card)
        
        // Apply image styles
        img.style.width = '300px';
        img.style.height = '250px';
        img.style.objectFit = 'cover';
    
        card.style.width = '25%';
        card.style.height = '20%';
        card.style.objectFit = 'cover';

        const additionalInfo = document.createElement("div")
        // console.log(additionalInfo)
        // additionalInfo.classList.add("extra-info")
        additionalInfo.classList.add("hidden")

        const p = document.createElement("p")
        p.textContent = plantObject.scientific_name
        //console.log(plantObject.scientific_name)
        additionalInfo.appendChild(p)

        const h4 = document.createElement("h4")
        h4.textContent = plantObject.sunlight
        //console.log(plantObject.sunlight)
        additionalInfo.appendChild(h4)

        const h3 = document.createElement("h3")
        h3.textContent = plantObject.watering + (" watering")
        //console.log(plantObject.watering)s
        additionalInfo.appendChild(h3)

        card.appendChild(additionalInfo)

    card.addEventListener("mouseover", () => {
        additionalInfo.classList.remove("hidden")
    })

    card.addEventListener("mouseout", () => {
        additionalInfo.classList.add("hidden")
    }) 

    plantCollection.appendChild(card)    
    })
}

const plantForm = document.querySelector(".add-plant-form")
//console.log(PlantForm)
plantForm.addEventListener("submit", (e) => {
    e.preventDefault()
    //console.log(e.target["scientic-name"].value)
 const NewPlantObject = {
        common_name: e.target.name.value,
        image: e.target.image.value,
        scientific_name: e.target["scientic-name"].value,
        sunlight: e.target.sunlight.value,
        watering: e.target.water.value,
    }
    renderPlantCards([NewPlantObject])
    postPlant(NewPlantObject)
})

function postPlant(NewPlantObject){
    fetch("http://localhost:3000/plant", {
        method: "POST",
        headers: {"Content-Type": "application/json"
    },
    body: JSON.stringify(NewPlantObject)
})
    .then(resp => resp.json())
    .then(newPlantData => console.log(newPlantData))
}