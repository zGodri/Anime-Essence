document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const altText = urlParams.get('alt');
    const imgSrc = urlParams.get('img');

    if (title && altText && imgSrc) {
        document.getElementById('page-title').innerText = title;
        document.getElementById('book-title').innerText = title;
        document.getElementById('book-synopsis').innerText = altText;
        document.getElementById('book-cover').src = imgSrc;
        document.getElementById('book-cover').alt = altText;
    }
});
