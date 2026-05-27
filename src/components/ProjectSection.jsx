// import ProjectCard from "./ProjectCard";

import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
    const projects = [
        {
            icon: '🌡',
            name: 'IoT Temp Monitor',
            desc: 'A Raspberry Pi Pico W project that reads temperature and humidity data over Wi-Fi and displays it on a live web dashboard built with Python.',
            links: [{ label: 'GitHub', href: 'https://github.com/' }, { label: 'Demo', href: '#' }],
            badge: 'badge-error',
            badgeLabel: 'Pico W',
        },
        {
            icon: '🤖',
            name: 'Obstacle Avoiding Robot',
            desc: 'An Arduino-based autonomous robot that uses ultrasonic sensors to detect and navigate around obstacles in real time.',
            links: [{ label: 'GitHub', href: '#' }],
            badge: 'badge-warning',
            badgeLabel: 'Arduino',
        },
        {
            icon: '🌐',
            name: 'Student Portfolio Template',
            desc: 'A clean, responsive portfolio template built with HTML, CSS, and vanilla JS — designed for students completing their first web development course.',
            links: [{ label: 'Live', href: '#' }, { label: 'GitHub', href: '#' }],
            badge: 'badge-info',
            badgeLabel: 'Web Dev',
        },
        {
            icon: '🐍',
            name: 'Python Quiz CLI App',
            desc: 'A command-line quiz game built entirely in Python with randomized questions, score tracking, and category selection.',
            links: [{ label: 'GitHub', href: '#' }],
            badge: 'badge-success',
            badgeLabel: 'Python',
        },
    ]
    return (
        <div className="py-15 px-5 bg-bg2 mt-5">
            <div className="mb-5">
                <h3 className="text-accent">// PORTFOLIO</h3>
                <h1 className="py-6 text-white text-5xl font-extrabold">Featured Projects</h1>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    projects.map((item, index) => (
                        <ProjectCard key={index} project={item} />
                    ))
                }
            </div>
        </div>
    );
}
