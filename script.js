const projects = [
  {
    title: 'Inou',
    category: 'fullstack',
    summary: 'Anonymous social and community platform with posting, likes, comments, trending content, moderation tools, reporting, and an admin dashboard.',
    stack: ['Node.js', 'Supabase', 'PostgreSQL', 'REST API', 'Render'],
    image: 'projects/ChatGPT%20Image%20Jun%2010,%202026,%2002_37_58%20PM.png',
    links: [
      { label: 'Live', href: 'https://inou.onrender.com' },
      { label: 'Private repo', href: '#' },
    ],
  },
  {
    title: 'Student Tuition Management System',
    category: 'fullstack',
    summary: 'Student, teacher, attendance, payment, and fee tracking system with reminders, performance charts, and export-friendly data workflows.',
    stack: ['Management', 'Charts', 'Payments', 'Data export'],
    image: 'projects/ChatGPT%20Image%20Jun%2010,%202026,%2003_04_25%20PM.png',
    links: [
      { label: 'Live', href: 'https://yashwantsinghjaat.github.io/tutionmgmt/' },
      { label: 'GitHub', href: 'https://github.com/yashsinghjaat/tutionmgmt' },
    ],
  },
  {
    title: 'Fitness Point',
    category: 'frontend',
    summary: 'Professional gym website with membership plans, coaching services, contact inquiry flow, and a polished business presentation.',
    stack: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    image: 'projects/ChatGPT%20Image%20Jun%2010,%202026,%2002_51_27%20PM.png',
    links: [
      { label: 'Live', href: 'https://yashwantsinghjaat.github.io/fitnesspoint/' },
      { label: 'GitHub', href: 'https://github.com/yashsinghjaat/fitnesspoint' },
    ],
  },
  {
    title: 'Study Vault',
    category: 'fullstack',
    summary: 'Academic resource sharing hub for notes, PYQs, semester-wise materials, filtering, and file organization.',
    stack: ['Resource sharing', 'Filters', 'Community', 'Files'],
    image: 'projects/ChatGPT%20Image%20Jun%2010,%202026,%2002_57_14%20PM.png',
    links: [
      { label: 'Live', href: 'https://yashsinghjaat.github.io/studyvault/' },
      { label: 'GitHub', href: 'https://github.com/yashsinghjaat/studyvault' },
    ],
  },
  {
    title: 'Focus Timer',
    category: 'utility',
    summary: 'Productivity and study companion with timer controls, stopwatch, break scheduling, background music, and weather updates.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    image: 'projects/ChatGPT%20Image%20Jun%2010,%202026,%2003_13_31%20PM.png',
    links: [
      { label: 'Live', href: 'https://yashsinghjaat.github.io/studytimer/' },
      { label: 'GitHub', href: 'https://github.com/yashsinghjaat/studytimer' },
    ],
  },
];

const certificateData = [
  { title: 'HackerRank Orchestrate AI Agent Challenge', detail: 'Certificate of Excellence, Global Rank 1106', file: 'certificates/1.jpeg' },
  { title: 'Gen AI Engineering Mastermind', detail: 'Outskill Platform', file: 'certificates/2.png' },
  { title: 'Code Farming 24-Hour Code-A-Thon', detail: 'Voyager Coding Club & HackerRank', file: 'certificates/3.jpeg' },
  { title: 'Cybersecurity with AI Internship', detail: 'NIIT Foundation', file: 'certificates/4.png' },
  { title: 'GeekVerse Hackathon', detail: 'GGSIPU USAR', file: 'certificates/5.jpeg' },
  { title: 'Hackamania Ideation Round', detail: 'The Elites Community', file: 'certificates/6.jpeg' },
  { title: 'CompTIA Cloud+ Basic', detail: 'Alison', file: 'certificates/7.jpg' },
  { title: 'Google Play Store Listing Certificate', detail: 'Google Play Academy', file: 'certificates/8.png' },
  { title: 'Shri Ram Trading Challenge 2023', detail: 'SRCC, University of Delhi', file: 'certificates/9.jpg' },
  { title: 'Free CISSP Training', detail: 'Master of Project Academy', file: 'certificates/10.jpg' },
  { title: 'Free Ethical Hacker Training', detail: 'Master of Project Academy', file: 'certificates/11.jpg' },
  { title: 'Free ITSM Training', detail: 'Master of Project Academy', file: 'certificates/12.jpg' },
  { title: 'Free Microsoft Excel Training', detail: 'Master of Project Academy', file: 'certificates/13.jpg' },
  { title: 'Ethical Hacking: Mobile Platforms and Network Architecture', detail: 'Great Learning', file: 'certificates/14.jpg' },
  { title: 'Be A White Hat Hacker and Pen Tester', detail: 'Eduonix', file: 'certificates/15.jpg' },
];

