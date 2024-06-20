// popup.js
document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('contact-popup');
    var closeBtn = document.querySelector('.close-btn');
    var contactForm = document.getElementById('contactForm');

    function showPopup() {
        popup.style.display = 'block';
    }

    function hidePopup() {
        popup.style.display = 'none';
        setTimeout(showPopup, 120000); // 2 minutes in milliseconds
    }

    closeBtn.onclick = function () {
        hidePopup();
    }

    window.onclick = function (event) {
        if (event.target == popup) {
            hidePopup();
        }
    }

    // Show the popup after 5 seconds initially
    setTimeout(showPopup, 5000);

    // Handle form submission
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        var formData = new FormData(contactForm);
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert('Form submitted successfully!');
                contactForm.reset();
                hidePopup();
            } else {
                alert('Form submission failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again later.');
        });
    });
});
