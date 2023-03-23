const planets = [
    {name:"Mercury", moons:0}, 
    {name:"Venus", moons:0}, 
    {name:"Earth", moons:1}, 
    {name:"Mars", moons:0}, 
    {name:"Jupiter", moons:2}, 
    {name:"Saturn", moons:3}, 
    {name:"Uranus", moons:4}, 
    {name:"Neptune", moons:0}
] 

for (const planet of planets){
    // console.log('planet:',planet)
    const planetDiv = document.createElement("div")
    div.classList.add("planet" , planet.name.toLowerCase())
    // div.classList.add(planet.name.toLowerCase())
    
for (let i=0; i < planet.moons; i++){
    const moonDiv =document.createElement("div")
    moonDiv.classList.add("moon")
    moonDiv.style.left = i * 10 + "px"
    div.appendChild(moonDiv)
}

    const section = document.querySelector(".listPlanets")
    section?.appendChild(div)
}