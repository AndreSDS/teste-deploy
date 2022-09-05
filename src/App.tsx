import { ApolloProvider } from "@apollo/client";
import { Router } from "./Router";
import { client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";
import { LessonsProvider } from "./contexts/lessonContext";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <LessonsProvider>
          <Router />
        </LessonsProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
