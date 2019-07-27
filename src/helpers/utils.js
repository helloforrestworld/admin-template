import defaultSettings from '@/settings'

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

const title = defaultSettings.title || '3ruler-admin-template'
export function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
