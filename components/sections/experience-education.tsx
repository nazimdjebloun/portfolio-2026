"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "@/lib/data";

export function ExperienceEducation() {
  return (
    <section className="space-y-6">
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full max-w-[400px] grid-cols-2">
          <TabsTrigger value="experience" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            Experience
          </TabsTrigger>
          <TabsTrigger value="education" className="flex items-center gap-2">
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
                      <span className="text-primary">•</span>
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
  )
}
