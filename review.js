import { reviews } from './data.js';

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah pengiriman form secara default

        // Mengambil nilai dari input form
        const name = document.getElementById("name").value;
        const review = document.getElementById("review").value;

        // Membuat objek data baru
        const newData = {
            name: name,
            review: review
        };

        // Mengubah objek data menjadi format JSON
        const jsonData = JSON.stringify(newData);

        // Menyimpan data ke Local Storage
        localStorage.setItem('reviewData', jsonData);

        // Tampilkan pesan sukses
        document.querySelector('.sent-message').style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const reviewsDiv = document.getElementById('reviews');

    // Loop through each review and display it
    reviews.forEach(review => {
        // Create HTML elements to display review
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review-item');
        reviewElement.innerHTML = `
            <h3>${review.name}</h3>
            <p>${review.review}</p>
        `;

        // Append review element to reviews container
        reviewsDiv.appendChild(reviewElement);
    });
});

