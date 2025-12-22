import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from './pages/Home.jsx'
import Books from './pages/Books.jsx'
import Login from "./pages/Login.jsx"
import NotFoundPage from "./pages/404.jsx"
import useRouter from "./hooks/useRouter.jsx"

function App() {

  const { currentPath } = useRouter();

  let page;
  if (currentPath === "/") {
    page = <Home />
  } else if (currentPath === "/books") {
    page = <Books />
  } else if (currentPath === "/login") {
    page = <Login />
  } else {
    page = <NotFoundPage />
  }

  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  )
}

export default App
