import banner from "../components/banner";
import newsLists from "../components/newsLists"
const homePage = {
  render() {
    return /*html*/ `
        <div class="banner mt-2">
            ${banner.render()}
        </div>
        <section class="content">
            <article>
            ${newsLists.render()}
            </article>
        </section>
        `;
  },
};
export default homePage;
