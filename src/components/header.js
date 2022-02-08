const header = {
  render() {
    return /*html*/ `
        <header class="bg-gradient-to-r from-[#191e36] to-[#272f54]">
            <a href="/"><img src="./images/logo-trang.png" alt="" class="block py-5 mx-auto"></a>
            <nav class="h-14 bg-[#ffa41a] flex justify-between items-center">
                <ul class=" flex justify-around ">
                    <li class="inline-block"><a href="/" class="pl-12 text-base hover:underline text-white">Home</a>
                    </li>
                    <li class="inline-block"><a href="/about" class="pl-12 text-base hover:underline text-white">About</a>
                    </li>
                    <li class="inline-block"><a href="/news" class="pl-12 text-base hover:underline text-white">News</a></li>
                    <li class="inline-block"><a href="/news" class="pl-12 text-base hover:underline text-white">Contact</a>
                    </li>
                </ul>
                <form action="" class="pr-3">
                    <input class=" h-9 w-64" type="text">
                    <button class="w-32 bg-[#282f54] border border-[white] h-9 text-white text-lg">Tìm kiếm</button>
                </form>
            </nav>
        </header>
        `;
  },
};
export default header;
