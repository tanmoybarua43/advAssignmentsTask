
// character fetch function
let getCharacterInfo = () => {
    let characterName = document.getElementById('characterInput').value;
    fetch(`https://swapi.dev/api/people/?search=${characterName}`)
        .then(response => response.json())
        .then(data => {
            let character = data.results[0];
            if (character) {
                let info = `
                    <h2>${character.name}</h2>
                    <p>Height: ${character.height}</p>
                    <p>Eye Color: ${character.eye_color}</p>
                    <p>Gender: ${character.gender}</p>
                    <p>Birth Year: ${character.birth_year}</p>
                `;
                document.getElementById('characterInfo').innerHTML = info;
            }
            else if(character === ""){
                document.getElementById('characterInfo').innerHTML = "<p>Character not found!</p>";
            } 
            else {
                document.getElementById('characterInfo').innerHTML = "<p>Character not found!</p>";
            }
        })
        .catch(error => console.error('Error fetching character information:', error));
}
// star war films name fetch function
let getFilmInfo = () => {
    fetch('https://swapi.dev/api/films/')
        .then(response => response.json())
        .then(data => {
            var films = data.results;
            var info = "<ul>";
            films.forEach(function(film) {
                info += `<li>Title: ${film.title}, Director: ${film.director}, Release Date: ${film.release_date}</li>`;
            });
            info += "</ul>";
            document.getElementById('filmInfo').innerHTML = info;
        })
        .catch(error => console.error('Error fetching film information:', error));
}