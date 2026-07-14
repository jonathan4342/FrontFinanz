import { useState } from 'react'

const EMPTY = { name: '', email: '', company: '' }

function ClientForm({ onSubmit }) {
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
      await onSubmit(form)
      setForm(EMPTY)
    } catch (err) {
      setError(err?.response?.data?.detail || 'No se pudo crear el cliente')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="card">
      <div className="card__header">
        <h3 className="card__title">Registrar cliente</h3>
      </div>
      <div className="card__body">
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="c-name">Nombre</label>
              <input id="c-name" name="name" placeholder="Ana Torres" value={form.name} onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="c-email">Correo</label>
              <input id="c-email" name="email" type="email" placeholder="ana@empresa.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="c-company">Empresa</label>
              <input id="c-company" name="company" placeholder="Acme" value={form.company} onChange={handleChange} required />
            </div>
            <button className="btn" type="submit" disabled={saving}>
              {saving ? 'Guardando…' : 'Crear cliente'}
            </button>
          </div>
          {error && <p className="form-error">{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default ClientForm
