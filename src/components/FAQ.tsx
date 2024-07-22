import { useState } from 'react';
import { FAQdata } from '../data/FAQdata';
import Question from './Question';

const FAQ = () => {

	const [openFAQ, setOpenFAQ] = useState<Number>();
	return (
		<>
			<h2 className='max-w-[calc(100%-4rem)] xl:max-w-[calc(83.34%-6rem)] m-auto text-center text-3xl pb-4 md:pb-0 lg:text-5xl font-bold lg:font-extrabold mb-6'>Frequently Asked Questions</h2>
			<div className="max-w-[calc(100%-3rem)] xl:max-w-[calc(83.34%-6rem)] m-auto">
				<ul className='flex flex-col gap-1'>
					{
						FAQdata.map((faq, i) => (
							<Question key={i} question={faq.question} answer={faq.answer} setOpenFAQ={setOpenFAQ} openFAQ={openFAQ} index={i} />
						))
					}
				</ul>
			</div>
		</>
	)
}

export default FAQ