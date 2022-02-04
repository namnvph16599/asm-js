import banner from "../components/banner";
import newsLists from "../components/newsLists";
import header from "../components/header";
import footer from "../components/footer";

const homePage = {
 async render() {
    return /*html*/ `
    ${header.render()}
        <div class="banner mt-2">
            ${banner.render()}
        </div>
        <section class="content">
            <article>
            ${await newsLists.render()}
            </article>
        </section>
    ${footer.render()}

        `;
  },
};
export default homePage;
