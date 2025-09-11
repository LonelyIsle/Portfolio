

const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'C++', 'Python'],
  },
  {
    category: 'Web Development',
    items: ['HTML', 'CSS', 'React', 'Node.js'],
  },
  {
    category: 'Database',
    items: ['MySQL'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'VS Code', 'npm', 'Figma'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="altSection">
      <div className="container">
        <h2 className="h2">Technical Skills</h2>
        <div className="grid">
          {skills.map((group) => (
            <div key={group.category} className="card">
              <h3 className="h3">{group.category}</h3>
              <ul className="tagList">
                {group.items.map((s) => (
                  <li key={s} className="tag">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}