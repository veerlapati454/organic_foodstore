
import { HashRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout/MainLayout";

import Home from "./components/Home/Home"
import ScrollToTop from "./components/ScrollToTop"
import MarketStall from "./components/MarketStall/MarketStall";
import OurFarm from "./components/OurFarm/OurFarm";
import Recipes from "./components/Recipes/Recipes";
import SeasonalPicks from "./components/SeasonalPicks/SeasonalPicks";
import Shop from "./components/Shop/Shop";
import Sustainability from "./components/Sustainability/Sustainability";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import NotFound from "./components/NotFound/NotFound";
import "./App.css"
function App() {
  return (
    <HashRouter>
      <ScrollToTop/>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/market-stall" element={<MarketStall/>} />
          <Route path="/our-farm" element={<OurFarm/>} />
          <Route path="/Recipes" element={<Recipes/>} />
          <Route path="/seasonal-picks" element={<SeasonalPicks/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/sustainability" element={<Sustainability/>} />

          
          
        </Route>
        {/* <Route path="/signup" element={<SignUp/>}/>
        
        <Route path="/user-dashboard" element={<UserDashboard/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        <Route path="*" element={<NotFound/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/user-dashboard" element={<UserDashboard/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        <Route path="*" element={<NotFound/>}/> 
        

      </Routes>
    </HashRouter>
  );
}

export default App;