import { Book } from 'lucide-react';

function Education() {
    const educations = [
        {
            year: "2021 - 2024",
            degree: "Bachelor of Computer Applications",
            institution: "Mahatma Gandhi Kashi Vidyapeeth",
            description: "Focused on computer science fundamentals, programming, and web development."
        },
        {
            year: "2020 - 2021",
            degree: "Intermediate (12th)",
            institution: "UP Board",
            description: "Completed higher secondary education with focus on mathematics and computer science."
        },
        {
            year: "2018 - 2019",
            degree: "High School (10th)",
            institution: "CBSE Board",
            description: "Completed secondary education with distinction, laying strong foundation in science and mathematics."
        }
    ]
    return (
        <>
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-16">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
                        Educational Journey
                    </span>
                </h2>
                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
                    {educations.map((edu, index) => (
                        <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}>
                            <div className="w-1/2 relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                                <div className="relative bg-gray-800/50 backdrop-blur-lg p-6 rounded-lg border border-gray-700">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Book className="text-purple-400" />
                                        <span className="text-sm text-purple-400">{edu.year}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                                    <p className="text-gray-400 mb-2">{edu.institution}</p>
                                    <p className="text-sm text-gray-500">{edu.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Education