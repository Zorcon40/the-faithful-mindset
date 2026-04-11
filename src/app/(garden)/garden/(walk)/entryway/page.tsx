import { GardenExperience } from '@/garden/GardenExperience'
import { walkRouteStep } from '@/garden/walkRouteModel'

export default function GardenEntrywayPage() {
  return <GardenExperience initialStep={walkRouteStep.entryway} />
}
