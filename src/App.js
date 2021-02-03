import "./App.css";
import { UserHome, UserExam, Form, Register, Login } from "./pages";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route exact path="/" component={UserHome} />
        <Route exact path="/exam" component={UserExam} />
        <Route exact path="/adminForm" component={Form} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
