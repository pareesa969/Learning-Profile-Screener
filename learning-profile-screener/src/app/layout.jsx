import './globals.css'
import '@/app/styles/theme.css'

export const metadata = {
  title: 'Learning Profile Screener',
  description: 'Privacy-first learning preference screener',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg-dark)] text-[var(--text-primary)] min-h-screen">
        {children}
      </body>
    </html>
  )
}
