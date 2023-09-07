

const darkMode = document.querySelector(".darkMode")
const text = document.querySelector("#text")
const darkBoll = document.querySelector("#darkBoll")

darkMode.addEventListener("click", ()=>{
    if (darkBoll.classList.toggle("active")){
        darkBoll.style.backgroundColor = "green";
        darkMode.style.backgroundColor = "#fff";
        darkBoll.style.left = "35px"
        document.body.style.backgroundColor = "black"
        text.style.color = "#fff"
    }else{
        darkBoll.style.backgroundColor = "#fff";
        darkBoll.style.left = "0";
        darkMode.style.backgroundColor = "#666";
        document.body.style.backgroundColor = "rgb(144, 140, 140)"
        text.style.color = "#000"

    }
})

