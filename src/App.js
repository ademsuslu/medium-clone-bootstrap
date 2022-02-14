import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import WriteGörsel from './Components/WriteGörsel';
import Trending from './Components/Trending';
import Discover from './Components/Discover';

function App() {
  return (
    <>
      <Navbar />
      <WriteGörsel/>
      <Trending />
      <Discover />
     
    </>
  );
}

export default App;
