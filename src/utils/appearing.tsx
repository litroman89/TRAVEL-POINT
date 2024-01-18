export function listAppearing(selector: string): void {
  const elements = document.querySelectorAll(
    selector
  ) as NodeListOf<HTMLElement>;
  elements.forEach((element, i) => {
    const animationDelay = 0.1;
    element.style.animationDelay = `${i * animationDelay}s`;
  });
}
