import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export function FeatureCard({ title, description, icon: Icon, color }: FeatureCardProps) {
  return (
    <div className="glass rounded-2xl p-6 hover:border-white/30 transition-all">
      <div className={`p-3 rounded-xl ${color} w-fit mb-4`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
