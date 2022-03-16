import { remark } from 'remark'

export default async function toHtml(markdown: string) {
  return await remark().process(markdown)
}
