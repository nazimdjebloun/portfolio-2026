import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="space-y-4">
      <div className="flex items-center gap-2">
        <Code2 className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
          Skills
        </h2>
      </div>
      {skills.map((skillGroup) => (
        <div key={skillGroup.category} className="space-y-2">
          <h3 className="text-sm font-semibold text-foreground">
            {skillGroup.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-medium">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
