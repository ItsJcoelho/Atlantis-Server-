module.exports = (app) => {
    let challenges = require('./routes/challenges.route')
    let categories = require('./routes/categories.route')
    let courses = require('./routes/courses.route')
    let events = require('./routes/events.route')
    let notifications = require('./routes/notifications.route')
    let users = require('./routes/users.route')
    
    app.use(challenges)
    app.use(categories)
    app.use(courses)
    app.use(events)
    app.use(notifications)
    app.use(users)
}