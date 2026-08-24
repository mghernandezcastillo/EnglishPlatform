import { ClassSlide } from '../types';
import { SpeakingSceneCard } from './SpeakingSceneCard';

interface RolePlayCardProps {
  slide: ClassSlide;
}

export function RolePlayCard({ slide }: RolePlayCardProps) {
  return <SpeakingSceneCard slide={slide} />;
}

