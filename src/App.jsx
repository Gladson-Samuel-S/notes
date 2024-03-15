import './App.css'
import Header from './components/Header'
import CreateNoteLink from './components/CreateNoteLink'
import { Outlet } from 'react-router-dom'
import { useHeading } from './context/HeadingContext'

function App() {
  const { heading } = useHeading();

  return (
    <main className='container'>
      <Header
        heading={heading}
      />
      <div className='content'>
        <Outlet />
      </div>
      <CreateNoteLink />
    </main>
  )
}

export default App
