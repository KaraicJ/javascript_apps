const ekran = document.getElementById("ekran");
const dugmici = document.querySelectorAll("#dugmici button");

dugmici.forEach((dugme) => {
    dugme.addEventListener("click", () => {
        let vrednost = dugme.innerHTML;
        if(vrednost === "C"){
            ekran.value="";
        }
        else if(vrednost === "="){
            try {
                let rezultat = eval(ekran.value);
                ekran.value = rezultat;
            } catch (error) {
                ekran.value = "Greska!";
            }
            
        }
        else{
            ekran.value+=dugme.innerHTML;
        }
    
    });
});