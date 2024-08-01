import React from 'react';
import { cn } from '../lib/cn';

export interface BeerCardProps {
	src: string;
	trigger: boolean;
	zIndex: number;
	backgroundColor: string;
	buttonColor: string;
}
export const BeerCard: React.FC<BeerCardProps> = ({
	src,
	trigger,
	zIndex,
	backgroundColor,
	buttonColor,
}) => {
	return (
		<section className="card-container">
			<div
				className={cn('beer-container bg-center', trigger && 'trigger')}
				style={{
					backgroundImage: `url("/${src}")`,
					backgroundColor,
					zIndex,
				}}>
				<button
					className="px-5 py-2.5 text-2xl uppercase font-bold absolute bottom-2.5 right-2.5 lg:bottom-20 lg:right-40"
					style={{
						backgroundColor: buttonColor,
						color: backgroundColor,
					}}>
					Shop Now
				</button>
			</div>
		</section>
	);
};
