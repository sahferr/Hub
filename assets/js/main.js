const revealSelectors = [
  ".section__label",
  ".section__title",
  ".about__grid",
  ".products__grid",
  ".contact__content",
];

const sections = document.querySelectorAll("section:not(.hero)");

const animateSectionContent = (section) => {
  const elements = section.querySelectorAll(revealSelectors.join(","));

  elements.forEach((element, index) => {
    element.style.animation = `fade-up 0.7s ${index * 0.1}s ease both`;
  });
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      animateSectionContent(entry.target);
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.1 },
);

sections.forEach((section) => revealObserver.observe(section));
