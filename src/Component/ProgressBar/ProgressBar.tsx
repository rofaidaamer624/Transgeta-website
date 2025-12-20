import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  label: string;
  value: number;
};

export default function AnimatedProgressBar({ label, value }: Props) {
  const progress = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  // Animated color
//   const barColor = useTransform(progress, [0, 50, 80, 100], [
//     "#dc3545",
//     "#ffc107",
//     "#0d6efd",
//     "#198754",
//   ]);

  useEffect(() => {
    animate(progress, value, {
      duration: 1.2,
      ease: "easeOut",
    });

    // Subscribe to progress changes
    const unsubscribe = progress.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return unsubscribe;
  }, [value, progress]);

  return (
    <div className="mb-3">
      {/* Label + Percentage */}
      <div className="d-flex justify-content-between align-items-center mb-1">
        <span className="fw-medium">{label}</span>
        <span className="fw-semibold">{displayValue}%</span>
      </div>

      {/* Progress Bar */}
      <div className="progress" style={{ height: '8px' }}>
        <motion.div
          className="progress-bar"
          role="progressbar"
          style={{
            width: useTransform(progress, (v) => `${v}%`),
            backgroundColor: "1b90c6",
          }}
          aria-valuenow={displayValue}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}