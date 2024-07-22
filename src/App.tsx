import Navbar from './components/Navbar'
import hreoBgc from './assets/netflix_hero_background.jpg';
import tvFrame from './assets/tv-remote-frame.png';
import downloadMobileImage from './assets/download-mobile-img.jpg';
import downloadMobileImageGIF from './assets/download-mobile-img-gif.jpg';
import netflixHomeVideo from './assets/netflix-home-video.mp4';
import devicesVideo from './assets/video-devices.mp4';
import allDevices from './assets/all-devices-img.png';
import childrenBanner from './assets/children-banner.png';
import strangerThingsPoster from './assets/strangerthings-poster.png'
import FAQSection from './components/FAQ';
import { footerlinks } from './data/FooterData';

const App = () => {
  return (
    <>
      <header className='relative w-screen h-screen flex flex-col items-center bg-gradient-to-t overflow-hidden from-black/80 from-0% via-transparent via-60% to-black/80 to-100%'>
        <Navbar />
        <div className="max-w-[calc(100%-3rem)] lg:max-w-[calc(83.34%-2rem)] lg:text-center xl:max-w-[calc(83.34%-6rem)] flex flex-col justify-center items-center m-auto overflow-hidden">
          <img className='absolute w-full h-full object-cover inset-0 scale-125 overflow-x-hidden -translate-y-[10%] opacity-70 -z-10' src={hreoBgc} alt="" />
          <h2 className='text-3xl font-bold text-center md:text-3xl lg:text-5xl md:font-bold lg:font-extrabold mb-5 tracking-wide lg:leading-snug'>Unlimited movies, TV shows and more</h2>
          <p className='text-lg lg:text-2xl md:font-normal lg:font-medium mb-4'>Watch anywhere. Cancel anytime.</p>
          <p className='text-lg text-center px-6 md:font-normal lg:text-xl'>Ready to watch? Enter your email to create or restart your membership.</p>
          <form className="flex flex-col md:flex-row gap-3 w-[fit-content] m-5">
            <input className='w-80 md:w-96 px-5 py-3 md:p-4 bg-black/40 shadow-[0_0_0_.5px_#fff7] rounded placeholder:text-white/70' type="email" placeholder='Email address' />
            <button className='w-[fit-content] m-auto flex items-center justify-center gap-4 shrink-0 px-3 md:px-4 py-3 md:py-4 rounded text-lg md:text-2xl bg-red-600' type="submit">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="ChevronRightStandard" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor">
                </path>
              </svg>
            </button>
          </form>
        </div>
      </header>

      <section className='flex items-center justify-center py-16 border-y-[8px] border-[#222]'>
        <div className="max-w-[calc(100%-4rem)] xl:max-w-[calc(83.34%-6rem)] flex flex-col lg:flex-row items-center justify-center">
          <div className="md:px-5 lg:p-5 basis-1/2">
            <h2 className='text-3xl font-bold text-center md:font-bold md:text-center lg:text-5xl lg:font-extrabold xl:font-bold pb-4 md:pb-4 lg:pb-7'>Enjoy on you TV</h2>
            <h4 className='text-lg text-center md:text-center lg:text-2xl md:leading-5 lg:leading-7 shrink-0'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h4>
          </div>
          <div className="relative basis-1/2">
            <img className='' src={tvFrame} alt="Tv Frame image" />
            <div className="absolute max-w-[73%] max-h-[54%] w-full h-full top-[21%] left-[13%] -z-[1] overflow-hidden">
              <video className='' autoPlay muted playsInline loop>
                <source src={netflixHomeVideo} />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className='border-b-[8px] border-[#222] py-16'>
        <div className="max-w-[calc(100%-4rem)] md:max-w-[calc(100%-8rem)] lg:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.34%-6rem)] m-auto flex flex-col-reverse lg:flex-row items-center justify-center">
          <div className="flex flex-col basis-1/2 lg:flex-row items-center justify-center">
            <div className="relative">
              <img className='' src={downloadMobileImage} alt="Download Mobile Image" />
              <div className="absolute flex items-center w-[75%] md:w-[65%] lg:w-[65%] xl:w-1/2 left-[50%] -translate-x-1/2 bottom-[8%] bg-black shadow-[0_0_2em_0_black] px-3 py-2 border-2 border-[#808080b3] rounded-xl">
                <div className="mr-4">
                  <img className='h-12 md:h-16 lg:h-20' src={strangerThingsPoster} alt="strangerthings poster" />
                </div>
                <div className="flex-1">
                  <div className="text-base leading-5">Stranger Things</div>
                  <div className="text-sm font-[500] text-[#0071eb]">Downloading...</div>
                </div>
                <div className="w-10">
                  <img src={downloadMobileImageGIF} alt="Download Mobile Image GIF" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:ml-5 xl:ml-0 flex flex-col basis-1/2 justify-center">
            <h2 className='text-3xl text-center font-bold md:text-center lg:text-5xl lg:font-extrabold xl:font-bold pb-3 lg:pb-7 leading-[1.4]'>Download your shows to watch offline</h2>
            <h4 className='text-center text-lg pb-4 lg:text-2xl leading-5 md:leading-7 shrink-0'>Save your favourites easily and always have something to watch.</h4>
          </div>
        </div>
      </section>

      <section className='flex items-center justify-center py-16 border-b-[8px] border-[#222]'>
        <div className="max-w-[calc(100%-6rem)] lg:max-w-[calc(100%-2rem)] xl:max-w-[calc(83.334%-6rem)] flex flex-col lg:flex-row items-center justify-center">
          <div className="md:px-5 lg:p-5 basis-1/2">
            <h2 className='text-3xl text-center font-bold lg:text-5xl lg:font-extrabold xl:font-bold pb-4 lg:pb-7'>Watch everywhere</h2>
            <h4 className='text-lg text-center pb-4 lg:text-2xl leading-5 md:leading-7 shrink-0'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h4>
          </div>
          <div className="relative basis-1/2">
            <img className='' src={allDevices} alt="All devices image" />
            <div className="absolute max-w-[63%] max-h-[47%] w-full h-full top-[34%] left-[50%] -translate-x-1/2 -translate-y-1/2 -z-[1] overflow-hidden">
              <video className='' autoPlay muted playsInline loop>
                <source src={devicesVideo} />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className='border-b-[8px] border-[#222] py-16'>
        <div className="max-w-[calc(100%-4rem)] xl:max-w-[calc(83.34%-6rem)] m-auto flex flex-col-reverse lg:flex-row items-center justify-center">
          <div className="flex flex-col basis-1/2 items-center justify-center">
            <div className="relative">
              <img className='' src={childrenBanner} alt="Children banner" />
            </div>
          </div>
          <div className="flex flex-col basis-1/2 justify-center">
            <h2 className='text-3xl text-center font-bold lg:text-5xl lg:font-extrabold xl:font-bold pb-3 lg:pb-7 leading-[1.4]'>Create profiles for kids</h2>
            <h4 className='text-lg text-center lg:text-2xl leading-5 lg:leading-7 shrink-0'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h4>
          </div>
        </div>
      </section>

      <section className='py-16 border-b-[8px] border-[#222]'>
        <FAQSection />
        <div className="mt-10">
          <h2 className='max-w-[calc(100%-7rem)] m-auto text-center text-lg lg:text-xl'>Ready to watch? Enter your email to create or restart your membership.</h2>
          <form className="flex flex-col md:flex-row gap-3 w-[fit-content] mx-auto m-5">
            <input className='w-80 md:w-96 px-5 py-3 md:p-4 bg-black/40 shadow-[0_0_0_.5px_#fff7] rounded placeholder:text-white/70' type="email" placeholder='Email address' />
            <button className='w-[fit-content] m-auto flex items-center justify-center gap-4 shrink-0 px-3 md:px-4 py-3 md:py-4 rounded text-lg md:text-2xl bg-red-600' type="submit">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" role="img" data-icon="ChevronRightStandard" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor">
                </path>
              </svg>
            </button>
          </form>
        </div>
      </section>

      <footer className='py-8 lg:py-20 max-w-[calc(100%-4rem)] xl:max-w-[calc(83.834%-6rem)] m-auto text-[#ffffffb3]'>
        Questions? Call <a className='underline' href="tel:0000000000">00000-00000</a>
        <ul className="flex text-sm my-6 flex-wrap">
          {
            footerlinks.map(link => (
              <li className='inline-block w-[calc(50%-.75rem)] lg:w-[calc(25%-.75rem)] shrink-0 underline my-1.5'><a href="">{link}</a></li>
            ))
          }
        </ul>
        <div className="flex w-[fit-content] text-white items-center px-2 py-1 rounded relative shadow-[0_0_0_.3px_white]">
          <div role="img" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              aria-hidden="true"
            ><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor">
              </path>
            </svg>
          </div>
          <select className='bg-transparent pr-10 pl-2 rounded outline-none appearance-none' title='Select a Language' name="" id="">
            <option className='text-black' value="English">English</option>
            <option className='text-black' value="Telugu">తెలుగు</option>
          </select>
          <i className='scale-50 absolute right-2'>&#9660;</i>
        </div>
        <div className="mt-7 text-sm">Netflix Clone Webiste</div>
      </footer>
    </>
  )
}

export default App