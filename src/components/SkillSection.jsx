import SkillCard from "./SkillCard";

export default function SkillSection() {
    const skills = [
        {
            icon: '🌐',
            name: 'Web Development',
            desc: 'Building modern, responsive websites from structure to style to interaction.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
            color: 'badge-info',
        },
        {
            icon: '🐍',
            name: 'Python',
            desc: 'From scripting fundamentals to MicroPython for embedded systems and IoT.',
            tags: ['Python 3', 'MicroPython', 'OOP', 'Scripts'],
            color: 'badge-success',
        },
        {
            icon: '🤖',
            name: 'Arduino',
            desc: 'Sensors, actuators, circuits, and C++ sketches to bring hardware to life.',
            tags: ['C++', 'Sensors', 'Circuits', 'IoT'],
            color: 'badge-warning',
        },
        {
            icon: '🍓',
            name: 'Raspberry Pi Pico W',
            desc: 'WiFi-connected microcontrollers programmed with MicroPython for smart projects.',
            tags: ['Pico W', 'Wi-Fi', 'MicroPython', 'GPIO'],
            color: 'badge-error',
        },
    ]
    return (
        <div className="bg-bg2 mt-5 p-5">
            <div className="mt-6 px-5">
                <h3 className="text-accent">// SKILL & TOOLS</h3>
                <h1 className="py-6 text-white text-5xl font-extrabold">WHAT I KNOW</h1>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {skills.map(ski => (
                    <SkillCard key={ski.name} skill={ski}/>
                ))}
            </div>
        </div>
    );
}
