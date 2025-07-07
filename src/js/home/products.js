import { root } from "./js/root.js";

root.btn_individuals.addEventListener("click", () => {
    root.product_list.classList.add("individuals__active");
    root.product_list.classList.remove("businesses__active");
})

root.btn_businesses.addEventListener("click", () => {
    root.product_list.classList.add("businesses__active");
    root.product_list.classList.remove("individuals__active");
})

//при клике менять класс, в котором будет разный ордер(порядок).