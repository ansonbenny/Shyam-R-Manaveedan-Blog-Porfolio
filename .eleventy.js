const { DateTime} = require("luxon");
const fs = require("fs");
const NOT_FOUND_PATH = "public/404.html";

module.exports = function (eleventyConfig) {

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {

        bs.addMiddleware("*", (req, res) => {
          if (!fs.existsSync(NOT_FOUND_PATH)) {
            throw new Error(`Expected a \`${NOT_FOUND_PATH}\` file but could not find one. Did you create a 404.html template?`);
          }

          const content_404 = fs.readFileSync(NOT_FOUND_PATH);
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  //


  eleventyConfig.addPassthroughCopy('./src/assets');

  eleventyConfig.addPassthroughCopy('./src/admin');


eleventyConfig.addFilter("postDate", (dateObj) => {
  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
})

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
