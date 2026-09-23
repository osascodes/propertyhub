const LOCATIONS = ["Lekki","Ikoyi","Victoria Island","Ikeja","Ajah","Yaba","Chevron","Sangotedo"];

type Values = {
  title?: string;
  description?: string;
  price?: number;
  location?: string;
  address?: string;
  propertyType?: string;
  listingType?: string;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  amenities?: string[] | string;
  features?: string[] | string;
  featured?: boolean;
  status?: string;
};

export function PropertyForm({ action, values }: { action: (formData: FormData) => void; values?: Values }) {
  const amenities = Array.isArray(values?.amenities) ? values?.amenities.join(", ") : values?.amenities || "";
  const features = Array.isArray(values?.features) ? values?.features.join(", ") : values?.features || "";
  return (
    <form action={action} className="mt-8 grid gap-4 md:grid-cols-2">
      <label className="text-sm md:col-span-2">Title
        <input name="title" required defaultValue={values?.title} className="mt-1 w-full border border-line bg-transparent px-3 py-2" />
      </label>
      <label className="text-sm md:col-span-2">Description
        <textarea name="description" required rows={5} defaultValue={values?.description} className="mt-1 w-full border border-line bg-transparent px-3 py-2" />
      </label>
      <label className="text-sm">Price
        <input name="price" type="number" required defaultValue={values?.price} className="mt-1 w-full border border-line bg-transparent px-3 py-2" />
      </label>
      <label className="text-sm">Location
        <select name="location" defaultValue={values?.location} className="mt-1 w-full border border-line bg-transparent px-3 py-2">
          {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
        </select>
      </label>
      <label className="text-sm md:col-span-2">Address
        <input name="address" required defaultValue={values?.address} className="mt-1 w-full border border-line bg-transparent px-3 py-2" />
      </label>
      <label className="text-sm">Type
        <select name="propertyType" defaultValue={values?.propertyType} className="mt-1 w-full border border-line bg-transparent px-3 py-2">
          <option>Apartment</option><option>House</option><option>Duplex</option><option>Land</option><option>Commercial</option>
        </select>
      </label>
      <label className="text-sm">Listing
        <select name="listingType" defaultValue={values?.listingType || "SALE"} className="mt-1 w-full border border-line bg-transparent px-3 py-2">
          <option value="SALE">For Sale</option>
          <option value="RENT">For Rent</option>
        </select>
      </label>
      <label className="text-sm">Bedrooms
        <input name="bedrooms" type="number" defaultValue={values?.bedrooms ?? 0} className="mt-1 w-full border border-line bg-transparent px-3 py-2" />
      </label>
      <label className="text-sm">Bathrooms
        <input name="bathrooms" type="number" defaultValue={values?.bathrooms ?? 0} className="mt-1 w-full border border-line bg-transparent px-3 py-2" />
      </label>
      <label className="text-sm">Square feet
        <input name="squareFeet" type="number" defaultValue={values?.squareFeet ?? 0} className="mt-1 w-full border border-line bg-transparent px-3 py-2" />
      </label>
      <label className="text-sm">Status
        <select name="status" defaultValue={values?.status || "AVAILABLE"} className="mt-1 w-full border border-line bg-transparent px-3 py-2">
          <option value="AVAILABLE">Available</option>
          <option value="PENDING">Pending</option>
          <option value="SOLD">Sold</option>
          <option value="RENTED">Rented</option>
        </select>
      </label>
      <label className="text-sm md:col-span-2">Amenities (comma separated)
        <input name="amenities" defaultValue={amenities} className="mt-1 w-full border border-line bg-transparent px-3 py-2" />
      </label>
      <label className="text-sm md:col-span-2">Features (comma separated)
        <input name="features" defaultValue={features} className="mt-1 w-full border border-line bg-transparent px-3 py-2" />
      </label>
      <label className="text-sm md:col-span-2">Image URL
        <input name="imageUrl" placeholder="https://" className="mt-1 w-full border border-line bg-transparent px-3 py-2" />
      </label>
      <label className="flex items-center gap-2 text-sm md:col-span-2">
        <input type="checkbox" name="featured" defaultChecked={values?.featured} /> Featured
      </label>
      <button className="bg-ink px-5 py-3 text-sm text-paper">Save listing</button>
    </form>
  );
}
