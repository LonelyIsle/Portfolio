import { writeFileSync } from 'node:fs'

const output = new URL('../public/resume/William_Stewart_Resume.pdf', import.meta.url)

const page = { width: 612, height: 792 }
const margin = 46
let y = 748
const ops = []

const escapePdf = (value) =>
  String(value)
    .replaceAll('\\', '\\\\')
    .replaceAll('(', '\\(')
    .replaceAll(')', '\\)')

const text = (value, x, yy, size = 10.5, font = 'F1') => {
  ops.push(`BT /${font} ${size} Tf ${x.toFixed(2)} ${yy.toFixed(2)} Td (${escapePdf(value)}) Tj ET`)
}

const line = (x1, y1, x2, y2, width = 0.6) => {
  ops.push(`${width} w ${x1.toFixed(2)} ${y1.toFixed(2)} m ${x2.toFixed(2)} ${y2.toFixed(2)} l S`)
}

const approxWidth = (value, size) => String(value).length * size * 0.46

const center = (value, yy, size, font = 'F1') => {
  text(value, (page.width - approxWidth(value, size)) / 2, yy, size, font)
}

const right = (value, xRight, yy, size = 10.5, font = 'F1') => {
  text(value, xRight - approxWidth(value, size), yy, size, font)
}

const wrap = (value, maxChars) => {
  const words = value.split(' ')
  const lines = []
  let current = ''

  for (const word of words) {
    const next = current ? `${current} ${word}` : word
    if (next.length > maxChars && current) {
      lines.push(current)
      current = word
    } else {
      current = next
    }
  }

  if (current) lines.push(current)
  return lines
}

const section = (title) => {
  y -= 14
  text(title, margin, y, 14, 'F2')
  line(margin, y - 3, page.width - margin, y - 3)
  y -= 16
}

const bullet = (value) => {
  const lines = wrap(value, 112)
  text('-', margin + 18, y, 10.2)
  text(lines[0], margin + 31, y, 10.2)
  y -= 12
  for (const continuation of lines.slice(1)) {
    text(continuation, margin + 31, y, 10.2)
    y -= 12
  }
}

const project = ({ name, tech, date, bullets }) => {
  text(name, margin + 10, y, 11.4, 'F3')
  text(`| ${tech}`, margin + 10 + approxWidth(name, 11.4) * 1.18 + 16, y, 10.5, 'F4')
  right(date, page.width - margin - 6, y, 10.5)
  y -= 16
  bullets.forEach(bullet)
  y -= 4
}

const experience = ({ company, location, role, date, bullets }) => {
  text(company, margin + 10, y, 11.4, 'F3')
  right(location, page.width - margin - 6, y, 10.5)
  y -= 13
  text(role, margin + 10, y, 10.5, 'F4')
  right(date, page.width - margin - 6, y, 10.5, 'F4')
  y -= 15
  bullets.forEach(bullet)
  y -= 4
}

center('William Stewart', y, 30, 'F2')
y -= 18
center(
  '(281) 844-5196 | d.j.stewart7873@gmail.com | github.com/LonelyIsle | linkedin.com/in/william-stewart-0b46112b3',
  y,
  9.2,
)
y -= 14

section('Education')
text('University of Houston', margin + 10, y, 11.4, 'F3')
right('Houston, TX', page.width - margin - 6, y)
y -= 13
text('Bachelor of Science in Computer Science, Minor in Data Science', margin + 10, y, 10.5, 'F4')
right('Dec 2025', page.width - margin - 6, y, 10.5, 'F4')
y -= 14
text('Lone Star College', margin + 10, y, 11.4, 'F3')
right('Houston, TX', page.width - margin - 6, y)
y -= 13
text('Associate of Science in Computer Science', margin + 10, y, 10.5, 'F4')
right('May 2022', page.width - margin - 6, y, 10.5, 'F4')
y -= 2

