import newsLists from "../components/newsLists";
import header from "../components/header";
import footer from "../components/footer";

const newsPages = {
 async render() {
    return `
        ${header.render()}
        ${await newsLists.render()}
       ${footer.render()}

        `;
  },
};
export default newsPages;
