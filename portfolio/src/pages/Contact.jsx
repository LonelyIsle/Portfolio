export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="h2">Contact</h2>
        <p className="body">
          Please reach out to me through email or Linkedin, as this is the best way to get in contact with me. You can also check out my Github for the latest project im working on.
        </p>
        <div className="flex items-center justify-center min-h-screen w-full">
          <div className="ctaRow flex justify-center space-x-12">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=d.j.stewart7873@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn-teal-bright"
            >
              <img src="/icons/Envelopes.svg" alt="Email" className="icon icon-invert" />
            </a>
            <a
              href="https://linkedin.com/in/william-stewart-0b46112b3"
              target="_blank"
              rel="noreferrer"
              className="btn-teal-bright"
            >
              <img src="/icons/Linkedin.svg" alt="LinkedIn" className="icon icon-invert" />
            </a>
            <a
              href="https://github.com/LonelyIsle"
              target="_blank"
              rel="noreferrer"
              className="btn-teal-bright"
            >
              <img src="/icons/github.svg" alt="GitHub" className="icon icon-invert" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}