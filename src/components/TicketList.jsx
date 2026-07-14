import { TICKET_STATUSES } from '../api/tickets'

function TicketList({ tickets, onStatusChange }) {
  if (tickets.length === 0) {
    return <p>No hay tickets registrados.</p>
  }

  return (
    <table border="1" cellPadding="6">
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
            <td>{t.id}</td>
            <td>{t.client_id}</td>
            <td>{t.title}</td>
            <td>{t.description}</td>
            <td>
              <select
                value={t.status}
                onChange={(e) => onStatusChange(t.id, e.target.value)}
              >
                {TICKET_STATUSES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </td>
            <td>{new Date(t.created_at).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TicketList
