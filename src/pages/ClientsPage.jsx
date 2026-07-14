import { useEffect, useState } from 'react'

import { createClient, getClients } from '../api/clients'
import ClientForm from '../components/ClientForm'
import ClientList from '../components/ClientList'

function ClientsPage() {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    try {
      setClients(await getClients())
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const handleCreate = async (payload) => {
    await createClient(payload)
    await load()
  }

  return (
    <section>
      <ClientForm onSubmit={handleCreate} />
      <div className="card">
        <div className="card__header">
          <h3 className="card__title">Clientes {!loading && `(${clients.length})`}</h3>
        </div>
        {loading ? (
          <p className="empty">Cargando…</p>
        ) : (
          <ClientList clients={clients} />
        )}
      </div>
    </section>
  )
}

export default ClientsPage
