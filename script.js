// Complete structural routing arrays supporting dynamic triggers
const projects = [
  {
    title: 'Inou',
    featured: true,
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
    image: 'projects/ChatGPT%20Image%20Jun%2010,%202026,%2002_51_27%20PM.png',
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
    image: 'projects/ChatGPT%20Image%20Jun%2010,%202026,%2002_57_14%20PM.png',
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
    image: 'projects/ChatGPT%20Image%20Jun%2010,%202026,%2003_04_25%20PM.png',
    links: [
      { label: 'Live', href: 'https://yashsinghjaat.github.io/studyvault/' },
      { label: 'GitHub', href: 'https://github.com/yashsinghjaat/studyvault' },
    ],
  },
  {
    title: 'Focus Timer',    featured: true,    category: 'utility',
    summary: 'Productivity and study companion with timer controls, stopwatch, break scheduling, background music, and weather updates.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    image: 'projects/ChatGPT%20Image%20Jun%2010,%202026,%2003_13_31%20PM.png',
    links: [
      { label: 'Live', href: 'https://yashsinghjaat.github.io/studytimer/' },
      { label: 'GitHub', href: 'https://github.com/yashsinghjaat/studytimer' },
    ],
  },
];

const postsData = [
  {
    id: 1,
    type: 'linkedin',
    date: 'Jun 12, 2026',
    title: 'Building Highly Scalable Anonymous Platforms',
    content: 'Shared insights on designing RESTful routing protocols combined with Supabase relational schemas to manage real-time reporting layers securely without sacrificing database latency loops.',
    link: 'https://www.linkedin.com/in/yashwantsinghjaat'
  },
  {
    id: 2,
    type: 'event',
    date: 'May 28, 2026',
    title: 'HackerRank Orchestrate AI Agent Challenge Finalist Runs',
    content: 'Competed globally against developer pools navigating automation parameters, multi-agent frameworks, and conversational tool schemas to establish rapid contextual engineering models.',
    link: '#'
  },
  {
    id: 3,
    type: 'achievement',
    date: 'May 2026',
    title: 'Global Rank 1106 Secured',
    content: 'System confirmed execution status. Verified placement within top tiers of automated intelligence orchestration assessment tracks.',
    link: '#'
  },
  {
    id: 4,
    type: 'update',
    date: 'Apr 2026',
    title: 'Core Stack Refactoring Complete',
    content: 'Migrated visual container wrappers across current project portfolio modules to enhance async component decoding and image asset loading timelines natively.',
    link: 'https://github.com/yashwantsinghjaat'
  }
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

const projectGrid = document.getElementById('project-grid');
const featuredProjectsContainer = document.getElementById('featured-projects');
const otherProjectsContainer = document.getElementById('other-projects');
const postsFeed = document.getElementById('posts-feed');
const certificateGrid = document.getElementById('certificate-grid');
const filterButtons = document.querySelectorAll('[data-filter]');
const postFilterButtons = document.querySelectorAll('[data-post-filter]');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const revealItems = document.querySelectorAll('.reveal');
const statValues = document.querySelectorAll('[data-count]');
const progressBar = document.getElementById('progress-bar');

// Modal Lightbox Elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');

function assetPath(path) {
  return path;
}

// Window Scroll Tracker
window.addEventListener('scroll', () => {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  if (progressBar) progressBar.style.width = scrolled + '%';
});

// Modal Actions Engine
function setupLightboxTriggers() {
  document.querySelectorAll('.lightbox-trigger').forEach((element) => {
    element.onclick = function() {
      const src = this.getAttribute('data-src');
      const title = this.getAttribute('data-title') || '';
      if (lightbox && lightboxImg && lightboxCaption) {
        lightboxImg.src = assetPath(src);
        lightboxCaption.textContent = title;
        lightbox.classList.add('active');
      }
    };
  });
}

if (lightboxClose && lightbox) {
  lightboxClose.onclick = () => lightbox.classList.remove('active');
  lightbox.onclick = (e) => {
    if (e.target === lightbox) lightbox.classList.remove('active');
  };
}

function renderProjects(filter = 'all') {
  if (!projectGrid || !featuredProjectsContainer || !otherProjectsContainer) return;
  featuredProjectsContainer.innerHTML = '';
  otherProjectsContainer.innerHTML = '';

  const visibleProjects = projects.filter((project) => filter === 'all' || project.category === filter);
  const featured = visibleProjects.filter((project) => project.featured);
  const others = visibleProjects.filter((project) => !project.featured);

  function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = `project-card glass ${project.featured ? 'featured' : ''}`;
    card.innerHTML = `
      <div class="thumb lightbox-trigger" data-src="${project.image}" data-title="${project.title}"><img src="${assetPath(project.image)}" alt="${project.title} preview" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 520\"><defs><linearGradient id=\"g\" x1=\"0\" x2=\"1\" y1=\"0\" y2=\"1\"><stop stop-color=\"#14b8a6\"/><stop offset=\"1\" stop-color=\"#030712\"/></linearGradient></defs><rect width=\"800\" height=\"520\" fill=\"url(#g)\"/><text x=\"50%\" y=\"48%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"white\" font-family=\"Arial, sans-serif\" font-size=\"34\" font-weight=\"700\">Image unavailable</text></svg>`)}';"></div>
      <div>
        <p class="eyebrow">${project.category}</p>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
      </div>
      <div class="tag-row">${project.stack.map((item) => `<span class="tag">${item}</span>`).join('')}</div>
      <div class="link-row">${project.links.map((link) => `<a href="${link.href}" target="${link.href === '#' ? '_self' : '_blank'}" rel="${link.href === '#' ? '' : 'noreferrer'}">${link.label}</a>`).join('')}</div>
    `;
    return card;
  }

  featured.forEach((project) => featuredProjectsContainer.appendChild(createProjectCard(project)));
  others.forEach((project) => otherProjectsContainer.appendChild(createProjectCard(project)));
  setupLightboxTriggers();
}

function renderPosts(filter = 'all') {
  if (!postsFeed) return;
  postsFeed.innerHTML = '';

  const visiblePosts = postsData.filter((post) => filter === 'all' || post.type === filter);

  visiblePosts.forEach((post) => {
    const card = document.createElement('article');
    card.className = 'post-card glass';
    card.setAttribute('data-type', post.type);
    card.innerHTML = `
      <div class="post-meta">
        <span class="post-type-badge">${post.type}</span>
        <span class="post-date">// ${post.date}</span>
      </div>
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      ${post.link !== '#' ? `<a href="${post.link}" class="post-link" target="_blank" rel="noreferrer">Open Asset Link →</a>` : ''}
    `;
    postsFeed.appendChild(card);
  });
}

function renderCertificates() {
  if (!certificateGrid) return;
  certificateGrid.innerHTML = '';

  certificateData.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'certificate-card';
    card.innerHTML = `
      <div class="img-zoom-wrapper lightbox-trigger" data-src="${item.file}" data-title="${item.title}">
        <img src="${assetPath(item.file)}" alt="${item.title} certificate" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 520\"><rect width=\"800\" height=\"520\" fill=\"#111827\"/><text x=\"50%\" y=\"50%\" dominant-baseline=\"middle\" text-anchor=\"middle\" fill=\"%2322d3ee\" font-family=\"Arial\" font-size=\"24\">Preview Unavailable</text></svg>`)}';">
      </div>
      <h3>${item.title}</h3>
      <p>${item.detail}</p>
    `;
    certificateGrid.appendChild(card);
  });
  setupLightboxTriggers();
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
    { threshold: 0.1 },
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

postFilterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    postFilterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderPosts(button.dataset.postFilter || 'all');
  });
});

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.getElementById('year').textContent = new Date().getFullYear();

// Initializations
renderProjects();
renderPosts();
renderCertificates();
setupRevealObserver();
animateCounters();
