import { ExternalLink } from 'lucide-react'

function Projects() {
    const projects = [
        {
            title: 'Personal Portfolio',
            description: 'A modern, responsive portfolio website showcasing my skills, projects, and educational background. Built with React and styled with Tailwind CSS, featuring smooth animations and interactive elements.',
            tech_used: ['vite', 'React', 'Tailwind'],
            link: 'https://himanshu-vishwakarma.vercel.app'
        },
        {
            title: 'Movie Website',
            description: 'A Next.js-powered web app for downloading movies and series, featuring a clean UI and hosted on Vercel. Built with modern web technologies and optimized for performance.',
            tech_used: ['Next.js', 'Tailwind'],
            link: 'https://moviflixx.vercel.app/'
        },
        {
            title: 'Todo App',
            description: 'A user-friendly to-do list application designed with Angular. This project provides a seamless experience for organizing daily tasks, featuring a clean layout and easy-to-use controls.',
            tech_used: ['Angular', 'Tailwind'],
            link: 'https://todo-on-angular.vercel.app/'
        },
    ]
    return (
        <>
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-16">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        Featured Projects
                    </span>
                </h2>
                {projects.map((data, index) => (
                    <div className="max-w-4xl mx-auto my-16 hover:scale-95">
                        <div className="group relative" key={index}>
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                            <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 ring-1 ring-gray-700/50 hover:ring-purple-500/50 transition-all duration-300">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mr-2">
                                            {data.title}
                                        </h3>
                                        <div className="flex space-x-2">
                                            {data.tech_used.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 text-sm bg-gray-700/50 rounded-full hover:bg-blue-500/20 transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-300 max-w-full">
                                        {data.description}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <a
                                        href={data.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                                    >
                                        <span className="group-hover/link:underline">View Project</span>
                                        <ExternalLink className="group-hover/link:rotate-45 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects