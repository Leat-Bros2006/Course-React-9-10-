import SkillSection from "./SkillSection"

const SkillCard = ({skill}) => {
    return (
        <>
            <div
                className="bg-bg3 p-4 rounded-lg shadow-lg border border-bg2 border-gray-700
                                 hover:border-blue-300 transition-all duration-200 hover:-translate-y-2">
                <h3 className="text-2xl">{skill.icon}</h3>
                <h2 className="text-white font-semibold py-2">{skill.name}</h2>
                <p className="text-muted">{skill.desc}</p>
                <div className="flex items-centerpy4 gap-2 mt-3">
                    {
                        skill.tags.map((tg, index) => (
                            <span key={index} className="bg-black text-muted px-2 py-1 rounded">{tg}</span>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default SkillCard