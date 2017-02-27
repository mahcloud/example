module.exports = {
  files: {
    javascripts: {
      joinTo: {
        "app.js": /^(app)|(node_modules)/
      }
    },
    stylesheets: {
      joinTo: {
        "app.css": /^(sass\/app)/
      },
    }
  },

  server: {
    port: 3366
  },

  plugins: {
    babel: {
      presets: ["es2015", "react"]
    }
  },

  paths: {
    watched: ["app", "sass"]
  },

  modules: {
    autoRequire: {
      "app.js": ["app.js"]
    }
  },

  npm: {
    enabled: true
  }
};
