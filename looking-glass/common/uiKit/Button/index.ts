import styled, { css } from 'styled-components';

import { ButtonProps } from './Button.types';

export const baseClasses = [
  'inline-flex',
  'items-center',
  'whitespace-nowrap',
  'justify-center',
  'disabled:cursor-not-allowed',
  'p-3',
  'pl-4',
  'pr-5',
  'rounded',
  'text-base',
  'font-bold',
  'border-transparent',
  'transition-colors',
  'duration-500',
  'focus:outline-none',
  'active:outline-none',
];

const primaryClasses = [
  ...baseClasses,
  'text-white',
  'bg-azure-blue',
  'hover:bg-science-blue',
  'disabled:bg-sky-blue',
];

const errorOutlinedClasses = [...baseClasses, 'text-red'];

const primaryStyles = css`
  &:active {
    background: radial-gradient(
        40.92% 157.29% at 50% 19.79%,
        rgba(40, 142, 242, 0.7) 0%,
        rgba(30, 132, 234, 0.7) 30.1%,
        rgba(6, 111, 215, 0.7) 100%
      ),
      #066fd7;
  }
`;

const primaryOutlinedStyles = css`
  box-shadow: 0 0 1px 1px azure-blue;
`;

const secondaryClasses = [
  ...baseClasses,
  'text-black',
  'bg-gray-15',
  'hover:bg-gray-30',
  'disabled:bg-gray-05',
  'disabled:text-gray-70',
];

const secondaryStyles = css`
  &:active {
    background: radial-gradient(
        51.08% 100% at 50% 18.75%,
        rgba(255, 255, 255, 0.6) 0%,
        rgba(255, 255, 255, 0.354545) 51.04%,
        rgba(255, 255, 255, 0) 100%
      ),
      #ebeef0;
  }
`;

const errorOutlinedStyles = css`
  border: 1px solid red;
`;

const errorClasses = [
  ...baseClasses,
  'text-white',
  'bg-red',
  'hover:opacity-90',
  'transition-all',
  'disabled:bg-sweet-pink',
];

const classesMap = {
  primary: primaryClasses,
  secondary: secondaryClasses,
  'error-outlined': errorOutlinedClasses,
  'primary-outlined': baseClasses,
  error: errorClasses,
};

const stylesMap = {
  primary: primaryStyles,
  secondary: secondaryStyles,
  'primary-outlined': primaryOutlinedStyles,
  'error-outlined': errorOutlinedStyles,
  error: null,
};

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button.attrs<ButtonProps>(({ className, variant = 'primary' }) => ({
  className: `${classesMap[variant].join(' ')} ${className} leading-[22px] min-h-[46px]`,
}))<ButtonProps>`
  ${({ variant = 'primary' }): ReturnType<typeof css> | null => stylesMap[variant]}
  & svg {
    display: inline-block;
  }
`;

export default Button;