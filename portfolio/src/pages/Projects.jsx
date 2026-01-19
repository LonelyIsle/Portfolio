const projects = [
  {
    title: 'NLP Search & Ranking System',
    timeframe: 'August 2025 - December 2025',
    description:
      'Document search system that interprets natural-language queries and ranks results using vector-based similarity. Includes preprocessing (tokenization, stopword removal), TF-IDF/embedding features, Flask REST API endpoints, and retrieval evaluation (precision/recall).',
    tech: ['Python', 'NLP', 'Flask'],
    link: 'https://github.com/LonelyIsle/NLP-project',
    live: '',
  },
  {
    title: 'Lungevity',
    timeframe: 'August 2025 - December 2025',
    description:
      'Predictive modeling project analyzing health-related data to estimate longevity outcomes. Includes EDA, cleaning, feature engineering, model training/comparison in scikit-learn, and evaluation with standard classification metrics in a reproducible Jupyter workflow.',
    tech: ['Python', 'Pandas', 'scikit-learn', 'Jupyter'],
    link: 'https://github.com/LonelyIsle/Data-Science-2-project',
    live: '',
  },
  {
    title: 'E-commerce Full-Stack Web Application',
    timeframe: 'Jan 2025 – Apr 2025',
    description:
      'Team project: product browsing, authentication, and cart workflows. Built reusable React components, Node.js REST APIs, and a MySQL schema supporting CRUD and transactional updates. Deployed frontend on Vercel with backend/database on Azure.',
    tech: ['React', 'Node.js', 'MySQL', 'Azure', 'Vercel'],
    link: 'https://github.com/LonelyIsle', // replace with the repo if you have a specific one
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
                {p.live && (
                  <a className="cardLink" href={p.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
                {p.link && (
                  <a className="cardLink" href={p.link} target="_blank" rel="noreferrer">
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}