export const $c = (classes: string[]) => classes.join(' ');

export const $i = (id: string) => id.replaceAll(/[^a-zA-Z0-9]+/gi, '-');
