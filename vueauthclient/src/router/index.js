import Vue from "vue"
import Router from "vue-router"
import Login from "../components/Login"
import Dashboard from "../components/Dashboard"
import Converter from "../components/Converter";

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/converter",
      name: "Converter",
      component: Converter
    }
  ]
})
