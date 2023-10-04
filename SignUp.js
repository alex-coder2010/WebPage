let nextId = 1;

let user_info = {
    username : "", 
    email : "",
    password : ""

}

let user_database = []
document.getElementById("submit_button").onclick = function(){
    let new_user = Object.assign({}, user_info);
    new_user["username"] = document.getElementById("username").value;
    new_user["password"] = document.getElementById("password").value;
    new_user["email"] = document.getElementById("email").value;
    new_user["id"] = nextId
    nextId++;
    user_database.push(new_user);
    document.getElementById("password").value = ""
    document.getElementById("email").value = ""
    document.getElementById("username").value = ""
    alert("User submitted!");
    console.log("User Database:", user_database);
}
