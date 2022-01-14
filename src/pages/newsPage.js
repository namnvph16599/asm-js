import newsLists from "../components/newsLists";
const newsPages = {
  render() {
    return `
        ${newsLists.render()}
        `;
  },
};
export default newsPages;
