import './App.css';
import Users from './components/users/Users';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path={'/'} element={<Users/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
