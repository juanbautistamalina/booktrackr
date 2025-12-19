import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from './pages/Home.jsx'
import Books from './pages/Books.jsx'
import Login from "./pages/Login.jsx"
import NotFoundPage from "./pages/404.jsx"

function App() {

  const currentPath = window.location.pathname;

  return (
    <>
      <Header />
      {currentPath === "/" ? <Home />
        : currentPath === "/books" ? <Books />
          : currentPath === "/login" ? <Login />
            : <NotFoundPage />
      }
      <Footer />
    </>
  )
}

export default App
