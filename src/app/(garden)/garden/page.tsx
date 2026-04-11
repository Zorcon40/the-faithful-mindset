import { redirect } from 'next/navigation'
import { walkRoutes } from '@/garden/walkRouteModel'

/** Canonical walkthrough starts on the porch */
export default function GardenIndexPage() {
  redirect(walkRoutes.porch)
}
