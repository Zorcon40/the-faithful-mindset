import { GardenExperience } from '@/garden/GardenExperience'
import { walkRouteStep } from '@/garden/walkRouteModel'

export default function GardenPorchPage() {
  return <GardenExperience initialStep={walkRouteStep.porch} />
}
