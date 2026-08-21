import { ClassSlide } from '../types';
import { LetsSayCard } from './LetsSayCard';

interface RolePlayCardProps {
  slide: ClassSlide;
}

export function RolePlayCard({ slide }: RolePlayCardProps) {
  return <LetsSayCard slide={slide} />;
}
