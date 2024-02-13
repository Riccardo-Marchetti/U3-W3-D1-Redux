import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouritesJobs from "./components/FavouritesJobs";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

function App() {
  // const isLoading = useSelector((state) => state.jobs.isLoading);
  return (
    <>
      {/* {isLoading && <Spinner variant="success" animation="border" />} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:company" element={<CompanySearchResults />} />
          <Route path="/favourites" element={<FavouritesJobs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
