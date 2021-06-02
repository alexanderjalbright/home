export const $c = (classes: string[]) => classes.join(' ');

export const $i = (id: string) => id.toLowerCase().replaceAll(/[^a-z0-9]+/gi, '-');
