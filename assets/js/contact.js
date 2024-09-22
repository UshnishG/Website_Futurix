document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Prepare form data
    const formData = new FormData(this);

    // Send the form data using Fetch API
    try {
        const response = await fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            document.getElementById('statusMessage').innerHTML = "<p style='color: green;'>Thank you! Your question has been submitted successfully. Redirecting to homepage...</p>";
            this.reset(); // Optionally reset the form

            // Redirect to the home page after 3 seconds
            setTimeout(() => {
                window.location.href = 'index.html'; // Replace with your home page URL
            }, 3000); // 3000ms = 3 seconds
        } else {
            document.getElementById('statusMessage').innerHTML = "<p style='color: red;'>Oops! There was a problem submitting your form.</p>";
        }
    } catch (error) {
        document.getElementById('statusMessage').innerHTML = "<p style='color: red;'>Oops! There was a problem submitting your form.</p>";
    }
});
