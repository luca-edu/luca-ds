import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CardStudentClass } from '../components/CardStudentClass';

const decorativeElement = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="130"
    height="133"
    viewBox="0 0 130 133"
    fill="none"
  >
    <g clipPath="url(#clip0_3069_106025)">
      <path
        d="M128.021 21.9683C152.902 46.8501 156.652 84.9134 139.215 113.751C136.158 118.852 132.408 123.633 128.021 128.039C113.508 142.552 94.5324 149.846 75.5195 149.996C71.882 150.033 68.2256 149.79 64.6068 149.283C60.838 148.758 57.0879 147.933 53.4316 146.846C44.7876 144.258 36.5187 140.096 29.0936 134.321C26.5875 132.38 24.2076 130.282 21.9684 128.039L21.8559 127.927C13.9849 120.059 7.98092 110.524 4.2868 100.026C2.55471 95.1613 1.34169 90.127 0.667979 85.0071C-2.33208 62.6192 4.77431 39.1624 21.9684 21.9683C30.5456 13.3633 41.0955 6.98447 52.7003 3.38671C78.4446 -4.61971 107.639 1.56792 128.021 21.9683Z"
        fill="url(#paint0_linear_3069_106025)"
      />
      <path
        d="M128.021 21.9683C152.902 46.8501 156.652 84.9134 139.215 113.751C137.733 113.133 135.952 113.433 134.752 114.633L126.708 122.677C125.114 124.27 122.508 124.27 120.914 122.677C120.53 122.296 120.224 121.844 120.015 121.345C119.806 120.846 119.697 120.311 119.695 119.77C119.695 118.739 120.089 117.67 120.895 116.864L146.302 91.4573C147.296 90.4635 147.802 89.151 147.802 87.8572C147.784 86.5447 147.296 85.2509 146.302 84.2571C145.344 83.3024 144.046 82.7664 142.693 82.7664C141.34 82.7664 140.042 83.3024 139.083 84.2571L118.383 104.508C116.789 106.101 114.164 106.101 112.57 104.508C111.764 103.701 111.37 102.651 111.389 101.601C111.37 100.551 111.783 99.4824 112.57 98.6949L123.052 88.2135C124.121 87.1447 124.646 85.7572 124.646 84.3696C124.646 82.9821 124.102 81.5946 123.052 80.5258C122.548 80.0212 121.95 79.6212 121.291 79.3489C120.632 79.0766 119.926 78.9373 119.213 78.939C118.501 78.9408 117.795 79.0835 117.138 79.3591C116.48 79.6346 115.884 80.0375 115.383 80.5445L85.476 110.433C83.8822 112.026 81.2759 112.026 79.6634 110.414C78.8571 109.608 78.4446 108.558 78.4633 107.508C78.4446 106.458 78.8571 105.408 79.6634 104.601L121.589 62.6754C122.527 61.7379 122.996 60.5004 122.996 59.2629C123.014 58.0253 122.527 56.8066 121.589 55.8503C121.144 55.4003 120.614 55.043 120.03 54.7992C119.446 54.5554 118.819 54.4298 118.186 54.4298C117.553 54.4298 116.926 54.5554 116.342 54.7992C115.758 55.043 115.228 55.4003 114.783 55.8503L88.2698 82.4008C86.676 83.9946 84.0697 83.9946 82.4572 82.3821C81.6509 81.5758 81.2759 80.5258 81.2571 79.4758C81.2571 78.407 81.6509 77.3757 82.4572 76.5695L90.2761 68.7505C91.2136 67.813 91.6824 66.5755 91.6824 65.338C91.679 64.0601 91.174 62.8347 90.2761 61.9254C88.3823 60.0316 85.3447 60.0504 83.4509 61.9442L63.238 82.1758C61.6255 83.7884 59.0192 83.7696 57.4254 82.1758C57.046 81.7937 56.7462 81.34 56.5434 80.8411C56.3406 80.3422 56.2389 79.808 56.2441 79.2695C56.2254 78.2195 56.6379 77.1695 57.4442 76.3632L90.4636 43.3438C91.4011 42.4063 91.8699 41.1687 91.8699 39.9312C91.8886 38.6937 91.4011 37.4562 90.4636 36.5186C90.0184 36.0686 89.4884 35.7114 88.9043 35.4675C88.3201 35.2237 87.6934 35.0982 87.0604 35.0982C86.4274 35.0982 85.8007 35.2237 85.2165 35.4675C84.6324 35.7114 84.1024 36.0686 83.6572 36.5186L64.3818 55.794C63.7082 56.4673 62.8501 56.9255 61.9159 57.1106C60.9818 57.2958 60.0137 57.1996 59.1343 56.8341C58.2549 56.4687 57.5037 55.8505 56.9758 55.0579C56.448 54.2652 56.1672 53.3338 56.1691 52.3815C56.1691 51.1627 56.6379 49.9252 57.5754 48.9689L63.7068 42.8375C64.6443 41.9 65.1506 40.6437 65.1318 39.4062C65.1318 38.1499 64.6631 36.9124 63.7068 35.9561C63.2559 35.505 62.7203 35.1474 62.1308 34.904C61.5412 34.6606 60.9094 34.5362 60.2716 34.5379C59.6337 34.5397 59.0026 34.6675 58.4144 34.9141C57.8261 35.1608 57.2925 35.5212 56.8441 35.9749L46.3064 46.5126C45.3819 47.4311 44.1315 47.9466 42.8282 47.9466C41.525 47.9466 40.2746 47.4311 39.35 46.5126C38.375 45.5376 37.9062 44.3 37.925 43.0438C37.9062 41.7875 38.3938 40.5312 39.35 39.575L50.469 28.456C51.2565 27.6685 51.6503 26.6372 51.6503 25.5872C51.6503 24.5371 51.2565 23.5059 50.469 22.7371C48.8752 21.1433 46.3252 21.1621 44.7501 22.7371L40.8688 26.6184C40.1129 27.3743 39.0877 27.799 38.0188 27.799C36.9498 27.799 35.9246 27.3743 35.1687 26.6184C34.4128 25.8626 33.9882 24.8374 33.9882 23.7684C33.9882 22.6994 34.4128 21.6742 35.1687 20.9183L52.7003 3.38671C78.4446 -4.61971 107.639 1.56792 128.021 21.9683Z"
        fill="#FDE6E8"
      />
      <path
        d="M48.4064 65.5258C50.7053 65.5258 52.569 63.6621 52.569 61.3632C52.569 59.0643 50.7053 57.2006 48.4064 57.2006C46.1074 57.2006 44.2438 59.0643 44.2438 61.3632C44.2438 63.6621 46.1074 65.5258 48.4064 65.5258Z"
        fill="#FDE6E8"
      />
      <path
        d="M70.3258 117.951C72.6248 117.951 74.4884 116.088 74.4884 113.789C74.4884 111.49 72.6248 109.626 70.3258 109.626C68.0269 109.626 66.1632 111.49 66.1632 113.789C66.1632 116.088 68.0269 117.951 70.3258 117.951Z"
        fill="#FDE6E8"
      />
      <path
        d="M106.383 129.39C108.681 129.39 110.545 127.526 110.545 125.227C110.545 122.928 108.681 121.065 106.383 121.065C104.084 121.065 102.22 122.928 102.22 125.227C102.22 127.526 104.084 129.39 106.383 129.39Z"
        fill="#FDE6E8"
      />
      <path
        d="M3.42422 93.651C3.08671 93.9885 2.8242 94.3635 2.6367 94.7761C1.75543 91.551 1.09917 88.2884 0.667908 85.0071L1.60543 84.0696C2.39294 83.2821 3.42422 82.8883 4.45549 82.8883C5.48676 82.8696 6.51803 83.2821 7.30555 84.0696C8.88058 85.6446 8.88058 88.1947 7.30555 89.7697L3.42422 93.651ZM36.4999 113.283L21.8558 127.927C13.9849 120.059 7.98085 110.524 4.28673 100.026C5.05725 100.461 5.9485 100.631 6.82504 100.513C7.70159 100.395 8.5155 99.9932 9.14308 99.3699L20.2621 88.2509C21.2371 87.2759 22.4746 86.8071 23.7309 86.8259C24.9872 86.8071 26.2434 87.2946 27.1997 88.2509C28.1182 89.1755 28.6338 90.4258 28.6338 91.7291C28.6338 93.0324 28.1182 94.2827 27.1997 95.2073L16.662 105.745C15.7504 106.653 15.2364 107.886 15.2329 109.172C15.2293 110.459 15.7366 111.695 16.6432 112.608C17.5995 113.564 18.8558 114.033 20.0933 114.033C21.3308 114.051 22.5871 113.545 23.5246 112.608L29.656 106.476C30.5935 105.539 31.8311 105.07 33.0686 105.07C34.2874 105.07 35.5249 105.539 36.4811 106.476C38.3749 108.351 38.3749 111.408 36.4999 113.283ZM63.088 137.171L53.4315 146.827C44.7876 144.24 36.5187 140.077 29.0935 134.302L57.0691 106.326C57.8753 105.52 58.9254 105.108 59.9754 105.126C61.0442 105.126 62.0942 105.52 62.8817 106.308C64.4755 107.901 64.4942 110.508 62.8817 112.12L42.65 132.371C41.7425 133.273 41.2307 134.499 41.2272 135.779C41.2237 137.059 41.7288 138.288 42.6313 139.196C43.5688 140.133 44.8063 140.602 46.0439 140.602C47.3001 140.602 48.5189 140.133 49.4564 139.196L57.2753 131.377C58.0816 130.571 59.1129 130.177 60.1816 130.177C61.2317 130.196 62.2817 130.571 63.088 131.377C64.6817 132.971 64.7005 135.577 63.088 137.171ZM91.1198 128.583C92.7323 130.196 92.7323 132.783 91.1385 134.396L75.5195 149.996C71.8819 150.033 68.2256 149.79 64.6067 149.283L85.3072 128.583C86.1134 127.777 87.1635 127.364 88.2135 127.383C89.2635 127.364 90.3135 127.777 91.1198 128.583Z"
        fill="#FDE6E8"
      />
      <path
        d="M42.0688 101.489C44.3678 101.489 46.2314 99.6251 46.2314 97.3262C46.2314 95.0272 44.3678 93.1636 42.0688 93.1636C39.7699 93.1636 37.9062 95.0272 37.9062 97.3262C37.9062 99.6251 39.7699 101.489 42.0688 101.489Z"
        fill="#FDE6E8"
      />
      <path
        d="M94.4947 123.389C96.7937 123.389 98.6573 121.525 98.6573 119.226C98.6573 116.928 96.7937 115.064 94.4947 115.064C92.1958 115.064 90.3322 116.928 90.3322 119.226C90.3322 121.525 92.1958 123.389 94.4947 123.389Z"
        fill="#FDE6E8"
      />
      <path
        opacity="0.1"
        d="M149.134 63.5945C151.759 80.6761 148.459 98.5077 139.233 113.752C136.177 118.852 132.427 123.633 128.039 128.04C113.527 142.552 94.5513 149.846 75.5384 149.996C71.9008 150.034 68.2445 149.79 64.6257 149.284C60.8568 148.759 57.1067 147.934 53.4504 146.846C44.8065 144.259 36.5376 140.096 29.1124 134.321C26.6063 132.381 24.2264 130.283 21.9873 128.04L21.8748 127.927C14.0038 120.059 7.99977 110.525 4.30566 100.026C2.57356 95.1616 1.36055 90.1273 0.686833 85.0074C-0.269437 77.901 -0.194435 70.6821 0.874337 63.6132C1.3056 66.4445 1.88686 69.2758 2.65562 72.0696C3.14313 73.8322 3.6869 75.5947 4.30566 77.3197C7.99977 87.8178 14.0038 97.3525 21.8748 105.22L21.9873 105.333C24.2561 107.602 26.6374 109.702 29.1124 111.614C36.5376 117.389 44.8065 121.552 53.4504 124.139C57.1067 125.227 60.8568 126.052 64.6257 126.577C68.2445 127.083 71.9008 127.327 75.5384 127.29C94.5513 127.14 113.527 119.846 128.039 105.333C132.342 101.047 136.102 96.2483 139.233 91.045C144.39 82.4949 147.69 73.1572 149.134 63.5945Z"
        fill="#A4AAF2"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_3069_106025"
        x1="74.9911"
        y1="0"
        x2="74.9911"
        y2="150"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC919D" />
        <stop offset="1" stopColor="#FC919D" stopOpacity="0.8" />
      </linearGradient>
      <clipPath id="clip0_3069_106025">
        <rect width="150" height="150" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const meta = {
  title: 'Components/CardStudentClass',
  component: CardStudentClass,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'],
      description: 'Color variant (uses tailwind colors)',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the card (responsive)',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'disabled', 'empty'],
      description: 'State of the card',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card is clickable',
    },
    decorativeElement: {
      control: 'boolean',
      description: 'Whether to show the decorative element',
      table: {
        defaultValue: { summary: '<decorativeElement />' },
        value: decorativeElement,
      },
    },
  },
} satisfies Meta<typeof CardStudentClass>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultSubjectIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
    <rect width="56" height="56" rx="10" fill="#8DCE4F" />
    <path
      d="M34.0159 20.3763C33.5482 20.7058 33.4348 21.3524 33.7643 21.8201C34.0939 22.2878 34.7405 22.4012 35.2082 22.0717L39.6089 18.9625C40.0766 18.633 40.19 17.9864 39.8604 17.5187C39.5309 17.051 38.8843 16.9376 38.4166 17.2671L34.0159 20.3763ZM28.9704 38.4254C29.0359 38.9941 29.5497 39.4033 30.1184 39.3377C30.6871 39.2722 31.0963 38.7584 31.0308 38.1898L30.4036 32.8448C30.3381 32.2761 29.8243 31.8669 29.2556 31.9324C28.6869 31.998 28.2777 32.5118 28.3432 33.0804L28.9704 38.4254ZM16.1015 29.0979C15.5664 29.2998 15.2954 29.8969 15.4973 30.4337C15.6993 30.9687 16.2963 31.2398 16.8331 31.0378L21.8733 29.1386C22.4084 28.9367 22.6794 28.3396 22.4775 27.8028C22.2755 27.2678 21.6785 26.9968 21.1417 27.1987L16.1015 29.0979ZM22.093 21.5473C22.5324 21.9123 23.1843 21.852 23.5493 21.4127C23.9142 20.9733 23.854 20.3214 23.4146 19.9564L19.2744 16.5177C18.835 16.1528 18.1831 16.213 17.8181 16.6524C17.4532 17.0917 17.5134 17.7437 17.9528 18.1086L22.093 21.5473Z"
      fill="#DAEAEF"
    />
    <path
      d="M33.8937 38.6716C34.776 39.5539 35.3216 40.7727 35.3216 42.1192C35.3216 43.4656 34.776 44.6844 33.8937 45.5667C33.0115 46.4489 31.7926 46.9946 30.4462 46.9946C29.0998 46.9946 27.8809 46.4489 26.9987 45.5667C26.1164 44.6844 25.5707 43.4656 25.5707 42.1192C25.5707 40.7727 26.1164 39.5539 26.9987 38.6716C27.8809 37.7894 29.0998 37.2437 30.4462 37.2437C31.7926 37.2437 33.0115 37.7894 33.8937 38.6716Z"
      fill="#3843D0"
    />
    <path
      d="M19.0991 11.4279C19.9813 12.3102 20.527 13.529 20.527 14.8755C20.527 16.2219 19.9813 17.4407 19.0991 18.323C18.2168 19.2052 16.9979 19.7509 15.6515 19.7509C14.3051 19.7509 13.0862 19.2052 12.204 18.323C11.3217 17.4407 10.7761 16.2219 10.7761 14.8755C10.7761 13.529 11.3217 12.3102 12.204 11.4279C13.0862 10.5457 14.3051 10 15.6515 10C16.9979 10 18.2168 10.5457 19.0991 11.4279Z"
      fill="#0EA5E9"
    />
    <path
      d="M45.5721 12.4235C46.4543 13.3058 47 14.5246 47 15.871C47 17.2175 46.4543 18.4363 45.5721 19.3186C44.6898 20.2008 43.471 20.7465 42.1245 20.7465C40.7781 20.7465 39.5593 20.2008 38.677 19.3186C37.7947 18.4363 37.2491 17.2175 37.2491 15.871C37.2491 14.5246 37.7947 13.3058 38.677 12.4235C39.5593 11.5412 40.7781 10.9956 42.1245 10.9956C43.471 10.9956 44.6898 11.5412 45.5721 12.4235Z"
      fill="#FCE25C"
    />
    <path
      d="M34.5283 19.5135C36.0695 21.0548 37.0227 23.1843 37.0227 25.5352C37.0227 27.8861 36.0695 30.0156 34.5283 31.5569C32.987 33.0982 30.8575 34.0513 28.5066 34.0513C26.1557 34.0513 24.0262 33.0982 22.4849 31.5569C20.9436 30.0156 19.9905 27.8861 19.9905 25.5352C19.9905 23.1843 20.9436 21.0548 22.4849 19.5135C24.0262 17.9722 26.1557 17.0191 28.5066 17.0191C30.8575 17.0191 32.987 17.9722 34.5283 19.5135Z"
      fill="#FC8086"
    />
    <path
      d="M16.323 27.964C17.2052 28.8463 17.7509 30.0652 17.7509 31.4116C17.7509 32.758 17.2052 33.9769 16.323 34.8591C15.4407 35.7414 14.2219 36.287 12.8755 36.287C11.529 36.287 10.3102 35.7414 9.42791 34.8591C8.54565 33.9769 8 32.758 8 31.4116C8 30.0652 8.54565 28.8463 9.42791 27.964C10.3102 27.0818 11.529 26.5361 12.8755 26.5361C14.2219 26.5361 15.4407 27.0818 16.323 27.964Z"
      fill="#FCE25C"
    />
  </svg>
);

