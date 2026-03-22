import { User } from "lucide-react";
import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="space-y-4">
      <div className="flex items-center gap-2">
        <User className="h-5 w-5 text-muted-foreground" />
        <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
          About
        </h2>
      </div>
      <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {profile.description}
      </p>
    </section>
  );
}
