import { HashRouter, Routes, Route } from 'react-router-dom';
import backgroundimage from './assets/background.jpg';
import MainContainer from './components/MainContainer.jsx';
import AlertsProject from './pages/AlertsProject.jsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative w-screen overflow-x-hidden">
              <div
                className="fixed inset-0 bg-cover bg-center bg-no-repeat overflow-hidden"
                style={{
                  backgroundImage: `url(${backgroundimage})`,
                  filter: 'blur(5px) brightness(50%)',
                  transform: 'scale(1.2)',
                  zIndex: -1
                }}
              />
              <MainContainer />
            </div>
          }
        />
        <Route path="/projects/ai-alerts" element={<AlertsProject />} />
      </Routes>
    </HashRouter>
  );
}

export default App;