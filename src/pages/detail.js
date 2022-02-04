import { get } from "../api/post";

const detailPage = {
  async render(id) {
    const { data } = await get(id);
    console.log(data);
    return /*html*/ `
        <h1>${data.title}</h1>
        <img src="${data.img}"/>
        <p>${data.desc}</p>
        `;
  },
};
export default detailPage;