const previewData = [
  {
    title: 'Focus Timer preview',
    detail: 'Dark productivity UI with a bold timer layout and widget cards.',
    file: 'projects/ChatGPT Image Jun 10, 2026, 03_13_31 PM.png',
  },
  {
    title: 'Fitness Point preview',
    detail: 'Gym website artwork with a strong hero and service-focused composition.',
    file: 'projects/ChatGPT Image Jun 10, 2026, 02_51_27 PM.png',
  },
  {
    title: 'Study Vault preview',
    detail: 'Academic resource sharing concept with content and organization emphasis.',
    file: 'projects/ChatGPT Image Jun 10, 2026, 02_57_14 PM.png',
  },
  {
    title: 'Student Tuition preview',
    detail: 'Management dashboard style preview for payments and student tracking.',
    file: 'projects/ChatGPT Image Jun 10, 2026, 03_04_25 PM.png',
  },
  {
    title: 'Project collection preview',
    detail: 'Additional project visual from the existing portfolio assets.',
    file: 'projects/ChatGPT Image Jun 10, 2026, 02_37_58 PM.png',
  },
];

const projectGrid = document.getElementById('project-grid');
const previewGrid = document.getElementById('preview-grid');
const certificateGrid = document.getElementById('certificate-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const revealItems = document.querySelectorAll('.reveal');
const statValues = document.querySelectorAll('[data-count]');

function assetPath(path) {
  return path;
}

function renderProjects(filter = 'all') {
  projectGrid.innerHTML = '';

  const visibleProjects = projects.filter((project) => filter === 'all' || project.category === filter);

  visibleProjects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card glass';
    card.innerHTML = `
      <div class="thumb"><img src="${assetPath(project.image)}" alt="${project.title} preview" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 520\"><defs><linearGradient id=\"g\" x1=\"0\" x2=\"1\" y1=\"0\" y2=\"1\"><stop stop-color=\"#f59e0b\"/><stop offset=\"1\" stop-color=\"#132238\"/></linearGradient></defs><rect width=\"800\" height=\"520\" fill=\"url(#g)\"/><text x=\"50%\" y=\"48%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"white\" font-family=\"Arial, sans-serif\" font-size=\"34\" font-weight=\"700\">Image unavailable</text><text x=\"50%\" y=\"58%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"white\" font-family=\"Arial, sans-serif\" font-size=\"18\">${project.title}</text></svg>`)}';"></div>
      <div>
        <p class="eyebrow">${project.category}</p>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
      </div>
      <div class="tag-row">${project.stack.map((item) => `<span class="tag">${item}</span>`).join('')}</div>
      <div class="link-row">${project.links.map((link) => `<a href="${link.href}" target="${link.href === '#' ? '_self' : '_blank'}" rel="${link.href === '#' ? '' : 'noreferrer'}">${link.label}</a>`).join('')}</div>
    `;
    projectGrid.appendChild(card);
  });
}

function renderCertificates() {
  certificateGrid.innerHTML = '';

  certificateData.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'certificate-card';
    card.innerHTML = `
      <img src="${assetPath(item.file)}" alt="${item.title} certificate" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 520\"><rect width=\"800\" height=\"520\" fill=\"#ffffff\"/><rect x=\"24\" y=\"24\" width=\"752\" height=\"472\" rx=\"28\" fill=\"#0d1a2d\"/><text x=\"50%\" y=\"46%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"#f59e0b\" font-family=\"Arial, sans-serif\" font-size=\"32\" font-weight=\"700\">Certificate preview</text><text x=\"50%\" y=\"57%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"#b7c2d6\" font-family=\"Arial, sans-serif\" font-size=\"18\">${item.title}</text></svg>`)}';">
      <h3>${item.title}</h3>
      <p>${item.detail}</p>
    `;
    certificateGrid.appendChild(card);
  });
}

function renderPreviewGrid() {
  previewGrid.innerHTML = '';

  previewData.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'preview-card glass';
    card.innerHTML = `
      <img src="${assetPath(item.file)}" alt="${item.title}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 520\"><defs><linearGradient id=\"g\" x1=\"0\" x2=\"1\" y1=\"0\" y2=\"1\"><stop stop-color=\"#0f172a\"/><stop offset=\"1\" stop-color=\"#f59e0b\"/></linearGradient></defs><rect width=\"800\" height=\"520\" fill=\"url(#g)\"/><text x=\"50%\" y=\"48%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"white\" font-family=\"Arial, sans-serif\" font-size=\"30\" font-weight=\"700\">Preview unavailable</text><text x=\"50%\" y=\"58%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"white\" font-family=\"Arial, sans-serif\" font-size=\"17\">${item.title}</text></svg>`)}';">
      <h3>${item.title}</h3>
      <p>${item.detail}</p>
    `;
    previewGrid.appendChild(card);
  });
}

function animateCounters() {
  statValues.forEach((node) => {
    const target = Number(node.dataset.count || 0);
    const duration = 1000;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.round(target * progress);
      node.textContent = value.toLocaleString('en-IN');

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  });
}

function setupRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  revealItems.forEach((item) => observer.observe(item));
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderProjects(button.dataset.filter || 'all');
  });
});

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 760) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

renderProjects();
renderPreviewGrid();
renderCertificates();
setupRevealObserver();
animateCounters();