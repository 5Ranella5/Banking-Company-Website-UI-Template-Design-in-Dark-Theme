import { getFaq } from './Careers/getFaq.js';
import { paste } from './Careers/paste.js';
import { ref } from '../components/settings.js';
import { hideButtonsIfNotAuthorized } from './Careers/hideButtonsIfNotAuthorized.js';
import { editeFaqBase } from './Careers/editeFaqBase.js';
import { createFaqBase } from './Careers/createFaqBase.js';
import { deletingFaqBase } from './Careers/deletingFaqBase.js';

// faqs

export const initFaqs = async () => {
  if (ref.page === 1) {
    const data = await getFaq();
    data.forEach(paste);
    hideButtonsIfNotAuthorized();
  }
  ref.loadBtn.addEventListener('click', async () => {
    const data = await getFaq();
    data.forEach(paste);
    hideButtonsIfNotAuthorized();
  });
  // create
  createFaqBase();
  // delete
  deletingFaqBase();
  // edite
  editeFaqBase();
};
