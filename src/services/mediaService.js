import * as tokenService from "./tokenService"
const BASE_URL = "/api/media/"

export function searchGames(query) {
  return fetch(`${BASE_URL}search/games/${query}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  }, {mode: "cors"})
  .then(res => res.json())
}

export function searchStreams(query) {
  return fetch(`${BASE_URL}search/streams/${query}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  }, {mode: "cors"})
  .then(res => res.json())
}
export function searchRandomStreams(query, page) {
  return fetch(`${BASE_URL}searchRandomStreams/${query}/${page}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  }, {mode: "cors"})
  .then(res => res.json())
}

export function topGames() {
  return fetch(`${BASE_URL}topGames`)
  .then(res => res.json())
}

export function topStreams() {
  return fetch(`${BASE_URL}topStreams`)
  .then(res => res.json())
}


export function addMedia(media) {
  return fetch(
    `${BASE_URL}addMedia`,
    {
      method: 'POST',
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(media)
    },
    { mode: "cors" })
    .then((res) => res.json())
  }
  
  export function removeMedia(api_id) {
    return fetch(
      `${BASE_URL}removeMedia/${api_id}`,
      {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()},
      },
      { mode: "cors" })
      .then((res) => res.json())
    }
    
    export function searchOneGame(id) {
      return fetch(`${BASE_URL}searchOneGame/${id}`, {
        headers: {
          'Authorization': `Bearer ${tokenService.getToken()}`
        },
      }, {mode: "cors"})
      .then(res => res.json())
    }
    export function searchOneStream(query, id) {
      return fetch(`${BASE_URL}searchOneStream/${query}/${id}`, {
        headers: {
          'Authorization': `Bearer ${tokenService.getToken()}`
        },
      }, {mode: "cors"})
      .then(res => res.json())
    }
    export function getReviews(id) {
      return fetch(`${BASE_URL}getReviews`, {
        headers: {
          'Authorization': `Bearer ${tokenService.getToken()}`
        },
      }, {mode: "cors"})
      .then(res => res.json())
    }

    export function addReview(review) {
      return fetch(
        `${BASE_URL}/addReview`,
        {
          method: 'POST',
          headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
          body: JSON.stringify()
        },
        { mode: "cors" })
        .then((res) => res.json())
      }
      export function removeReview() {
        return fetch(
          `${BASE_URL}/deleteReview`,
          {
            method: 'DELETE',
            headers: {'Authorization': 'Bearer ' + tokenService.getToken()},
          },
          { mode: "cors" })
          .then((res) => res.json())
        }