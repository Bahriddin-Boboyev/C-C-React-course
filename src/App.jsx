import { Cards } from "./components/Cards";
import { movies } from "./movies";

function App() {
  return (
    <div className="container">
      <h1 className="heading">🎬 My Movies</h1>
      {movies.map((item) => (
        <Cards key={item.id} props={item} />
      ))}
    </div>
  );
}

export default App;
