function About() {
  return (
    <section className="pt-15">
      <div className="flex flex-col">
        <h1 className="hidden sm:block">Hi, I'm Precious.</h1>
        <h2 className="hidden sm:block">A Student Software Engineer.</h2>
        <div className="before:bg-neutral2 relative z-0 mb-20 before:absolute before:top-8 before:left-10 before:-z-10 before:h-full before:w-8/9">
          <img
            src={new URL(`../assets/mypicture.jpg`, import.meta.url).href}
            alt="picture of me"
            className="after:content z-20 hidden pr-5 max-sm:block"
          />
        </div>
        <div className="mb-10 w-20/21 sm:hidden">
          <p className="before:bg-neutral1 before:-p-3 relative flex items-center p-5 before:absolute before:right-0.5 before:-z-10 before:h-full before:w-6/5">
            Currently studying Computer Science at UNC Charlotte.
          </p>
          <p className="mt-5">
            I'm passionate about learning and applying software engineering
            concepts to real projects.
          </p>
        </div>
        <p className="hidden sm:block">
          Currently studying Computer Science at UNC Charlotte. I'm passionate
          about learning and applying software engineering concepts to real
          projects.
        </p>
        <p className="w-6/7 self-end max-sm:text-end">
          I enjoy experimenting with modern tools while building applications
          that balance functionality with creativity, and I look forward to
          contributing to projects that make a real impact.
        </p>
      </div>
      <img
        src={new URL(`../assets/mypicture.jpg`, import.meta.url).href}
        alt="picture of me"
        className="hidden sm:block"
      />
    </section>
  );
}

export default About;
