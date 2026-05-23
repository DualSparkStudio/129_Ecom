import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';

function formatDisplay(count, value) {
  if (value >= 1000000 && count >= 1000000) {
    return `${Math.floor(count / 1000000)}M`;
  }
  if (value >= 1000 && count >= 1000) {
    return `${Math.floor(count / 1000)}K`;
  }
  return count.toLocaleString();
}

export function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const end = value;
    const startTime = performance.now();
    const ms = duration * 1000;

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / ms, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(end);
    };

    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {formatDisplay(count, value)}
      {suffix}
    </motion.span>
  );
}
