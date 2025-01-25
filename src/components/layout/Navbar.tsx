import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { theme } from '../../styles/theme';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Features', 'Case Studies', 'Contact']

  return (
    <nav 
      className="fixed w-full z-50 backdrop-blur-md border-b transition-all"
      style={{ 
        background: `${theme.colors.background.DEFAULT}CC`,
        borderColor: theme.colors.ui.border,
        boxShadow: theme.colors.ui.glow,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="https://raw.githubusercontent.com/isikepalaku/reserse.ai/refs/heads/main/static/img/maskable-icon.png" alt="Reserse Logo" className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold" style={{ color: theme.colors.text.primary }}>
              RESERSE.ID
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-base font-medium hover:text-gray-300 transition-colors"
                style={{ color: theme.colors.text.primary }}
              >
                {item}
              </a>
            ))}
            <div className="hidden md:block">
              <button
                className="px-6 py-2 rounded-lg text-base font-bold transition-all transform hover:scale-105"
                style={{
                  background: theme.colors.primary.gradient,
                  color: theme.colors.background.DEFAULT,
                }}
                onClick={() => window.location.href = 'https://chat.reserse.id'}
              >
                Analisa Kasus
              </button>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" style={{ color: theme.colors.text.primary }} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg"
              style={{ color: theme.colors.text.primary }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        style={{ background: theme.colors.background.DEFAULT }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block px-3 py-2 text-base font-medium hover:text-gray-300 transition-colors"
              style={{ color: theme.colors.text.primary }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            className="w-full px-6 py-3 rounded-lg text-base font-bold"
            style={{
              background: theme.colors.primary.gradient,
              color: theme.colors.background.DEFAULT,
            }}
            onClick={() => {
              setIsMenuOpen(false);
              window.location.href = 'https://chat.reserse.id';
            }}
          >
            Analisa Kasus
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
