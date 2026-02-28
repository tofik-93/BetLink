import { cn } from "../../lib/utiils";

export function Button({
  className,
  variant = "default",
  size = "md",
  ...props
}: any) {
  const base = "rounded-lg font-medium transition";

  const variants: any = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border hover:bg-gray-100",
  };

  const sizes: any = {
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}