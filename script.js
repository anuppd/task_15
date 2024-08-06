function changeBackground (id) {
    const colour = document.getElementById(id);
    colour.addEventListener("click", () => {
        colour.style.backgroundColor = id;
    })
};

changeBackground("red");
changeBackground("green");
changeBackground("yellow");
changeBackground("blue");


function getValue() {
    let value = document.getElementById("inputField").value;
    document.getElementById("hello").innerHTML = "Hello, " + value;
}