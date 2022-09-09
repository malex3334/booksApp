import SearchFrom from "./components/SearchFrom";
import BookList from "./components/BookList";
import Library from "./pages/Library";
import { useState } from "react";

function App() {
  const [showLibrary, setShowLibrary] = useState(false);
  return (
    <main>
      <header>
        <h1>
          Bookshelf <span className="title-icn">📚</span>
        </h1>
      </header>
      <nav>
        <h2 onClick={() => setShowLibrary(!showLibrary)}>My Library</h2>
        {showLibrary && <Library />}
      </nav>
      <div>
        <SearchFrom />
        <BookList />
      </div>
    </main>
  );
}

export default App;
