import Image from 'next/image'

export default function Stack() {
  const techStacks = [
    { name: 'HTML', image: '/html.png' },
    { name: 'JavaScript', image: '/js.png' },
    { name: 'TypeScript', image: '/typescript.png' },
    { name: 'PHP', image: '/php.png' },
    { name: 'React', image: '/react.png' },
    { name: 'Next.js', image: '/next.png' },
    { name: 'Node.js', image: '/node.png' },
    { name: 'Laravel', image: '/laravel.png' },
    { name: 'Tailwind', image: '/tailwind.png' },
    { name: 'Flutter', image: '/flutter.png' },
  ]
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col" id='experience'>
       <div className="w-full flex items-center text-4xl font-bold mb-12 justify-center">
         Skills
       </div>
       <div className="w-full">
         <div className="grid grid-cols-2 sm:grid-cols-8 gap-8">
           {techStacks.map((stack, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={stack.image}
                alt={`${stack.name} logo`}
                width={64}
                height={64}
                className="mb-2"
              />
              <span className="text-sm font-semibold text-center">{stack.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}