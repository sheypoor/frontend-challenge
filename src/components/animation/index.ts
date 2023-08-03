// animation.ts

export const animate = (
  illustration: HTMLElement | null,
  outClass: string,
  inClass: string
) => {
  if (illustration) {
    illustration.classList.remove("active", outClass);
    setTimeout(() => {
      illustration.classList.add(inClass);
      setTimeout(() => {
        illustration.classList.add("active");
      }, 20);
    }, 500);
  }
};
