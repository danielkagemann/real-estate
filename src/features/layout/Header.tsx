export const Header = () => {
   return (
      <header className="flex items-center justify-between pt-8 pb-8 bg-white">
         <img src="/images/logo.png" alt="Logo" />

         <nav className="space-x-4">
            <a href="/" className="text-gray-700 hover:text-orange-500 hover:underline">Home</a>
            <a href="/properties" className="text-gray-700 hover:text-orange-500 hover:underline">Listings</a>
            <a href="/aboutus" className="text-gray-700 hover:text-orange-500 hover:underline">About us</a>
         </nav>
      </header>
   );
}