export default async function Page({ params }: { params: Promise<{ propertyId: string }> }) {
   const propertyId = (await params).propertyId

   // FIXME: details
   return (

      <span>{propertyId}</span>
   )
}