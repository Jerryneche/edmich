export default function Button({ variant = "primary", className = "", children, ...props }) {
  const base = "btn " + (variant === "primary" ? "btn-primary" : "btn-outline");
  return (
    <a {...props} className={`${base} ${className}`}>
      {children}
    </a>
  );
}
