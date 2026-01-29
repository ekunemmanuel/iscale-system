export const fadeIn = {
  mounted(el: HTMLElement) {
    // Initial State
    el.classList.add(
      "opacity-0",
      "translate-y-8",
      "transition-all",
      "duration-700",
      "ease-out",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate In
            el.classList.remove("opacity-0", "translate-y-8");
            el.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );

    observer.observe(el);
  },
};
