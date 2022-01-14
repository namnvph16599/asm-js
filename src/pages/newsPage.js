import newsLists from "../components/newsLists";
import header from "../components/header";
import footer from "../components/footer";

const newsPages = {
  render() {
    return `
        ${header.render()}
        ${newsLists.render()}
       ${footer.render()}

        `;
  },
};
export default newsPages;
