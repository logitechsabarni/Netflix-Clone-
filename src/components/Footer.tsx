import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    'Audio Description': ['https://netflux.com/help'],
    'Help Center': ['https://netflux.com/help'],
    'Gift Cards': ['https://netflux.com/gifts'],
    'Terms of Use': ['https://netflux.com/terms'],
    'Privacy': ['https://netflux.com/privacy'],
    'Cookie Preferences': ['https://netflux.com/cookies'],
    'Corporate Information': ['https://netflux.com/corporate'],
    'Contact Us': ['https://netflux.com/contact'],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com' },
    { icon: Twitter, href: 'https://twitter.com' },
    { icon: Instagram, href: 'https://instagram.com' },
    { icon: Youtube, href: 'https://youtube.com' },
  ];

  return (
    <footer className="bg-[#0a0a0a] px-4 py-12 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1920px]">
        {/* Social Icons */}
        <div className="mb-8 flex items-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm md:grid-cols-4">
          {Object.entries(footerLinks).map(([title, links]) =>
            links.map((link, index) => (
              <a
                key={`${title}-${index}`}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                {title}
              </a>
            ))
          )}
        </div>

        {/* Service Code */}
        <div className="mt-8">
          <button className="rounded border border-gray-600 px-3 py-1.5 text-xs text-gray-500 hover:border-gray-400 hover:text-white transition-colors">
            Service Code
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Netflux Clone. This is a demo project.
        </div>
      </div>
    </footer>
  );
}