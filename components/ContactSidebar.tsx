'use client'
import { useState } from 'react'

export default function ContactSidebar() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e: React.FormEvent) => { e.preventDefault(); setSent(true) }

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden" style={{ border: '1px solid #eee' }}>
      <div style={{ backgroundColor: '#a61c23' }} className="px-6 py-5">
        <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: '1.3rem' }} className="font-bold">
          Get a Free Consultation
        </h3>
        <p className="text-white/85 text-sm mt-1">Our team responds within 24 hours.</p>
      </div>
      <div className="p-6">
        {sent ? (
          <div className="text-center py-6">
            <div className="text-4xl mb-3">✅</div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#272727' }}>Thank You!</p>
            <p className="text-sm text-gray-500 mt-1">We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handle} className="space-y-3">
            {[
              { label: 'Full Name *', key: 'name', type: 'text', required: true },
              { label: 'Phone *', key: 'phone', type: 'tel', required: true },
              { label: 'Email', key: 'email', type: 'email', required: false },
            ].map(f => (
              <div key={f.key}>
                <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wide">{f.label}</label>
                <input
                  type={f.type}
                  required={f.required}
                  value={form[f.key as keyof typeof form]}
                  onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wide">Your Case</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Briefly describe your situation..."
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-red-600 resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full text-center py-3">
              Submit Free Consultation →
            </button>
            <p className="text-center text-gray-400 text-xs">🔒 100% Confidential</p>
          </form>
        )}
      </div>
    </div>
  )
}
