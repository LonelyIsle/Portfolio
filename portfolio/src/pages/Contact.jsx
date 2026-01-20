export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="h2">Contact</h2>
        <p className="body">
          Please reach out to me through email or LinkedIn, as this is the best way to get in contact with me. You can also check out my GitHub for the latest projects I'm working on.
        </p>
        <div className="flex items-center justify-center min-h-screen w-full">
          <div className="ctaRow flex justify-center space-x-12">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=d.j.stewart7873@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contactIconLink"
              aria-label="Email"
            >
              <svg
                className="contactIcon"
                role="img"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                <path d="m3.5 7 8.5 6 8.5-6" />
                <path d="M3.5 19 9.5 14.5" />
                <path d="M21 19 14.5 14.5" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/william-stewart-0b46112b3"
              target="_blank"
              rel="noreferrer"
              className="contactIconLink"
              aria-label="LinkedIn"
            >
              <svg
                className="contactIcon"
                role="img"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="2.5" />
                <path d="M8 11v7" />
                <path d="M8 7.5v.01" />
                <path d="M12 11v7" />
                <path d="M12 14.5c0-2 1.5-3.5 3.5-3.5S19 12.5 19 14.5V18" />
              </svg>
            </a>
            <a
              href="https://github.com/LonelyIsle"
              target="_blank"
              rel="noreferrer"
              className="contactIconLink"
              aria-label="GitHub"
            >
              <svg
                className="contactIcon"
                role="img"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  className="githubFill"
                  d="M12 .3C5.37.3 0 5.67 0 12.3a12 12 0 0 0 8.2 11.38c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.05-3.34.72-4.05-1.62-4.05-1.62-.54-1.36-1.32-1.72-1.32-1.72-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.97 0-1.32.47-2.39 1.24-3.21-.13-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.82 1.23 1.89 1.23 3.21 0 4.64-2.81 5.66-5.5 5.96.43.36.82 1.09.82 2.21 0 1.6-.01 2.89-.01 3.28 0 .32.22.69.83.57A12 12 0 0 0 24 12.3C24 5.67 18.63.3 12 .3Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
