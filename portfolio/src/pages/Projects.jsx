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
    title: 'Piney Point Farm',
    timeframe: 'November 2025 - December 2025',
    description:
      'Farm-focused web project for Piney Point Farm. Built to present farm information in a clear, maintainable interface with project code organized under the Clydesdale Systems GitHub organization.',
    tech: ['TypeScript', 'Go', 'Web Development'],
    link: '',
    live: 'https://pineypointfarm.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="h2">Quest Board</h2>
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
