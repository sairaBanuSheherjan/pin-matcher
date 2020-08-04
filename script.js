
 //Generating random Number
 const generateButton = document.getElementById('randomGenerator');
generateButton.addEventListener('click', function () {
    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    const randomPin = document.getElementById('generatorPinNum');
    randomPin.value = randomNumber;
})

//showing  number in calculator which is clicked by user

function displayNumber(buttonNumber){
    var inputPinNum = document.getElementById('userInputNum').value;
    var currentPinNum =inputPinNum+buttonNumber;
    document.getElementById('userInputNum').value = currentPinNum;
   
}

//click in backspace button
function backspaceButton() {
            var digit = "";
            var pinNum= document.getElementById('userInputNum').value;
            for (let j = 0; j < pinNum.length-1; j++) {
                digit = digit+pinNum[j];
           }
           document.getElementById('userInputNum').value = digit;
}

// Click in C button
 function clearButton() {
    document.getElementById('userInputNum').value = '';
}

// function for try count section //

function countCheck(){
    const tryCountNumber = document.getElementById("tryCount");
    const tryLeftValue = parseInt(tryCountNumber.innerText);
    const remainingTest = tryLeftValue - 1;
    tryCountNumber.innerText = remainingTest;
    if(tryCountNumber.innerText == 0){
        document.getElementById('submitButton').disabled= true;
    }
}

//submitting a pin number to check whether the pin is matched or not with randomNumber
function pinNumMatch(){
    var randomGenerateCode=document.getElementById('generatorPinNum').value;
    var takeInputCode=document.getElementById('userInputNum').value;
             if(takeInputCode.length == 4){
                  if(parseInt(randomGenerateCode) == parseInt(takeInputCode)){

                          document.getElementById('pinMatch').style.display='block';
                          var success= document.getElementById('firstPartition');
                                success.style.display='none'; 
                                var success= document.getElementById('secondPartition');
                                success.style.display='none'; 
                                document.getElementById('pinNotMatch').style.display='none';



                  }else{

                    document.getElementById('pinNotMatch').style.display='block';
                         countCheck();
                   
                 
                  }
                   

             }else{
                 alert('Please insert four Digit valid numbers');

             }


 }


