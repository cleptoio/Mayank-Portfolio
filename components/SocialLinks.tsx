import { Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';
import { SiSalesforce } from 'react-icons/si';

export function SocialLinks() {
    const socials = [
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "https://www.linkedin.com/in/mayank-khanvilkar",
            color: "hover:text-clepto-cyan"
        },
        {
            name: "Instagram",
            icon: Instagram,
            href: "https://www.instagram.com/mayank_khanvilkar/",
            color: "hover:text-clepto-cyan"
        },
        {
            name: "Salesforce",
            icon: SiSalesforce,
            href: "https://trailblazer.me/id/mkhanvilkar1",
            color: "hover:text-clepto-cyan"
        },
        {
            name: "Email",
            icon: Mail,
            href: "mailto:mayank.khanvilkar@clepto.io",
            color: "hover:text-clepto-cyan"
        },
        {
            name: "Clepto.io",
            icon: ExternalLink,
            href: "https://www.clepto.io",
            color: "hover:text-clepto-cyan"
        }
    ];

    return (
        <div className="flex items-center gap-3">
            {socials.map((social) => {
                const Icon = social.icon;
                return (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2.5 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 rounded-lg hover:bg-clepto-navy/50`}
                        aria-label={social.name}
                    >
                        <Icon className="w-5 h-5" />
                    </a>
                );
            })}
        </div>
    );
}
