import type { Metadata } from 'next'
import '../styles/globals.css'
export const metadata: Metadata = {
  title: 'NOCAiS™ — Nursing Operations Command AI System',
  description: 'AI-powered LTC nursing leadership platform. Abuse investigations, incident reporting, staffing intelligence, and clinical operations — built for nursing leadership.',
  openGraph: { title: 'NOCAiS™', description: 'Nursing Operations Command AI System', type: 'website' },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
