import fetch from "node-fetch"

class Api {
  constructor(url) {
    this.url = url
  }

  getGenres() {
    return fetch(`${this.url}/genre`).then(response => response.json())
  }

  getRadiosByGenre(slug) {
    return fetch(`${this.url}/genre/${slug}`).then(response => response.json())
  }

  getRadiosByGenreAndCountry(genre, country) {
    return fetch(`${this.url}/genre/${genre}/${country}`).then(response => response.json())
  }

  getByExplore() {
    return fetch(`${this.url}/explore`).then(response => response.json())
  }

  getRadiosByCountry(country) {
    return fetch(`${this.url}/country/${country}`).then(response => response.json())
  }









  getByCountryAndCity(country, city, limit) {
    return fetch(`${this.url}/radio/country/${country}/${city}?offset=0&limit=${limit}`).then(response => response.json())
  }

  getByGenre(genre, limit) {
    return fetch(`${this.url}/radio/genre/${genre}?offset=0&limit=${limit}`).then(response => response.json())
  }

  getByGenreAndCountry(genre, country, limit) {
    return fetch(`${this.url}/radio/genre/${genre}/${country}?offset=0&limit=${limit}`).then(response => response.json())
  }
}

export default Api
