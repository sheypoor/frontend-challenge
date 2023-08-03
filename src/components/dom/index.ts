// dom.ts

export const getElement = (id: string): HTMLElement | null =>
  document.getElementById(id);

export const addClass = (id: string, className: string) =>
  getElement(id)?.classList.add(className);

export const removeClass = (id: string, className: string) =>
  getElement(id)?.classList.remove(className);

export const toggleClass = (id: string, className: string) =>
  getElement(id)?.classList.toggle(className);

export const getValue = (id: string) =>
  (getElement(id) as HTMLInputElement)?.value;
