let expDate = new Date();
expDate.setDate(expDate.getDate() + 7);

document.cookie = "name=Maksym; expires=" + expDate.toUTCString();
document.cookie = "age=13; expires=" + expDate.toUTCString();

let cookies = document.cookie.split(";");

cookies.forEach(function(cookie) {
    document.write(cookie.trim() + "<br>");
});