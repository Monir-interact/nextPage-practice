import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <h1>
      {/* Header */}
      <Header></Header>
      <Outlet />
      {/* Footer */}
    </h1>
  )
}

export default App
