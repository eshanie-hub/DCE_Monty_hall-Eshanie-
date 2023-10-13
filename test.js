// Test cases
function runSimulation(numberOfTimes, strategy){
   let win = 0;
   let loss = 0;

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

return {win, loss};
}

function reset(){
win = 0;
loss = 0;
document.getElementById("results").innerHTML = '';
document.getElementById("run").disabled = false;
}


function testMontyHallSimulation() {
    // Test case 1: Switch strategy
    const resultSwitch = runSimulation(1000, 'switch');
    console.log('Testing "Switch" strategy...');
    assert(resultSwitch.win > 0, 'Expected wins with "Switch" strategy');
    assert(resultSwitch.loss > 0, 'Expected losses with "Switch" strategy');
    assert(resultSwitch.win + resultSwitch.loss === 1000, 'Total simulations should be 1000');

    // Test case 2: Stay strategy
    const resultStay = runSimulation(1000, 'stay');
    console.log('Testing "Stay" strategy...');
    assert(resultStay.win > 0, 'Expected wins with "Stay" strategy');
    assert(resultStay.loss > 0, 'Expected losses with "Stay" strategy');
    assert(resultStay.win + resultStay.loss === 1000, 'Total simulations should be 1000');
}

function assert(condition, message) {
    if (!condition) {
        console.error(`Assertion failed: ${message}`);
    } else {
        console.log('Assertion passed');
    }
}

testMontyHallSimulation();
