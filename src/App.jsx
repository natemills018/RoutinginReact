import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetFilms from "./components/GetFilms"
import GetPeople from "./components/GetPeople"
import Home from "./components/Home"



const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/people" element={<GetPeople />} />
                <Route path="/films" element={<GetFilms />} />
                <Route path="/films/:filmid" element={<h1>Specific Film Page</h1>} />
                <Route path="*" element={<h1>404 Not Found!</h1>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App;