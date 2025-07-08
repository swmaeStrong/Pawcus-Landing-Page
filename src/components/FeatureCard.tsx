interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-[#1C1C1C] p-4 rounded-lg border border-gray-200 dark:border-[rgb(80,80,80)]">
      <h4 className="font-semibold text-gray-800 dark:text-[rgb(220,220,220)] mb-2">{title}</h4>
      <p className="text-gray-600 dark:text-[rgb(153,153,153)]">{description}</p>
    </div>
  );
}