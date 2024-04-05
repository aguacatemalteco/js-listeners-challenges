document.querySelector("#sameAddress").addEventListener("click", function() {
    if(this.checked){
        let text = document.getElementById("bill").value;
        document.getElementById("home").value = text;
        document.getElementById("home").disabled = true;
    }
    else {
        document.getElementById("home").value = "";
        document.getElementById("home").disabled = false;
    }
})

// document.querySelector("#sameAddress").addEventListener("click", function() {
//     bill = document.querySelector("#bill");
//     home = document.querySelector("#home");

//     if(this.checked){
//         home.value = bill.value;
//         home.disabled = true;
//     }
//     else {
//         home.value = "";
//         home.disabled = false;
//     }
// })