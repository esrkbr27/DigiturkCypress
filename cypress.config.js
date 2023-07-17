const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://digiturksite.kartega.com" ,
    projectId: "vr8kx3",
    "video": false

    //video: false yazınca uzak bilgisayarda testler çalışırken videolarını kaydetmez.
    //default olarak video: true olarak çalışır.np

  },
});
