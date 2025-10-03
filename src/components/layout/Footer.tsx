import React from "react";
import { Link } from "react-router-dom";
import { GitHub, LinkedIn, Twitter, Email, YouTube } from "@mui/icons-material";
import { Separator } from "@/components/ui/separator";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";



const Footer = () => {
  const currentYear = new Date().getFullYear();

  
  function TwitterXIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M18.244 2H21.68l-7.46 8.52L22.49 22h-6.563l-5.15-6.617L4.8 22H1.364l7.96-9.09L1.01 2h6.69l4.65 6.062L18.244 2zm-2.31 18h2.07L8.166 4h-2.2l10.968 16z" />
    </SvgIcon>
  );
}


  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Tanish<span className="text-primary">Portfolio</span>
            </h3>
            <p className="text-muted-foreground max-w-sm">
              A passionate full-stack developer crafting elegant solutions to
              complex problems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground mb-4">
              Feel free to reach out for collaborations or just a friendly
              hello!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Tanishhkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <GitHub fontSize="small" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/tanish-kumar-9a8324311"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <LinkedIn fontSize="small" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://x.com/Tanish_kumar01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <TwitterXIcon fontSize="small" />
                <span className="sr-only">Twitter (X)</span>
              </a>
              <a
                href="https://youtube.com/@yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <YouTube fontSize="small" />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="mailto:tanishkumarp436@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Email fontSize="small" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>© {currentYear} Tanish. All rights reserved.</p>
          <p className="mt-1">
            Designed and built with ❤️ by{" "}
            <Link to="/" className="underline hover:text-primary">
              Tanish Kumar
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
