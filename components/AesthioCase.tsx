"use client";
import { projects } from "@/data/content";
import { useScrollReveal } from "@/lib/hooks";
export default function AesthioCase(){const {ref,isVisible}=useScrollReveal(0.08);const p=projects.aesthio;return <article id="aesthio" ref={ref as React.RefObject<HTMLElement>} className={`aesthio-feature reveal ${isVisible?"visible":""}`}><div><p className="kicker">01 / Flagship project · {p.status}</p><h3 className="aesthio-title">{p.name}</h3><p className="aesthio-summary">{p.description}</p><div className="aesthio-facts">{p.stack.map(item=><span key={item}>{item}</span>)}</div></div><div className="aesthio-canvas" aria-label="Abstract visual treatment for Aesthio"><div className="aesthio-orb"/><div className="aesthio-window"/></div></article>}
