// Data peserta
const dataPeserta = [
    { nama: "Adil Haris Hamka", password: "12345", status: "LULUS" },
    { nama: "Damaghara Arya Satya", password: "abcde", status: "TIDAK LULUS" },
    { nama: "Zhaendy Anandhika Putra", password: "ABCDE", status: "LULUS" },
    { nama: "Ruziqu Reskya Cinta", password: "AbCdE", status: "TIDAK LULUS" },
    { nama: "Chantiva Fadhilah Aqdiazahra", password: "ABCde", status: "LULUS" },
    { nama: "Syahla Hasna Puteri", password: "ABCDe", status: "TIDAK LULUS" },
    { nama: "Aquinsha Garneta Pramaisya", password: "54321", status: "LULUS" },
    { nama: "Syifanahla Hayyu Kamiela", password: "13452", status: "TIDAK LULUS" },
    { nama: "Ruha Khayyyana Syakira", password: "34512", status: "LULUS" },
    { nama: "Priskila Francis", password: "EDCBA", status: "TIDAK LULUS" },
];

// Link GC
const linkWhatsApp = "https://chat.whatsapp.com/I7GrOHWDNnPAd7nuB9VbvL";

function cekHasil() {
    const nama = document.getElementById("nama").value.trim();
    const password = document.getElementById("password").value.trim();
    const hasilDiv = document.getElementById("hasil");

    const peserta = dataPeserta.find(p => 
        p.nama.toLowerCase() === nama.toLowerCase() && p.password === password
    );

    if (peserta) {
        if (peserta.status === "LULUS") {
            hasilDiv.innerHTML = `
                <span style="color: lightgreen;">SELAMAT! Anda ${peserta.status}</span><br>
                <a href="${linkWhatsApp}" target="_blank" style="display:inline-block;margin-top:10px;padding:10px 15px;background:#25D366;color:white;border-radius:5px;text-decoration:none;">
                    Gabung Grup WhatsApp Schezen 2025🎬🎥
                </a>
            `;
        } else {
            hasilDiv.innerHTML = `<span style="color: red;">MAAF, Anda ${peserta.status}</span>`;
        }
    } else {
        hasilDiv.innerHTML = `<span style="color: yellow;">Nama atau password salah</span>`;
    }
}
