'use client'

import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

interface Project {
  title: string
  image: string
  description: string
  stacks: string[]
  demoUrl?: string
  sourceUrl?: string
}

const ongoingProjects: Project[] = [
  {
    title: "Shop By Dante - Next",
    image: "/placeholder.svg",
    description: "A responsive full stack e-commerce web application.",
    stacks: ["Next.js", "React", "Redux", "MongoDB"],
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Joki By Dante - Next",
    image: "/port2.png",
    description:
      "A web based management system for Mobile Legends boosting service.",
    stacks: ["Next.js", "React", "Zustand", "shadcn", "PostgreSQL"],
    demoUrl: "https://jokibydante.vercel.app/",
    sourceUrl: "https://github.com/zaydant/jokibydante",
  },
]

const finishedProjects: Project[] = [
  {
    title: "Minimal Portfolio - Next",
    image: "/ssport.png",
    description:
      "This is what you're currently viewing, a portfolio made simple.",
    stacks: ["Next.js", "React", "shadcn"],
    demoUrl: "#",
    sourceUrl: "https://github.com/zaydant/my-portfolio",
  },
  {
    title: "FIN.IT - Mobile",
    image: "/finit1.jpg",
    description:
      "A mobile application made to modernize lost and found process. Made to fulfill the requirements to obtain Bachelor's degree in Informatics.",
    stacks: ["Flutter", "Provider", "PostgreSQL"],
    demoUrl: "#",
    sourceUrl: "https://github.com/zaydant/finit-frontend",
  },
  {
    title: "Joki By Dante - Mobile",
    image: "/jokimobile.jpg",
    description:
      "A mobile based management system for Mobile Legends boosting service.",
    stacks: ["Flutter", "Provider", "PostgreSQL"],
    demoUrl: "#",
    sourceUrl: "https://github.com/zaydant/jokibydante-mobile",
  },
]

function ProjectCard({ project }: { project: Project }) {
  const { toast } = useToast()

  const handleButtonClick = (url: string, type: 'demo' | 'source') => {
    if (url === '#') {
      toast({
        title: "Not Available",
        description: `The ${type === 'demo' ? 'live demo' : 'source code'} for this project is not available yet.`,
        duration: 3000,
      })
    } else {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Card className="flex flex-col transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
      <CardHeader className="overflow-hidden">
        <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="mb-2 transition-colors duration-300 ease-in-out hover:text-primary">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {project.stacks.map((stack, stackIndex) => (
            <Badge key={stackIndex} variant="secondary" className="transition-colors duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground">
              {stack}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 w-full">
          <Button 
            variant="default" 
            className="flex-1 transition-colors duration-300 ease-in-out hover:bg-primary-dark"
            onClick={() => handleButtonClick(project.demoUrl || '#', 'demo')}
          >
            Live Demo
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 transition-colors duration-300 ease-in-out hover:bg-secondary hover:text-secondary-foreground"
            onClick={() => handleButtonClick(project.sourceUrl || '#', 'source')}
          >
            Source Code
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

function Projects() {
  return (
    <section className="min-h-screen container mx-auto px-4 py-16" id="projects">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <p className="text-gray-600 mb-8">
        I&apos;m currently working on these projects:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        {ongoingProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <p className="text-gray-600 mb-8">And these are the ones I finished:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {finishedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <Toaster />
    </section>
  )
}

export default Projects