

const skills = [
  'Python', 'JavaScript', 'C++', 'Java', 'PHP',
  'HTML', 'CSS', 'React', 'Node.js',
  'MySQL',
  'Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'Figma', 'Azure', 'Vercel',
]

export default function Skills() {
  return (
    <section id="skills" className="altSection">
      <div className="container">
        <h2 className="h2">Technical Skills</h2>
        <ul className="skillsWrap">
          {skills.map((s) => (
            <li key={s} className="skillPill">{s}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}