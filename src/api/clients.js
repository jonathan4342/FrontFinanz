import http from './http'

// Funciones de acceso a los endpoints de clientes. Los componentes usan
// estas funciones y no conocen los detalles de las rutas HTTP.
export async function getClients() {
  const { data } = await http.get('/clients')
  return data
}

export async function getClient(id) {
  const { data } = await http.get(`/clients/${id}`)
  return data
}

export async function createClient(payload) {
  const { data } = await http.post('/clients', payload)
  return data
}
