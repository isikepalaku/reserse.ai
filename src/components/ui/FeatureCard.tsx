import React from 'react';
import { LucideIcon } from 'lucide-react';
import { theme } from '../../styles/theme';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="p-6 rounded-xl backdrop-blur-md transition-all transform hover:scale-105"
      style={{
        background: theme.colors.ui.card,
        border: `1px solid ${theme.colors.ui.border}`,
        boxShadow: theme.colors.ui.glow,
      }}
    >
      <div className="mb-4" style={{ color: theme.colors.primary.DEFAULT }}>
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
        {title}
      </h3>
      <p style={{ color: theme.colors.text.secondary }}>{description}</p>
    </div>
  );
};

export default FeatureCard;