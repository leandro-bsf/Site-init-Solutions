import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon } from "lucide-react";
import Image from 'next/image'

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
      <span className="flex flex-row items-center space-x-4">
          <p className="text-xs text-muted-foreground">
          Todos os direitos reservados  by{" "}
            <Link
              href=""
              target="_blank"
              passHref
              className="text-foreground transition hover:text-primary"
            >
              Init Solutions
            </Link>
          </p>
          <hr className="hidden h-6 border-l border-muted md:flex" />
          <span className="flex hidden flex-row items-center space-x-2 md:flex">
            <p className="text-xs text-muted-foreground">Local time:</p>
            <p className="text-sm font-semibold">{time} UTC+1</p>
          </span>
        </span>
        <Link
          href="mailto:solucaoinit@gmail.com"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"} >
            <MailIcon className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">solucaoinit@gmail.com</span>
          </Button>

        </Link>
        <Link
          href="mailto:solucaoinit@gmail.com"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"} >
          <Image src='/assets/tiktok-icon.png'width={25} height={25} alt="Picture of the author"/>
          </Button>

        </Link>

        <Link
          href="mailto:solucaoinit@gmail.com"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"} >
          <Image src='/assets/facebook-icon.png'width={25} height={25} alt="Picture of the author"  />
          
          </Button>

        </Link>
        <Link
          href="mailto:solucaoinit@gmail.com"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"} >
          <Image src='/assets/whatsapp.png' width={25} height={25}   alt="Picture of the author" />
          
          </Button>

        </Link>
   
   
       
       <Link href='https://wa.me/5546999850991' target="_blank" passHref> 
        <Image
           src='/assets/whatsapp.png'
            width={70}
           height={70}
      style={{
        position: 'fixed',
        right: '0',
        bottom: '0',
        margin: '10px', // opcional, para adicionar uma margem ao redor da imagem
        zIndex: '1000'}}
      alt="Picture of the author"
    />
   
        </Link>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
