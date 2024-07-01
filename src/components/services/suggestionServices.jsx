export const getAllSuggestions = () => {
    return fetch(`http://localhost:8088/suggestions`).then((res) => res.json())
}
export const createAdventure = (suggestion) => {
    return fetch(`http://localhost:8088/suggestions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(suggestion)
    })
}

export const deleteSuggestion = (suggestionId) => {
    return fetch(`http://localhost:8088/suggestions/${suggestionId}`, { method: "DELETE" });
  };

  export const getSuggestionById = (suggestion) => {
    return fetch(
        `http://localhost:8088/suggestions/${suggestion}?_expand=user`
      ).then((res) => res.json());
  }

  export const updateSuggestion = (suggestion) => {
    return fetch(`http://localhost:8088/suggestions/${suggestion.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(suggestion)
    })
  }