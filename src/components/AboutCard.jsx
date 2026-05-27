import React from 'react'

export default function AboutCard({ num, text }) {
    return (
        <div className="bg-bg3 p-4 flex flex-col gap-4 items-center rounded-lg text-center">
            <div className="text-accent text-3xl font-bold">{num}</div>
            <p className="text-muted">{text}</p>
        </div>
    )
}
