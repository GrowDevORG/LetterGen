import Image from 'next/image';

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">LetterGen</h1>
        <div className="flex items-center gap-2">
          <span>Abhishek</span>
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kKnnZc9yx8ChOMe7T5rEy8sxmkuB91.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
