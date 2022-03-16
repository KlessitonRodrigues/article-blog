export default function formatISODate(date: string) {
  return (
    new Date(date).toLocaleDateString('en', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }) || ''
  )
}
