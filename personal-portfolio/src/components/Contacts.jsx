function Contacts(){
    return(
        <section className="contact-section" id="Contact">

<h2>GET IN TOUCH</h2>
<form className="contact-form">
    <input type="text" placeholder="your name" />
    <input type="email" placeholder="your email" />
    <textarea placeholder="your message" rows='5'></textarea>
    <button type="submit">send message</button>


</form>
        </section>
    )
}
export default Contacts