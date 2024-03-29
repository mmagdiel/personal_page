const standardBasePath = `/notes`;

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions;

  const basePath = themeOptions.basePath || standardBasePath;

  createPage({
    path: basePath,
    component: require.resolve(`./src/templates/Cara.tsx`),
  });
};
