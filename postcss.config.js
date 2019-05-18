module.exports = ctx => {
  const plugins = {
    autoprefixer: {
      ...ctx.options.autoprefixer,
      browsers: ['> 0.2%', 'not ie < 11', 'last 2 versions', 'not dead'],
      flexbox: 'no-2009',
      flexbox: true,
      grid: true
    }
  };

  return { plugins };
};
