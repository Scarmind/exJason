/* 
console.dir(document);
document.title = "Nuoco Titolo";
console.log(document.title);
document.addEventListener("DOMContentLoaded", function() {
    console.log(document.body);
    console.dir(document.body);
    document.body.style.backgroundColor = "purple";
    let p =  document.getElementById("para");
    console.dir(p);
    let input = document.getElementById("txt");
    p.innerHTML = "Ciao <strong>" + input.value + "</strong>"
    //p.innerText = "Ciao <strong> a tutti </strong>"
    console.dir(document.getElementById("txt"));
    p.style.color = "gold";
    p.title = "Creato con Javascript"
    p.className = "abc";
    let titolo = document.getElementsByClassName("tit");
    console.dir(titolo);

    let par = document.getElementsByTagName("p");
    console.log(par[0]);
    par[0].style.color = "green";

    let boxp = document.querySelector("#box1 p");
    console.log(boxp);
    let boxpAll = document.querySelectorAll("#box1 p");
    console.log(boxpAll[1]);
})
*/

let xhr = new XMLHttpRequest();
console.log(xhr.readyState);
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        let obj = JSON.parse(xhr.responseText);
        console.log(obj);
        for (const user of obj) {
            //let i = user.id;
            let grid =  document.querySelector(".grid");
            console.log(user.name);
            //console.log(i);
            grid.innerHTML += "<tr> <th scope='row'>" + user.id + "</th> <td>" + user.name + "</th> <td>" + user.username + "</th> <td>" + user.email + "</th> <td>" + user.phone + "</th> <tr>";
        }
    }
}


