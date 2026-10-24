import { FormEvent, useEffect, useMemo, useState } from 'react'

type Project = {
  name: string
  short: string
  role: string
  date: string
  status: string
  team: string
  overview: string
  problem: string
  features: { title: string; description: string }[]
  technologies: Record<string, string[]>
  workflow: string[]
  contribution: string
  highlights: string[]
  repo: string
  demo?: string
  demoLabel?: string
  backend?: string
  video?: string
}

const projects: Project[] = [
  {
    name: 'MyStudyVault',
    short: 'AI academic knowledge assistant',
    role: 'AI/ML & Full Stack Developer',
    date: 'May–June 2025',
    status: 'Live / Deployed',
    team: 'Individual project',
    overview:
      'MyStudyVault is an academic resource management and knowledge-sharing platform for students who need one place to discover, organize and understand study materials. Students can browse branch-wise resources, work with current document versions, raise doubts and read notices through a role-aware interface. Alongside conventional resource discovery, the platform provides a retrieval-augmented assistant: it retrieves relevant academic content through vector search and supplies that context to Gemini to generate an answer with citations. This makes the assistant more useful than ordinary keyword search because it can synthesize information from relevant materials, while the citations let students inspect the source context. Citations support traceability but do not guarantee that every generated answer is correct.',
    problem:
      'Academic files, notices and answers are often distributed across unrelated channels, making the latest material difficult to identify and search. Keyword matching also struggles when a student describes a concept differently from the source document. MyStudyVault brings these workflows together, organizes resources by branch and version, and adds semantic retrieval so students can locate relevant context before receiving a generated, cited response.',
    features: [
      { title: 'Role-based resource management', description: 'JWT-backed access separates permitted resource-management actions from student discovery workflows.' },
      { title: 'Branch-wise resources and versions', description: 'Materials are organized by academic context, while versioning helps users distinguish updated documents.' },
      { title: 'Doubts and notices', description: 'Students can follow academic notices and use the doubt-resolution workflow within the same platform.' },
      { title: 'RAG assistant', description: 'Atlas Vector Search retrieves semantically relevant academic content; Gemini uses that context to compose an answer with source citations.' },
    ],
    technologies: {
      Frontend: ['React', 'Tailwind CSS'],
      Backend: ['Node.js', 'Express.js', 'REST APIs'],
      Database: ['MongoDB Atlas', 'Atlas Vector Search'],
      'AI / ML': ['Gemini API', 'RAG', 'Text embeddings'],
      Security: ['JWT'],
      Testing: ['Jest'],
    },
    workflow: ['Student search or question', 'React interface', 'Express API', 'Atlas data / vector retrieval', 'Gemini response with citations'],
    contribution: 'As the individual Full-Stack and AI/ML Developer, I implemented the frontend, REST API, application data workflows, role-aware authentication and the retrieval-augmented assistant integration.',
    highlights: ['Semantic retrieval grounds generation in relevant academic resources.', 'JWT supports authenticated role-aware workflows.', 'Document organization and versioning improve resource discovery.', 'Jest coverage is documented for the project.'],
    repo: 'https://github.com/Neha-vundavilli2710/MyStudyVault-',
    demo: 'https://my-study-vault-virid.vercel.app/',
  },
  {
    name: 'PrivEdge',
    short: 'Secure edge-cloud conversational AI',
    role: 'Backend Developer',
    date: 'In progress',
    status: 'In Progress',
    team: 'Four-member team',
    overview:
      'PrivEdge is a four-member team project for privacy-aware conversational AI. Rather than sending every query to the same model, the system evaluates privacy or risk signals and query complexity before selecting an appropriate processing path. The backend can route suitable requests to cloud inference through Gemini, direct sensitive requests toward local inference through Ollama with Llama 3.2 3B, or escalate high-risk cases to a human-review workflow. Rule-based decisions provide explicit routing behavior, while the documented machine-learning path uses text features and trained classifiers to support routing decisions. A React and TypeScript frontend communicates with the FastAPI backend, which coordinates analyzers, routing, authentication, persistence and AI-provider integrations.',
    problem: 'Conversational AI requests do not all carry the same privacy, risk or processing requirements. Sending sensitive information to a cloud model may be inappropriate, while forcing every ordinary query through a local model can limit capability. PrivEdge addresses this by analyzing the request first, then selecting local, cloud or human handling. This is risk-aware routing—not a guarantee of privacy or correctness.',
    features: [
      { title: 'Privacy, risk and complexity analysis', description: 'Backend analyzers evaluate query characteristics used by the routing decision.' },
      { title: 'Rule and ML routing', description: 'Explicit rules and documented scikit-learn classifiers use TF-IDF text features to help select a processing path.' },
      { title: 'Edge and cloud inference', description: 'Ollama with Llama 3.2 3B supports local processing; Gemini provides cloud generative inference for appropriate requests.' },
      { title: 'Human review', description: 'Queries requiring intervention can be routed into a review workflow rather than answered automatically.' },
    ],
    technologies: {
      Frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      Backend: ['Python', 'FastAPI', 'Pydantic', 'SQLAlchemy'],
      Database: ['SQLite'],
      'AI / ML': ['Ollama', 'LLMs', 'Llama 3.2 3B', 'Gemini API', 'scikit-learn', 'TF-IDF', 'RAG', 'Random Forest', 'Logistic Regression', 'Decision Trees'],
      Security: ['JWT', 'bcrypt', 'Fernet encryption', 'Privacy masking'],
      Testing: ['pytest', 'Vitest', 'React Testing Library'],
    },
    workflow: ['User query', 'Privacy / risk and complexity analysis', 'Routing decision', 'Ollama local AI · Gemini cloud AI · Human review'],
    contribution: 'I implemented the complete backend for this four-member team project, including its APIs, analyzers, routing logic, persistence, authentication and AI integrations. The frontend and overall product remain team work; I do not claim sole ownership of the complete application.',
    highlights: ['Routing chooses among local, cloud and human paths.', 'Local inference keeps selected processing on the edge environment.', 'ML routing supplements explicit rules; it does not replace risk controls.', 'Backend tests are implemented with pytest.'],
    repo: 'https://github.com/Neha-vundavilli2710/PrivEdge',
  },
  {
    name: 'Sanchari',
    short: 'Smart mobility & pooling ecosystem',
    role: 'Backend Developer & Workflow Designer',
    date: 'Mar–May 2026',
    status: 'Team Project',
    team: 'Six-member team',
    overview: 'Sanchari is a six-member smart mobility and pooling platform that connects riders and drivers through the ride request-to-booking journey. Its backend coordinates application data and ride-related events, while Socket.IO supports low-latency communication for interactions that should update without repeated page refreshes. My work focused on backend behavior and workflow design: I developed real-time rider–driver chat, worked on relevant in-app event notifications, debugged Socket.IO synchronization, designed the transition from a ride request to a booking, and contributed to map implementation and testing. The map and broader interface are team-level work, and no claim is made that I individually built every frontend or location feature.',
    problem: 'A ride-pooling workflow must keep riders and drivers aligned as requests, responses and booking states change. Delayed or duplicated real-time events can produce inconsistent views for the two participants. Sanchari addresses this with a backend-defined request-to-booking workflow, persisted application data and Socket.IO events for real-time chat and relevant status updates.',
    features: [
      { title: 'Rider–driver chat', description: 'Socket.IO carries real-time messages between the relevant ride participants.' },
      { title: 'Event synchronization', description: 'Backend event handling coordinates updates and was debugged to reduce inconsistent socket behavior.' },
      { title: 'Ride booking workflow', description: 'The designed flow moves a rider request through relevant backend states toward booking.' },
      { title: 'Map contribution and testing', description: 'I contributed to map-related implementation and confirmed the implemented map behavior through testing.' },
    ],
    technologies: { Backend: ['Node.js', 'Express.js'], Database: ['MongoDB'], 'Real-time': ['Socket.IO'] },
    workflow: ['Rider or driver action', 'Express backend workflow', 'MongoDB operation', 'Socket.IO event', 'Relevant participant update'],
    contribution: 'As Backend Developer and Workflow Designer, I implemented real-time chat, debugged Socket.IO synchronization, worked on in-app event notifications, designed the request-to-booking workflow and contributed to map implementation and testing.',
    highlights: ['Socket.IO enables event-driven chat and status communication.', 'MongoDB persists relevant application and workflow data.', 'Notifications described here are in-app events; FCM push delivery is not claimed.'],
    repo: 'https://github.com/MAKINEEDI05/Sanchari-',
    demo: 'https://www.sanchari.me',
    demoLabel: 'Website',
  },
  {
    name: 'BookNest',
    short: 'Full-stack bookstore platform',
    role: 'Full-Stack Developer',
    date: 'May–June 2025',
    status: 'Live / Deployed',
    team: 'Individual project',
    overview: 'BookNest is an individual full-stack book discovery, shopping and order-management application for customers and administrators. Customers register or sign in, browse categories and book details, search by title, author, category or keywords, maintain cart quantities and totals, place orders and review their order history. Administrators use protected workflows to manage books, users and orders. The React and Vite frontend uses React Router DOM for navigation and Axios to call REST endpoints. Node.js and Express implement server-side workflows, while Mongoose maps application models to MongoDB. JWT supports authenticated requests and bcryptjs is used for password hashing where confirmed by the documented stack.',
    problem: 'A bookstore application must connect discovery, cart state, ordering and administration without exposing protected operations. Users need predictable searching and cart updates, while administrators need controlled management workflows. BookNest centralizes these tasks behind REST APIs and persisted MongoDB data, with authentication used to protect relevant customer and administrator routes.',
    features: [
      { title: 'Account access', description: 'Registration and login establish authenticated customer and administrator sessions.' },
      { title: 'Discovery and search', description: 'Users browse categories and details or search across title, author, category and keyword information.' },
      { title: 'Cart and ordering', description: 'Customers adjust quantities, see dynamic totals, place an order and revisit order history.' },
      { title: 'Administration', description: 'Protected workflows support book, user and order management.' },
    ],
    technologies: { Frontend: ['React', 'Vite', 'React Router', 'Axios'], Backend: ['Node.js', 'Express.js', 'REST APIs'], Database: ['MongoDB', 'Mongoose'], Security: ['JWT', 'bcryptjs'] },
    workflow: ['Book discovery', 'Cart updates', 'Order request', 'Express validation and services', 'MongoDB persistence'],
    contribution: 'As the individual Full-Stack Developer, I implemented the customer and administrator interfaces, REST API integration, authentication, cart and order workflows, backend services and database models.',
    highlights: ['JWT protects authenticated routes.', 'bcryptjs hashes passwords rather than storing them as plain text.', 'REST APIs separate the React client from server and database operations.'],
    repo: 'https://github.com/Neha-vundavilli2710/BookNest',
    demo: 'https://book-nest-sage.vercel.app/',
    demoLabel: 'Frontend',
    backend: 'https://booknest-backend-j93g.onrender.com',
  },
  {
    name: 'Nutrition Assistant',
    short: 'Data-driven nutrition & wellness app',
    role: 'Full-Stack Developer',
    date: 'May–June 2026',
    status: 'Not Deployed',
    team: 'Individual internship project',
    overview: 'Nutrition Assistant is an individual nutrition and wellness application created during a SmartBridge internship. It combines account and profile management with BMI calculation and history, weekly meal planning, estimated calories and macronutrients from food entries, and general rule-based wellness suggestions. The React 19 and Vite frontend uses React Router DOM for application navigation, Axios for API requests, Bootstrap for layout and React Icons for interface symbols. Node.js and Express provide the backend, with MongoDB and Mongoose storing user, profile, planning and history data. The application is data-driven and formula/rule-based; it is not presented as a trained machine-learning or generative-AI product.',
    problem: 'Nutrition-related information can be difficult to review when profile details, BMI history, meal planning and food estimates are kept separately. This application provides one workflow for recording those inputs and reviewing calculated or estimated results. Its suggestions are general wellness guidance based on rules and estimates, not medical diagnosis or professional dietary advice.',
    features: [
      { title: 'Authentication and profiles', description: 'Users manage account and profile information used by the application workflows.' },
      { title: 'BMI and history', description: 'The system calculates a BMI category and stores previous values for later review.' },
      { title: 'Weekly meal planning', description: 'Users organize food choices across a weekly planning workflow.' },
      { title: 'Nutrition estimates', description: 'Built-in food information supports estimated calories, protein, carbohydrates and fats plus rule-based recommendations.' },
    ],
    technologies: { Frontend: ['React', 'Vite', 'React Router', 'Axios', 'Bootstrap', 'React Icons'], Backend: ['Node.js', 'Express.js'], Database: ['MongoDB', 'Mongoose'] },
    workflow: ['Profile or food input', 'Express API', 'BMI / meal-planning rules and estimates', 'MongoDB persistence', 'History and recommendations'],
    contribution: 'As the individual Full-Stack Developer, I implemented the application interface, API integration, backend workflows, persistence, calculations and rule-based recommendations.',
    highlights: ['Nutrition values are estimates from application data.', 'BMI history supports longitudinal review.', 'No trained ML model, LLM or external nutrition AI API is claimed.'],
    repo: 'https://github.com/Neha-vundavilli2710/Nutrition-Assistant',
    video: 'https://drive.google.com/file/d/1Rg6TE4r_yKqaPEFDTgaISnFO464SmEt-/view?usp=sharing',
  },
  {
    name: 'Restaurant RMS',
    short: 'Reservation management system',
    role: 'Full-Stack Developer',
    date: 'July 2026',
    status: 'Deployed',
    team: 'Individual project',
    overview: 'The Restaurant Reservation Management System is an individual full-stack application for customers and restaurant administrators. Customers can register, sign in and submit a reservation with date, time and guest count, optionally choosing a table. The backend validates the request, checks table capacity and existing confirmed reservations, and can assign the smallest suitable available table when none is selected. Reservations are persisted for later history and management. Cancellation changes reservation status rather than deleting the record. Administrators can filter reservations, update statuses and maintain table records through protected workflows. The implementation does not claim atomic protection against every simultaneous booking race.',
    problem: 'Restaurant booking requires more than storing a date and name: the requested party must fit a table, the table must be available for the selected time and the resulting reservation needs a manageable lifecycle. This application coordinates those checks, assignment and persistence while giving customers history and cancellation controls and administrators a centralized management interface.',
    features: [
      { title: 'Protected customer and admin access', description: 'JWT-backed roles control reservation and management workflows.' },
      { title: 'Availability and capacity validation', description: 'The backend checks guest count, table suitability and existing confirmed reservations.' },
      { title: 'Automatic assignment', description: 'When no table is selected, the workflow chooses the smallest suitable available table.' },
      { title: 'Reservation lifecycle', description: 'Customers view history and cancel by status change; administrators filter and update reservations and tables.' },
    ],
    technologies: { Frontend: ['React', 'Vite', 'React Router', 'Axios', 'react-hot-toast'], Backend: ['Node.js', 'Express.js', 'REST APIs'], Database: ['MongoDB', 'Mongoose'], Security: ['JWT', 'bcrypt', 'express-validator'] },
    workflow: ['Reservation request', 'Input validation', 'Availability and capacity checks', 'Table selection / assignment', 'MongoDB persistence', 'Customer and admin management'],
    contribution: 'As the individual Full-Stack Developer, I implemented the customer and administrator interfaces, authentication, API workflows, table validation and assignment logic, reservation persistence and status management.',
    highlights: ['express-validator checks request inputs.', 'Capacity-aware assignment selects a suitable table.', 'Cancellation preserves the record by changing status.', 'No email, SMS, payment or guaranteed concurrency protection is claimed.'],
    repo: 'https://github.com/Neha-vundavilli2710/Restaurant-Reservation-Management-System',
    demo: 'https://restaurant-reservation-management-s-chi.vercel.app/',
    demoLabel: 'Frontend',
    backend: 'https://restaurant-reservation-management-system-rrd8.onrender.com/api',
  },
]

