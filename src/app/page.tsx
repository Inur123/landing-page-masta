"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, GraduationCap, Users, MapPin } from "lucide-react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function OrientationLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-black">
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-white/30 sticky top-0 z-50 justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/images/logo-masta24.png"
            alt="Logo Mastamaru"
            width={50}
            height={50}
            className="text-blue-600"
          />
          <span className="ml-2 text-lg font-bold text-yellow-500 hidden md:inline ">
            Mastamaru 2025
          </span>
        </Link>
        <div>
          <button className="block lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoClose className="text-black w-10 h-10" />
            ) : (
              <RxHamburgerMenu className="text-black w-10 h-10" />
            )}
          </button>
          <div className="">
            <nav
              className={`ml-auto gap-4 sm:gap-6 text-black ${
                isMenuOpen
                  ? "flex flex-col absolute inset-x-0 bg-white w-full px-5 py-5"
                  : "hidden lg:flex"
              }`}
            >
              <Link
                className="text-sm font-medium hover:text-yellow-500 transition-colors"
                href="#about"
              >
                Tentang
              </Link>
              <Link
                className="text-sm font-medium hover:text-yellow-500 transition-colors"
                href="#schedule"
              >
                Jadwal
              </Link>
              <Link
                className="text-sm font-medium hover:text-yellow-500 transition-colors"
                href="#ukm"
              >
                Ukm
              </Link>
              <Link
                className="text-sm font-medium hover:text-yellow-500 transition-colors"
                href="#gallery"
              >
                Galeri
              </Link>
              <Link
                className="text-sm font-medium hover:text-yellow-600 transition-colors"
                href="#contact"
              >
                Kontak
              </Link>
            </nav>
          </div>
        </div>
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
                  Selamat Datang di Masa Ta&apos;aruf Mahasiswa Baru 2025
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl font-semibold drop-shadow">
                  Mulai perjalanan akademikmu dengan semangat dan kebersamaan.
                  Mari bergabung dalam kegiatan mastamaru yang menyenangkan dan
                  informatif!
                </p>
              </div>
              <div className="flex items-center space-x-4">
                {/* Tombol Daftar */}
                <a
                  href="https://anisdawim.my.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-lg font-semibold text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
                >
                  Daftar
                </a>
                {/* Tombol Panduan */}
                <a
                  href="https://anisdawim.my.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-lg font-semibold text-white bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-yellow-500">
              Tentang Mastamaru
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-base xl:text-xl dark:text-black text-center mb-8">
              Mastamaru adalah langkah awal yang penting dalam perjalanan
              akademikmu. Ini adalah kesempatan untuk mengenal kampus, bertemu
              teman baru, dan mempersiapkan diri untuk kesuksesan akademik.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-900">
                    Pertemanan Baru
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Bertemu dan berkenalan dengan teman-teman baru dari berbagai
                    jurusan.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors">
                <CardHeader>
                  <MapPin className="h-8 w-8 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-900">
                    Pengenalan Kampus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Jelajahi fasilitas kampus dan kenali lingkungan barumu.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-colors">
                <CardHeader>
                  <GraduationCap className="h-8 w-8 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-900">
                    Persiapan Akademik
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Dapatkan tips dan strategi untuk memulai perkuliahan dengan
                    baik.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section
          id="schedule"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-50"
        >
          <div className="container mx-auto  px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-yellow-500">
              Jadwal Kegiatan
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">
                    Technical Meeting
                  </CardTitle>
                  <CardDescription className="text-blue-600">
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
                  <CardTitle className="text-blue-900">
                    Hari 1: Pembukaan
                  </CardTitle>
                  <CardDescription className="text-blue-600">
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
                  <CardTitle className="text-blue-900">
                    Hari 2: Akademik
                  </CardTitle>
                  <CardDescription className="text-blue-600">
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
                  <CardTitle className="text-blue-900">
                    Hari 3: Kegiatan Mahasiswa
                  </CardTitle>
                  <CardDescription className="text-blue-600">
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
                  <CardTitle className="text-blue-900">
                    Hari 3: Kegiatan Mahasiswa
                  </CardTitle>
                  <CardDescription className="text-blue-600">
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
                  <CardTitle className="text-blue-900">
                    Hari 3: Kegiatan Mahasiswa
                  </CardTitle>
                  <CardDescription className="text-blue-600">
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

        {/* Partnership Section */}

        <section id="ukm" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-2 text-yellow-500">
              UKM
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl text-center mb-5">
              UKM atau Unit Kegiatan Mahasiswa adalah lembaga kemahasiswaan yang
              menjadi wadah bagi mahasiswa untuk mengembangkan minat, bakat, dan
              hobi di luar kegiatan akademik. UKM dapat diibaratkan sebagai
              kegiatan ekstrakurikuler di sekolah.
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/logo-masta24.png"
                  alt="Telkom Indonesia"
                  width={120}
                  height={120}
                  className="mb-4"
                />
                <p className="text-center text-gray-600">Telkom Indonesia</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/logo-masta24.png"
                  alt="Bank Nagari"
                  width={120}
                  height={120}
                  className="mb-4"
                />
                <p className="text-center text-gray-600">Bank Nagari</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/logo-masta24.png"
                  alt="Bank Indonesia"
                  width={120}
                  height={120}
                  className="mb-4"
                />
                <p className="text-center text-gray-600">Bank Indonesia</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/logo-masta24.png"
                  alt="Badan POM"
                  width={120}
                  height={120}
                  className="mb-4"
                />
                <p className="text-center text-gray-600">Badan POM</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/logo-masta24.png"
                  alt="DJP"
                  width={120}
                  height={120}
                  className="mb-4"
                />
                <p className="text-center text-gray-600">DJP</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/images/logo-masta24.png"
                  alt="Pemerintah Daerah"
                  width={120}
                  height={120}
                  className="mb-4"
                />
                <p className="text-center text-gray-600">Pemerintah Daerah</p>
              </div>
            </div>
          </div>
        </section>
        {/* Gallery Section */}
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-yellow-500">
              Galeri Kegiatan
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Image
                src="/images/bg-landing-page.png?height=300&width=400"
                alt="Orientation activity 1"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="/images/bg-landing-page.png?height=300&width=400"
                alt="Orientation activity 2"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="/images/bg-landing-page.png?height=300&width=400"
                alt="Orientation activity 3"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="/images/bg-landing-page.png?height=300&width=400"
                alt="Orientation activity 4"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="/images/bg-landing-page.png?height=300&width=400"
                alt="Orientation activity 5"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
              <Image
                src="/images/bg-landing-page.png?height=300&width=400"
                alt="Orientation activity 6"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-50"
        >
          <div className="container mx-auto  px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 text-yellow-500">
              Kontak
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Jika Anda memiliki pertanyaan lebih lanjut, hubungi kami melalui
              detail kontak di bawah ini.
            </p>
            <div className="text-center">
              <a
                href="mailto:info@mastamaru.com"
                className="text-blue-600 hover:text-blue-700"
              >
                info@mastamaru.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-yellow-500 text-white text-center py-4">
        <p>&copy; 2024 Mastamaru. All rights reserved.</p>
      </footer>
    </div>
  );
}
