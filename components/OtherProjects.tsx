"use client";
import { projects } from "@/data/content";
import { useScrollReveal } from "@/lib/hooks";
const items=[projects.genie,projects.careerRec,projects.nasaSpaceApps];
export default function OtherProjects(){const {ref,isVisible}=useScrollReveal(.08);return <div ref={ref as React.RefObject<HTMLDivElement>} className={`project-list reveal ${isVisible?"visible":""}`}><p className="kicker">More work / 02 to 04</p>{items.map((p,index)=><article className="project-row" key={p.name}><span className="project-number">0{index+2}</span><div><h3 className="project-name">{p.name}</h3><span className="project-type">{p.tagline}</span></div><p className="project-description">{p.description}</p><span className="project-arrow" aria-hidden="true">↗</span></article>)}</div>}
