import SearchFrom from "./components/SearchFrom";
import BookList from "./components/Book/BookList";
import Library from "./pages/Library";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  const activeStyle = "nav-link active";

  return (
    <BrowserRouter>
      <main>
        <header>
          <h1>
            BookShelf <span className="title-icn">📚</span>
          </h1>

          <div className="underline"></div>
        </header>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeStyle : "nav-link"
                }
                // className="nav-link"
                to="/"
              >
                Search books
                <div className="underline"></div>
              </NavLink>
            </li>
            <li>
              <NavLink
                // className="nav-link"
                className={({ isActive }) =>
                  isActive ? activeStyle : "nav-link"
                }
                to="/library"
              >
                My Library
                <div className="underline"></div>
              </NavLink>
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
