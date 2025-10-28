const projects = [
  {
    title: 'Natural Language Processing Search Engine',
    timeframe: 'Aug 2025 – Present',
    description:
      'Search engine that interprets natural-language queries. Preprocessing (tokenization, stopword removal), TF-IDF/embeddings for ranking, Flask REST API, and evaluation on real datasets.',
    tech: ['Python', 'NLP', 'Flask'],
    link: 'https://github.com/LonelyIsle',
    live: '',
  },
  {
    title: 'Volunteer Coordination & Event Management System',
    timeframe: 'Jun 2025 – Aug 2025',
    description:
      'Web app with user auth, admin dashboards, volunteer matching, event CRUD, notifications, and participation history. Standardized UI via global.css and organized PHP pages.',
    tech: ['PHP', 'HTML/CSS', 'MySQL'],
    link: 'https://github.com/LonelyIsle',
    live: '',
  },
  {
    title: 'E-commerce Full-Stack Web Application',
    timeframe: 'Jan 2025 – Apr 2025',
    description:
      'Team project: product browsing, auth, cart/CRUD flows. Reusable React components, secured routes, MySQL schema + REST endpoints. Frontend on Vercel; backend + DB on Azure.',
    tech: ['React', 'Node.js', 'MySQL', 'Azure', 'Vercel'],
    link: 'https://github.com/LonelyIsle',
    live: 'https://lonelyisle-ecommerce-demo.vercel.app',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="h2">Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <h3 className="h3">{p.title}</h3>
              <p className="mutedItalic">{p.timeframe}</p>
              <p className="cardText">{p.description}</p>
              <ul className="tagList">
                {p.tech.map((t) => (
                  <li key={t} className="tag">{t}</li>
                ))}
              </ul>
              <div className="cardLinks">
                {p.live && <a className="cardLink" href={p.live} target="_blank" rel="noreferrer">Live</a>}
                {p.link && <a className="cardLink" href={p.link} target="_blank" rel="noreferrer">Code</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
