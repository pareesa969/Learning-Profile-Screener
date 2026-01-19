"use client"

import { ThemeProvider, CssBaseline } from "@mui/material"
import { theme } from "@/theme/theme"
import "@/styles/globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
