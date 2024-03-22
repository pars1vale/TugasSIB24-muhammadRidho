const kucing = [
    {
        jenis: 'anggora',
        desc: 'Anggora turki adalah salah satu ras kucing domestik alami tertua. Ras ini berasal dari Ankara, Turki.Kucing ini sangat populer dan terkenal di Indonesia.',
        img: '../../assets/anggora.png',
    },
    {
        jenis: 'persia',
        desc: 'Kucing persia adalah ras kucing domestik berbulu panjang dengan karakter wajah bulat dan moncong pendek.Namanya mengacu pada Persia.',
        img: '../../assets/persia.png',
    },
    {
        jenis: 'British Shorthair',
        desc: 'Kucing bulu pendek britania adalah salah satu ras kucing tertua di inggris. Kucing ini adalah kucing berbadan sedang dengan bulu yang pendek.',
        img: '../../assets/british.png',
    },
];

const postContainer = document.querySelector('.card-categories');

const postMethods = () => {
    kucing.map((postData) => {
        console.log(postData);
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML = `
        <div class="card">
             <img src="${postData.img}" alt="gambarkucing" />
            <h5>${postData.jenis}</h5>
            <p>${postData.desc}</p>
        </div>
        `;
        postContainer.appendChild(postElement);
    });
};

postMethods();
