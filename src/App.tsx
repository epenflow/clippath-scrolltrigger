import { useGSAP } from '@gsap/react';
import React from 'react';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BeerCard } from './__components__/beer-card';
import { BeerCardProps } from './__components__/beer-card';
import { beer_1, beer_2, beer_3, beer_4 } from './assets';
gsap.registerPlugin(ScrollTrigger);

const images: BeerCardProps[] = [
	{
		src: beer_1,
		zIndex: 40,
		backgroundColor: '#f9f5f0',
		trigger: true,
		buttonColor: '#f8a919',
	},
	{
		src: beer_2,
		zIndex: 30,
		backgroundColor: '#48645d',
		trigger: true,
		buttonColor: '#d3a18d',
	},
	{
		src: beer_3,
		zIndex: 20,
		backgroundColor: '#f8a919',
		trigger: true,
		buttonColor: 'white',
	},
	{
		src: beer_4,
		zIndex: 10,
		backgroundColor: '#7ad6d5',
		trigger: false,
		buttonColor: '#1273b0',
	},
];
function App() {
	const container = React.useRef<React.ElementRef<'main'>>(null);
	useGSAP(() => {
		const card = gsap.utils.toArray('.trigger');
		const tl = gsap.timeline({
			scrollTrigger: {
				pin: container.current,
				scrub: 1,
				start: 'top top',
				end: `bottom+=${images.length}000vh bottom`,
				markers: true,
			},
		});
		card.forEach((el, index) => {
			tl.to(el as HTMLElement, {
				clipPath:
					index % 2 === 0
						? 'inset(0% 100% 0% 0%)'
						: 'inset(0% 0% 0% 100%)',
				ease: 'power1.inOut',
			});
		});
	}, [container]);

	return (
		<div className="overflow-x-hidden">
			<main className="relative h-screen" ref={container}>
				{images.reverse().map((img, index) => (
					<BeerCard
						key={index}
						src={img.src}
						backgroundColor={img.backgroundColor}
						trigger={img.trigger}
						zIndex={img.zIndex}
						buttonColor={img.buttonColor}
					/>
				))}
			</main>
			<footer className="h-screen w-screen bg-black text-white flex items-center justify-center">
				<h1 className="lg:text-9xl text-4xl md:text-6xl  uppercase font-extrabold">
					foot<span className="italic">er</span>
				</h1>
				<p>x</p>
			</footer>
		</div>
	);
}

export default App;
