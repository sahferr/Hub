const revealSelectors = [
  ".section__label",
  ".section__title",
  ".about__grid",
  ".team__grid",
  ".products__grid",
  ".future__media",
  ".future__content",
  ".contact__content",
];

const sections = document.querySelectorAll("section:not(.hero)");
const disabledProductButtons = document.querySelectorAll(
  "[data-disabled-product]",
);
const toast = document.querySelector("[data-toast]");
let toastTimeout;

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

const showToast = (message) => {
  if (!toast) {
    return;
  }

  window.clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add("is-visible");

  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3200);
};

disabledProductButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast(
      "Os links dos produtos estão temporariamente desabilitados durante o lançamento.",
    );
  });
});
