export function onRequestGet(context) {
  return context.env.ASSETS.fetch(context.request);
}
