import link from 'daisyui/components/link';
import React from 'react';
import ContactCard from './ContactCard';

export default function ContactSection() {
    const links = [
        {
            label: '✉️ Email',
            href: 'lat.bros.9102006@gmail.com',
            des: "Feel free to reach out for collaborations, project inquiries, or just to say hello.",
            btn: "Emil"
        },
        {
            label: '⌥ GitHub',
            href: 'https://github.com/',
            des: "Explore my open-source projects, repositories, and see what I am currently building.",
            btn: "GitHub"
        },
        {
            label: '📢 Telegram Channel',
            href: 'https://t.me/+guNNNDlSjB41ZWU1',
            des: "Subscribe to my channel for latest updates, tech insights, and useful resources.",
            btn: "Telegram"
        },
        {
            label: '▶️ YouTube',
            href: 'https://www.youtube.com/@Brosliketeaching',
            des: "Feel free to reach out for collaborations, project inquiries, or just to say hello.",
            btn: "YouTube"
        },
    ]
    return (
        <section className="py-15 px-5 bg-bg2 mt-5">

            <div className="mb-5">
                <span className="text-accent">
                        // CONTACT ME
                </span>
                <h1 className="py-6 text-white text-5xl font-extrabold">
                    Get In Touch
                </h1>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    links.map((link, index) => (
                        <ContactCard key={index} links={link} />
                    ))
                }
            </div>
        </section>
    );
}
