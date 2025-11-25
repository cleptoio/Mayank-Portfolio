import { Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';
import { SiSalesforce } from 'react-icons/si';

export function SocialLinks() {
    const socials = [
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "https://www.linkedin.com/in/mayank-khanvilkar",
            color: "hover:text-blue-400"
        },
        {
            name: "Instagram",
            icon: Instagram,
            href: "https://www.instagram.com/mayank_khanvilkar/",
            color: "hover:text-pink-400"
        },
        {
            name: "Salesforce",
            icon: SiSalesforce,
            href: "https://trailblazer.me/id/mkhanvilkar1",
            color: "hover:text-blue-500"
        },
        {
            name: "Email",
            icon: Mail,
            href: "mailto:mayank.khanvilkar@clepto.io",
            color: "hover:text-clepto-red"
        },
        {
            name: "Clepto.io",
            icon: ExternalLink,
            href: "https://www.clepto.io",
            color: "hover:text-clepto-cyan"
        }
    ];

    return (
        <div className="flex items-center gap-4">
            {socials.map((social) => {
                const Icon = social.icon;
                return (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-navy-light border border-gray-800 rounded-xl ${social.color} transition-all duration-300 hover:border-current hover:scale-110`}
                        aria-label={social.name}
                    >
                        <Icon className="w-5 h-5" />
                    </a>
                );
            })}
        </div>
    );
}
