console.log("Page is Ready")
var save_value = document.getElementById("save_value")

save_value.onclick = function () {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var gender = document.getElementById("gender").value;
    var birthdate = document.getElementById("birthdate").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var contact = document.getElementById("contact").value;

//-----------------------------for fields cleaning------------------------//
    var firstname1 =document.getElementById("firstname").value=null;
    var lastname1 = document.getElementById("lastname").value=null;
    var gender1 = document.getElementById("gender").value=null;
    var birthdate1 = document.getElementById("birthdate").value=null;
    var address1 = document.getElementById("address").value=null;
    var contact1 = document.getElementById("contact").value=null;

    var user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

    var p = /^[a-z0-9_.]+\@[a-z09]+\.[a-z]{2,5}$/;
    var n2 = document.getElementById("email");
    if (!n2.value.match(p)) {
        alert("Email Invalid");

    } else if (user_records.some((v) => { return v.email == email })) {
        alert("Duplicate email is not allow.")

    } else {
        user_records.push({
            "firstname": firstname,
            "lastname": lastname,
            "gender": gender,
            "birthdate": birthdate,
            "email": email,
            "address": address,
            "contact": contact       
        })
        localStorage.setItem("users", JSON.stringify(user_records));
    }

}
