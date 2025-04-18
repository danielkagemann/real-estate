import Link from "next/link";

export const Footer = () => (
   <footer className="bg-black text-white">
      <div className="flex w-5xl mx-auto justify-between pt-8 pb-8">
         <div>
            <strong>spanish properties</strong><br />
            Calle Velázquez, 42, 3º Izquierda<br />
            28001 Madrid<br />
            España<br />
         </div>

         <div className="flex flex-col">
            <Link className="hover:underline" href={"/"}>Home</Link>
            <Link className="hover:underline" href={"/about"}>About us</Link>
            <Link className="hover:underline" href={"/data-policy"}>Data policy</Link>
            <Link className="hover:underline" href={"/imprint"}>Imprint</Link>
         </div>
      </div>
   </footer>
);