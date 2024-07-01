export const getAllAdventures = () => {
    return fetch(`http://localhost:8088/adventures`).then((res) => res.json())
}
export const createAdventure = (adventure) => {
    return fetch(`http://localhost:8088/adventures`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(adventure)
    })
}

export const deleteAdventure = (adventureId) => {
    return fetch(`http://localhost:8088/adventures/${adventureId}`, { method: "DELETE" });
  };

  export const getAdventureById = (adventure) => {
    return fetch(
        `http://localhost:8088/adventures/${adventure}?_expand=user`
      ).then((res) => res.json());
  }

  export const updateAdventure = (adventure) => {
    return fetch(`http://localhost:8088/adventures/${adventure.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adventure)
    })
  }