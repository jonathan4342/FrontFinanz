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
    <div className="card">
      <div className="card__header">
        <h3 className="card__title">Crear ticket</h3>
      </div>
      <div className="card__body">
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="t-client">Cliente</label>
              <select id="t-client" name="client_id" value={form.client_id} onChange={handleChange} required>
                <option value="">Selecciona…</option>
                {clients.map((c) => (
                  <option key={c.id} value={c.id}>{c.name} · {c.company}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="t-title">Título</label>
              <input id="t-title" name="title" placeholder="Error al iniciar sesión" value={form.title} onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="t-desc">Descripción</label>
              <textarea id="t-desc" name="description" placeholder="Describe el problema…" value={form.description} onChange={handleChange} required />
            </div>
            <button className="btn" type="submit" disabled={saving}>
              {saving ? 'Guardando…' : 'Crear ticket'}
            </button>
          </div>
          {error && <p className="form-error">{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default TicketForm
