import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener("input", throttle(() => {
    const savedInfo = {
        email: input.value,
        message: textarea.value
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(savedInfo));
}, 500));

const localStorageInfo = localStorage.getItem("feedback-form-state");
const parsedLocalStorage = JSON.parse(localStorageInfo);
if (localStorageInfo) {
    input.value = parsedLocalStorage.email;
    textarea.value = parsedLocalStorage.message;
} else {
     input.value = "";
    textarea.value = "";
};



form.addEventListener("submit", (event) => {
     event.preventDefault();

    
   
     const savedInfo = {
        email: input.value,
        message: textarea.value
     };
    console.log(savedInfo);
    
    //if (input.value === '' || textarea.value === '') {
        //alert('All fields must be filled');
       // return; 
    //}

localStorage.removeItem("feedback-form-state");
     input.value = "";
    textarea.value = "";

}
    
);



   
   


 
 

     

