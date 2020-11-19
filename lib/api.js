import fetch from "node-fetch"

class Api {
  constructor(url) {
    this.url = url
  }

  getByCountry(country, limit) {
    return fetch(`${this.url}/radio/country/${country}?offset=0&limit=${limit}`).then(response => response.json())
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
