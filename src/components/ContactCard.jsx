import React from 'react'

const ContactCard = ({links}) => {
    return (
        <>
            <div className="bg-[#111927] font-sans border border-[#1f293d] rounded-lg p-6 flex flex-col justify-between hover:border-[#00ffcc] transition-all duration-300 group">
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xl font-bold text-gray-200 group-hover:text-[#00ffcc] transition-colors">
                            {links.label}
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {links.des}
                    </p>
                </div>
                <div className="mt-6 flex justify-end">
                    <a href={links.href} className="border border-gray-600 hover:border-white text-xs px-3 py-1.5 rounded text-gray-300 hover:text-white transition-all font-mono select-all">
                        {links.btn}
                    </a>
                </div>
            </div>
        </>
    )
}

export default ContactCard