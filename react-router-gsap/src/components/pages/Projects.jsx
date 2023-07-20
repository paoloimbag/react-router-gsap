// Import Projects
import work01 from './../../assets/images/work/work-01.png';
import work02 from './../../assets/images/work/work-02.png';
import work03 from './../../assets/images/work/work-03.png';
import work04 from './../../assets/images/work/work-04.png';
import work05 from './../../assets/images/work/work-05.png';
import work06 from './../../assets/images/work/work-06.png';
import work07 from './../../assets/images/work/work-07.png';
import work08 from './../../assets/images/work/work-08.png';
import work09 from './../../assets/images/work/work-09.png';

// Project Component
export default function Projects() {
  return (
	<div className="container">
		<div>
			<h1 className="headingH1">
				My Recent<br/>Design Work
			</h1>
			<div className="grid-container">
				<img className="grid-item" src={work01} alt="My recent work 01"></img>
				<img className="grid-item" src={work02} alt="My recent work 02"></img>
				<img className="grid-item" src={work03} alt="My recent work 03"></img>
				<img className="grid-item" src={work04} alt="My recent work 04"></img>
				<img className="grid-item" src={work05} alt="My recent work 05"></img>
				<img className="grid-item" src={work06} alt="My recent work 06"></img>
				<img className="grid-item" src={work07} alt="My recent work 07"></img>
				<img className="grid-item" src={work08} alt="My recent work 08"></img>
				<img className="grid-item" src={work09} alt="My recent work 09"></img>
			</div>
		</div>
	</div>
	);
}