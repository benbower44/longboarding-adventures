
import { useEffect, useState } from "react";
import "./adventures.css";
import { deleteAdventure, getAllAdventures } from "../services/adventureServices.jsx";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";

export const Adventures = ({ currentUser }) => {
  const [adventures, setAdventures] = useState([]);
  const [myAdventures, setMyAdventures] = useState([]);

  useEffect(() => {
    getAllAdventures().then((adventuresArray) => {
      setAdventures(adventuresArray);
    });
  }, []);

  useEffect(() => {
    const foundAdventures = adventures.filter(
      (adventure) => adventure.userId === currentUser.id
    );
    setMyAdventures(foundAdventures);
  }, [adventures]);

  const handleDelete = (adventure) => {
    deleteAdventure(adventure.id).then(() => {
      getAllAdventures().then((adventuresArray) => {
        setAdventures(adventuresArray);
      });
    });
  };

  return (
    <div>
      <div>
        <Link to="/newAdventure">
          <button className="button">Submit New Adventure</button>
        </Link>
      </div>
      <div className="adventures">
        <div>
          <Row className="flex-row-reverse">
            {myAdventures.map((adventure) => {
              return (
                <Col key={adventure.id}>
                  <Card
                    style={{
                      width: "12rem",
                      padding: "1em",
                      margin: 5,
                    }}
                  >
                    <h2>{adventure.title}</h2>
                    <p>{adventure.synopsis}</p>
                    <a href={adventure.url}>Source</a>
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