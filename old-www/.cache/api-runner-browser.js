const plugins = require(`./api-runner-browser-plugins`);
const {
  getResourcesForPathname,
  getResourcesForPathnameSync,
  getResourceURLsForPathname,
} = require(`./loader`).publicLoader;

exports.apiRunner = (api, args = {}, defaultReturn, argTransform) => {
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    args.getResourcesForPathnameSync = getResourcesForPathnameSync;
    args.getResourcesForPathname = getResourcesForPathname;
    args.getResourceURLsForPathname = getResourceURLsForPathname;

    const result = plugin.plugin[api](args, plugin.options);
    if (result && argTransform) {
      args = argTransform({ args, result, plugin });
    }
    return result;
  });

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`);

  if (results.length > 0) {
    return results;
  } else if (defaultReturn) {
    return [defaultReturn];
  } else {
    return [];
  }
};

exports.apiRunnerAsync = (api, args, defaultReturn) =>
  plugins.reduce(
    (previous, next) =>
      next.plugin[api]
        ? previous.then(() => next.plugin[api](args, next.options))
        : previous,
    Promise.resolve()
  );