import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import OnePage from "./pages/OnePage";
import Layout from "./components/layout/Layout";



const App = () => {
  return (
    <div>
      <Layout> 
     <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/OnePage" element={<OnePage />}/>
        </Routes>
     </Router>
     </Layout>
    </div>
   

  );
}

export default App;
