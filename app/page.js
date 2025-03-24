import TopBar from '@/app/TopBar/page'
import Desktop from '@/app/Desktop/page'

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[url('/wallpaper/macos-monterey-stock-black-dark-mode-layers-5k-6016x6016-5889.jpg')] overflow-hidden relative">
      {/* TopBar */}
      <TopBar />
      
      {/* Desktop Area */}
      <div className="h-[calc(100vh-2rem)] mt-8 relative">
        {/* Add desktop content here */}
        <Desktop />
      
      </div>
    </main>
  );
}
