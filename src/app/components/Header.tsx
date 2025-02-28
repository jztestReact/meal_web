export function Header() {
  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat text-center py-16 h-80  "
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="bg-opacity-50 absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 ">
        <h1 className="text-5xl font-bold text-white h-12 ">Great Food</h1>
        <p className="text-white text-2xl mt-2">
          Delicious meals made with fresh ingredients.
        </p>
      </div>
    </header>
  );
}
