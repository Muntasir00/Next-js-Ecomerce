import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center text-xs font-semibold w-fit capitalize cursor-pointer',
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
        success: '',
        danger:
          'bg-danger-700 border border-danger-500 hover:bg-danger-600 disabled: bg-danger-200 dark:text-danger-500 dark:hover:bg-danger-50 dark:border-danger-500 dark:disabled:bg-danger-200 dark:disabled:border-danger-200 px-2.5 py0.5',
        warning:
          'bg-warning-500 border border-warning-500 hover:bg-warning-600 disabled: bg-warning-200 dark:text-warning-500 dark:hover:bg-warning-50 dark:border-warning-500 dark:disabled:bg-danger-200 dark:disabled:border-danger-200 px-2.5 py0.5',
        outline: '',
        gray: '',
      },
      active: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      active: false,
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot='badge'
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
