/** Route-group wrapper so /garden/* URLs remain unchanged */
export default function GardenWalkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
