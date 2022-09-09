import SearchFrom from "./components/SearchFrom";
import BookList from "./components/BookList";
import Library from "./pages/Library";
import { useState } from "react";

function App() {
  const [showLibrary, setShowLibrary] = useState(false);
  return (
    <div>
      <div>
        <h2 onClick={() => setShowLibrary(!showLibrary)}>library</h2>
        {showLibrary && <Library />}
      </div>
      <div>
        <SearchFrom />
        <BookList />
      </div>
    </div>
  );
}

export default App;
