import './App.css'
import Header from './components/Header'
import CreateNoteLink from './components/CreateNoteLink'
import { Outlet, useLocation } from 'react-router-dom'

const HEADING = {
  '/': 'Notes',
  '/create': 'Create Note'
}

function App() {
  const { pathname } = useLocation();
  const heading = HEADING[pathname]

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
