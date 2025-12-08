import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from './pages/Home.jsx'
import Books from './pages/Books.jsx'
import Login from "./pages/Login.jsx"
import NotFoundPage from "./pages/404.jsx"


function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Books />
      {/* <Login /> */}
      {/* <NotFoundPage /> */}
      <Footer />
    </>
  )
}

export default App
