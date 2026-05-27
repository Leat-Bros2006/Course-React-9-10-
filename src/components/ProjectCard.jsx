import ProjectSection from "./ProjectSection"

const ProjectCard = ({ project }) => {
    return (
        <div>
            <div className="bg-bg3 p-4 rounded-lg h-full">
                <div className="flex justify-between items-center">
                    <p className="text-white">{project.icon}</p>
                    <div className="flex gap-3 mb-2">
                        {
                            project.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    className="border border-gray-500 text-muted px-2 py-1 rounded cursor-pointer"
                                >
                                    {link.label}
                                </a>
                            ))
                        }

                    </div>
                </div>
                <h3 className="text-white font-semibold py-2">{project.name}</h3>
                <p className="text-muted">${project.desc}</p>
            </div>
        </div>
    )
}

export default ProjectCard