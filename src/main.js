import Navigo from "navigo";
import homePage from "./pages/home";
import detailPage from "./pages/detail";
import signinPage from "./pages/signin";
import signupPage from "./pages/signup";
import dashboardPage from "./pages/admin/dashboard";
import newsAdmin from "./pages/admin/news/index";
import newsPages from "./pages/newsPage";
import newsAdd from "./pages/admin/news/add.js";
import newsEdit from "./pages/admin/news/edit.js";
import aboutPage from "./pages/about"

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
  document.getElementById("app").innerHTML = await content.render(id);
  if (content.afterRender) content.afterRender(id);
};
router.on({
  "/": () => {
    print(homePage);
  },
  "/about": () => {
    print(aboutPage);
  },
  "/news": () => {
    print(newsPages);
  },
  "/news/:id": (value) => {
    print(detailPage, value.data.id);
  },
  "/signup": () => {
    print(signupPage);
  },
  "/signin": () => {
    print(signinPage);
  },
  "/admin/dashboard": () => {
    print(dashboardPage);
  },
  "/admin/news": () => {
    print(newsAdmin);
  },
  "/admin/news/add": () => {
    print(newsAdd);
  },
  "/admin/news/:id/edit": ({data}) => {
    print(newsEdit, data.id);
  },
});
router.resolve();
