module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");

  return {
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
    dir: {
      input: ".",
      output: "_site"
    }
  };
};