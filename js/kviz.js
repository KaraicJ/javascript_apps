const pitanja = [
    {
        tekst: "Koji je glavni grad Francuske?",
        odgovori : ["Berlin", "Minhen", "Pariz", "Bukurest"],
        tacan: "Pariz"
    },
     
    {
        tekst: "Koliko je 5+3?",
        odgovori : ["5", "7", "4", "8"],
        tacan: "8"
    },

    {
        tekst: "Na koliko stepeni kljuca voda?",
        odgovori : ["99", "80", "150", "100"],
        tacan: "100"
    },
]

let indeksPitanja = 0;
let poeni = 0;

const pitanjeElement = document.getElementById("pitanje");
const odgovoriElement = document.getElementById("odgovori");
const dugmeDaljeElement = document.getElementById("dalje");
const rezultatElement = document.getElementById("rezultat");

function prikazipitanje(){

    dugmeDaljeElement.style.display = "none";
    pitanjeElement.innerHTML = pitanja[indeksPitanja].tekst;
    odgovoriElement.innerHTML = "";
    pitanja[indeksPitanja].odgovori.forEach((odgovor) => {
        const dugme = document.createElement("button");
        dugme.addEventListener("click", () => {
            let odgKorisnika = odgovor;
            if(odgKorisnika == pitanja[indeksPitanja].tacan){
                poeni++;
                dugme.style.backgroundColor = "green";
                dugmeDaljeElement.style.display = "block";
            }
            else{
                dugme.style.backgroundColor = "red";
                dugmeDaljeElement.style.display = "block";
            }

        })
        dugme.innerHTML = odgovor;
        odgovoriElement.appendChild(dugme);
})
}

dugmeDaljeElement.addEventListener("click", () => {
    indeksPitanja++;
    if(indeksPitanja==pitanja.length){
        pitanjeElement.style.display = "none";
        odgovoriElement.style.display = "none";
        dugmeDaljeElement.style.display = "none";
        rezultatElement.style.display = "block";

        rezultatElement.innerHTML = `Osvojili ste ${poeni} poena!`;
    }
    else{
        prikazipitanje();
    }
})

prikazipitanje();
