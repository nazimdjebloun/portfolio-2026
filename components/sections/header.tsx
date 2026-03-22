import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Header() {
  return (
    <header className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <ThemeToggle />
      </div>
      <div className="space-y-2">
        <p className="text-base font-medium text-muted-foreground sm:text-lg md:text-xl lg:text-2xl">
          {profile.role}
        </p>
        <div className="flex gap-2 sm:gap-3">
          <Button variant="outline" size="icon" asChild className="md:hidden">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="md:hidden">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild className="md:hidden">
            <a href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="hidden md:inline-flex">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="hidden md:inline-flex">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="hidden md:inline-flex">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> Email
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
