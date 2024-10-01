document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.contact-form-input');

    formInputs.forEach(input => {
        input.addEventListener('focus', handleFocus);
        input.addEventListener('blur', handleBlur);
        input.addEventListener('input', handleInput);
    });

    function handleFocus(event) {
        const label = event.target.previousElementSibling;
        label.classList.add('contact-form-label--enable');
    }

    function handleBlur(event) {
        const label = event.target.previousElementSibling;
        if (!event.target.value) {
            label.classList.remove('contact-form-label--enable');
        }
    }

    function handleInput(event) {
        const label = event.target.previousElementSibling;
        if (event.target.value) {
            label.classList.add('contact-form-label--enable');
        } else {
            label.classList.remove('contact-form-label--enable');
        }
    }
});
