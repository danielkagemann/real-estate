import Link from "next/link";

export const Footer = () => (
   <footer className="bg-black text-white text-xs p-10">
      <div className="flex justify-between">
         <div>
            <strong>real estate</strong><br />
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