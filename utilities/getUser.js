import { displayUser } from "./displayUser.js";
export const getUser = async() => {
    const numb = document.getElementById('numberOfUsers');
    const url = "https://randomuser.me/api/?results=" + numb.value;
    console.log(url);
    const a = await fetch(url);
    console.log(a);
    const b = await a.json();
    displayUser(b.results);
}