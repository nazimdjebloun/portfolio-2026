"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Project } from "@/lib/data"
import { Separator } from "@/components/ui/separator"
import {
  Header,
  About,
  Skills,
  Projects,
  ExperienceEducation,
  Footer,
} from "@/components/sections"

const ProjectDialog = dynamic(() =>
  import("@/components/project-dialog").then((mod) => mod.ProjectDialog), {
  loading: () => null,
  ssr: false,
})

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
        <Header />
        <About />
        <Skills />
        
        <Separator className="opacity-50" />
        
        <Projects onProjectClick={handleProjectClick} />
        
        <ExperienceEducation />
        
        <Footer />
      </div>

      <ProjectDialog
        project={selectedProject}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </main>
  )
}
