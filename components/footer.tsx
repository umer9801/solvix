import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">SC</span>
              </div>
              <span className="text-lg font-bold text-foreground">Solvix Core</span>
            </div>
            <p className="text-foreground/70 text-sm">Premium tech solutions for modern businesses.</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/n8n" className="text-foreground/70 hover:text-primary transition-colors">n8n Automation</Link></li>
              <li><Link href="/services/langchain" className="text-foreground/70 hover:text-primary transition-colors">LangChain Integration</Link></li>
              <li><Link href="/services/ai-solutions" className="text-foreground/70 hover:text-primary transition-colors">AI Solutions</Link></li>
              <li><Link href="/services/web-development" className="text-foreground/70 hover:text-primary transition-colors">Web Development</Link></li>
            </ul>
          </div>

          {/* Services 2 */}
          <div>
            <h3 className="font-bold text-foreground mb-4">More Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/shopify" className="text-foreground/70 hover:text-primary transition-colors">Shopify Design</Link></li>
              <li><Link href="/services/content" className="text-foreground/70 hover:text-primary transition-colors">Content Creation</Link></li>
              <li><Link href="/services/marketing-seo" className="text-foreground/70 hover:text-primary transition-colors">Marketing & SEO</Link></li>
              <li><Link href="/services/app-dev" className="text-foreground/70 hover:text-primary transition-colors">App Development</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Mail size={16} className="text-primary mt-1 flex-shrink-0" />
                <a href="mailto:info@solvixcore.com" className="text-foreground/70 hover:text-primary transition-colors">info@solvixcore.com</a>
              </div>
              <div className="flex items-start space-x-2">
                <Phone size={16} className="text-primary mt-1 flex-shrink-0" />
                <a href="https://wa.me/14378898256" className="text-foreground/70 hover:text-primary transition-colors">+1 (437) 889-8256</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground/70">Suite 104 - 2 Gurdwara Road, Ottawa, ON K2E 1A2, Canada</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm">&copy; 2024 Solvix Core. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">Terms</Link>
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
