import Counter from "./components/Counter"
import Header from "./components/Header"

function App() {
  return (
    <div id="app">
      <Header />
      <Counter>10</Counter>
      <Counter>20</Counter>
    </div>
  )
}

export default App
