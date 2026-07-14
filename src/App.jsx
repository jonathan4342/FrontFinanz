import { useState } from 'react'

import ClientsPage from './pages/ClientsPage'
import TicketsPage from './pages/TicketsPage'

function App() {
  const [tab, setTab] = useState('clients')

  return (
    <>
      <header className="app-header">
        <div className="app-header__inner">
          <div className="app-header__logo">F</div>
          <div>
            <h1 className="app-header__title">Finanz · Soporte</h1>
            <p className="app-header__subtitle">Gestión de clientes y tickets</p>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="tabs">
          <button
            className={`tab ${tab === 'clients' ? 'tab--active' : ''}`}
            onClick={() => setTab('clients')}
          >
            Clientes
          </button>
          <button
            className={`tab ${tab === 'tickets' ? 'tab--active' : ''}`}
            onClick={() => setTab('tickets')}
          >
            Tickets
          </button>
        </div>

        {tab === 'clients' ? <ClientsPage /> : <TicketsPage />}
      </main>
    </>
  )
}

export default App
