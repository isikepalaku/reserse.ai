import { Search, Shield, Cpu, Network, Lock, Database } from 'lucide-react';

export const features = [
  {
    icon: Search,
    title: "Deep Analysis",
    description: "Advanced pattern recognition and data recovery techniques"
  },
  {
    icon: Shield,
    title: "Secure Investigation",
    description: "End-to-end encrypted investigation environment"
  },
  {
    icon: Cpu,
    title: "AI-Powered",
    description: "Machine learning algorithms for intelligent threat detection"
  },
  {
    icon: Network,
    title: "Network Forensics",
    description: "Comprehensive network traffic analysis and reconstruction"
  },
  {
    icon: Lock,
    title: "Chain of Custody",
    description: "Immutable evidence tracking with blockchain technology"
  },
  {
    icon: Database,
    title: "Data Recovery",
    description: "Advanced data recovery from damaged or encrypted sources"
  }
] as const;