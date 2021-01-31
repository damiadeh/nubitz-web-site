module.exports = {
  distDir: 'build',
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  }
};

const withVideos = require("next-videos");

module.exports = withVideos();
