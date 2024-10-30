import Link from "next/link";

interface CompanyNameProps {
  name: string;
  url: string;
}

export default function CompanyName({ name, url }: CompanyNameProps) {
  return (
    <Link href={url} target="_blank" style={{ textDecoration: "none" }}>
      <h3 className="hover:underline">{name}</h3>
    </Link>
  );
}
