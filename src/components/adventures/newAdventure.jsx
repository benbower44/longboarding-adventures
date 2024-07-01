import { useState } from "react";
import "./adventures.css";
import { useNavigate } from "react-router-dom";
import { createAdventure } from "../services/adventureServices.jsx";
import { Button } from "reactstrap";


export const NewAdventure = ({currentUser}) => {
  const [newAdventure, setNewAdventure] = useState({
    url: "",
    title: "",
    synopsis: "",
  });

  const navigate = useNavigate()

  const handleSave = (event) => {
    event.preventDefault()

    const adventure = {
        title: newAdventure.title,
        synopsis: newAdventure.synopsis,
        url: newAdventure.url,
        timestamp: Date(),
        userId: currentUser.id
    }
    createAdventure(adventure).then(() => {
        navigate("/adventures")
    })

  }

  return (
    <div className="form">
      <form className="adventure-form">
        <h2>New Adventure</h2>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Adventure Title"
            onChange={(event) => {
              const adventureCopy = { ...newAdventure };
              adventureCopy.title = event.target.value;
              setNewAdventure(adventureCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Summary of Adventure"
            onChange={(event) => {
              const adventureCopy = { ...newAdventure };
              adventureCopy.synopsis = event.target.value;
              setNewAdventure(adventureCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="URL"
            onChange={(event) => {
              const adventureCopy = { ...newAdventure };
              adventureCopy.url = event.target.value;
              setNewAdventure(adventureCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <Button onClick={handleSave}>
            Submit New Adventure
          </Button>
        </fieldset>
      </form>
    </div>
  );
};
