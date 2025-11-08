import { Badge } from "../../components/ui/badge";

export function Technologies({ technologies }) {
  return (
    <div className="flex w-full flex-wrap gap-1">
      {technologies.map((technology, index) => (
        <Badge key={index} className="border border-border text-xs font-medium">
          {technology}
        </Badge>
      ))}
    </div>
  );
}
