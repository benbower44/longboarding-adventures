import { useEffect, useState } from "react";
import "./home.css";
import { getAllAdventures } from "./services/adventureServices.jsx";
import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";

export const Home = ({ currentUser }) => {
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
      return (
        <div className="body">
          
            <div className="adventures">
              <Row>
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
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
            </div>
    )
    }

    
  
  