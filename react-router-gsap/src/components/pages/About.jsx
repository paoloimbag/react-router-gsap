import heroImage from './../../assets/images/hero-image.png';

export default function About() {
	return (
		<div className="container">
			<div className='header'>
				<div className="heroImage">
					<div className="sticky">
						<img src={heroImage} alt="Paolo Imbag"></img>
						<div className='buttonLink buttonLink-fill'>Work with me!</div>
					</div>
				</div>
				<div className="heroCopy">
					<h1>
						Hi! I'm Pao, <br />UIUX Designer
					</h1>
					<p>
						Design is not just a profession for me; it's a lifelong passion that fuels my creative soul. As a UI/UX Designer, I find immense joy in the art of problem-solving through thoughtful and innovative design solutions.
					</p>
					<p>
						From an early age, I discovered my fascination with the world of design. Whether it was rearranging furniture to create a harmonious living space or crafting visually appealing artworks, I always sought to combine beauty with functionality.
					</p>
					<p>
						In my journey as a UI/UX Designer, I've come to realize that design is more than just making things look good; it's about creating meaningful experiences that resonate with users. My approach is rooted in empathy and understanding - I immerse myself in the user's perspective to craft interfaces that are intuitive, delightful, and efficient.
					</p>
					<p>
						The ever-evolving landscape of technology inspires me to stay at the forefront of trends and emerging techniques. I constantly seek to refine my skills, embracing new tools and methodologies to breathe life into my designs.
					</p>
					<p>
						Collaboration is an essential part of my process. I thrive in diverse teams where ideas flow freely, and each member's expertise is valued. I believe that the best designs are born through the synergy of different minds working towards a common goal.
					</p>
					<p>
						Whether it's an elegant mobile app interface or a user-friendly website, I pour my heart and soul into every project. I take pride in creating experiences that leave a lasting impact and connect with users on a profound level.
					
					</p>
					<p>
						When I'm not immersed in pixels and prototypes, you can find me exploring art galleries, seeking inspiration in nature, or simply doodling in my sketchbook. Life itself is a canvas, and I'm always eager to paint it with my creativity.
					</p>
					<p>
						I am driven by the belief that design has the power to shape the world positively. And as a UI/UX Designer, I'm committed to making that impact, one pixel at a time.
					Let's embark on a journey of creating exceptional user experiences together!
					</p>
				</div>
			</div>
		</div>
	);
  }