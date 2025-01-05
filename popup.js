document.getElementById('summarizeButton').addEventListener('click', () => {
    const url = document.getElementById('text_input').value;
    
    if(!url) {
        alert('Please enter text a valid url.');
        return;
    }

    fetch('http://localhost:5000/getInfo', {
        method: 'POST',
        body: JSON.stringify({ url: url }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(json => {
        chrome.runtime.sendMessage({ action: 'summarize', summary: json.summary });
        document.getElementById('text_output').innerText = json.summary;
    })
    .catch(error => {
        console.error('There was an error with the fetch operation:', error);
        alert('Error: ' + error.message);
    });

});