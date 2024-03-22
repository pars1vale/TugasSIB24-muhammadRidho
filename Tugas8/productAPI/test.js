let Kucing = {
    kucing: [
        {
            jenis: 'anggora',
            desc: 'Anggora turki adalah salah satu ras kucing domestik alami tertua. Ras ini berasal dari
            Ankara, Turki.Kucing ini sangat populer dan terkenal di Indonesia.'
            img: '../../assets/anggora.png'
        },
        {
            jenis: 'persia',
            desc: 'Kucing persia adalah ras kucing domestik berbulu panjang dengan karakter wajah bulat dan
            moncong pendek.Namanya mengacu pada Persia.'
            img: '../../assets/persia.png'
        },
        {
            jenis: 'British Shorthair',
            desc: 'Kucing bulu pendek britania adalah salah satu ras kucing tertua di inggris. Kucing ini
            adalah kucing berbadan sedang dengan bulu yang pendek.'
            img: '../../assets/anggora.png'
        },
    ]
};

const jsonData = JSON.stringify(data);

fetch("https://crudcrud.com/api/cfcfe6b5b0684f0384280a942678f088", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: jsonData,
})
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then((responseData) => {
        console.log("Data berhasil ditambahkan:", responseData);
    })
    .catch((error) => {
        console.error("Terjadi error:", error);
    });