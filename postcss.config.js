module.exports = ctx => {
  const plugins = {
    autoprefixer: {
      ...ctx.options.autoprefixer,
      browsers: ['> 1%', 'not ie <= 11', 'last 2 versions', 'not dead'],
      flexbox: true,
      grid: true
    }
  };

  return { plugins };
};
