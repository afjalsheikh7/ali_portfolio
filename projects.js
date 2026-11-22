
const projects = [
  {
    title: "Yadav Restaurent",
    description: "Yadav Restaurant.",
    image: "yadavres.jpg",
    link: "https://yadav-restaurentt.onrender.com"
  },
  {
    title: "Project 02",
    description: "My second website project.",
    image: "images/project-02.jpg",
    link: "https://your-website-link.com"
  },
  {
    title: "Project 03",
    description: "My third website project.",
    image: "projectt2.jpg",
    link: "https://your-website-link.com"
  },
  {
    title: "Project 04",
    description: "My fourth website project.",
    image: "images/project-04.jpg",
    link: "https://your-website-link.com"
  },
  {
    title: "Project 05",
    description: "My fifth website project.",
    image: "images/project-05.jpg",
    link: "https://your-website-link.com"
  },
  {
    title: "Project 06",
    description: "My sixth website project.",
    image: "images/project-06.jpg",
    link: "https://your-website-link.com"
  },
  {
    title: "Project 07",
    description: "My seventh website project.",
    image: "images/project-07.jpg",
    link: "https://your-website-link.com"
  },
  {
    title: "Project 08",
    description: "My eighth website project.",
    image: "images/project-08.jpg",
    link: "https://your-website-link.com"
  },
  {
    title: "Project 09",
    description: "My ninth website project.",
    image: "images/project-09.jpg",
    link: "https://your-website-link.com"
  },
  {
    title: "Project 10",
    description: "My tenth website project.",
    image: "images/project-10.jpg",
    link: "https://your-website-link.com"
  }
];

const grid = document.getElementById("projectsGrid");

grid.innerHTML = projects.map((project, index) => `
  <article class="card">
    <div class="thumb">
      <div class="image-placeholder">
        <span class="placeholder-icon">▧</span>
        <span>Projects Coming Soon</span>
      </div>

      <img
        src="${project.image}"
        alt="${project.title}"
        loading="lazy"
        onload="this.previousElementSibling.style.display='none'"
        onerror="this.style.display='none'"
      >

      <span class="project-number">
        PROJECT ${String(index + 1).padStart(2, "0")}
      </span>
    </div>

    <div class="card-content">
      <h2>${project.title}</h2>
      <p>${project.description}</p>

      <a
        class="view-btn"
        href="${project.link}"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project <span class="arrow">↗</span>
      </a>
    </div>
  </article>
`).join("");
