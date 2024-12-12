import React from 'react';
import { theme } from '../../styles/theme';
import { features } from '../animations/constants/featureData';
import FeatureCard from '../ui/FeatureCard';

const Features: React.FC = () => {
  return (
    <section style={{ background: theme.colors.background.gradient }} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: theme.colors.text.primary }}>
          Alat Bantu Penyelidikan
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;