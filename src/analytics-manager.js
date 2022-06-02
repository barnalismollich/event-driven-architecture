const eventBus = require("./event-bus");

class AnalyticsManager {
  actions = [];

  constructor() {
    eventBus.on((event) => this.track(event));
  }

  track(action) {
    this.actions.push({
      action,
      time: new Date(),
    });
  }

  printActions() {
    console.log(this.actions);
  }
}

module.exports = new AnalyticsManager();
