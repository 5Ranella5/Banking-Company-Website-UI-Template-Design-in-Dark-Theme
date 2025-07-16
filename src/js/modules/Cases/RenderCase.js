export const renderCase = (item, container) => {
  container.innerHTML = `
    <div class="sub-box__container">
      <div class="sub-box__enter">
        <h3 class="enter__title">${item.title}</h3>
        <p class="enter__text">${item.description}</p>
      </div>
      <ul class="interest">
        ${item.qualities
          .map(
            (q) => `
              <li class="interest__box">
                <p class="interest__num">${q.percent}%</p>
                <p class="interest__text">${q.name}</p>
              </li>`
          )
          .join('')}
      </ul>
      <button class="sub-box__btn sub-box__btn-1">Learn More</button>
    </div>
  `;
};
