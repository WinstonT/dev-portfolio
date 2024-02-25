import React from "react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="pt-4">
      <div className="flex flex-row space-x-4">
        <Link href="https://www.linkedin.com/in/winston-tandi/">
          <CIcon
            icon={icon.cibLinkedin}
            height={32}
            width={32}
            className="fill-gray-700"
          />
        </Link>
        <Link href="https://www.github.com/WinstonT">
          <CIcon
            icon={icon.cibGithub}
            height={32}
            width={32}
            className="fill-gray-700"
          />
        </Link>
      </div>
    </div>
  );
}
