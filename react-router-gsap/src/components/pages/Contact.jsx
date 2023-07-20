import heroImage from './../../assets/images/hero-image.png';
export default function Contact() {
  return (
	<div className="container">
        <div className="header">
            <div className="heroImage sticky">
                <img src={heroImage} alt="Paolo Imbag"></img>
            </div>
            <div className="heroCopy">
                <h2 className="contactH1">
                    Got some cool design project ideas in mind?
                </h2>
                <p>
                Let's talk about it and create awesome stuff!
                </p>
                <form className="contactForm">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="email" id="email" placeholder="yourname@domain.com"></input>
                    <label htmlFor="textarea">Tell me about your project</label>
                    <textarea id="textarea"></textarea>
					<div className='buttonLink buttonLink-fill'>Work with me!</div>
                </form>
            </div>
        </div>
	</div>
  );
}