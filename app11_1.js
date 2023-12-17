function updateVoteButton() {
        const url = "http://127.0.0.1:5500/page11_1.html";
        fetch(url)
        .then((response) => {
        if (!response.ok) 
            throw new Error(`HTTP error: ${response.status}`);          
        return response})
        .then(data => {
            console.log(data);
            document.querySelector("#btn-vote").textContent = `Your vote is accepted: ${new Date()}`})
        .catch(error => console.error(`Fetch problem: ${error.message}`));    
    }
