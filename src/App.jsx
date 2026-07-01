import { Routes, Route } from 'react-router-dom'
import AppShell from './components/AppShell.jsx'
import Home from './pages/Home.jsx'
import Translator from './pages/Translator.jsx'
import RandomString from './pages/RandomString.jsx'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppShell breadcrumb={['Overview']}>
            <Home />
          </AppShell>
        }
      />
      <Route
        path="/translator"
        element={
          <AppShell breadcrumb={['Workspace', 'Translator']}>
            <Translator />
          </AppShell>
        }
      />
      <Route
        path="/random-string"
        element={
          <AppShell breadcrumb={['Workspace', 'String Generator']}>
            <RandomString />
          </AppShell>
        }
      />
      <Route
        path="*"
        element={
          <AppShell breadcrumb={['Overview']}>
            <Home />
          </AppShell>
        }
      />
    </Routes>
  )
}
