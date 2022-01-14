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

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
  document.getElementById("app").innerHTML = content;
};
router.on({
  "/": () => {
    print(homePage.render());
  },
  "/about": () => {
    print("About page");
  },
  "/news": () => {
    print(newsPages.render());
  },
  "/news/:id": (value) => {
    print(detailPage.render(value.data.id));
  },
  "/signup": () => {
    print(signupPage.render());
  },
  "/signin": () => {
    print(signinPage.render());
  },
  "/admin/dashboard": () => {
    print(dashboardPage.render());
  },
  "/admin/news": () => {
    print(newsAdmin.render());
  },
  "/admin/news/add": () => {
    print(newsAdd.render());
  },
  "/admin/news/edit": () => {
    print(newsEdit.render());
  },
});
router.resolve();