const certifications = [
  ['Cisco Networking Academy — Python', 'Cisco Networking Academy', '2024', 'https://drive.google.com/file/d/1V_hSJPfVLhd2GNdsi_RLLcAVN-F6BQ5p/view?usp=sharing'],
  ['Associate Developer Certification in Node.js', 'MongoDB', '2026', 'https://drive.google.com/file/d/1fjhSVsiMd8C80ecStWiAsTJu0SjSkIlF/view?usp=sharing'],
  ['IT Specialist Certification in HTML and CSS', 'Pearson VUE', '2024', 'https://drive.google.com/file/d/1DKolXuCJagk7308qpqyh5QGIUUvf5VOv/view?usp=sharing'],
  ['GitHub Foundations', 'Microsoft / GitHub', '2026', 'https://drive.google.com/file/d/1SvjF_roCGHMGxPyqDTPNNymz1dAzndwy/view?usp=sharing'],
  ['Cisco Networking Academy — C', 'Cisco Networking Academy', '2024', 'https://drive.google.com/file/d/184yvjFhz7YwdXaJd2qQf52kPl38Axsw_/view?usp=sharing'],
  ['AWS Certified AI Practitioner', 'AWS', '2025', 'https://drive.google.com/file/d/1PRJmPbQULVyAoip2XJ4DB7Kgs8nHz4Ew/view?usp=sharing'],
]

