import Works from "./components/Works.vue";
import Integrations from "./components/Integrations.vue";
import Features from "./components/Features.vue";
import Home from "./components/Home.vue";
import Form from "./components/Form.vue";
import About from "./components/About.vue";

export default [
  { path: "/", component: Home },
  { path: "/works", component: Works },
  { path: "/integrations", component: Integrations },
  { path: "/features", component: Features },
  { path: "/form", component: Form },
  { path: "/about", component: About }
];