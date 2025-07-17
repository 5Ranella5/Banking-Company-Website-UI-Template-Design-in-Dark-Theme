import { renderCase } from './RenderCase';

export const clickLearnMore = (index, button, container) => {
  button.addEventListener('click', () => {
    renderCase(index, container);
  });
};
