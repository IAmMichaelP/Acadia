manualLoginButton = document.querySelector('.js-manual-signup-button');
manualLoginButton.addEventListener('click', () => {

    console.log('clicked');
    innerSignUpContainer = document.querySelector('.inner-signup-container');
    console.log(innerSignUpContainer);
    if(innerSignUpContainer.classList.contains('hidden-element')){
        console.log('clicked-inner');

        innerSignUpContainer.classList.remove('hidden-element');
        signUpFacebookButton = document.querySelector('.facebook-button');
        signUpGoogleButton = document.querySelector('.google-button');
        orElement = document.querySelector('.or-element');

        signUpFacebookButton.classList.add('hidden-element');
        signUpGoogleButton.classList.add('hidden-element');
        orElement.classList.add('hidden-element');
        manualLoginButton.classList.add('hidden-element'); 
    } 
});

