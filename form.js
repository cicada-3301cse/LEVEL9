var pass = "SEAZER";
console.log("connect the images to make it out")

function activate(){
    var paswd = document.getElementById("password").value;
    if (paswd == pass) {
        //alert("correct password");
        //window.location.replace('https://www.google.com')
        window.location.href = "https://cicada-3301cse.github.io/level10/";
    }
    else{
        alert("wrogn password");
    }
}