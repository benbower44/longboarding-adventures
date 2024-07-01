import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAdventureById, updateAdventure } from "../services/adventureServices.jsx";
import { Button } from "reactstrap";

export const EditAdventure = () => {
  const [adventure, setAdventure] = useState({});
  const { adventureId } = useParams();

  useEffect(() => {
    getAdventureById(adventureId).then((data) => {
      const adventureObj = data;
      setAdventure(adventureObj);
    });
  }, [adventureId]);

  const handleSave = (event) => {
    event.preventDefault();
    const editedAdventure = {
      title: adventure.title,
      synopsis: adventure.synopsis,
      url: adventure.url,
      id: adventure.id,
      userId: adventure.userId,
      timestamp: adventure.timestamp,
    };
    updateAdventure(editedAdventure).then(() => {
      navigate("/adventures");
    });
  };
  const navigate = useNavigate();
  return (
    <div className="form">
      <form>
        <h2>Edit Adventure</h2>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={adventure.title}
              onChange={(event) => {
                const adventureCopy = { ...adventure };
                adventureCopy.title = event.target.value;
                setAdventure(adventureCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={adventure.synopsis}
              onChange={(event) => {
                const adventureCopy = { ...adventure };
                adventureCopy.synopsis = event.target.value;
                setAdventure(adventureCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={adventure.url}
              onChange={(event) => {
                const adventureCopy = { ...adventure };
                adventureCopy.url = event.target.value;
                setAdventure(adventureCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset className="form-group">
          <Button onClick={handleSave}>
            Save Adventure
          </Button>
        </fieldset>
      </form>
    </div>
  );
};
