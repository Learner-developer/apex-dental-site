/** Generate accessible alt text from descriptive kebab-case filenames. */
export function altFromFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, '');
  return base
    .split('-')
    .map((word, index, words) => {
      if (word === 'before' && words[index + 1] === 'after') return 'Before and after:';
      if (word === 'after' && words[index - 1] === 'before') return '';
      if (word === 'dr') return 'Dr.';
      if (word === 'bds' || word === 'mds') return word.toUpperCase();
      if (word === 'opg') return 'OPG';
      if (word === 'nsk') return 'NSK';
      if (word === 'dt') return 'DT';
      if (word === 'rct') return 'RCT';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}