const competitions = [
  ['Adobe India Hackathon 2025', 'Participated', 'https://drive.google.com/file/d/10rB7DmwAibRmk9gfFyMeaxBd13HrHjS5/view?usp=sharing'],
  ['TVS Credit EPIC 7.0 – IT Challenge 2025', 'Participated', 'https://drive.google.com/file/d/18VicmbUzoenyg00cKhwdSBL5_PpeLjJv/view?usp=sharing'],
  ['HP Power Lab 2.0 2025', 'Participated', 'https://drive.google.com/file/d/1Hj6lXLyJZnMQUboEDV3aa3S1qPlK-NRp/view?usp=sharing'],
  ['L’Oréal Sustainability Challenge 2025', 'Participated', 'https://drive.google.com/file/d/1RdJxvWMiVypEgKaLYMaxKWc5yOJ_ZNPz/view?usp=sharing'],
  ['Naukri Campus Young Turks 2025', 'Cleared Round 1 · reported 99.22 percentile · shortlisted for Round 2 · did not advance beyond Round 2', 'https://drive.google.com/file/d/1ftUQ7QzKARgt4eQOKjhemjKrWbGCyjYZ/view?usp=sharing'],
  ['AI Engineer', 'Participation certificate', 'https://drive.google.com/file/d/1xQY0NBw4sdFv4FYeXzH5FZnyC4Z_BY4M/view?usp=sharing'],
]

