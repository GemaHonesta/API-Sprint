document.getElementById("button").addEventListener("click", function(){   
fetch('https://api.taylor.rest/')
    .then(response => response.json())
    .then((data) => {
        document.getElementById("resultat").insertAdjacentHTML("afterend", data.quote)
    })
})

