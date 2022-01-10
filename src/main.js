import Navigo from "navigo";
import homePage from "./pages/home";

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
});
router.resolve();