const skillGroups = {
  'Programming Languages': ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'SQL'],
  'Frontend Development': ['React', 'React Native', 'Expo', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Vite', 'React Router'],
  'Backend & APIs': ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Socket.IO', 'JWT', 'bcrypt / bcryptjs'],
  'Databases & Search': ['MongoDB', 'MongoDB Atlas', 'Atlas Vector Search', 'MySQL', 'SQLite'],
  'AI / ML': ['Gemini API', 'Ollama', 'LLMs', 'RAG', 'scikit-learn', 'NLP', 'TF-IDF', 'Cosine similarity', 'Text embeddings', 'Random Forest', 'Logistic Regression', 'Decision Trees'],
  'Tools & Platforms': ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'MongoDB Compass', 'Vercel', 'Render', 'npm', 'CLI'],
  Testing: ['Jest', 'Supertest', 'Vitest', 'pytest', 'React Testing Library'],
  'Core Computer Science': ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
}

const nav = [
  ['Workspace', 'workspace'],
  ['Build Lab', 'build-lab'],
  ['Growth', 'growth'],
  ['Stack / Toolkit', 'stack'],
  ['Highlights', 'highlights'],
  ['Connect', 'connect'],
]

const Icon = ({ name }: { name: string }) => {
  const paths: Record<string, string> = {
    home: 'M3 11.5 12 4l9 7.5M5 10v10h14V10M9 20v-6h6v6',
    code: 'm8 9-4 3 4 3m8-6 4 3-4 3m-5 3 2-12',
    growth: 'M4 19V9m6 10V5m6 14v-7m4 7V3',
    stack: 'm12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5',
    star: 'm12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9L6.6 20l1-6.1-4.4-4.3 6.1-.9L12 3Z',
    mail: 'M3 5h18v14H3V5Zm0 1 9 7 9-7',
    external: 'M14 4h6v6m0-6-9 9M19 13v7H4V5h7',
    arrow: 'm5 12 7-7 7 7M12 5v14',
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d={paths[name] || paths.code} /></svg>
}

const LinkButton = ({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) => (
  <a className={`button ${primary ? 'primary' : ''}`} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
    {children}<Icon name="external" />
  </a>
)

function App() {
  const [selected, setSelected] = useState(0)
  const [skill, setSkill] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState(() => window.location.hash.slice(1) || 'workspace')
  const [showTop, setShowTop] = useState(false)
  const [formError, setFormError] = useState('')
  const project = projects[selected]
  const associations = useMemo(
    () => skill
      ? projects.filter((p) => Object.values(p.technologies).flat().includes(skill)).map((p) => p.name)
      : projects.map((p) => p.name),
    [skill],
  )
  const resumeUrl = `${import.meta.env.BASE_URL}neha-vundavilli-resume.pdf`

  useEffect(() => {
    const scroll = () => setShowTop(window.scrollY > 700)
    const sections = nav.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          const id = visible.target.id
          setActiveSection(id)
          history.replaceState(null, '', `#${id}`)
        }
      },
      { rootMargin: '-18% 0px -58% 0px', threshold: [0, 0.15, 0.35] },
    )
    sections.forEach((section) => observer.observe(section))
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
      observer.disconnect()
    }
  }, [])

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = String(data.get('email'))
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Enter a valid email address.')
      return
    }
    setFormError('')
    
