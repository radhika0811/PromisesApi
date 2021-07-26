import { createUser } from "./createUser.js";

export const createTemplate = (customUser) => {
    const userDisplay = document.createElement('div');
    userDisplay.className = "userDisplay";
    const gender = document.createElement('h4');
    gender.className = "gender";
    gender.innerHTML = "Gender : " + customUser.gender;
    const email = document.createElement('h3');
    email.className = "email";
    email.innerHTML = "Email : " +
        customUser.email;
    const name = document.createElement('h2');
    name.className = "name";
    name.innerHTML = customUser.name.title + " " + customUser.name.first + " " + customUser.name.last;
    const phone = document.createElement('h3');
    phone.className = "phone";
    phone.innerHTML = "Phone No: " + customUser.phone;
    const userImage = document.createElement('img');
    userImage.className = "userImage";
    userImage.src = customUser.picture.large;
    userDisplay.appendChild(userImage);
    userDisplay.appendChild(name);
    userDisplay.appendChild(email);
    userDisplay.appendChild(phone);
    userDisplay.appendChild(gender);
    return userDisplay;
}

export const displayUser = (userValue) => {
    const userList = document.getElementById('content-1');
    userList.innerHTML = "";
    console.log(userList.innerHTML);
    userValue.forEach((userInfo) => {
        userList.appendChild(createTemplate(userInfo));
    });
};