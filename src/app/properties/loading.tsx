export default function Loading() {
  return (
    <div className="mx-auto max-w-site px-5 py-14">
      <div className="h-10 w-48 bg-sand" />
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-[4/3] bg-sand" />
        ))}
      </div>
    </div>
  );
}
