
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Planets', path: '/planets' },
    { name: 'Galaxies', path: '/galaxies' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cosmic-stardust-teal to-cosmic-galaxy-violet"></div>
          <span className="text-xl font-bold tracking-wider">AstroSpark</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className="text-sm font-medium text-gray-200 hover:text-white hover:underline underline-offset-4 transition"
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-gradient-to-r from-cosmic-stardust-teal to-cosmic-galaxy-violet hover:opacity-90 transition-opacity">
            Explore
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-x-0 top-16 bg-cosmic-deep-blue/95 backdrop-blur-md border-b border-white/10 md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className="text-lg font-medium text-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-gradient-to-r from-cosmic-stardust-teal to-cosmic-galaxy-violet hover:opacity-90 transition-opacity w-full">
            Explore
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
