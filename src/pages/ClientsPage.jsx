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
      <h2>Clientes</h2>
      <ClientForm onSubmit={handleCreate} />
      {loading ? <p>Cargando...</p> : <ClientList clients={clients} />}
    </section>
  )
}

export default ClientsPage
