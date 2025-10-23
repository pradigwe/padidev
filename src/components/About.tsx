function About() {
  return (
    <section className="pt-15 md:flex md:flex-row ">
      <div className="flex flex-col md:w-2/3 md:gap-5">
        <div className="hidden md:mb-5 md:block">
          <h1 className="text-accent md:text-start">Hi, I'm Precious.</h1>
          <h2 className="text-accent md:text-start">
            A Student Software Engineer.
          </h2>
        </div>
        <div className="before:bg-neutral2 relative z-0 mb-20 before:absolute before:top-8 before:left-10 before:-z-10 before:h-full before:w-8/9 md:hidden">
          <img
            src={new URL(`../assets/mypicture.jpg`, import.meta.url).href}
            alt="picture of me"
            className="after:content z-20 pr-5"
          />
        </div>
        <div className="mb-10 w-20/21 md:hidden">
          <p className="before:bg-neutral1 before:-p-3 relative flex items-center p-5 before:absolute before:right-0.5 before:-z-10 before:h-full before:w-6/5">
            Currently studying Computer Science at UNC Charlotte.
          </p>
          <p className="mt-5">
            I'm passionate about learning and applying software engineering
            concepts to real projects.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:w-5/6">
          <p className="hidden md:block">
            Currently studying Computer Science at UNC Charlotte. I'm passionate
            about learning and applying software engineering concepts to real
            projects.
          </p>
          <p className="w-6/7 self-end text-end md:self-start md:text-start">
            I enjoy experimenting with modern tools while building applications
            that balance functionality with creativity, and I look forward to
            contributing to projects that make a real impact.
          </p>
        </div>
      </div>
      <img
        src={new URL(`../assets/mypicture.jpg`, import.meta.url).href}
        alt="picture of me"
        className="hidden h-full md:block md:w-1/3 md:flex-initial max-w-200 lg:size-80 lg:m-auto"
      />
    </section>
  );
}

export default About;
