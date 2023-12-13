import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import DentalCrownsAndBridgesPage from './components/DentalServices/DentalCrownsAndBridges';
import DentalExamsAndCleaningsPage from './components/DentalServices/DentalExamsAndCleanings';
import OrthodonticsPage from './components/DentalServices/Orthodontics';
import TeethWhiteningPage from './components/DentalServices/TeethWhitening';
import DentalImplantsPage from './components/DentalServices/DentalImplants';
import PediatricDentistryPage from './components/DentalServices/PediatricDentistry';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
            <Route exact path="/dentalcrownsandbridges" element={<DentalCrownsAndBridgesPage />} />
            <Route exact path="/dentalexamsandcleanings" element={<DentalExamsAndCleaningsPage />} />
            <Route exact path="/orthodontics" element={<OrthodonticsPage />} />
            <Route exact path="/teethwhitening" element={<TeethWhiteningPage />} />
            <Route exact path="/dentalimplants" element={<DentalImplantsPage />} />
            <Route exact path="/pediatricdentistry" element={<PediatricDentistryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

