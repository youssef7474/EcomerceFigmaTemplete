import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Navigation from "./Navigation/Navigation"

const App = () => {
  return (
    <BrowserRouter>
      <Navigation ></Navigation>
    </BrowserRouter>
  )
}

export default App
