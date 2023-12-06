function loadContent(page, headerText) {
    const contentContainer = document.getElementById('content');
    const headerContainer = document.querySelector('header h1');

    fetch(page)
        .then(response => response.text())
        .then(html => {
            contentContainer.innerHTML = html;
            headerContainer.textContent = headerText;
        })
        .catch(error => console.error('Error fetching content:', error));
}
