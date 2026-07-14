import http from './http'

export const TICKET_STATUSES = ['Pendiente', 'En progreso', 'Finalizado']

export async function getTickets() {
  const { data } = await http.get('/tickets')
  return data
}

export async function createTicket(payload) {
  const { data } = await http.post('/tickets', payload)
  return data
}

export async function updateTicketStatus(id, status) {
  const { data } = await http.patch(`/tickets/${id}/status`, { status })
  return data
}
