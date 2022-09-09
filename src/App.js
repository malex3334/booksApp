import SearchFrom from "./SearchFrom";
import BookList from "./BookList";
import Library from "./Library";
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
