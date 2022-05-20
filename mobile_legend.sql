-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 20 Bulan Mei 2022 pada 08.11
-- Versi server: 10.4.20-MariaDB
-- Versi PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mobile_legend`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `hero`
--

CREATE TABLE `hero` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `skills` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `hero`
--

INSERT INTO `hero` (`id`, `name`, `role`, `skills`) VALUES
(57, 'fdfd', 'fdfd', 'fdfd,fdfd');

-- --------------------------------------------------------

--
-- Struktur dari tabel `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `history`
--

INSERT INTO `history` (`id`, `description`) VALUES
(1, 'Mobile Legends: Bang Bang (MLBB) adalah game seluler multipemain online battle arena (MOBA), dikembangkan dan diterbitkan oleh Shanghai Moonton Technology. Game ini pertama kali dirilis pada 9 November 2016; dan menjadi populer di wilayah Asia Tenggara dan termasuk game terpilih untuk acara kompetisi esports medali pertama di Pesta Olahraga Asia Tenggara 2019 di Filipina.\n      Kedua tim lawan bertarung untuk mencapai dan menghancurkan markas musuh, sambil mempertahankan markas mereka sendiri untuk mengendalikan ketiga jalur yang dikenal sebagai top/atas, mid/tengah dan bottom/bawah , yang menghubungkan kedua markas. Karakter terkendali komputer yang lemah disebut minion, muncul dari markas tim dan mengikuti tiga jalur menuju markas tim lawan, untuk melawan musuh dan tower. Setiap tim terdiri dari lima pemain, yang masing-masing mengendalikan avatar, yang dikenal sebagai hero, dari gawai mereka sendiri. Setiap hero dikelompokkan menjadi 6 role yang berbeda, Tank, Fighter, Assassin, Marksman, Mage, dan Support Mage. Sumber: https://mobile-legends.fandom.com/id/wiki/Mobile_Legends:_Bang_Bang_Wikia');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `hero`
--
ALTER TABLE `hero`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `hero`
--
ALTER TABLE `hero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT untuk tabel `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
