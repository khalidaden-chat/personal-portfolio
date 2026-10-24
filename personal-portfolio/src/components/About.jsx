function About({aboutINFO}) {
    return(
<section className="about-section" id="About">
    <h2>about me</h2>
    <p>{aboutINFO.bio}</p>
<a  className="about-section-a" href={aboutINFO.resumeUrl} download>Download Resume </a>
</section>
    )
}
export default About