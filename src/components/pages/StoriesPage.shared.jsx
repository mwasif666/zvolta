import { useMemo, useState } from "react";
import { SmartLink } from "../SmartLink";
import { blogPosts } from "../../data/pages/blogs/blogPosts";
function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
export { ArrowIcon, SmartLink, blogPosts, useMemo, useState };
