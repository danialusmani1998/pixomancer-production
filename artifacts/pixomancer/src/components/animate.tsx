import { useInView } from "../hooks/useInView";

interface AnimProps {
  children: React.ReactNode;
  className?: string;
  type?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";
  delay?: 0 | 100 | 150 | 200 | 250 | 300 | 350 | 400 | 500;
  threshold?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Anim({
  children,
  className = "",
  type = "fade-up",
  delay = 0,
  threshold,
  as: Tag = "div",
}: AnimProps) {
  const { ref, inView } = useInView(threshold);
  const delayClass = delay ? `delay-${delay}` : "";
  const animClass = `anim-${type}`;

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${animClass} ${inView ? "in-view" : ""} ${delayClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
