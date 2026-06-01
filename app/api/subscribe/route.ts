import { NextResponse } from 'next/server'
export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    if (!email || !email.includes('@')) return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    const FORM_ID = process.env.CONVERTKIT_FORM_ID
    const API_KEY = process.env.CONVERTKIT_API_KEY
    if (!FORM_ID || !API_KEY) { console.log(`[DEV] Subscribe: ${email}`); return NextResponse.json({ success: true }) }
    const r = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: API_KEY, email }),
    })
    if (!r.ok) return NextResponse.json({ error: 'Failed' }, { status: 500 })
    return NextResponse.json({ success: true })
  } catch { return NextResponse.json({ error: 'Server error' }, { status: 500 }) }
}
