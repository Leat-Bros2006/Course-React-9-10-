export default function CourseCard({ course }) {
    return (
        <div
            className={`bg-bg3 p-4 rounded-lg shadow-lg border border-gray-700 
     border-t-3 ${course.accent} hover:border-blue-500 transition-all duration-600 hover:-translate-y-1`}>
            <h3 className="text-2xl">{course.emoji}</h3>
            <h2 className="text-white font-semibold py-2">{course.title}</h2>
            <p className="text-muted">{course.desc}</p>
            <div className="flex items-center py-4 gap-2">
                {course.chips.map((tg, index) => <span key={index}
                    className="bg-black text-muted text-xs px-2 py-1 rounded">{tg}</span>)}
            </div>
        </div>
    );
}