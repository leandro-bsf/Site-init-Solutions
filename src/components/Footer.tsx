import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  // get the current time in UTC+1 time zone
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      date.setHours(date.getHours());
      setTime(
        date.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-between py-6">
      <div className="container">
            <div className="box">
              
            </div>
            <div className="box">
                <h3>Sobre</h3>
                <span>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia
                </span>
            </div>
            <div className="box">
                <ul className="menu-list">
                    <h3>Menu</h3>
                    <li> Serviços</li>
                    <li>Sobre</li>
                    <li>Portfólio</li>
                    <li> Contato</li>
                </ul>
            </div>
            <div className="box">
                <div className="social-media-container">
                    <h3>Contato</h3>
                    <span style={{ color: '#38b6ff' }}>  Francisco Beltrão - PR  </span> <br />
                    <span style={{ color: '#38b6ff' }}>  +554699170-4814</span>
                </div>
                <div className="social-media-container">
                    <h3>Redes Sociais</h3>
                    <div className="div-social">
                         <span>logos</span>
                    </div>
                </div>
            </div>
        </div>
        <Link
          href="mailto:solucaoinit@gmail.com"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"}>
            <MailIcon className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">solucaoinit@gmail.com</span>
          </Button>

        </Link>

        <Link href='wa.me/5546999850991' className="whtas" 
       >
          <Button  className="">
          <FaWhatsapp className="Bt_whtas"/>
          </Button>
        </Link>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
