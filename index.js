const input = document.getElementById("search");
const charname = document.querySelector(".PokeName");
const type = document.querySelector(".PokeType");
const height = document.querySelector(".PokeHeight");
const weight = document.querySelector(".PokeWeight");
const bio = document.querySelector(".PokeBio");
const img = document.querySelector(".PokeImg")


function submit() {
    var realinput = input.value.toLowerCase();
    console.log(realinput)

    fetch(`https://pokeapi.co/api/v2/pokemon/${realinput}`)

    .then(response => response.json())

    .then(data => {
        console.log(data)
        charname.innerHTML = data.name;
        type.innerHTML = data.types[0].type.name;

        height.innerHTML = data.height /= 10;
        var kg = data.weight;
        var lbs = kg /= 10;
        weight.innerHTML = Math.round(lbs *= 2.20462);
        
        img.src = data.sprites.versions['generation-v']['black-white'].animated.front_default

        var getabilities = data.abilities[0].ability.url
        fetch(getabilities)

        .then(response => response.json())

        .then (data => {
            console.log(data)
            var getbio = data.effect_entries[1].short_effect
            bio.innerHTML = getbio
        })
    })
}