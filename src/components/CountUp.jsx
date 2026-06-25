import { useEffect, useRef, useState } from 'react';

export default function CountUp({
  end = 100,
  duration = 1.6,
  suffix = '',
  prefix = '',
  decimals = 0,
}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      // Honor reduced motion
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setValue(end);
        return;
      }
      let startTime;
      let raf;
      const step = (ts) => {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(end * eased);
        if (progress < 1) {
          raf = requestAnimationFrame(step);
        } else {
          setValue(end);
        }
      };
      raf = requestAnimationFrame(step);
    };

    // Already in viewport on mount? Start immediately.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      start();
      return;
    }

    // Observer for elements below the fold
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              start();
              observer.disconnect();
            }
          });
        },
        { threshold: 0, rootMargin: '0px 0px 200px 0px' }
      );
      observer.observe(el);
    }

    // Safety net: if observer doesn't fire within 4s (e.g. printing, reduced motion bugs,
    // SSR-like screenshot tools), animate anyway. The user has either scrolled to it
    // (observer fired) or the page is being captured/printed (just show end values).
    const safety = setTimeout(() => start(), 4000);

    return () => {
      observer?.disconnect();
      clearTimeout(safety);
    };
  }, [end, duration]);

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
