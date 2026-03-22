"use client"

import {
  profile,
  skills,
  experience,
  education,
  projects,
  Project,
} from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Briefcase,
  GraduationCap,
  Code2,
  User,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FolderGit2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ProjectDialog } from "@/components/project-dialog"

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setDialogOpen(true)
  }

  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <div className="mx-auto max-w-4xl space-y-20 px-6 py-12 md:py-24">
        {/* Header Section */}
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

        {/* About Section */}
        <section id="about" className="space-y-4">
          <div className="flex items-center gap-2 text-foreground/80">
            <User className="h-5 w-5" />
            <h2 className="text-sm font-bold tracking-tight uppercase opacity-70">
              About
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {profile.description}
          </p>
        </section>

        {/* Skills Section */}
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

        <Separator className="opacity-50" />

        {/* Projects Section */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center gap-2 text-foreground/80">
            <FolderGit2 className="h-5 w-5" />
            <h2 className="text-sm font-semibold tracking-tight uppercase opacity-70">
              Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group relative cursor-pointer overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                onClick={() => handleProjectClick(project)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-bold transition-colors group-hover:text-primary">
                      {project.title}
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    View details <ExternalLink className="ml-1 h-3 w-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience & Education Tabs */}
        <section className="space-y-6">
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full max-w-[400px] grid-cols-2">
              <TabsTrigger
                value="experience"
                className="flex items-center gap-2"
              >
                <Briefcase className="h-4 w-4" />
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="flex items-center gap-2"
              >
                <GraduationCap className="h-4 w-4" />
                Education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="mt-8 space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="group relative space-y-3 border-l-2 border-primary/30 pl-8"
                >
                  <div className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                  <div className="space-y-1">
                    <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                      <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                        {exp.role}
                      </h3>
                      <span className="rounded bg-muted px-2 py-0.5 text-sm font-medium text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="font-semibold text-primary">{exp.company}</p>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="space-y-1.5">
                      {exp.achievements.map((ach, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 text-primary">▹</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </TabsContent>

            <TabsContent value="education" className="mt-8 space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                      <CardTitle className="text-lg font-bold">
                        {edu.degree}
                      </CardTitle>
                      <Badge variant="outline" className="w-fit">
                        {edu.period}
                      </Badge>
                    </div>
                    <CardDescription className="text-base font-semibold">
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {edu.description}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground/70">
                      {edu.location}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </section>

        {/* Footer */}
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
            © {new Date().getFullYear()} {profile.name}. Built with Next.js &
            Shadcn/UI.
          </p>
        </footer>
      </div>

      {/* Project Detail Dialog */}
      <ProjectDialog
        project={selectedProject}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </main>
  )
}
