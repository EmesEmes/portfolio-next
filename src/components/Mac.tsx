import React from "react";
;
import Link from "next/link";
import { MacbookScroll } from "./ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-gray-900">
      <MacbookScroll
        title={
          <span>
            Joy for Code. 
          </span>
        }
      />
    </div>
  );
}

