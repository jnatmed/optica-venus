const models = [
  { src: '/images/anteojos-carey.webp', alt: 'Armazón de acetato carey, imagen realista de demostración' },
  { src: '/images/anteojos-oliva.webp', alt: 'Anteojos de sol verde oliva, imagen realista de demostración' },
  { src: '/images/anteojos-dorado.webp', alt: 'Armazón metálico dorado redondo, imagen realista de demostración' },
];

export default function Frame({ variant = 0, large = false }) {
  const model = models[variant] || models[0];
  return <img className={`glasses-art product-photo ${large ? 'large' : ''}`} src={model.src} alt={model.alt} width="1200" height="800" loading={large ? 'eager' : 'lazy'} decoding="async" />;
}
