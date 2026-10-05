export { default } from '../../page'

export function generateStaticParams() {
  return [{ lang: 'hy' }, { lang: 'ru' }, { lang: 'en' }]
}
