// initial variables
let win = 0;
let loss = 0;

// run the game 
function runSimulation(){
   const numberOfTimes = document.getElementById("numberOfTimes").value;
   const strategy = document.querySelector('input[name="strategy"]:checked').value;

for(let i=0; i<numberOfTimes; i++){
    const DoorWithCar = Math.floor(Math.random()* 3) + 1;
    const PickedDoor = Math.floor(Math.random() * 3) + 1;
    
    let hostOpens;
    do{
        hostOpens = Math.floor(Math.random() * 3) + 1;
    }while(hostOpens === DoorWithCar || hostOpens === PickedDoor);

    let finalChoice;

    if(strategy === 'switch'){
        finalChoice = 6 - hostOpens - PickedDoor;
    }else{
        finalChoice = PickedDoor;
    }

    
    if(finalChoice === DoorWithCar){
        win++;
    } else{
        loss++;
    }
}

document.getElementById("run").disabled = true;
document.getElementById("results").innerHTML = `<h1>Results</h1>
<p>The simulation ran for <b>${numberOfTimes}</b> and as the strategy <b>${strategy}</b> was chosen.</p>
<h4>won ${win} times and lost ${loss} times</h4>`;

}

// reset game function
function reset(){
win = 0;
loss = 0;
document.getElementById("results").innerHTML = '';
document.getElementById("run").disabled = false;
}
