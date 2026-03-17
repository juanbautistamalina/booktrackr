import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from './pages/Home.jsx'
import Books from './pages/Books.jsx'
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import NotFoundPage from "./pages/404.jsx"
import Route from "./components/Route.jsx"

export default function App() {
  return (
    <>
      <Header />
      <Route path="/" component={Home} />
      <Route path="/books" component={Books} protected />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="*" component={NotFoundPage} />
      <Footer />
    </>
  )
}
