import { useEffect, useState } from 'react'

import { getClients } from '../api/clients'
import { createTicket, getTickets, updateTicketStatus } from '../api/tickets'
import TicketForm from '../components/TicketForm'
import TicketList from '../components/TicketList'

function TicketsPage() {
  const [tickets, setTickets] = useState([])
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    try {
      const [t, c] = await Promise.all([getTickets(), getClients()])
      setTickets(t)
      setClients(c)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const handleCreate = async (payload) => {
    await createTicket(payload)
    await load()
  }

  const handleStatusChange = async (id, status) => {
    await updateTicketStatus(id, status)
    await load()
  }

  return (
    <section>
      <h2>Tickets</h2>
      <TicketForm clients={clients} onSubmit={handleCreate} />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <TicketList tickets={tickets} onStatusChange={handleStatusChange} />
      )}
    </section>
  )
}

export default TicketsPage
