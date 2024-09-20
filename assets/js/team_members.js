// Fetching data from the JSON file
fetch('../assets/js/members.json')
    .then(response => response.json())
    .then(data => {
        // Loop through each department in the data
        for (const [key, members] of Object.entries(data)) {
            populateSection(`${key.toLowerCase()}-grid`, members);
        }
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to populate sections
function populateSection(gridId, members) {
    const grid = document.getElementById(gridId);
    // Clear previous members if any
    grid.innerHTML = '';

    // Create member elements
    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('member');
        memberDiv.innerHTML = `<strong class="member_name">${member.Name}</strong>`;
        grid.appendChild(memberDiv);
    });
}