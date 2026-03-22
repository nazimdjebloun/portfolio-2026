import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-muted pt-16 pb-8 text-center text-sm text-muted-foreground">
      <div className="mb-4 flex justify-center gap-4">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-primary"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-primary"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="transition-colors hover:text-primary"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with Next.js & Shadcn/UI.
      </p>
    </footer>
  );
}
