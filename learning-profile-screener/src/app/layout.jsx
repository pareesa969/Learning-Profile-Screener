import './globals.css'
import '@/styles/theme.css'

export const metadata = {
  title: 'Learning Profile Screener',
  description: 'Private, browser-based learning preference screener',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-app-dark text-app-text min-h-screen">
        {children}
      </body>
    </html>
  )
}
