const div = document.getElementById('character');
const button = document.getElementById('button');
const nameCh = document.createElement('h1')
const heightCh = document.createElement('p')
const genderCh = document.createElement('p')
const birthYearCh = document.createElement('p')
const homeWorldCh = document.createElement('p')
button.addEventListener('click', findSomeone);


function spinningWheal(){
    div.innerHTML = "";
    nameCh.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
    div.appendChild(nameCh);
    heightCh.innerText = ''
    div.appendChild(heightCh);
    genderCh.innerText = ''
    div.appendChild(genderCh);
    birthYearCh.innerText = ''
    div.appendChild(birthYearCh);
    homeWorldCh.innerText = '' 
    div.appendChild(homeWorldCh);

}

function someError(){
    div.innerHTML = "";
    nameCh.innerText = "Oh No! That person isn't available.";
    div.appendChild(nameCh);
    heightCh.innerText = ''
    div.appendChild(heightCh);
    genderCh.innerText = ''
    div.appendChild(genderCh);
    birthYearCh.innerText = ''
    div.appendChild(birthYearCh);
    homeWorldCh.innerText = '' 
    div.appendChild(homeWorldCh);
}

let personNumber

function findSomeone(e) {
    spinningWheal();
    let newPersonNumber = Math.floor(Math.random() * 83) + 1
    while (personNumber === newPersonNumber) {
        newPersonNumber = Math.floor(Math.random() * 83) + 1
    }
    personNumber = newPersonNumber
    
    fetch(`https://www.swapi.tech/api/people/${personNumber}`)
            .then((res) => {
                if(res.status != 200){
                    throw new Error ("failed status");
                } else {
                    return res.json()  
                }
            })
            .then((obj) => appendData(obj)) 
            .catch((err) => {
                console.log("IN THE CATCH", err);
                someError();
            });
}


function appendData(character){
        div.innerHTML = "";
        nameCh.innerText = `Name: ${character.result.properties.name}`;
        div.appendChild(nameCh);
        heightCh.innerText = `Height: ${character.result.properties.height}`;
        div.appendChild(heightCh);
        genderCh.innerText = `Gender: ${character.result.properties.gender}`;
        div.appendChild(genderCh);
        birthYearCh.innerText = `Birth year: ${character.result.properties.birth_year}`;
        div.appendChild(birthYearCh);

        const homeWorld = character.result.properties.homeworld;
        fetch(homeWorld)
                .then((res) => {
                    if(res.status != 200){
                        throw new Error ("failed status")
                    } else {
                        return res.json()  
                    }
                })
                .then((obj) => findPlanet(obj)) 
                .catch((err) => {
                    console.log("IN THE CATCH", err);
                    someError();
                });
}


function findPlanet(homeW) {
    homeWorldCh.innerText = `Home World: ${homeW.result.properties.name}`;
    div.appendChild(homeWorldCh);
}



    


