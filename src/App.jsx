import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Journal from './pages/Journal/Journal';
import Habits from './pages/Habits/Habits';
import Goals from './pages/Goals/Goals';
import Tasks from './pages/Tasks/Tasks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/journal' element={<Journal />} />
        <Route path='/habits' element={<Habits />} />
        <Route path='/goals' element={<Goals />} />
        <Route path='/tasks' element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default App;
