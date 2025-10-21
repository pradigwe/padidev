import GithubIcon from "../assets/icons8-github.svg?react";
import LinkedInIcon from "../assets/icons8-linked-in.svg?react";

function Contact() {
  return (
    <section className="before:bg-accent relative z-0 mt-20 py-10 text-center text-white before:absolute before:top-1/2 before:left-1/2 before:-z-10 before:h-full before:w-screen before:-translate-x-1/2 before:-translate-y-1/2">
      <h3 className="mb-10 text-7xl tracking-wider uppercase">Get in Touch</h3>
      <p className="font-barlow-semi text-2xl text-white">
        I'd love to connect with you!
      </p>
      <p className="font-barlow-semi text-2xl text-white">
        Email: padigwe06@gmail.com
      </p>
      <div className="mt-10 flex justify-center gap-10">
        <a href="https://github.com/pradigwe/" target="_blank">
          <GithubIcon className="bg-neutral2 rounded-full p-2"></GithubIcon>
        </a>
        <a href="https://www.linkedin.com/in/pradigwe/" target="_blank">
          <LinkedInIcon className="bg-neutral2 rounded-full p-2"></LinkedInIcon>
        </a>
      </div>
    </section>
  );
}

export default Contact;