section('Technical Skills')
text('Languages: ', margin + 10, y, 10.4, 'F3')
text('Python, TypeScript, JavaScript, Go, C++', margin + 72, y, 10.4)
y -= 13
text('Frameworks & Libraries: ', margin + 10, y, 10.4, 'F3')
text('React, Node.js, Flask, Pandas, NumPy, scikit-learn', margin + 142, y, 10.4)
y -= 13
text('Developer Tools: ', margin + 10, y, 10.4, 'F3')
text('Git, GitHub, VS Code, Jupyter, MySQL, Azure, Vercel', margin + 105, y, 10.4)
y -= 4

section('Projects')
project({
  name: 'NLP Search & Ranking System',
  tech: 'Python, NLP, Flask',
  date: 'Aug 2025 - Dec 2025',
  bullets: [
    'Developed a document search system that interprets natural language queries and ranks results using vector-based similarity.',
    'Implemented preprocessing pipelines including tokenization, stopword removal, and TF-IDF / embedding-based features.',
    'Evaluated retrieval quality using precision and recall on labeled datasets.',
    'Exposed search functionality through RESTful APIs built with Flask.',
  ],
})

project({
  name: 'Lungevity',
  tech: 'Python, Pandas, scikit-learn',
  date: 'Aug 2025 - Dec 2025',
  bullets: [
    'Built a predictive modeling pipeline to analyze health-related data and estimate longevity-related outcomes.',
    'Performed exploratory data analysis, feature engineering, and data cleaning on structured datasets.',
    'Trained and evaluated supervised learning models including linear and tree-based approaches.',
    'Measured model performance using accuracy, precision, recall, and confusion matrices.',
  ],
})

project({
  name: 'Piney Point Farm',
  tech: 'TypeScript, Go, Web Development',
  date: 'Nov 2025 - Dec 2025',
  bullets: [
    'Built and maintained a production website for Piney Point Farm using TypeScript and Go.',
    'Developed a clear public-facing interface for farm information, visitor needs, and site navigation.',
    'Organized project code under the Clydesdale Systems GitHub organization for maintainability and collaboration.',
    'Published the live site at pineypointfarm.com.',
  ],
})

section('Experience')
experience({
  company: 'Reef Sensing',
  location: 'Houston, TX',
  role: 'Operations Technology Specialist',
  date: 'May 2026 - Present',
  bullets: [
    'Support and update company websites, maintaining public-facing content and operational web resources.',
    'Assist with inventory tracking and shipping preparation to support accurate outbound order fulfillment.',
    'Test sensors for validation before shipment, verifying readiness and identifying issues before delivery.',
  ],
})

experience({
  company: 'Bluewater Seafood',
  location: 'Houston, TX',
  role: 'Shift Manager',
  date: 'Aug 2024 - Present',
  bullets: [
    'Supervise front-of-house operations during service, coordinating staff and resolving customer issues to maintain efficient workflow.',
    'Lead team operations during high-volume service periods, ensuring accurate order handling and strong time management across staff.',
    'Collaborate with kitchen and front-of-house employees to resolve issues quickly and maintain service quality.',
    'Support shift scheduling, team coordination, and operational decision-making during busy service hours.',
  ],
})

const stream = ops.join('\n')
const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${page.width} ${page.height}] /Resources << /Font << /F1 4 0 R /F2 5 0 R /F3 6 0 R /F4 7 0 R >> >> /Contents 8 0 R >>`,
  '<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Times-Bold >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Times-Italic >>',
  `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`,
]

let pdf = '%PDF-1.4\n'
const offsets = [0]

objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf))
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`
})

const xrefOffset = Buffer.byteLength(pdf)
pdf += `xref\n0 ${objects.length + 1}\n`
pdf += '0000000000 65535 f \n'
for (const offset of offsets.slice(1)) {
  pdf += `${String(offset).padStart(10, '0')} 00000 n \n`
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`

writeFileSync(output, pdf)
