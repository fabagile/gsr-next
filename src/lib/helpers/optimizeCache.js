export default async function fetchWOstore (url) {
  fetch(url, { cache: 'no-store' })
}
