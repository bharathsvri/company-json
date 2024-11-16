import { useState } from 'react'
import CompanyDetails from './components/CompanyDetails/CompanyDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <CompanyDetails/>
      </div>
    </>
  )
}

export default App
