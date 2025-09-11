

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="h2">Contact</h2>
        <p className="body">
          The best way to reach me is by email. You can also find me on GitHub and LinkedIn for my latest projects and updates.
        </p>
        <div className="ctaRow">
          <a href="mailto:d.j.stewart7873@gmail.com" className="btn btn-primary">
            d.j.stewart7873@gmail.com
          </a>
          <a
            href="https://github.com/LonelyIsle"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/william-stewart-0b46112b3"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}