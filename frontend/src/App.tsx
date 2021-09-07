import DataTable from "components/DataTable/index";
import Footer from "components/Footer/index";
import NavBar from "components/NavBar/index";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <DataTable/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
