import { signup, login, isAuthenticated, refreshToken } from "./controllers/index.js"

export const routes = (app) => {
    app.route('/auth/signup').post(signup)
    app.route('/auth/login').post(login)
    app.route('/auth/is-authenticated').get(isAuthenticated)
    app.route('/auth/refresh-token').get(refreshToken)
}