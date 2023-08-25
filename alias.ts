import { resolve } from 'path'

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '~': r('.'),
  '~~': r('./src/'),
  '~~components': '/src/components',
  '~~layouts': '/src/layouts',
  '~~pages': '/src/pages',
  '~~assets': '/src/assets',
  '~~types': '/src/types',
}
