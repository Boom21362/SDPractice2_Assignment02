class Form {
    constructor(name, tel, email, address, houseType, pettingType, ownPet, interestCheck) {
        this.name = name;
        this.tel = tel;
        this.email = email;
        this.address = address;
        this.houseType = houseType;
        this.pettingType = pettingType;
        this.ownPet = ownPet;
        this.interestCheck = interestCheck;
    }
}

function validateAndSubmit() {
    let name = document.getElementById("names").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let houseType = document.getElementById("houseType").value;
    let ownPet = document.getElementById("amount").value;
    let interestCheck = document.getElementById("interestCheck");

    let selectedRadio = document.querySelector('input[name="petting"]:checked');
    let pettingType = selectedRadio ? selectedRadio.value : null;

    let completecheck = true;
    
    if (pettingType === null) {
        alert("Please add petting type (inside/outside)");
        completecheck = false;
    }
    
    if (ownPet <= 0 || ownPet >= 100 || ownPet === "") {
        alert("Please input the amount of owned pet between 0-100");
        completecheck = false;
    }
    
    if (interestCheck.checked) {
        console.log("Checkbox checked!");
    } else {
        alert('Please agree to the "expression of interest and *does not* guarantee the adoption of the dog" checkbox');
        completecheck = false;
    }
    
    if(completecheck === false){
        return;
    }

    let form1 = new Form(name, tel, email, address, houseType, pettingType, ownPet, interestCheck.checked);
    alert("Form sent successfully!");
    console.log("Form completed Horay!");
    /*console.log(
        name +
            " " +
            tel +
            " " +
            email +
            " " +
            address +
            " " +
            houseType +
            " " +
            pettingType +
            " " +
            ownPet +
            " " +
            interestCheck
    );*/
}