document.addEventListener("DOMContentLoaded", function () {
    const apiKey = 'pub_34719b98cfa9dd9777369dcbbabbf0b499a5c';
    const endpoint = 'https://newsdata.io/api/1/news';
    const category = 'general';
    const language = 'en';
    const keywords = 'agriculture, farming, crops';
    const maxWords = 100; 

    const newsContainer = document.getElementById('news-container');

    // Fetch news data
    fetch(`${endpoint}?apikey=${apiKey}&q=${keywords}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the API response to the console
            console.log('i am here');

            if (data.status === 'success') {
                displayNews(data.results);
            } else {
                newsContainer.innerHTML = 'No news articles found.';
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            newsContainer.innerHTML = 'Error fetching news.';
        });

    // Function to display news articles
    function displayNews(articles) {
        console.log('i am here');
        const defaultImage = 'harvesthub-logo.jpeg'
        console.log(articles); // Log articles to the console

        if (articles && articles.length > 0) {
            articles.forEach(article => {
                const truncatedDescription = truncateWords(article.description, maxWords);

                const articleElement = document.createElement('div');
                articleElement.innerHTML = `
                    <div class="container mt-4">
                    <div class="card" style=" box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border: solid 2px  #2acc80;">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="${article.image_url ?? defaultImage}" class="card-img" alt="NewsImage">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${article.title}</h5>
                                    <p class="card-text">${truncatedDescription}</p>
                                    <a class="btn btn-success" target="_blank"  href="${article.link}">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                newsContainer.appendChild(articleElement);
            });
        } else {
            newsContainer.innerHTML = 'No news articles found yet.';
            console.log('No articles found.');
        }
    }

    // Helper function to truncate a string to a specified number of words
    function truncateWords(text, limit) {
        const words = text.split(' ');
        return words.slice(0, limit).join(' ') + (words.length > limit ? '...' : '');
    }
});
