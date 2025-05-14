import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { 
  Activity, 
  Scale, 
  Stethoscope,
  Brain,
  Pills, 
  Heart 
} from 'lucide-react';

const iconMap = {
  activity: Activity,
  scale: Scale,
  stethoscope: Stethoscope,
  brain: Brain,
  pills: Pills,
  heart: Heart
};

export default function ServiceCard({ title, description, iconName, href }) {
  const Icon = iconMap[iconName] || Activity;

  return (
    <div className="card overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="p-6 sm:p-8">
        <div className="h-12 w-12 bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
          <Icon className="h-6 w-6 text-primary-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        <Link 
          href={href} 
          className="group inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
        >
          Learn More
          <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}