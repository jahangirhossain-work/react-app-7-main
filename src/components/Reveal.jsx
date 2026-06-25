import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reveal — animates children in when they enter the viewport.
 * Includes a safety-net fallback that forces visibility after 4 seconds,
 * which handles cases where the IntersectionObserver doesn't fire reliably
 * (full-page screenshot tools, print mode, headless browsers, etc.)
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  y = 28,
  as = 'div',
  className = '',
  amount = 0.15,
  ...rest
}) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    // Safety net: if the element hasn't been animated within 4 seconds, show it.
    const safety = setTimeout(() => setForceShow(true), 4000);
    return () => clearTimeout(safety);
  }, []);

  if (reduced) {
    const Tag = as;
    return <Tag className={className} {...rest}>{children}</Tag>;
  }

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      animate={forceShow ? 'visible' : undefined}
      viewport={{ once: true, amount }}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * StaggerGroup — animates children in with a staggered delay.
 * Same safety-net fallback as Reveal.
 */
export function StaggerGroup({ children, stagger = 0.08, className = '', delay = 0, style }) {
  const reduced = useReducedMotion();
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    const safety = setTimeout(() => setForceShow(true), 4000);
    return () => clearTimeout(safety);
  }, []);

  if (reduced) return <div className={className} style={style}>{children}</div>;

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      animate={forceShow ? 'visible' : undefined}
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, y = 24, as = 'div', className = '', ...rest }) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  if (reduced) {
    const Tag = as;
    return <Tag className={className} {...rest}>{children}</Tag>;
  }
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
