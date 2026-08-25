import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Collect all targets (hero section + nav target sections)
    const sectionIds = ["top", "skills", "experience", "projects", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -50% 0px", // Triggers active status near middle of screen
        threshold: 0.1,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#top">
          Khaled Muwahed
        </a>
        <nav className="nav-links">
          {NAV_ITEMS.map((item) => {
            const id = item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === id ? "active" : ""}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
