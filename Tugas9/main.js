let endpointpostdata = 'https://crudcrud.com/api/841eeb0e3d254d77bac4b789a2a61a2d/kucing';
let endpointgetdata = 'https://crudcrud.com/api/841eeb0e3d254d77bac4b789a2a61a2d/kucing';

let content = document.querySelector('.card-categories');

let kucingData = [
    {
        jenis: 'Anggora',
        desc: 'Anggora turki adalah salah satu ras kucing domestik alami tertua. Ras ini berasal dari Ankara, Turki.Kucing ini sangat populer dan terkenal di Indonesia.',
        img: 'https://www.google.com/imgres?q=anggora&imgurl=https%3A%2F%2Fasset.kompas.com%2Fcrops%2F0pwj8CWnfLJukqvNUbpUr5eShAI%3D%2F8x0%3A753x497%2F1200x800%2Fdata%2Fphoto%2F2021%2F09%2F01%2F612fa1325675a.png&imgrefurl=https%3A%2F%2Flifestyle.kompas.com%2Fread%2F2022%2F08%2F24%2F120531720%2Fmengenal-kucing-anggora-harta-karun-dari-turki%3Fpage%3Dall&docid=wfbPLHxOQd0ySM&tbnid=eODHetOYbIEBgM&vet=12ahUKEwieiN268oaFAxUNRWwGHVqiBvkQM3oECGIQAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwieiN268oaFAxUNRWwGHVqiBvkQM3oECGIQAA',
        harga: 500000
    },
    {
        jenis: 'Persia',
        desc: 'Kucing persia adalah ras kucing domestik berbulu panjang dengan karakter wajah bulat dan moncong pendek.Namanya mengacu pada Persia.',
        img: 'https://www.google.com/search?q=kucin+persia&sca_esv=0e0a2398290a2927&udm=2&biw=1920&bih=911&sxsrf=ACQVn08TbCW6LI94nj_vZ_DDuJxgUnpHrg%3A1711077084425&ei=3Pb8Zb3AGf_lseMP452zgAg&ved=0ahUKEwi9nrPu8oaFAxX_cmwGHePODIAQ4dUDCBA&uact=5&oq=kucin+persia&gs_lp=Egxnd3Mtd2l6LXNlcnAiDGt1Y2luIHBlcnNpYTIJEAAYgAQYGBgKSPkWUABY3xVwBHgAkAEAmAF1oAGjDKoBAzkuN7gBA8gBAPgBAZgCFKAC6gzCAgQQIxgnwgIFEAAYgATCAg4QABiABBiKBRixAxiDAcICBBAAGAPCAggQABiABBixA8ICBBAAGB7CAgYQABgFGB7CAgcQABiABBgYmAMAkgcEMTEuOaAHjzk&sclient=gws-wiz-serp#vhid=vjEFQ9NJsgjbMM&vssid=mosaic',
        harga: 400000
    },
    {
        jenis: 'British Shorthair',
        desc: 'Kucing bulu pendek britania adalah salah satu ras kucing tertua di inggris. Kucing ini adalah kucing berbadan sedang dengan bulu yang pendek.',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fbritish-short-hair--943152346949244706%2F&psig=AOvVaw3gQIr7OzIvW4AyR80Rbcnk&ust=1711163531953000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiN_oXzhoUDFQAAAAAdAAAAABAE',
        harga: 300000
    }
];


// POST METHOD
function postData(data) {
    let fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    return fetch(endpointpostdata, fetchOptions)
        .then(response => response.json())
        .then(data => {
            console.log("POST success:", data);
            return data; // Mengembalikan data yang baru ditambahkan
        })
        .catch(error => {
            console.error("POST error:", error);
            throw error; // Melemparkan error untuk menangani di tempat lain jika perlu
        });
}

// Function to get data and display it
function getDataAndDisplay() {
    fetch(endpointgetdata)
        .then((res) => res.json())
        .then((response) => {
            console.log(response);
            if (response) {
                content.innerHTML = ""; // Clear previous content
                response.forEach(kucing => {
                    kucing.kucing.forEach(element => {
                        console.log(element);
                        content.innerHTML += `
                        <div class="card">
                            <div class="card-image">
                            <img src="${element.img}" alt="${element.jenis}" />
                            </div>
                            <div class="card-content">
                                <h5>${element.jenis}</h5>
                                <p>${element.desc}</p>
                                <p class="price"><span>Rp.${element.harga}</p>
                                <button class="btn_belanja" type="submit">Beli</button>
                            </div>
					    </div>`;
                    });
                });
            } else {
                console.error("Invalid response format");
            }
        })
        .catch(error => console.error(error));
}

// Call the postData function to post data when needed
postData(kucingData)
    .then(() => {
        // Panggil getDataAndDisplay setelah data berhasil dikirim
        getDataAndDisplay();
    })
    .catch(error => {
        // Tangani kesalahan jika terjadi
        console.error("Error while posting data:", error);
    });

// Call the getDataAndDisplay function to display data when the page loads
getDataAndDisplay();
