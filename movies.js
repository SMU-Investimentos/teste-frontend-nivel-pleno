/* O endpoint para buscar filmes é
 *
 * GET http://www.omdbapi.com/
 *
 * Query Parameters
 *
 * apikey: string  // requerido para autenticar a requisição.
 * t: string  // o título a ser pesquisado
 *
 * Use o valor cbdf7271 para apikey.
 *
 * Veja um exemplo de requisição completa:
 * http://www.omdbapi.com/?t=o%20pagador%20de%20promessas&apikey=cbdf7271
 *
 * Regras:
 * - Não é permitido o uso de nenhuma biblioteca.
 *
 * Objetivos:
 * - Atestar a proeficiência do candidato em Javascript nativo, requisições http e manipulação do DOM.
 *
 */

function findMovie(title) {
  return fetch(`http://www.omdbapi.com/?t=${title}&apikey=cbdf7271`)
    .then(response => response.json())
}

async function onFormSubmit() {
  const $movieSection = document.getElementById('movie');
  const $notFoundSection = document.getElementById('not-found');

  const searchValue = document.getElementById('search').value

  const movie = await findMovie(searchValue)

  if (movie.Error) {
    $movieSection.style.display = 'none'
    $notFoundSection.style.display = 'block'

  } else {
    $movieSection.style.display = 'block'
    $notFoundSection.style.display = 'none'

    const $poster = document.getElementById('poster').src = movie.Poster
    const $title = document.getElementById('title').innerText = movie.Title
    const $plot = document.getElementById('plot').innerText = movie.Plot
    const $gender = document.getElementById('genre').innerText = movie.Genre
    const $writers = document.getElementById('writer').innerText = movie.Writer
    const $actors = document.getElementById('actors').innerText = movie.Actors
    const $director = document.getElementById('director').innerHTML = movie.Director
    const $year = document.getElementById('year').innerHTML = movie.Year
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const $form = document.getElementById('movies-form')

  $form.addEventListener('submit', (e) => {
    e.preventDefault()
    this.onFormSubmit()
  })
})