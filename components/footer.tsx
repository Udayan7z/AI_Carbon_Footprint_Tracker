import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-50 border-t border-green-100 text-gray-700">
      <div className="text-center py-4 text-sm">
        2025 Carbon Tracker | Built with 🌱 for sustainability
      </div>

      <div className="text-center mb-2 text-sm">Follow us on</div>

      <div className="flex justify-center gap-6 mb-4">
        <Link href="https://www.instagram.com" target="_blank">
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={20}
            height={20}
            className="hover:opacity-80"
          />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank">
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            width={20}
            height={20}
            className="hover:opacity-80"
          />
        </Link>
        <Link href="https://www.x.com" target="_blank">
          <Image
            src="/social-media.png"
            alt="X"
            width={20}
            height={20}
            className="hover:opacity-80"
          />
        </Link>
      </div>
    </footer>
  );
}
