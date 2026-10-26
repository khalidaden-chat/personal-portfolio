
import profileImage from '../assets/hero-picture.jpg'

function Hero(){
    const name= 'KHALID';
    const title = 'junior frontend devloper';
    const tagLine =  ' iam sofware engineer who is still learn tech and curious about  build new think'
    
    return(

    <section className="hero-section"id='Hero'>
        <img className='image-hero' src={profileImage} alt="hero image"    />
        <h1>waa magaceyga {name}</h1>
        <h2>{title}</h2>
        <p>{tagLine}</p>
        

    </section>

    )
} 
export default Hero;