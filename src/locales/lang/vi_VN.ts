import { genMessage } from '../helper';
import antdLocale from 'ant-design-vue/es/locale/vi_VN';
import momentLocale from 'dayjs/locale/*';

const modules = import.meta.globEager('./vi-VN/**/*.ts');
export default {
  message: {
    ...genMessage(modules, 'vi-VN'),
    antdLocale,
  },
  momentLocale,
  momentLocaleName: 'vi-vn',
};
