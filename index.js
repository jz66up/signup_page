const pwdruleEl = document.querySelector(".pwdrule");
const passwordinputEl = document.querySelector(".passwordinput");
const confirmpassinputEl = document.querySelector(".confirmpassinput")
const confirmpasserrorEl = document.querySelector(".confirmpasserror")

pwdruleEl.style.display = "none";
confirmpasserrorEl.style.display = "none";

passwordinputEl.addEventListener("focus", () => {
    pwdruleEl.style.display = "block";
});



passwordinputEl.addEventListener("click", ()=>{
    console.log(passwordinputEl.value);
})
confirmpassinputEl.addEventListener("click", ()=>{
    console.log(confirmpassinputEl.value);
})

confirmpassinputEl.addEventListener("input", ()=>{
    if (passwordinputEl.value != confirmpassinputEl.value) {
        confirmpasserrorEl.style.display = "block";
        confirmpassinputEl.setCustomValidity("");
        return false
    } else {
        confirmpasserrorEl.style.display = "none";
        confirmpassinputEl.reportValidity();
        return true
    }
})
    
style.borderColor = "red";
