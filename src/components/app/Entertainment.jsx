import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";

// const Example = () => {
//   const { data, status } = useQuery("todos", () =>
//     fetch("/todos").then((res) => res.json())
//   );
//   return (
//     <Container>
//       {status === "loading" ? (
//         <div>Loading data...</div>
//       ) : status === "error" ? (
//         <div>Error loading data</div>
//       ) : (
//         <ul>
//           {data.map((todo) => (
//             <li key={todo.id}>{todo.text}</li>
//           ))}
//         </ul>
//       )}
//     </Container>
//   );
// };
const JadwalBola = () => {
  const { data, status } = useQuery("jadwalBola", () =>
    fetch("https://api.lolhuman.xyz/api/jadwalbola?apikey=thisMyApis").then((res) => res.json())
  );

  return (
    <Container>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error loading data</div>}
      {status === "success" && (
        <div className="justify-center">
          <Row xs={1} md={2} lg={4}>
            {data.result.map((item, index) => (
              <Col key={index}>
                <Card bg='dark' key={index} text='white' style={{ width: '18rem' }} className="mb-2">
                  <Card.Body>
                    <Card.Title style={{fontSize: 15}}>{item.match}</Card.Title>
                    <Card.Text>{item.event}</Card.Text>
                    <Card.Text>{item.tv}</Card.Text>
                    <Card.Text>{item.time}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
};

export { JadwalBola }