document.getElementById('translationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputText = document.getElementById('inputText').value;

    // Hacer la llamada a la API de traducción
    const apiKey = 'AIzaSyA9mdsMrLvozQGrgSOsfJKj73VOdcbvVks';
    const sourceLanguage = 'es'; // idioma de origen
    const targetLanguage = 'en'; // idioma de destino
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&source=${sourceLanguage}&target=${targetLanguage}&q=${inputText}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const translatedText = data.data.translations[0].translatedText;
            document.getElementById('translationResult').innerText = translatedText;
        })
        .catch(error => {
            console.error('Hubo un error:', error);
        });
});
