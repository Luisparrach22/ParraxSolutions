import { describe, expect, it } from 'vitest';
import { jsonLd } from './json-ld';

describe('jsonLd', () => {
  it('escapa < para que un valor no pueda cerrar la etiqueta script', () => {
    const out = jsonLd({ name: '</script><script>alert(1)</script>' });
    expect(out).not.toContain('<');
    expect(out).toContain('\\u003c/script>');
  });

  it('produce JSON equivalente al original', () => {
    const data = { '@type': 'Organization', name: 'A < B', areaServed: ['ES', 'VE'] };
    expect(JSON.parse(jsonLd(data))).toEqual(data);
  });
});
