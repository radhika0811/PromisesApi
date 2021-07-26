import { displayUser } from "./displayUser.js";
export const getUser = () => {
    const numb = document.getElementById('numberOfUsers');
    const url = "https://randomuser.me/api/?results=" + numb.value;
    console.log(url);
    const a = fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data.results);
            displayUser(data.results);
        });
    console.log(a);
}