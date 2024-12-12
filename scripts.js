$(document).ready(function () {
    $("#registrationForm").on("submit", function (e) {
        let isValid = true; // Flag to track validation
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();
        let dob = $("#dob").val().trim();
        let gender = $("#gender").val();
        let address = $("#address").val().trim();
        let interests = $("input[name='interests[]']:checked");
        let education = $("#education").val();

        // Clear previous alerts
        $(".error-message").remove();

        // Validate Name
        if (!name) {
            isValid = false;
            $("#name").after("<span class='error-message' style='color: red;'>Name is required.</span>");
        }

        // Validate Email
        if (!email || !validateEmail(email)) {
            isValid = false;
            $("#email").after("<span class='error-message' style='color: red;'>Enter a valid email address.</span>");
        }

        // Validate Phone
        if (!phone || !validatePhone(phone)) {
            isValid = false;
            $("#phone").after("<span class='error-message' style='color: red;'>Enter a valid phone number.</span>");
        }

        // Validate Date of Birth
        if (!dob) {
            isValid = false;
            $("#dob").after("<span class='error-message' style='color: red;'>Date of Birth is required.</span>");
        }

        // Validate Gender
        if (!gender) {
            isValid = false;
            $("#gender").after("<span class='error-message' style='color: red;'>Select your gender.</span>");
        }

        // Validate Address
        if (!address) {
            isValid = false;
            $("#address").after("<span class='error-message' style='color: red;'>Address is required.</span>");
        }

        // Validate Interests
        if (interests.length === 0) {
            isValid = false;
            $("input[name='interests[]']").last().after("<span class='error-message' style='color: red;'>Select at least one interest.</span>");
        }

        // Validate Education
        if (!education) {
            isValid = false;
            $("#education").after("<span class='error-message' style='color: red;'>Select your highest qualification.</span>");
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            e.preventDefault();
        }
    });

    // Helper Functions
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^\d{10}$/; // Matches 10-digit numbers
        return phoneRegex.test(phone);
    }
});
