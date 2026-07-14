import { useState } from 'react'

import ClientsPage from './pages/ClientsPage'
import TicketsPage from './pages/TicketsPage'

function App() {
  const [tab, setTab] = useState('clients')

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 16, fontFamily: 'sans-serif' }}>
      <h1>Gestión de Clientes y Tickets</h1>
      <nav style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button onClick={() => setTab('clients')} disabled={tab === 'clients'}>
          Clientes
        </button>
        <button onClick={() => setTab('tickets')} disabled={tab === 'tickets'}>
          Tickets
        </button>
      </nav>
      {tab === 'clients' ? <ClientsPage /> : <TicketsPage />}
    </div>
  )
}

export default App
