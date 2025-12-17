import React from "react";
import "./Button.css";

/**
 * Simple, accessible button component styled as an orange rounded pill.
 * You can set the visible text either by passing children or the `label` prop.
 * If `label` is provided it takes precedence over children.
 *
 * Props:
 * - label?: string - optional label to display (overrides children)
 * - children?: ReactNode - fallback content if label is not provided
 * - onClick?: () => void
 * - className?: string
 * - ...props forwarded to native button
 */
export default function Button({ label, children = "Opendoen", onClick, className = "", ...props }) {
  const content = label != null ? label : children;

  return (
    <button
      type="button"
      className={`kc-button ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
