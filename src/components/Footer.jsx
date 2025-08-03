import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
} from "react-icons/fa"

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Templates", href: "#" },
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Examples", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
    legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
    social: [
      { name: "Twitter", href: "#", icon: FaTwitter },
      { name: "LinkedIn", href: "#", icon: FaLinkedinIn },
      { name: "GitHub", href: "#", icon: FaGithub },
      { name: "Discord", href: "#", icon: FaDiscord },
    ],
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              JustCV
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-full break-words text-justify">
              Create professional CVs that get you hired. Our dark themed templates and intuitive builder make resume
              creation simple, fast, and effective.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:border-cyan-500 hover:bg-gray-700 transition-all duration-300"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-400">
              © 2024 JustCV by <span className="text-cyan-400 font-semibold">BarbarianKing</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-sm text-gray-500">
              <span>Made with ❤️ for job seekers</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full hidden sm:inline-block"></span>
              <span>🌙 Dark theme optimized</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
