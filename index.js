fetch("http://localhost:3000/plant")
.then(resp => resp.json())
.then(plantData => console.log(plantData))