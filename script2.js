
let Students = JSON.parse(localStorage.getItem('students')) || [];
console.log('Loaded students:', Students); // For debugging
const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}



const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    }
    
    
    else {
       

    

            if(passwordValue === '')
                 {
                setError(password, 'Password is required');
                 } 
            else if (passwordValue.length < 8 )
                 {
                setError(password, 'Password is at least 8 characters')
                 } 
            else {
                   
                        for (const std of Students) {
                            if ((usernameValue==std.username)&(passwordValue==std.password))
                            {
                                alert("welcome");
                                password.parentElement.querySelector('.error').innerText='';
                                window.localStorage.setItem('current-user' , JSON.stringify(std))
                                window.location.href = 'index.html';

                                break;
                            
                            }
                            else if((usernameValue==std.username)&(passwordValue!=std.password)){
                                setError(password, 'Password is wrong');


                            }
                        }
                    } 
                 


            }

};
