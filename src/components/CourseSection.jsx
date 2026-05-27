import CourseCard from "./CourseCard";

const courses = [
    {
        emoji: '🌐',
        title: 'Web Development',
        desc: 'Learn to design and build websites from scratch. Covers HTML structure, CSS styling, responsive layouts, and JavaScript interactivity.',
        chips: ['HTML', 'CSS', 'JavaScript', 'Beginner → Intermediate'],
        accent: 'border-t-info',
        badge: 'info',
    },
    {
        emoji: '⚙️',
        title: 'Arduino & Robotics',
        desc: 'Hands-on introduction to electronics and robotics. Build circuits, program microcontrollers, and create your first interactive hardware projects.',
        chips: ['Arduino', 'C++', 'Sensors', 'All levels'],
        accent: 'border-t-warning',
        badge: 'warning',
    },
    {
        emoji: '🍓',
        title: 'Raspberry Pi Pico W',
        desc: 'Explore the world of connected microcontrollers. Program with MicroPython, connect to Wi-Fi, and build real IoT projects step by step.',
        chips: ['Pico W', 'MicroPython', 'IoT', 'Beginner'],
        accent: 'border-t-error',
        badge: 'error',
    },
    {
        emoji: '🐍',
        title: 'Python Programming',
        desc: 'Master Python from zero to confident programmer. Variables, loops, functions, OOP, and real-world problem solving.',
        chips: ['Python 3', 'OOP', 'Projects', 'Beginner → Adv'],
        accent: 'border-t-success',
        badge: 'success',
    },
]


export default function CourseSection() {
    return (
        <div className="p-4 py-8">
            <h3 className="text-accent">// WHAT I TEACH</h3>
            <h1 className="py-6 text-white text-3xl font-black">MY COURSES</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">

                {courses.map((course, index) => <CourseCard key={index} course={course} />)}
            </div>
        </div>
    );
}