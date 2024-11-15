let totalMatches = 50;

const matchesCount = document.getElementById("count");
const input = document.getElementById("input");
const bouton = document.getElementById("validate");
const message = document.getElementById("message");

const takeMatches = (matchesTaken) => {
    totalMatches -= matchesTaken;
    return totalMatches;
}

const update = () => {
    matchesCount.textContent = `Nombre d'allumettes restantes: ${totalMatches}`;
}

let currentPlayer = 1;
const switchPlayer = () =>{
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    document.getElementById("player").textContent = `Joueur ${currentPlayer}`;
}
bouton.addEventListener("click", () => {
    let matchesNumber = Number(input.value); 
    console.log(matchesNumber)
    if(matchesNumber <1 || matchesNumber>6){
        message.textContent = "Choisis un nombre entre 1 et 6";
    }
    else if (isNaN(matchesNumber) || matchesNumber <= 0 || matchesNumber > totalMatches) {
        message.textContent = "Choisis un nombre valide";
    } else {
        message.textContent = "";
        totalMatches = takeMatches(matchesNumber); 
        if(totalMatches===0){
            message.textContent = "You are the WINNER!"; 
        }
        }switchPlayer();
        update(); 
    } 
);







