/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { FileText, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center min-h-screen">
      <div className="md:w-2/3 md:pr-8 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">Hello! I'm Zaydan, a Web Developer</h1>
        <p className="text-gray-600 mb-6">
          I'm an Informatics graduate from President University who is passionate in development of websites using mainly Next.js and React.js as well as mobile development using Flutter.
        </p>
        <p className="text-gray-600 mb-6">
          I'm eager to utilize my skills and learn more about front-end development in a professional environment. Currently seeking for a role as a web developer.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" size="lg" asChild>
            <Link href="https://drive.google.com/file/d/1JGCvvwDfvJOW1dcm8WXYFqTPI7osFB5G/view?usp=sharing" className="flex items-center" rel="noopener noreferrer" target="_blank">
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </Link>
          </Button>
          <Button variant="default" size="lg" asChild>
            <Link href="https://github.com/zaydant" className="flex items-center" rel="noopener noreferrer" target="_blank">
              <Github className="mr-2 h-5 w-5 text-white" />
              GitHub
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="https://www.linkedin.com/in/zaydanta/" className="flex items-center" rel="noopener noreferrer" target="_blank">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>
      <div className="md:w-1/3">
        <div className="rounded-2xl overflow-hidden mb-4 md:mb-0">
          <Image
            src="/jedan1.png"
            alt="Zaydan's profile picture"
            width={350}
            height={350}
            quality={100}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}