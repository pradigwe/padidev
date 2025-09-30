function About() {
  return (
    <section>
      <div>
        <h1>Hi, I'm Precious.</h1>
        <h2>A Student Software Engineer.</h2>
        <p>
          Currently studying Computer Science at UNC Charlotte. I'm passionate
          about learning and applying software engineering concepts to real
          projects.
        </p>
        <p>
          I enjoy experimenting with modern tools while building applications
          that balance functionality with creativity, and I look forward to
          contributing to projects that make a real impact.
        </p>
      </div>
      <img
        src={new URL(`../assets/mypicture.jpg`, import.meta.url).href}
        alt="picture of me"
      />
    </section>
  );
}

export default About;
