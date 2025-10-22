import GithubIcon from "../assets/icons8-github.svg?react";
import LinkedInIcon from "../assets/icons8-linked-in.svg?react";

function Contact() {
  return (
    <section className="md:bg-accent before:bg-accent relative z-0 mt-30 py-10 text-center text-white before:absolute before:top-1/2 before:left-1/2 before:-z-10 before:h-full before:w-screen before:-translate-x-1/2 before:-translate-y-1/2 md:mr-20 md:w-2/3 md:justify-center md:justify-self-center md:before:bg-transparent">
      <h3 className="mb-10 text-7xl tracking-wider uppercase md:mb-3 md:text-6xl md:tracking-wider">
        Get in Touch
      </h3>
      <p className="font-barlow-semi text-2xl text-white">
        I'd love to connect with you!
      </p>
      <p className="font-barlow-semi text-2xl text-white">
        Email: padigwe06@gmail.com
      </p>
      <div className="mt-5 flex justify-center gap-10 md:gap-8">
        <a href="https://github.com/pradigwe/" target="_blank">
          <GithubIcon className="bg-neutral2 rounded-full p-2"></GithubIcon>
        </a>
        <a href="https://www.linkedin.com/in/pradigwe/" target="_blank">
          <LinkedInIcon className="bg-neutral2 rounded-full p-2"></LinkedInIcon>
        </a>
      </div>
      <div className="absolute top-0 -right-12 hidden h-full w-10 bg-[#5B2C06] md:block"></div>
      <div className="bg-secondary top-0 -right-20 hidden h-full w-5 md:absolute md:block"></div>
      <div className="bg-neutral2 absolute top-0 -right-24 hidden h-full w-2.5 md:block"></div>
    </section>
  );
}

export default Contact;
