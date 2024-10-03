import { Mail, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="container mx-auto px-4 py-16" id="contact">
      <div className="w-full items-center justify-center flex flex-col">
        <h3 className="text-slate-500 text-xl mb-3">Interested?</h3>
        <h2 className="font-bold text-4xl mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row justify-center items-center border-2 border-gray-400 rounded-3xl w-full md:w-2/3">
          <div className="flex p-4">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:zaydantaq@gmail.com"
              className="flex items-center text-black text-xl hover:border-b-2 hover:border-black transition-all duration-200 pb-1"
            >
              <Mail className="mr-2 h-5 w-5 text-black" />
              zaydantaq@gmail.com
            </Link>
          </div>
          <div className="flex p-4">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/zaydanta/"
              className="flex items-center text-black text-xl hover:border-b-2 hover:border-black transition-all duration-200 pb-1"
            >
              <Linkedin className="mr-2 h-5 w-5 text-black" />
              LinkedIn
            </Link>
          </div>
          <div className="flex p-4">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://wa.me/6281286448794"
              className="flex items-center text-black text-xl hover:border-b-2 hover:border-black transition-all duration-200 pb-1"
            >
              <Phone className="mr-2 h-5 w-5 text-black" />
              +6281286448794
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
