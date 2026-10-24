import { motion } from 'framer-motion';

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 25,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
