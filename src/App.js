import Create from './components/Create';
import Read from './components/Read';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './components/Update';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route exact path='/' element={<Create />} />
        <Route exact path='/read' element={<Read />} />
        <Route exact path='/update' element={<Update />} />
        {/* <Route exact path='/delete' element={<Delete />} /> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;


