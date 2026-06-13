import type { Cluster } from "@/data/majors";

const clusterStyles: Record<Cluster, string> = {
  Sciences: "bg-cluster-sciences/15 text-cluster-sciences border-cluster-sciences/30",
  "Social Sciences": "bg-cluster-social/15 text-cluster-social border-cluster-social/30",
  Humanities: "bg-cluster-humanities/15 text-cluster-humanities border-cluster-humanities/30",
  Applied: "bg-cluster-applied/15 text-cluster-applied border-cluster-applied/30",
  Interdisciplinary:
    "bg-cluster-interdisciplinary/15 text-cluster-interdisciplinary border-cluster-interdisciplinary/30",
};

interface ClusterBadgeProps {
  cluster: Cluster;
  className?: string;
}

export default function ClusterBadge({ cluster, className = "" }: ClusterBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        px-3 py-1
        text-xs font-medium tracking-wide uppercase
        rounded-full border
        ${clusterStyles[cluster]}
        ${className}
      `}
    >
      {cluster}
    </span>
  );
}
