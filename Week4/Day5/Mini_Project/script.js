const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image:'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image:'https://robohash.org/10?200x200'
    }
];

const divNav = document.getElementById("navbar");
const navbar = document.createElement('navbar');
const span = document.createElement('span');
let logo = document.createTextNode('ROBOFRIENDS')
span.appendChild(logo);
navbar.appendChild(span);
divNav.appendChild(navbar);

function searchRobots(e) {
    const inputValue = e.target.value.toUpperCase();
    let includedRobots = [];
    robots.forEach((element) => {
        if (element.name.toUpperCase().includes(inputValue)) {
            includedRobots.push(element);
        }
    });
    createCards(includedRobots, initial=false)

}

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "inputField")
input.addEventListener('input', searchRobots)
navbar.appendChild(input);

function createCards(robotsArray, initial=true){

    const div = document.getElementById('robot_area');
    if (!initial) {
        div.innerHTML = '';
    }
    robotsArray.forEach((element) =>{
        let robotDiv = document.createElement('div');
        let img = document.createElement("img");
        img.className = "images";
        img.src = element.image;
        robotDiv.appendChild(img);
        let robotName = document.createElement("h4");
        let robotEmail = document.createElement("p");
        let robotDivName = document.createTextNode(element.name)
        let robotDivEmail = document.createTextNode(element.email)
        robotName.appendChild(robotDivName);
        robotEmail.appendChild(robotDivEmail);
        robotDiv.appendChild(robotName);
        robotDiv.appendChild(robotEmail);
        robotDiv.className = "cards";
        div.appendChild(robotDiv);

    });
};

createCards(robots);