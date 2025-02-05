document.addEventListener("DOMContentLoaded", function () {
    const donationForm = document.getElementById("donation-form");

    donationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        
        // Get user inputs
        const name = document.getElementById("name").value.trim();
        const amount = document.getElementById("amount").value.trim();
        
        if (name === "" || amount === "" || isNaN(amount) || amount <= 0) {
            alert("Please enter a valid name and donation amount.");
            return;
        }

        // UPI Payment Details (Replace with actual UPI ID)
        const upiId = "9833431924@SUPERYES"; // Replace with your UPI ID
        const payeeName = "samarth jagakar"; // Replace with your organization name
        
        // Create the UPI Payment Link
        const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&mc=&tid=&tr=&tn=Donation%20for%20Chetna%20Foundation&am=${amount}&cu=INR`;

        // Redirect user to UPI app
        window.location.href = upiLink;
    });
});