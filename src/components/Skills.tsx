import { Github, Terminal, Code, Database, Brain, Puzzle, Cpu, Radio, Waves, Laptop, Share2, Code2, MessageSquare } from 'lucide-react';

type SkillItem = {
    name: string;
    icon: JSX.Element;
    proficiency: number;
};

function Skills() {
    const skills = {
        WebLanguages: [
            { name: 'HTML5', icon: <Code2 />, proficiency: 90 },
            { name: 'CSS3', icon: <Laptop />, proficiency: 89 },
            { name: 'JavaScript', icon: <Terminal />, proficiency: 92 },
            { name: 'TypeScript', icon: <Code />, proficiency: 88 }
        ] as SkillItem[],
        CoreLanguages: [
            { name: 'C Language', icon: <Code />, proficiency: 80 },
            { name: 'C++ Language', icon: <Code />, proficiency: 85 },
            { name: 'Java', icon: <Code />, proficiency: 70 },
            { name: 'Python', icon: <Code />, proficiency: 78 }
        ] as SkillItem[],
        Frameworks: [
            { name: 'Angular', icon: <Radio />, proficiency: 80 },
            { name: 'React.js', icon: <Radio />, proficiency: 90 },
            { name: 'Next.js', icon: <Share2 />, proficiency: 85 },
            { name: 'Tailwind CSS', icon: <Waves />, proficiency: 80 }
        ] as SkillItem[],
        Tools: [
            { name: 'Git', icon: <Database />, proficiency: 85 },
            { name: 'GitHub', icon: <Github />, proficiency: 88 },
            { name: 'npm', icon: <Terminal />, proficiency: 80 },
            { name: 'Yarn', icon: <Cpu />, proficiency: 80 }
        ] as SkillItem[],
        softSkills: [
            { name: 'Logical Reasoning', icon: <Brain />, proficiency: 90 },
            { name: 'Problem Solving', icon: <Puzzle />, proficiency: 88 },
            { name: 'Coding', icon: <Code2 />, proficiency: 85 }
        ] as SkillItem[],
        spokenLanguages: [
            { name: 'Hindi', icon: <MessageSquare />, proficiency: 95 },
            { name: 'English', icon: <MessageSquare />, proficiency: 85 }
        ] as SkillItem[]
    };

    const skillSections: [string, SkillItem[]][] = [
        ['Core Languages', skills.CoreLanguages],
        ['Web Languages', skills.WebLanguages],
        ['Libraries/Frameworks', skills.Frameworks],
        ['Tools', skills.Tools],
        ['Soft Skills', skills.softSkills],
        ['Spoken Languages', skills.spokenLanguages]
    ];

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-16">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Technical Expertise
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Separated Web & Core Language Cards */}
                {skillSections.map(([title, items]) => (
                    <div key={title as string} className="perspective-1000">
                        <div className="group relative transform transition-all duration-500 hover:rotate-y-10">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                            <div className="relative bg-gray-800/50 backdrop-blur-lg p-6 rounded-lg border border-gray-700">
                                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                    {title}
                                </h3>
                                <div className="space-y-4">
                                    {(items as SkillItem[]).map((skill, idx) => (
                                        <div key={idx} className="group/skill">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-purple-400 group-hover/skill:rotate-12 transition-transform">
                                                    {skill.icon}
                                                </span>
                                                <span className="font-medium">{skill.name}</span>
                                            </div>
                                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 group-hover/skill:animate-pulse"
                                                    style={{ width: `${skill.proficiency}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
