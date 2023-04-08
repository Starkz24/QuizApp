import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Result from './Pages/Result/Result';
import Quiz from './Pages/Quiz/Quiz';
import {useState} from "react";
import axios from "axios";


function App() {

  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };
  
  return (
    <Router>
    <div className="app" style={{ backgroundImage: 'url("/11.jpg")' }}>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}/>
        <Route exact path="/quiz" element={<Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} />}/>
        <Route exact path="/result" element={<Result name={name} score={score}/>}/>
      </Routes>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
