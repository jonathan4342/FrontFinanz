import { useState } from 'react'

const EMPTY = { client_id: '', title: '', description: '' }

function TicketForm({ clients, onSubmit }) {
  const [form, setForm] = useState(EMPTY)
  const [error, setError] = useState(null)
  const [saving, setSaving] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSaving(true)
    try {
      await onSubmit({ ...form, client_id: Number(form.client_id) })
      setForm(EMPTY)
    } catch (err) {
      setError(err?.response?.data?.detail || 'No se pudo crear el ticket')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Crear ticket</h3>
      <select name="client_id" value={form.client_id} onChange={handleChange} required>
        <option value="">Selecciona un cliente</option>
        {clients.map((c) => (
          <option key={c.id} value={c.id}>{c.name} ({c.company})</option>
        ))}
      </select>
      <input name="title" placeholder="Título" value={form.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Descripción" value={form.description} onChange={handleChange} required />
      <button type="submit" disabled={saving}>{saving ? 'Guardando...' : 'Crear'}</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}

export default TicketForm
