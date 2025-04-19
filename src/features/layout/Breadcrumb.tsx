import Link from "next/link"
import { usePathname } from "next/navigation"
import { string } from "zod"

const BREADCRUMBLABEL: Record<string, string> = {
   properties: "Listings",
   compare: "Compare",
   details: "Details",
   aboutus: "About Us",
   contact: "Contact",
};

export const Breadcrumb = () => {
   const pathname = usePathname();
   const pathSegments = pathname.split("/").filter((item) => item !== "" && BREADCRUMBLABEL[item] !== undefined);

   if (pathSegments.length === 0) {
      return null
   }

   return (
      <nav aria-label="breadcrumb" className="text-xs my-4">
         <ul className="flex space-x-2">
            <li>
               <Link href="/" className="font-bold hover:underline">Home</Link>
            </li>
            {pathSegments.map((segment, index) => {

               const url = "/" + pathSegments.slice(0, index + 1).join("/");
               const label = BREADCRUMBLABEL[segment];

               return (
                  <li key={url} className="flex items-center">
                     <span className="mx-2">/</span>
                     {index === pathSegments.length - 1 ? (
                        <span className="text-gray-700">{label}</span>) :
                        (<Link href={url} className="font-bold hover:underline">
                           {label}
                        </Link>
                        )}
                  </li>
               );
            })}
         </ul>
      </nav>
   );
}