import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import NoteDetail from './pages/NoteDetail';
import { Home } from './pages/Home';
import Layout from './Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="h-full">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/notes/:id" element={<NoteDetail />} />
            </Route>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
