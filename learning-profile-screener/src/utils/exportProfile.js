export function exportProfileAsJSON(profile) {
  const blob = new Blob([JSON.stringify(profile, null, 2)], {
    type: 'application/json',
  })

  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'learning-profile.json'
  a.click()
  URL.revokeObjectURL(url)
}
