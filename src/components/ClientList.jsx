function ClientList({ clients }) {
  if (clients.length === 0) {
    return <p className="empty">Aún no hay clientes registrados.</p>
  }

  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Empresa</th>
            <th>Creado</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c) => (
            <tr key={c.id}>
              <td className="mono">#{c.id}</td>
              <td>{c.name}</td>
              <td className="cell-muted">{c.email}</td>
              <td>{c.company}</td>
              <td className="cell-muted">{new Date(c.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClientList
