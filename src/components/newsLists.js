import data from "../data";
const newsLists = {
  render() {
    return `
        <h3 class="font-bold text-[#272f54] text-xl my-4">TIN TỨC HỌC TẬP</h3>
        <div class="grid grid-cols-3 gap-3">
        ${data.map((post) => {
           return `
            <div class="border border-solid border-[#ccc] pt-3 px-5 py-5">
            <img src="${post.img}" alt="">
            <a href="" class="text-[#ca7802] font-bold text-lg">${post.title}</a>
            <p class="text-base">${post.desc}
            </p>
        </div>
            `;
          })
          .join("")}
           
        </div>
        `;
  },
};
export default newsLists;
