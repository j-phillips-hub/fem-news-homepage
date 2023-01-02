import NavBar from "./components/Navbar/NavBar";
import MainContainer from "./components/Main/MainContainer";
import TopPostsContainer from "./components/Aside/TopPostsContainer";
import './sass/defaults.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContainer />
      <TopPostsContainer />
    </div>
  );
}

export default App;
