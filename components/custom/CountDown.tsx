'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

type Props = {
  endDate?: string;
  className?: string;
};

export default function CountDown({ endDate, className }: Props) {
  const [time, setTime] = useState('');

  useEffect(() => {
    if (!endDate) {
      setTime('No end date provided');
      return;
    }

    const countDownDate = new Date(endDate).getTime();

    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(x);
        setTime('Time EXPIRED');
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
    }, 1000);

    return () => clearInterval(x); // cleanup interval on unmount
  }, [endDate]);

  return <div className={cn(className)}>{time}</div>;
}
