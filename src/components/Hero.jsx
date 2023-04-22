import { logo } from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-row w-full p-3 mb-10 pt-5">
        <img src={logo} alt="sumz_logo" className='w-28 object-contain' />

        <button
          type='buttton'
          onClick={() => window.open("https://github.com/PrinceAnumba")}
          className='black_btn'
        >GitHub</button>
      </nav>
      <h1 className='head_text'>Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>Chat GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with summize, an 
        open-source article summarizer that
        transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  )
}

export default Hero