
import { useEffect, useState } from "react";
import "./suggestions.css";
import { deleteSuggestion, getAllSuggestions } from "../services/suggestionServices.jsx";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";

export const Suggestions = ({ currentUser }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [mySuggestions, setMySuggestions] = useState([]);

  useEffect(() => {
    getAllSuggestions().then((suggestionsArray) => {
      setSuggestions(suggestionsArray);
    });
  }, []);

  useEffect(() => {
    const foundSuggestions = suggestions.filter(
      (suggestion) => suggestion.userId === currentUser.id
    );
    setMySuggestions(foundSuggestions);
  }, [suggestions]);

  const handleDelete = (suggestion) => {
    deleteSuggestion(suggestion.id).then(() => {
      getAllSuggestions().then((suggestionsArray) => {
        setSuggestions(suggestionsArray);
      });
    });
  };

  return (
    <div>
      <div>
        <Link to="/newSuggestion">
          <button className="button">Submit New Suggestion</button>
        </Link>
      </div>
      <div className="suggestions">
        <div>
          <Row className="flex-row-reverse">
            {mySuggestions.map((suggestion) => {
              return (
                <Col key={suggestion.id}>
                  <Card
                    style={{
                      width: "12rem",
                      padding: "1em",
                      margin: 5,
                    }}
                  >
                    <h2>{suggestion.title}</h2>
                    <p>{suggestion.synopsis}</p>
                    <a href={suggestion.url}>Source</a>
                    <Link to={`/adventures/${adventure.id}/editAdventure`}>
                      <Button color="primary" size="sm" style={{ margin: 5 }}>
                        Edit
                      </Button>
                    </Link>
                    <Button
                      color="danger"
                      size="sm"
                      style={{ margin: 5 }}
                      onClick={() => handleDelete(adventure)}
                    >
                      Delete
                    </Button>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};