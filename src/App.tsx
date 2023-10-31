import "./index.css";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#1B1F1D] to-[#2C3432] pb-12">
      <div className="article-grid text-md grid gap-y-4 font-serif leading-relaxed text-white md:gap-y-4 md:text-xl">
        <div className="full-bleed h-[500px]">
          <img src="/webdev1.webp" className="h-full w-full object-cover" />
        </div>
        <h1 className="wide-bleed mb-8 text-2xl md:text-5xl">
          From Webmasters to Web Wonders: The Hilarious Evolution of Frontend
          Development
        </h1>

        <p>
          In the misty days of yore, when the internet was still a fresh-faced
          newcomer to the world, there existed a mythical creature known as the
          "Webmaster." Legend tells that this Webmaster was a lone ranger, doing
          everything from crafting pixel-perfect designs to managing server
          hiccups. The Webmaster was often seen sporting an oversized 'I ♥
          HTML' t-shirt, using a dial-up connection, and juggling flaming CDs of
          early Photoshop versions. Oh, and let's not forget the critical task
          of selecting the right animated GIFs for their website. Sparkling
          unicorns? Why not!
        </p>

        <p>
          Back then, websites were simpler – a sprinkle of HTML here, a dash of
          CSS there, and voilà! Instant online masterpiece. And when something
          needed to be uploaded? Ah, enter the humble FTP – File Transfer
          Protocol. A Webmaster's trusty steed. Forget Vercel, Netlify, or any
          CI/CD pipelines. A few drags, a few drops, and your website was live
          for all 12 users on the internet to see.
        </p>

        <div className="wide-bleed grid gap-4 md:grid-cols-2 md:grid-rows-2">
          <img className="rounded-md object-cover" src="/webdev2.webp" />
          <img className="rounded-md object-cover" src="/webdev3.webp" />
          <img className="rounded-md object-cover" src="/webdev4.webp" />
          <img className="rounded-md object-cover" src="/webdev5.webp" />
        </div>

        <p className="my-7 text-3xl italic">
          But, as with all legends, times changed.
        </p>

        <p>
          The world grew, and the internet expanded faster than the Webmaster's
          collection of "Under Construction" GIFs. With this growth came a level
          of professionalism and, dare we say, complication. Webmasters evolved,
          diversified, and specialized. Our lone ranger was no longer alone.
        </p>

        <p>
          Enter Frontend Developers, the evolved form of the once solitary
          Webmaster. Now, they weren't just designing sites. They were
          architecting experiences. No longer was it sufficient to know just
          HTML and CSS; now there was JavaScript, and then jQuery (because who
          wanted to write raw JavaScript?). But wait! jQuery wasn't enough. The
          realm needed more - and thus frameworks like Angular, React, and Vue
          descended upon us.
        </p>

        <p>
          And libraries? Oh boy. There was one for everything. Need to handle
          dates? Moment.js. Animations? GreenSock. The list was endless. And
          while it was all powerful and magical, the Frontend Developer's
          backpack was getting heavier and heavier.
        </p>

        <p>
          Yet, with great power came... you guessed it, even more
          responsibility. Responsiveness, accessibility, performance, user
          experience. It wasn't just about putting a website out there anymore;
          it was about crafting digital symphonies. The frontline of user
          interaction. And with that intensity? Burnouts. Because being the
          guardian of user experience, while keeping up with the latest npm
          packages, was no child's play.
        </p>

        <p>
          The internet, with its vast and rapidly evolving ecosystem, was both a
          blessing and a beast. Tools like Vercel made deploying a breeze
          (seriously, one command and boom – deployed), but they also added
          layers of complexity. The lines of 'just' frontend began blurring. Was
          it just UI? Or was it understanding serverless functions, third-party
          integrations, and API optimizations too?
        </p>

        <div className="">
          <img src="/webdev6.webp" className="w-full rounded-md object-cover" />
        </div>

        <p>Yet amidst this chaotic crescendo, a realization dawned.</p>

        <p>
          Every era of the web, from the Webmaster to the modern Frontend
          Developer, was a testament to human adaptability and passion. It
          wasn't about how complex the tools were or how vast the libraries
          became. It was about the joy of creation, the thrill of
          problem-solving, and the pride in crafting experiences for users
          worldwide.
        </p>

        <p>
          To the world, it might look like a mix of brackets and jargon. But for
          those in the trenches, it's art. It's the challenge. And it's the
          ever-evolving dance between functionality and beauty.
        </p>

        <p>
          So, whether you're still cherishing the memories of FTP uploads or
          navigating the sea of modern frontend frameworks, remember: the heart
          of development remains unchanged. It's about the journey, the
          community, and the joy of bringing visions to life. And hey, if all
          else fails, there's always a place for a sparkling unicorn GIF on the
          web.
        </p>

        <p className="text-2xl italic md:text-5xl">The end.</p>
      </div>
    </main>
  );
}

export default App;
