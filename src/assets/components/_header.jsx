
function _header() {
   return (
      <header className="bg-secondary-darkgray flex-col h-auto w-full">
         <nav className="p-8 flex items-center justify-end">
            <a href="#projects" className="px-6 font-Inter font-extralight text-white">Projects</a>
            <a href="#resume" className="px-6 font-Inter font-extralight text-white">Resume</a>
            <a href="#contact" className="px-6 font-Inter font-extralight text-white">Contact</a>
            <button className="px-6 font-Inter font-light text-white">Button</button>{/*Change theme button*/}
         </nav>

         <section className="p-16 flex items-center place-self-center"> {/* Section for the hero */}
            <div className="w-1/2">
               <p className="font-Inter_Light font-light text-white">Hey, I&apos;m</p>
               <h1 className="font-GTWalsheim text-8xl text-transparent bg-cover bg-clip-text bg-gradient-to-r from-gr-0 via-gr-55 to-gr-100 py-3">
                  Fabio Mijango
               </h1>
               <p className="font-Inter font-extralight text-white w-1/2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                  Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                  Sed nisi. Nulla quis sem at nibh elementum imperdiet.
               </p>
            </div>
            <div className="w-1/2 h-96 bg-gray-500">
            Photo
            </div>
         </section>

         <section id="contact" className="place-self-start px-20 flex pb-16 gap-10"> {/* Section for contact me */}
            <button className="max-w-xs w-auto rounded-lg p-1 relative bg-gradient-to-r from-gr-0 to-gr-30">
               <div className="text-white font-Inter font-light rounded-lg bg-secondary-darkgray p-5 items-center place-self-center hover:bg-transparent">
                  Send an email
               </div>
            </button>
            <button className="max-w-xs w-auto rounded-lg p-1 relative bg-gradient-to-r from-gr-30 to-gr-55">
               <div className="text-white font-Inter font-light rounded-lg bg-secondary-darkgray p-5 items-center place-self-center hover:bg-transparent">
                  GitHub
               </div>
            </button>
            <button className="max-w-xs w-auto rounded-lg p-1 relative bg-gradient-to-r from-gr-80 to-gr-100">
               <div className="text-white font-Inter font-light rounded-lg bg-secondary-darkgray p-5 items-center place-self-center hover:bg-transparent">
                  Curriculum
               </div>
            </button>
         </section>
      </header>
   );
}

export default _header;