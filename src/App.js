import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import './App.css';
import Home from "./pages/Home";
import Coinpage from "./pages/Coinpage";
import { makeStyles } from "@material-ui/core"
import Alert from "./components/Alert";




function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: "100vh"
    },
  }));

  const classes = useStyles();

  return (
    <BrowserRouter>


      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/coins/:id" element={<Coinpage/>} />
        </Routes>
      </div>
      <Alert/>
    </BrowserRouter>
  )
}

export default App;
