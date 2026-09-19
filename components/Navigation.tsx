import { profile } from "@/data/content";
export default function Navigation() { return <header className="site-nav"><a className="site-nav__name" href="#top">{profile.name}</a><nav className="site-nav__links" aria-label="Main navigation"><a href="#work">Work</a><a href="#about">Info</a><a href="#contact">Contact</a></nav><span className="site-nav__status">HYD · IN</span></header>; }
