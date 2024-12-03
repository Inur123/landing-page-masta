import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, GraduationCap, Users, MapPin } from 'lucide-react'


export default function OrientationLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-black">
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-white/30 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <Image 
            src="/images/logo-masta24.png" 
            alt="Logo Mastamaru" 
            width={24} 
            height={24} 
            className="text-blue-600"
          />
         <span className="ml-2 text-lg font-bold text-yellow-600 hidden md:inline ">
  Mastamaru 2025
</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 text-black">
          <Link className="text-sm font-medium hover:text-yellow-600 transition-colors" href="#about">
            Tentang
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-600 transition-colors" href="#schedule">
            Jadwal
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-600 transition-colors" href="#gallery">
            Galeri
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-600 transition-colors" href="#contact">
            Kontak
          </Link>
        </nav>
      </header>
      
      <main className="flex-1">
        {/* Landing Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <Image
            src="/images/bg-landing-page.png"
            alt="Campus aerial view"
            width={1920}
            height={1080}
            className="absolute inset-0 object-cover w-full h-full"
            priority
          />
          <div className="container mx-auto  px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-md">
                  Selamat Datang di Masa Ta&apos;aruf Mahasiswa Baru 2024
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl dark:text-gray-200 drop-shadow">
                  Mulai perjalanan akademikmu dengan semangat dan kebersamaan. Mari bergabung dalam kegiatan mastamaru yang menyenangkan dan informatif!
                </p>
              </div>
              <div className="flex items-center space-x-4">
        {/* Tombol Daftar */}
        <a
          href="https://anisdawim.my.id"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-lg font-semibold text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
        >
          Daftar
        </a>
        {/* Tombol Panduan */}
        <a
          href="https://anisdawim.my.id"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-lg font-semibold text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
        >
          Panduan
        </a>
      </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto  px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-yellow-600">Tentang Mastamaru</h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-base xl:text-xl dark:text-black text-center mb-8">
              Mastamaru adalah langkah awal yang penting dalam perjalanan akademikmu. Ini adalah kesempatan untuk mengenal kampus, bertemu teman baru, dan mempersiapkan diri untuk kesuksesan akademik.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-900">Pertemanan Baru</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Bertemu dan berkenalan dengan teman-teman baru dari berbagai jurusan.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors">
                <CardHeader>
                  <MapPin className="h-8 w-8 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-900">Pengenalan Kampus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Jelajahi fasilitas kampus dan kenali lingkungan barumu.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors">
                <CardHeader>
                  <GraduationCap className="h-8 w-8 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-900">Persiapan Akademik</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Dapatkan tips dan strategi untuk memulai perkuliahan dengan baik.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container mx-auto  px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-yellow-600">Jadwal Kegiatan</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Technical Meeting
                  </CardTitle>
                  <CardDescription className='text-blue-600'>
                    <CalendarDays className="h-4 w-4 inline-block mr-1 text-blue-600" />
                    Senin, 1 September 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Upacara Pembukaan</li>
                    <li>Pengenalan Kampus</li>
                    <li>Sesi Interaktif</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Hari 1: Pembukaan</CardTitle>
                  <CardDescription className='text-blue-600'>
                    <CalendarDays className="h-4 w-4 inline-block mr-1 text-blue-600" />
                    Senin, 1 September 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Upacara Pembukaan</li>
                    <li>Pengenalan Kampus</li>
                    <li>Sesi Interaktif</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Hari 2: Akademik</CardTitle>
                  <CardDescription className='text-blue-600'>
                    <CalendarDays className="h-4 w-4 inline-block mr-1 text-blue-600" />
                    Selasa, 2 September 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Pengenalan Jurusan</li>
                    <li>Workshop Akademik</li>
                    <li>Simulasi Perkuliahan</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Hari 3: Kegiatan Mahasiswa</CardTitle>
                  <CardDescription className='text-blue-600'>
                    <CalendarDays className="h-4 w-4 inline-block mr-1 text-blue-600" />
                    Rabu, 3 September 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Pameran UKM</li>
                    <li>Kompetisi Antar Kelompok</li>
                    <li>Malam Keakraban</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Hari 3: Kegiatan Mahasiswa</CardTitle>
                  <CardDescription className='text-blue-600'>
                    <CalendarDays className="h-4 w-4 inline-block mr-1 text-blue-600" />
                    Rabu, 3 September 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Pameran UKM</li>
                    <li>Kompetisi Antar Kelompok</li>
                    <li>Malam Keakraban</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Hari 3: Kegiatan Mahasiswa</CardTitle>
                  <CardDescription className='text-blue-600'>
                    <CalendarDays className="h-4 w-4 inline-block mr-1 text-blue-600" />
                    Rabu, 3 September 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Pameran UKM</li>
                    <li>Kompetisi Antar Kelompok</li>
                    <li>Malam Keakraban</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-yellow-600">Galeri Kegiatan</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Image src="/images/bg-landing-page.png?height=300&width=400" alt="Orientation activity 1" width={400} height={300} className="rounded-lg object-cover w-full h-full" />
              <Image src="/images/bg-landing-page.png?height=300&width=400" alt="Orientation activity 2" width={400} height={300} className="rounded-lg object-cover w-full h-full" />
              <Image src="/images/bg-landing-page.png?height=300&width=400" alt="Orientation activity 3" width={400} height={300} className="rounded-lg object-cover w-full h-full" />
              <Image src="/images/bg-landing-page.png?height=300&width=400" alt="Orientation activity 4" width={400} height={300} className="rounded-lg object-cover w-full h-full" />
              <Image src="/images/bg-landing-page.png?height=300&width=400" alt="Orientation activity 5" width={400} height={300} className="rounded-lg object-cover w-full h-full" />
              <Image src="/images/bg-landing-page.png?height=300&width=400" alt="Orientation activity 6" width={400} height={300} className="rounded-lg object-cover w-full h-full" />
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container mx-auto  px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-yellow-600">Kontak</h2>
            <p className="text-center text-gray-600 mb-6">Jika Anda memiliki pertanyaan lebih lanjut, hubungi kami melalui detail kontak di bawah ini.</p>
            <div className="text-center">
              <a href="mailto:info@mastamaru.com" className="text-blue-600 hover:text-blue-700">info@mastamaru.com</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-yellow-600 text-white text-center py-4">
        <p>&copy; 2024 Mastamaru. All rights reserved.</p>
      </footer>
    </div>
  );
}
