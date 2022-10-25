// Write a JavaScript program to calculate the volume of a sphere.

const form = document.querySelector('form');

function calculateSphereVolume(event){
    event.preventDefault();
    const radius = document.querySelector('[name=radius]').value;


    if (radius=== ''){
        alert('Fill in the radius, please!');
    } else{
        const volume = document.querySelector('[name=volume]');
        const vol = 4/3*Math.PI*radius**3;
        volume.value = parseFloat(vol).toFixed(2);
        
    }
}

form.addEventListener('submit', calculateSphereVolume);