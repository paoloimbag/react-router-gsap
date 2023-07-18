import heroImage from './../../assets/images/hero-image.png';
import work01 from './../../assets/images/work/work-01.png';
import work02 from './../../assets/images/work/work-02.png';
import work03 from './../../assets/images/work/work-03.png';
import work04 from './../../assets/images/work/work-04.png';
import work05 from './../../assets/images/work/work-05.png';
import work06 from './../../assets/images/work/work-06.png';

export default function Home() {
	return (
		<div className="container">
			<div className="header">
				<div className="heroImage">
					<img src={heroImage} alt="Paolo Imbag"></img>
				</div>
				<div className="heroCopy">
					<h1>
					Hi! I'm Pao, <br />UIUX Designer
					</h1>
					<p>
						Design is my passion and a powerful tool for creative problem-solving. It goes beyond aesthetics, enabling me to find innovative solutions. I've always been captivated by design, from rearranging spaces to creating visually appealing and functional solutions.
					</p>
					<div className='buttonLink buttonLink-hug'>Let’s do cool stuff!</div>
				</div>
			</div>
			<div>
				<h1>
					My Recent Work
				</h1>
				<div className="grid-container">
					<img className="grid-item" src={work01} alt="My recent work 01"></img>
					<img className="grid-item" src={work02} alt="My recent work 02"></img>
					<img className="grid-item" src={work03} alt="My recent work 03"></img>
					<img className="grid-item" src={work04} alt="My recent work 04"></img>
					<img className="grid-item" src={work05} alt="My recent work 05"></img>
					<img className="grid-item" src={work06} alt="My recent work 06"></img>
				</div>
			</div>
		</div>
	);
  }