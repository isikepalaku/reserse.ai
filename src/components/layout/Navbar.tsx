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
            <img src="data:image/png;base64,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" alt="Reserse Logo" className="h-8 w-8" />
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