export const Default: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classNameLabel: 'Español',
    missionStatuses: [
      { type: 'completed', count: 0, label: 'Sin misiones pendientes' },
      { type: 'to-review', count: 2, label: 'misiones por repasar' },
      { type: 'pending', count: 2, label: 'misiones pendientes' },
    ],
    averageScore: 5.5,
    maxScore: 10,
    averageLabel: 'Promedio',
    decorativeElement: decorativeElement,
  },
};

export const WithHighAverage: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classNameLabel: 'Matemáticas',
    missionStatuses: [
      { type: 'completed', count: 0, label: 'Sin misiones pendientes' },
      { type: 'to-review', count: 0, label: 'misiones por repasar' },
      { type: 'pending', count: 0, label: 'misiones pendientes' },
    ],
    averageScore: 8.5,
    maxScore: 10,
    averageLabel: 'Promedio',
  },
};

export const AllMissionsCompleted: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classNameLabel: 'Ciencias',
    missionStatuses: [{ type: 'completed', count: 0, label: 'Sin misiones pendientes' }],
    averageScore: 9,
    maxScore: 10,
    averageLabel: 'Promedio',
  },
};

export const Hover: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classNameLabel: 'Español',
    state: 'hover',
    missionStatuses: [
      { type: 'completed', count: 0, label: 'Sin misiones pendientes' },
      { type: 'to-review', count: 2, label: 'misiones por repasar' },
      { type: 'pending', count: 2, label: 'misiones pendientes' },
    ],
    averageScore: 5.5,
    maxScore: 10,
    averageLabel: 'Promedio',
  },
};

