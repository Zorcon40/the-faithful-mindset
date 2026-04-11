import { GardenExperience } from '@/garden/GardenExperience'
import { walkRouteStep } from '@/garden/walkRouteModel'

export default function GardenTourPage() {
  return <GardenExperience initialStep={walkRouteStep.tour} />
}
