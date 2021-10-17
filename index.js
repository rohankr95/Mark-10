const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const notes = document.querySelectorAll(".notes");

const denominations =[2000,500,100,20,10,5,1];


checkButton.addEventListener("click",function(){
    message.style.display="none";
    if(Number (billAmount.value)>0){
        if(Number (cashGiven.value) >= Number (billAmount.value)){
           const returnAmount = cashGiven.value - billAmount.value;
            calculateChange(returnAmount);

        }else{

            printErrorMessage("Do you want to wash plates?");
        }

    }else{
        printErrorMessage("Bill amount is invalid");
    }
});

function calculateChange(returnAmount){

    for(let i=0;i<denominations.length;i++){
        const noOfNotes = Math.trunc(returnAmount/denominations[i]);
        returnAmount = returnAmount % denominations[i];
        notes[i].innerText=noOfNotes;
    }

}

function printErrorMessage(textMessage){
    message.style.display="block";
    message.innerText = textMessage;
}