export const Disabled: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classNameLabel: 'Español',
    state: 'disabled',
    missionStatuses: [
      { type: 'completed', count: 0, label: 'Sin misiones pendientes' },
      { type: 'to-review', count: 2, label: 'misiones por repasar' },
      { type: 'pending', count: 2, label: 'misiones pendientes' },
    ],
    averageScore: 5.5,
    maxScore: 10,
    averageLabel: 'Promedio',
  },
};

export const Empty: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classNameLabel: 'Español',
    state: 'empty',
  },
};

export const AllVariants: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classNameLabel: 'Español',
    missionStatuses: [
      { type: 'completed', count: 0, label: 'Sin misiones pendientes' },
      { type: 'to-review', count: 2, label: 'misiones por repasar' },
      { type: 'pending', count: 2, label: 'misiones pendientes' },
    ],
    averageScore: 5.5,
    maxScore: 10,
    averageLabel: 'Promedio',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-wrap luca-gap-4 luca-p-8 luca-w-full luca-max-w-6xl">
      {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
        (variant) => (
          <div key={variant} className="luca-flex luca-flex-col luca-gap-2">
            <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </h3>
            <CardStudentClass {...args} variant={variant} className="luca-w-[280px]" />
          </div>
        )
      )}
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classNameLabel: 'Español',
    missionStatuses: [
      { type: 'completed', count: 0, label: 'Sin misiones pendientes' },
      { type: 'to-review', count: 2, label: 'misiones por repasar' },
      { type: 'pending', count: 2, label: 'misiones pendientes' },
    ],
    averageScore: 5.5,
    maxScore: 10,
    averageLabel: 'Promedio',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="luca-flex luca-flex-col luca-gap-2">
          <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
            {size.toUpperCase()}
          </h3>
          <div className="luca-w-full xs:luca-max-w-[220px] sml:luca-max-w-[260px] md:luca-max-w-[320px]">
            <CardStudentClass {...args} size={size} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Responsive: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classNameLabel: 'Español',
    missionStatuses: [
      { type: 'completed', count: 0, label: 'Sin misiones pendientes' },
      { type: 'to-review', count: 2, label: 'misiones por repasar' },
      { type: 'pending', count: 2, label: 'misiones pendientes' },
    ],
    averageScore: 6.5,
    maxScore: 10,
    averageLabel: 'Promedio',
    size: 'md',
  },
  render: (args) => (
    <div className="luca-p-8 luca-w-full luca-max-w-2xl luca-border luca-border-neutral-200 luca-rounded-lg luca-bg-neutral-50">
      <p className="luca-text-sm luca-text-neutral-600 luca-mb-4">
        Redimensiona la ventana para ver el comportamiento responsive del card.
      </p>
      <div className="luca-grid luca-grid-cols-1 sml:luca-grid-cols-2 luca-gap-4">
        <CardStudentClass {...args} />
        <CardStudentClass {...args} classNameLabel="Matemáticas" averageScore={8} />
      </div>
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classNameLabel: 'Español',
    clickable: true,
    onClick: () => {
      console.log('Card clicked!');
    },
    missionStatuses: [
      { type: 'completed', count: 0, label: 'Sin misiones pendientes' },
      { type: 'to-review', count: 2, label: 'misiones por repasar' },
      { type: 'pending', count: 2, label: 'misiones pendientes' },
    ],
    averageScore: 5.5,
    maxScore: 10,
    averageLabel: 'Promedio',
  },
};

export const MinimalContent: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classNameLabel: 'Historia',
    averageScore: 7,
    maxScore: 10,
    averageLabel: 'Promedio',
  },
};

export const OnlyMissions: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classNameLabel: 'Educación Física',
    missionStatuses: [
      { type: 'pending', count: 5, label: 'misiones pendientes' },
      { type: 'to-review', count: 1, label: 'misiones por repasar' },
    ],
  },
};

export const CustomMaxScore: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classNameLabel: 'Artes',
    missionStatuses: [{ type: 'completed', count: 0, label: 'Sin misiones pendientes' }],
    averageScore: 85,
    maxScore: 100,
    averageLabel: 'Calificación',
  },
};
