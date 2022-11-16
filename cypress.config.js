const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'izjkef',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
