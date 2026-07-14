import { TICKET_STATUSES } from '../api/tickets'

const STATUS_CLASS = {
  Pendiente: 'status--pendiente',
  'En progreso': 'status--en-progreso',
  Finalizado: 'status--finalizado',
}

function TicketList({ tickets, clients, onStatusChange }) {
  if (tickets.length === 0) {
    return <p className="empty">Aún no hay tickets registrados.</p>
  }

  const clientName = (id) => {
    const c = clients?.find((x) => x.id === id)
    return c ? c.name : `#${id}`
  }

  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Creado</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((t) => (
            <tr key={t.id}>
              <td className="mono">#{t.id}</td>
              <td>{clientName(t.client_id)}</td>
              <td>{t.title}</td>
              <td className="cell-muted">{t.description}</td>
              <td>
                <select
                  className={`status-select ${STATUS_CLASS[t.status] || ''}`}
                  value={t.status}
                  onChange={(e) => onStatusChange(t.id, e.target.value)}
                >
                  {TICKET_STATUSES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </td>
              <td className="cell-muted">{new Date(t.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TicketList
