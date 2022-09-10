import SearchFrom from "./components/SearchFrom";
import BookList from "./components/BookList";
import Library from "./pages/Library";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main>
        <header>
          <h1>
            Bookshelf <span className="title-icn">📚</span>
          </h1>
          <div className="underline"></div>
        </header>
        <nav>
          <ul>
            <li>
              <NavLink className="nav-link" to="/">
                BookList
              </NavLink>
              <div className="underline"></div>
            </li>
            <li>
              <NavLink className="nav-link" to="/library">
                Library
              </NavLink>
              <div className="underline"></div>
            </li>
          </ul>
        </nav>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchFrom />
                  <BookList />
                </>
              }
            />
            <Route path="/library" element={<Library />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
