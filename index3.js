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
            $('#generatedDID').val(response.did);
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
    var username = $('#userName').val();
    // Add additional code to handle registration
    // ...
}