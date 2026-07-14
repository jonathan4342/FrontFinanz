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
    <form onSubmit={handleSubmit}>
      <h3>Registrar cliente</h3>
      <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Correo" value={form.email} onChange={handleChange} required />
      <input name="company" placeholder="Empresa" value={form.company} onChange={handleChange} required />
      <button type="submit" disabled={saving}>{saving ? 'Guardando...' : 'Crear'}</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}

export default ClientForm
