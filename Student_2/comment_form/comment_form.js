// initializing the variables
const popupContainer = document.getElementById('popup-container');
const popupOverlay =document.getElementById('popup-overlay');
const submit = document.getElementById('submit');

const required = document.getElementById('required');




// opening the popup
function openPopup(){
    if(required.value == 0){
        return
    }
    popupContainer.style.display = 'block'
    popupOverlay.style.display = 'block'
}

// getting the value of the radio button
function checkedButton(){
    if(document.getElementById('zero').checked) {   
        return document.getElementById('zero').value;
    }   
    if(document.getElementById('one').checked) {   
        return document.getElementById('one').value;
    }   
    if(document.getElementById('two').checked) {   
        return document.getElementById('two').value;
    }   
    if(document.getElementById('three').checked) {   
        return document.getElementById('three').value;
    }   
    if(document.getElementById('four').checked) {   
        return document.getElementById('four').value;
    }   
    if(document.getElementById('five').checked) {   
        return document.getElementById('five').value;
    }   
    if(document.getElementById('six').checked) {   
        return document.getElementById('six').value;
    }   
    if(document.getElementById('seven').checked) {   
        return document.getElementById('seven').value;
    }   
    if(document.getElementById('eight').checked) {   
        return document.getElementById('eight').value;
    }   
    if(document.getElementById('nine').checked) {   
        return document.getElementById('nine').value;
    }   
    if(document.getElementById('ten').checked) {   
        return document.getElementById('ten').value;
    }   
}
function getOption(Id) {
    selectElement = document.getElementById(Id)
    return selectElement.value
    
}


// setting up the mail function
function sendEmail() {
    var rating = checkedButton()
    var feedback = document.getElementById('required').value;
    var mailtoLink = "mailto:senura.20210689@iit.ac.lk?subject=Customer response &body="
    + encodeURIComponent("Website rating : " + rating + "\n\nReason for the rating : " + feedback
    + "\n\nMethod used to complete the task : "+ getOption('questionThree')
    + "\n\nMethod that will be used if the task was done again : "+getOption('questionFour'));
    window.location.href = mailtoLink;
}