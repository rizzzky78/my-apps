import React from "react";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";

const Example = () => {
  const { data, status } = useQuery("todos", () =>
    fetch("/todos").then((res) => res.json())
  );
  return (
    <Container>
      {status === "loading" ? (
        <div>Loading data...</div>
      ) : status === "error" ? (
        <div>Error loading data</div>
      ) : (
        <ul>
          {data.map(
            (todo: {
              id: React.Key | null | undefined;
              text:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            }) => (
              <li key={todo.id}>{todo.text}</li>
            )
          )}
        </ul>
      )}
    </Container>
  );
};
