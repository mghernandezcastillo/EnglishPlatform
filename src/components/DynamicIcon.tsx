import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LucideIcon = (Icons as any)[name];
  
  if (!LucideIcon) {
    const Fallback = Icons.Image;
    return <Fallback className={className} />;
  }
  
  return <LucideIcon className={className} />;
}
