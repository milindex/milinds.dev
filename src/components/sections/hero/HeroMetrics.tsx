const METRICS = [
  { value: '6+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: 'Millions', label: 'Users Reached' },
];

function HeroMetrics() {
  return (
    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
      {METRICS.map((metric) => (
        <div key={metric.label}>
          <span className="text-lg font-bold text-text-primary">{metric.value}</span>
          <span className="ml-1.5 text-sm text-text-muted">{metric.label}</span>
        </div>
      ))}
    </div>
  );
}

export default HeroMetrics;
