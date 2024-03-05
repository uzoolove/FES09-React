import Counter from "./components/Counter"
import Header from "./components/Header"

function App() {
  return (
    <div id="app">
      <Header />
      <Counter />
      <Counter>10</Counter>
    </div>
  )
}

export default App
