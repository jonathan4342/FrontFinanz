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
      <TicketForm clients={clients} onSubmit={handleCreate} />
      <div className="card">
        <div className="card__header">
          <h3 className="card__title">Tickets {!loading && `(${tickets.length})`}</h3>
        </div>
        {loading ? (
          <p className="empty">Cargando…</p>
        ) : (
          <TicketList
            tickets={tickets}
            clients={clients}
            onStatusChange={handleStatusChange}
          />
        )}
      </div>
    </section>
  )
}

export default TicketsPage
