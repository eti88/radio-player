export default async (ctx, inject) => {
  // set theme
  ctx.$vuetify.theme.dark = ctx.store.getters[`app/dark_theme`]
};
