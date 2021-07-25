function setEmployee() {
    var userName = document.getElementById("name").value;
    var gender = "";
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if (male.checked == true) {
        gender = male.value;
    } else if (female.checked == true) {
        gender = female.value;
    }
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;

    function User(userName, gender, address, education, profession) {
        this.userName = userName;
        this.gender = gender;
        this.address = address;
        this.education = education;
        this.profession = profession;
    }

    var user1 = new User(userName, gender, address, education, profession);
    var users = JSON.parse(localStorage.getItem("people")) || []
    users.push(user1)
    localStorage.setItem("people", JSON.stringify(users));
}

function getData() {
    var values = JSON.parse(localStorage.getItem("people"));
    console.log(values);
}