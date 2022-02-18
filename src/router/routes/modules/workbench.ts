import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/c03',
  name: 'C03',
  component: LAYOUT,
  redirect: '/c03/ql-giao-viec',
  meta: {
    orderNo: 2,
    icon: 'ion:grid-outline',
    title: t('routes.workbench.main'),
  },
  children: [
    {
      path: 'ql-giao-viec',
      name: 'QlGiaoViec',
      meta: {
        icon: 'ion:git-compare-outline',
        title: t('routes.workbench.ql_giao_viec.main'),
      },
      children: [
        {
          path: 'ql-cong-viec',
          name: 'QlCongViec',
          redirect: '/c03/ql-giao-viec/ql-cong-viec/cong-viec',
          component: () => import('/@/views/workbench/ql-giao-viec/ql-cong-viec/index.vue'),
          meta: {
            title: t('routes.workbench.ql_giao_viec.ql_cong_viec.main'),
            icon: 'ion:document',
          },
          children: [
            {
              path: 'cong-viec',
              name: 'CongViec',
              component: () =>
                import('/@/views/workbench/ql-giao-viec/ql-cong-viec/cong-viec/index.vue'),
              meta: { title: t('routes.workbench.ql_giao_viec.ql_cong_viec.cong_viec') },
            },
            {
              path: 'danh-sach',
              name: 'DanhSachCongViec',
              component: () =>
                import('/@/views/workbench/ql-giao-viec/ql-cong-viec/danh-sach/index.vue'),
              meta: { title: t('routes.workbench.ql_giao_viec.ql_cong_viec.danh_sach') },
            },
          ],
        },
      ],
    },
    {
      path: 'ql-can-bo',
      name: 'QlCanBo',
      meta: {
        icon: 'ion:accessibility',
        title: t('routes.workbench.ql_can_bo.main'),
      },
      children: [
        {
          path: 'cong-viec',
          name: 'CongViec',
          component: () => import('/@/views/workbench/ql-can-bo/can-bo/index.vue'),
          meta: { title: t('routes.workbench.ql_can_bo.can_bo.danh_sach'), icon: 'ion:list' },
        },
      ],
    },
  ],
};

export default dashboard;
