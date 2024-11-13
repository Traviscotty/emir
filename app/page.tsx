import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Linke Seite */}
        <div className="bg-indigo-300 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-3xl font-bold text-black italic underline">
              doge
            </h1>
            <p className="text-black text-3xl italic pt-5 ">cute doge :)</p>
            <Image
              src="/hund.jpg" //
              alt="beschreibung des Bildes"
              width={300} //
              height={100} //
              className="mt-4 rounded-lg"
            />
          </div>
        </div>

        {/* Rechte Seite mit Bild */}
        <div className="bg-blue-500 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black italic underline">
              cat
            </h1>
            <p className="text-black text-x3 italic pt-5"></p>
            {/* Bild hinzufügen */}
            <Image
              src="/katze.jpg" //
              alt="Beschreibung des Bildes"
              width={300} //
              height={200} //
              className="mt-4 rounded-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
