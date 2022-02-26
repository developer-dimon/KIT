async function getResponse() {
    const span = document.createElement("span");
    span.className = "spinner-border";
    span.style = "width: 1rem; height: 1rem; border-width: .2em;";
    document.getElementById("loader").appendChild(span);
    const response = await fetch("https://randomuser.me/api/");
    if (response) {
        span.parentNode.removeChild(span);
    }
    let res = await response.json();
    let content = res["results"][0]
    document.getElementById("Female").innerHTML = `Пол: ${content["gender"]}`;
    document.getElementById("Surname").innerHTML =
        `Фамилия имя: ${content["name"]["first"]} ${content["name"]["last"]}`;
    document.getElementById("Address").innerHTML = `Город: ${content["location"]["city"]}`;
    document.getElementById("Email").innerHTML = `Email: ${content["email"]}`;
    document.getElementById("DataAge").innerHTML =
        `Дата рождения, возраст: ${content["dob"]["date"].slice(0, 10)}, ${content["dob"]["age"]}`;
    document.getElementById("Phone").innerHTML = `Телефон: ${content["phone"]}`;
    document.getElementById("Avatar").src = content["picture"]["large"];
}