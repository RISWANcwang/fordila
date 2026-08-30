function bukaSurat() {

    const awal = document.getElementById("halamanAwal");
    const surat = document.getElementById("halamanSurat");

    awal.classList.add("fade-out");

    setTimeout(() => {

        awal.style.display = "none";

        surat.style.display = "block";

        surat.classList.add("fade-in");

        const musik = document.getElementById("musik");

        musik.play();

        ketikSurat();

    }, 500);
}


function ketikSurat() {

    const teks =
        "Sebenarnya ada sesuatu yang ingin aku sampaikan kepadamu... ❤️";

    const surat = document.getElementById("surat");

    surat.innerHTML = "";

    let i = 0;

    function ketik() {

        if (i < teks.length) {

            surat.innerHTML += teks.charAt(i);

            i++;

            setTimeout(ketik, 60);
        }
    }

    ketik();
}

function ketikPesanTiga() {

    const teks =
        "Terima kasih sudah membuka surat ini. Semoga hari kamu selalu dipenuhi hal-hal baik (DILA). ❤️";

    const pesan = document.getElementById("pesanTiga");

    pesan.innerHTML = "";

    let i = 0;

    function ketik() {

        if (i < teks.length) {

            pesan.innerHTML += teks.charAt(i);

            i++;

            setTimeout(ketik, 60);
        }
    }

    ketik();
}

function ketikPesanAkhir() {

    const teks =
        "Semoga hari kamu selalu menyenangkan. Jangan lupa untuk selalu tersenyum 😊 dan terakhir semoga lututnya cepat sembuh yaa 😘";

    const pesan = document.getElementById("pesanAkhir");

    pesan.innerHTML = "";

    let i = 0;

    function ketik() {

        if (i < teks.length) {

            pesan.innerHTML += teks.charAt(i);

            i++;

            setTimeout(ketik, 60);

        }

    }

    ketik();
}

function ketikPenutup() {

    const teks = "Sampai jumpa lagi 💕";

    const penutup = document.getElementById("penutup");

    penutup.innerHTML = "";

    let i = 0;

    function ketik() {

        if (i < teks.length) {

            penutup.innerHTML += teks.charAt(i);

            i++;

            setTimeout(ketik, 80);

        }

    }

    ketik();
}

function lanjut() {

    const surat = document.getElementById("halamanSurat");
    const halamanTiga = document.getElementById("halamanTiga");

    surat.classList.add("fade-out");

    setTimeout(() => {

        surat.style.display = "none";

        halamanTiga.style.display = "block";

        halamanTiga.classList.add("fade-in");

        ketikPesanTiga();

    }, 500);
}


function selesai() {

    const halamanTiga = document.getElementById("halamanTiga");
    const halamanAkhir = document.getElementById("halamanAkhir");

    halamanTiga.classList.add("fade-out");

    setTimeout(() => {

        halamanTiga.style.display = "none";

        halamanAkhir.style.display = "block";

        halamanAkhir.classList.add("fade-in");

        ketikPesanAkhir();

        setTimeout(() => {
            ketikPenutup();
        }, 5500);

        setInterval(buatHati, 300);

    }, 500);
}

function buatHati() {

    const hati = document.createElement("div");

    hati.classList.add("hati-jatuh");

    hati.innerHTML = "❤️";

    hati.style.left = Math.random() * 100 + "vw";

    hati.style.animationDuration =
        (Math.random() * 2 + 3) + "s";

    document.body.appendChild(hati);

    setTimeout(() => {
        hati.remove();
    }, 5000);
}

for (let i = 0; i < 30; i++) {

    const bintang = document.createElement("div");

    bintang.classList.add("bintang");

    bintang.style.left = Math.random() * 100 + "vw";

    bintang.style.top = Math.random() * 100 + "vh";

    bintang.style.animationDelay =
        Math.random() * 2 + "s";

    document.body.appendChild(bintang);
}