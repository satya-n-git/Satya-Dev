document.addEventListener("DOMContentLoaded", () => {
  const heroName = document.getElementById("heroName");

  // Add mouseover and mouseleave event listeners for heroName
  heroName.addEventListener("mouseover", () => {
    heroName.style.transform = "scale(1.1)";
    heroName.style.color = "#fca311";
  });

  heroName.addEventListener("mouseleave", () => {
    heroName.style.transform = "scale(1)";
    heroName.style.color = "white";
  });

  // Toggle mobile menu visibility
  mobileMenuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  const projectData = [
    {
      title: "Online Bookstore Application",
      description:
        "Developed an online bookstore using Java Spring Boot. Implemented user authentication, book catalog, shopping cart, and checkout functionality.",
      githubLink: "https://github.com/yourusername/online-bookstore",
    },
    {
      title: "Inventory Management System",
      description:
        "Built an inventory management system with Java. Utilized Spring MVC framework for handling HTTP requests and MySQL for data storage.",
      githubLink: "https://github.com/yourusername/inventory-management",
    },
    {
      title: "Customer Relationship Management (CRM)",
      description:
        "Designed a CRM application using Java and Spring Security. Implemented features like customer database management, task scheduling, and reporting.",
      githubLink: "https://github.com/yourusername/crm-application",
    },
    {
      title: "E-commerce Platform",
      description:
        "Created an e-commerce platform using Java and Spring framework. Integrated payment gateway and order tracking system for seamless customer experience.",
      githubLink: "https://github.com/yourusername/e-commerce-platform",
    },
    {
      title: "Job Portal Application",
      description:
        "Developed a job portal application using Java Spring Boot. Implemented job posting, applicant tracking, and employer dashboard functionalities.",
      githubLink: "https://github.com/yourusername/job-portal",
    },
  ];

  const projectListContainer = document.getElementById("projectList");

  // Loop through project data and create project boxes
  projectData.forEach((project) => {
    const projectBox = createProjectBox(
      project.title,
      project.description,
      project.githubLink
    );
    projectListContainer.appendChild(projectBox);
  });

  // Function to create a project box element with GitHub link button
  function createProjectBox(title, description, githubLink) {
    const projectBox = document.createElement("div");
    projectBox.classList.add("p-4", "bg-gray-100", "rounded-lg");

    const titleElement = document.createElement("h3");
    titleElement.classList.add("text-lg", "font-bold", "mb-2");
    titleElement.textContent = title;

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("text-md", "text-gray-600", "mb-2");
    descriptionElement.textContent = description;

    const githubButton = document.createElement("a");
    githubButton.classList.add(
      "inline-block",
      "px-4",
      "py-2",
      "bg-blue-600",
      "text-white",
      "rounded-md",
      "hover:bg-blue-700",
      "transition",
      "duration-300"
    );
    githubButton.textContent = "View on GitHub";
    githubButton.href = githubLink;
    githubButton.target = "_blank";

    // Append title, description, and GitHub button to the project box
    projectBox.appendChild(titleElement);
    projectBox.appendChild(descriptionElement);
    projectBox.appendChild(githubButton);

    return projectBox;
  }

  // Smooth scrolling and active link highlighting for navigation links
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        // Highlight the active navigation link
        links.forEach((navLink) => {
          navLink.classList.remove("active-nav-link");
        });
        link.classList.add("active-nav-link");
      }
    });
  });

  // Form submission handling
  const contactForm = document.getElementById("contactForm");
  const statusMessage = document.getElementById("statusMessage");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = contactForm.elements["firstName"].value;
    const lastName = contactForm.elements["lastName"].value;
    const email = contactForm.elements["email"].value;
    const message = contactForm.elements["message"].value;

    // Here you can perform additional validation if needed

    // Simulate sending message (replace with actual backend/API call)
    setTimeout(() => {
      statusMessage.textContent = `Message sent successfully!`;
      contactForm.reset();
    }, 1000);
  });
});
