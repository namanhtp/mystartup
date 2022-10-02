import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './homePage'
import FeaturePage from './featurePage'
import StoriesPage from './storiesPage'
import PricingPage from './pricingPage'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/feature" element={<FeaturePage/>}/>
        <Route path="/stories" element={<StoriesPage/>}/>
        <Route path="/pricing" element={<PricingPage/>}/>
        {/* <HomePage/> */}
        {/* <FeaturePage/> */}
        {/* <StoriesPage/> */}
        {/* <PricingPage/> */}
      </Routes>
    </div>
  );
}

export default App;
