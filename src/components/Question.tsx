import { Dispatch, SetStateAction } from 'react';

type Question = {
	question: string,
	answer: string,
	setOpenFAQ: Dispatch<SetStateAction<Number | undefined>>,
	openFAQ: Number | undefined,
	index: Number,
}

const Question = ({ question, answer, setOpenFAQ, openFAQ, index }: Question) => {

	return (
		<li className='text-lg lg:text-2xl mb-1'>
			<div
				className="flex items-center justify-between p-6 mb-[2px] cursor-pointer bg-neutral-800 hover:bg-neutral-700"
				onClick={() => setOpenFAQ(index === openFAQ ? undefined : index)}
			>
				{question}
				<span className={`text-white h-6 lg:h-8 shrink-0 transition-transform duration-[250ms] ${openFAQ === index ? ' rotate-45' : 'rotate-0'}`}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="100%" height="100%" viewBox="0 0 36 36"
						role="img" data-icon="PlusLarge" aria-hidden="true"
					>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"></path>
					</svg>
				</span>
			</div>
			{
				<div className={`px-6 bg-neutral-800 overflow-y-hidden transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,1,1)] ${openFAQ === index ? 'p-6 max-h-none visible' : 'max-h-0 invisible'}`}>{answer}</div>
			}
		</li>)
};

export default Question