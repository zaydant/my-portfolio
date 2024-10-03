import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface WorkExperience {
  title: string
  company: string
  date: string
  description: string[]
}

const workExp: WorkExperience[] = [
  {
    title: 'Full Stack Intern',
    company: 'Radiant Utama Interinsco',
    date: 'August 2023 - November 2023',
    description: [
      'Built a corporate website with WordPress and ensured responsive design.',
      'Developed a meeting room booking module for a Laravel-based app.',
      'Created a custom quotation app to streamline the company’s quoting process.',
      'Collaborated with UI/UX designers and stakeholders.',
      'Conducted testing to ensure reliability and security of solutions'
    ]
  },
  {
    title: 'IT Operation Intern',
    company: 'Telkomsel',
    date: 'November 2023 - January 2024',
    description: [
      'Built a notification system for crontab monitoring using Go and the Telegram Bot API.',
      'Integrated instant alerts for task failures or anomalies.',
      'Customized the bot to deliver detailed crontab event info for the operations team.'
    ]
  },
  {
    title: 'Livestream Operations Engineer Intern',
    company: 'Vidio',
    date: 'February 2024 - August 2024',
    description: [
      'Monitored Linear TV and Radio streams with tools like Datadog and HLS Visualizer for real-time issue detection.',
      'Analyzed and reported issues, ensuring timely resolutions.',
      'Managed content delivery to partners and maintained an updated list of blocked channels.',
      'Troubleshot live streaming issues, minimizing downtime.',
      'Troubleshot internal operations web applications using svelte, ensuring optimal performance and resolving user-reported issues.'
    ]
  },
]

function ExperienceCard({ experience }: { experience: WorkExperience }) {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl font-bold transition-colors duration-300 ease-in-out hover:text-primary">
          {experience.title}
        </CardTitle>
        <CardDescription className="text-sm font-medium">
          {experience.company}
        </CardDescription>
        <CardDescription className="text-sm">
          {experience.date}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="list-disc list-inside space-y-2">
          {experience.description.map((point, index) => (
            <li key={index} className="text-sm text-gray-600">
              {point}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default function Experience() {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col min-h-screen">
      <div className="w-full flex items-center text-4xl font-bold mb-12 justify-center">
        Experience
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workExp.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}