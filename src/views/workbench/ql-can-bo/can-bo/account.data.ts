// import { getAllRoleList, isAccountExist } from '/@/api/demo/system';
import { BasicColumn, FormSchema } from '/@/components/Table';
import { useDonViStore } from '/@/store/modules/app-common/don-vi';
// import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'Tên cán bộ',
    dataIndex: 'fullName',
    width: 120,
  },
  {
    title: 'Đơn vị trực thuộc',
    dataIndex: 'orgCode',
    width: 240,
    customRender: ({ value }) => {
      const storeDonVi = useDonViStore();

      return storeDonVi.donViByKey(value).name;
    },
  },
  {
    title: 'Cấp bậc',
    dataIndex: 'capBac',
    width: 180,
  },
  {
    title: 'Ngày vào ngành',
    dataIndex: 'ngayVaoNganh',
  },
  {
    title: 'Chuyên môn kỹ thuột',
    dataIndex: 'chuyenMonKyThuat',
    width: 200,
  },
  {
    title: 'Trạng thái công tác',
    dataIndex: 'trangThaiCongTac',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: 'full name',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nickname',
    label: 'nick name',
    component: 'Input',
    colProps: { span: 8 },
  },
];

// export const accountFormSchema: FormSchema[] = [
//   {
//     field: 'account',
//     label: '用户名',
//     component: 'Input',
//     helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
//     rules: [
//       {
//         required: true,
//         message: '请输入用户名',
//       },
//       {
//         validator(_, value) {
//           return new Promise((resolve, reject) => {
//             isAccountExist(value)
//               .then(() => resolve())
//               .catch((err) => {
//                 reject(err.message || '验证失败');
//               });
//           });
//         },
//       },
//     ],
//   },
//   {
//     field: 'pwd',
//     label: '密码',
//     component: 'InputPassword',
//     required: true,
//     ifShow: false,
//   },
//   {
//     label: '角色',
//     field: 'role',
//     component: 'ApiSelect',
//     componentProps: {
//       api: getAllRoleList,
//       labelField: 'roleName',
//       valueField: 'roleValue',
//     },
//     required: true,
//   },
//   {
//     field: 'dept',
//     label: '所属部门',
//     component: 'TreeSelect',
//     componentProps: {
//       fieldNames: {
//         label: 'deptName',
//         key: 'id',
//         value: 'id',
//       },
//       getPopupContainer: () => document.body,
//     },
//     required: true,
//   },
//   {
//     field: 'nickname',
//     label: '昵称',
//     component: 'Input',
//     required: true,
//   },

//   {
//     label: '邮箱',
//     field: 'email',
//     component: 'Input',
//     required: true,
//   },

//   {
//     label: '备注',
//     field: 'remark',
//     component: 'InputTextArea',
//   },
// ];