const subject = encodeURIComponent(String(data.get('subject')))
const body = encodeURIComponent(
  `From: ${data.get('name')} (${email})\n\n${data.get('message')}`
)

const gmailUrl =
  `https://mail.google.com/mail/?view=cm&fs=1` +
  `&to=${encodeURIComponent('nehavundavilli27@gmail.com')}` +
  `&su=${subject}` +
  `&body=${body}`

window.open(gmailUrl, '_blank', 'noopener,noreferrer')

  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#workspace"><span>NV</span><strong>ENGINEERING<em>PORTFOLIO</em></strong></a>
        <nav aria-label="Portfolio sections">
          {nav.map(([label, id], index) => <a className={activeSection === id ? 'active' : ''} onClick={() => setActiveSection(id)} aria-current={activeSection === id ? 'page' : undefined} key={id} href={`#${id}`}><Icon name={['home', 'code', 'growth', 'stack', 'star', 'mail'][index]} />{label}</a>)}
        </nav>
        <div className="side-status"><span className="eyebrow">OPEN TO OPPORTUNITIES</span><strong>Software · Full Stack · AI/ML</strong><small>Internship & fresher roles</small></div>
        <div className="profile"><span className="avatar">NV</span><div><strong>Neha Vundavilli</strong><small>Software Developer<br />India</small></div></div>
        <div className="side-links"><a href="https://github.com/Neha-vundavilli2710" target="_blank" rel="noopener noreferrer">GH</a><a href="https://www.linkedin.com/in/neha-vundavilli" target="_blank" rel="noopener noreferrer">in</a><a href="mailto:nehavundavilli27@gmail.com">@</a></div>
        <a className="resume-side" href={resumeUrl} target="_blank" rel="noopener noreferrer">View Resume <Icon name="external" /></a>
      </aside>

      <main>
        <section id="workspace" className="section hero">
          <div className="topline"><span className="online">Workspace Online</span><span>India · Available for opportunities</span></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">NEHA VUNDAVILLI · SOFTWARE DEVELOPER | AI/ML ENTHUSIAST</span>
              <h1>Building intelligent software that solves <span>real-world problems.</span></h1>
              <p>I'm a B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning, passionate about building full-stack applications and AI-powered systems.</p>
              <div className="actions"><a className="button primary" href="#build-lab">Explore My Work <Icon name="external" /></a><a className="button" href={resumeUrl} target="_blank" rel="noopener noreferrer">View Resume <Icon name="external" /></a></div>
            </div>
            <div className="system-map" aria-label="Project architecture illustration">
              <span className="map-tag">AI / ML LAYER · GEMINI API</span>
              <div className="map-flow"><b>USER</b><i>→</i><b>REACT<br /><small>Frontend</small></b><i>→</i><b>NODE.JS<br /><small>REST API</small></b><i>→</i><b>MONGODB<br /><small>Atlas</small></b></div>
              <span className="map-cloud">RAG · Vector Search · Deployment</span>
            </div>
          </div>
          <div className="dashboard-grid">
            <article className="panel featured">
              <span className="eyebrow">FEATURED BUILD · LIVE / DEPLOYED</span><h2>MyStudyVault</h2>
              <p>AI-powered academic resource management and knowledge assistant with grounded, cited answers.</p>
              <div className="chips">{['React', 'Node.js', 'MongoDB Atlas', 'Gemini', 'RAG'].map((x) => <span key={x}>{x}</span>)}</div>
              <div className="actions"><LinkButton href="https://my-study-vault-virid.vercel.app/">Live Demo</LinkButton><LinkButton href="https://github.com/Neha-vundavilli2710/MyStudyVault-">GitHub</LinkButton></div>
            </article>
            <article className="panel"><span className="eyebrow">FOCUS AREAS</span>{['AI/ML, RAG & intelligent apps', 'Full-stack & REST API design', 'Backend, databases & real-time systems', 'DSA & problem-solving'].map((x) => <div className="focus-row" key={x}><Icon name="code" />{x}</div>)}</article>
            <article className="panel"><span className="eyebrow">CORE TECHNOLOGIES</span><div className="tech-cloud">{['React', 'TypeScript', 'Java', 'Python', 'Node.js', 'FastAPI', 'MongoDB', 'SQL', 'Gemini API', 'Socket.IO'].map((x) => <b key={x}>{x}</b>)}</div></article>
          </div>
        </section>

        <section id="build-lab" className="section">
          <header className="section-head"><div><span className="eyebrow">SELECTED WORK</span><h2>Build Lab</h2><p>Explore six products through a focused engineering case-study view.</p></div><span className="count">06 PROJECTS</span></header>
          <div className="lab">
            <div className="project-list">
              {projects.map((item, index) => <button className={selected === index ? 'active' : ''} onClick={() => setSelected(index)} key={item.name}><span className="project-index">0{index + 1}</span><strong>{item.name}</strong><small>{item.short}</small><span className="project-role">{item.role} · {item.team}</span><em>{item.status}</em></button>)}
            </div>
            <article className="case-study">
              <div className="case-top"><div><span className="eyebrow">BUILD LAB / CASE STUDY</span><h2>{project.name}</h2><p>{project.short}</p></div><div className="actions">{project.demo && <LinkButton href={project.demo}>{project.demoLabel || 'Live Demo'}</LinkButton>}{project.backend && <LinkButton href={project.backend}>Backend API</LinkButton>}{project.video && <LinkButton href={project.video}>Demo Video</LinkButton>}<LinkButton href={project.repo} primary>Repository</LinkButton></div></div>
              <div className="meta"><span><small>ROLE</small>{project.role}</span><span><small>TIMELINE</small>{project.date}</span><span><small>OWNERSHIP</small>{project.team}</span><span><small>STATUS</small>{project.status}</span></div>
              <div className="case-grid">
                <div className="case-column"><div className="case-card"><b>01 · Overview</b><p>{project.overview}</p></div><div className="case-card"><b>02 · Problem Statement</b><p>{project.problem}</p></div></div>
                <div className="case-card architecture"><b>03 · Architecture / Workflow</b><div className="mini-flow">{project.workflow.map((step, index) => <span className="flow-part" key={step}>{index > 0 && <i>→</i>}<em>{step}</em></span>)}</div><small>Workflow labels reflect documented behavior; team-level capabilities are not presented as sole contributions.</small></div>
                <div className="case-card features"><b>04 · Key Features & Documentation</b><div>{project.features.map((feature) => <span key={feature.title}><strong>{feature.title}</strong><small>{feature.description}</small></span>)}</div></div>
                <div className="case-card stack-card"><b>05 · Technology Stack</b><div className="stack-categories">{Object.entries(project.technologies).map(([category, items]) => <div key={category}><small>{category}</small><div className="chips">{items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div>
                <div className="case-card"><b>06 · My Role & Contribution</b><p>{project.contribution}</p></div>
                <div className="case-card"><b>07 · Technical Highlights</b><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
              </div>
            </article>
          </div>
        </section>

        <section id="growth" className="section">
          <header className="section-head"><div><span className="eyebrow">MILESTONES</span><h2>Engineering Journey</h2><p>Education, training and applied engineering growth.</p></div></header>
          <div className="releases">
            {[
              ['Foundations', '2023–2027 EXPECTED', 'B.Tech CSE – AI & ML', 'Aditya College of Engineering and Technology · CGPA 8.23/10', 'DSA · OOP · DBMS'],
              ['Full-Stack Development', '2025', 'From coursework to deployed products', 'SmartBridge Web Development Intern · BookNest; Technical Hub trainee · MyStudyVault', 'React · Node.js · APIs'],
              ['Real-Time Backend Engineering', 'MAR–JUL 2026', 'Backend and workflow design', 'Sanchari team project; Nutrition Assistant; Restaurant Reservation Management System', 'MongoDB · Socket.IO'],
              ['Privacy-Aware AI Systems', 'IN PROGRESS', 'Risk-aware conversational AI', 'PrivEdge complete-backend implementation within a four-member team', 'FastAPI · RAG · ML routing'],
            ].map((x, i) => <article className={`release r${i}`} key={x[0]}><div><strong>{x[0]}</strong><small>{x[1]}</small></div><span><small>FOCUS</small><b>{x[2]}</b></span><span><small>HIGHLIGHTS</small>{x[3]}</span><span><small>KEY LEARNINGS</small>{x[4]}</span></article>)}
          </div>
          <div className="growth-bottom">
            <article className="panel education"><span className="eyebrow">EDUCATION</span><div className="education-entry primary"><span className="education-dot" /><div><h3>Aditya College of Engineering and Technology</h3><p>B.Tech in Computer Science and Engineering — Artificial Intelligence and Machine Learning</p><div className="education-meta"><span>2023–2027 (Expected)</span><b>CGPA 8.23/10</b></div></div></div><div className="education-entry"><span className="education-dot" /><div><h3>Sri Prakash Vidya Niketan School</h3><p>CBSE</p><div className="school-results"><span><small>CLASS 12</small><b>70%</b><em>2023</em></span><span><small>CLASS 10</small><b>88%</b><em>2021</em></span></div></div></div></article>
            <article className="panel"><span className="eyebrow">REPORTED CODING PROGRESS</span><div className="metric-row"><b>332</b> LeetCode solved</div><div className="metric-row"><b>238</b> GFG solved · score 1004</div><div className="metric-row"><b>672</b> CodeChef solved · rating 1140</div></article>
          </div>
        </section>

        <section id="stack" className="section">
          <header className="section-head"><div><span className="eyebrow">MY ENGINEERING TOOLKIT</span><h2>Stack / Toolkit</h2><p>Technologies connected to documented project context—not arbitrary proficiency scores.</p></div></header>
          <div className="stack-layout">
            <div className="skill-grid">{Object.entries(skillGroups).map(([group, items]) => <article className="skill-group" key={group}><h3>{group}</h3><div>{items.map((item) => <button className={skill === item ? 'active' : ''} onClick={() => setSkill(item)} key={item}>{item}</button>)}</div></article>)}</div>
            <aside className="association"><span className="eyebrow">PROJECT ASSOCIATIONS</span><h3>{skill || 'All projects'}</h3><button className="clear-filter" disabled={!skill} onClick={() => setSkill(null)}>Reset filter</button>{associations.length ? associations.map((x) => <span key={x}>{x}</span>) : <p>No documented project uses this technology.</p>}<small>Exact associations come from categorized project metadata; team project technologies remain project-level.</small></aside>
          </div>
        </section>

        <section id="highlights" className="section">
          <header className="section-head"><div><span className="eyebrow">CREDENTIALS & PROGRESS</span><h2>Highlights</h2><p>Verified links, precise participation labels and previously reported coding metrics.</p></div><a className="button" href={resumeUrl} download="Neha-Vundavilli-Resume.pdf">Download Resume <Icon name="external" /></a></header>
          <div className="stat-grid"><span><b>6</b> Certifications</span><span><b>5</b> Competitions</span><span><b>2</b> Internships</span><span><b>6</b> Portfolio Projects</span></div>
          <h3 className="subhead">Certifications</h3>
          <div className="cert-grid">{certifications.map(([title, issuer, year, url]) => <article className="cert" key={title}><span className="cert-icon"><Icon name="star" /></span><div><small>{issuer} · {year}</small><h3>{title}</h3><a href={url} target="_blank" rel="noopener noreferrer">View Certificate <Icon name="external" /></a></div></article>)}</div>
          <div className="highlight-columns">
            <article className="panel"><span className="eyebrow">PARTICIPATION CERTIFICATES</span>{competitions.map(([title, context, url]) => <div className="competition-row" key={title}><div><strong>{title}</strong><small>{context}</small></div><a href={url} target="_blank" rel="noopener noreferrer">View Participation Certificate <Icon name="external" /></a></div>)}</article>
            <article className="panel"><span className="eyebrow">CODING PROFILES · REPORTED</span>{[
              ['LeetCode', '332 solved', 'https://leetcode.com/u/vundavilli_neha/'],
              ['GeeksforGeeks', '238 solved · score 1004', 'https://www.geeksforgeeks.org/profile/vundavilli_neha?tab=activity'],
              ['CodeChef', '672 solved · rating 1140 · high 1226', 'https://www.codechef.com/users/neha2710'],
              ['HackerRank', 'Python, SQL: 5★ · React: 4★ · Problem Solving, Java, C, JavaScript: 3★', 'https://www.hackerrank.com/profile/nehavundavilli27'],
            ].map(([a,b,c]) => <a className="profile-row" href={c} target="_blank" rel="noopener noreferrer" key={a}><strong>{a}</strong><span>{b}</span><Icon name="external" /></a>)}</article>
          </div>
        </section>

        <section id="connect" className="section connect">
          <header className="section-head"><div><span className="eyebrow">OPEN TO OPPORTUNITIES</span><h2>Let’s build something meaningful together.</h2><p>Interested in software, full-stack and AI/ML opportunities, including internship and fresher roles.</p></div></header>
          <div className="connect-grid">
            <div>
              <h3>Let’s connect</h3>
              <p className="large-copy">Have a project, idea or opportunity? I’d love to hear from you.</p>
              <div className="contact-links">
                <a href="mailto:nehavundavilli27@gmail.com"><b>Email</b><span>nehavundavilli27@gmail.com</span></a>
                <a href="https://www.linkedin.com/in/neha-vundavilli" target="_blank" rel="noopener noreferrer"><b>LinkedIn</b><span>/in/neha-vundavilli</span></a>
                <a href="https://github.com/Neha-vundavilli2710" target="_blank" rel="noopener noreferrer"><b>GitHub</b><span>@Neha-vundavilli2710</span></a>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer"><b>Resume</b><span>Open attached PDF</span></a>
              </div>
            </div>
            <form onSubmit={submit}>
              <span className="eyebrow">SEND A MESSAGE</span><p>This uses your email app; no delivery service is configured.</p>
              <label>Name<input name="name" required placeholder="Enter your name" /></label>
              <label>Email<input name="email" required type="email" placeholder="Enter your email" /></label>
              <label>Subject<input name="subject" required placeholder="What’s this about?" /></label>
              <label>Message<textarea name="message" required rows={5} placeholder="Tell me about your project or opportunity..." /></label>
              {formError && <p className="error" role="alert">{formError}</p>}
              <button className="button primary submit" type="submit">Open Email Draft <Icon name="mail" /></button>
            </form>
          </div>
          <footer><strong>Neha Vundavilli</strong><div>{nav.map(([label,id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div><small>© {new Date().getFullYear()} Neha Vundavilli</small></footer>
        </section>
      </main>
      {showTop && <button className="back-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Icon name="arrow" /></button>}
    </div>
  )
}

export default App
