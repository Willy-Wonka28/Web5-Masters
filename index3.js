function generateDid() {
    console.log('Generating DID...');
    // AJAX request to generate DID
    $.ajax({
        url: 'https://shark-app-typoh.ondigitalocean.app/create',
        type: 'POST',
        success: function(response) {
            console.log('I am here')
            console.log(response)
            console.log('DID generated successfully:', response);
            $('#generatedDID').val(response.data.newUserDid);
        },
        error: function(xhr, status, error) {
            console.error('Failed to generate DID: ' + error);
        }
    });
}


function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("copy");
}


function registerUser() {
    // Get user input
    var generatedDID = $('#generatedDID').val();
    var userDID = $('#userDID').val();

    // Check if generatedDID matches userDID
    if (generatedDID === userDID) {
        // Redirect to a new webpage
        window.location.href = 'feed.html';
    } else {
        // Handle the case where DID doesn't match
        alert('DID does not match. Please check your DID.');
    }
}