function Projects({projectsData}){
    return(
        <section className="project-section"id="Project" >
<h2>my projects</h2>
 <div className="project-grid" >  {projectsData.map((project)=>(
    <div key={project.id} className="project-card" >
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank">view projects</a>
        
    </div>
))}</div>
        </section>
    )
}
    export default Projects
