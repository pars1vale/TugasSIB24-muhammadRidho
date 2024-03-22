let endpointpostdata = 'https://crudcrud.com/api/cfcfe6b5b0684f0384280a942678f088/kucing';
let endpointgetdata = 'https://crudcrud.com/api/cfcfe6b5b0684f0384280a942678f088/kucing';

let content = document.querySelector('.card-categories');

// POST METHOD
function postData(data) {
    let fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    fetch(endpointpostdata, fetchOptions)
        .then(response => response.json())
        .then(data => console.log("POST success:", data))
        .catch(error => console.error("POST error:", error));
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
                                <img src="${element.img}" alt="${element.jenis}" />
                                <h5>${element.jenis}</h5>
                                <p>${element.desc}</p>
                            </div>
                        `;
                    });
                });
            } else {
                console.error("Invalid response format");
            }
        })
        .catch(error => console.error(error));
}


// Call the getDataAndDisplay function to display data when the page loads
getDataAndDisplay();

// Sample data for POST request
let kucingData = [
    {
        jenis: 'Anggora',
        desc: 'Anggora turki adalah salah satu ras kucing domestik alami tertua. Ras ini berasal dari Ankara, Turki.Kucing ini sangat populer dan terkenal di Indonesia.',
        img: 'https://www.google.com/imgres?q=anggora&imgurl=https%3A%2F%2Fasset.kompas.com%2Fcrops%2F0pwj8CWnfLJukqvNUbpUr5eShAI%3D%2F8x0%3A753x497%2F1200x800%2Fdata%2Fphoto%2F2021%2F09%2F01%2F612fa1325675a.png&imgrefurl=https%3A%2F%2Flifestyle.kompas.com%2Fread%2F2022%2F08%2F24%2F120531720%2Fmengenal-kucing-anggora-harta-karun-dari-turki%3Fpage%3Dall&docid=wfbPLHxOQd0ySM&tbnid=eODHetOYbIEBgM&vet=12ahUKEwieiN268oaFAxUNRWwGHVqiBvkQM3oECGIQAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwieiN268oaFAxUNRWwGHVqiBvkQM3oECGIQAA'
    },
    {
        jenis: 'Persia',
        desc: 'Kucing persia adalah ras kucing domestik berbulu panjang dengan karakter wajah bulat dan moncong pendek.Namanya mengacu pada Persia.',
        img: 'https://www.google.com/search?q=kucin+persia&sca_esv=0e0a2398290a2927&udm=2&biw=1920&bih=911&sxsrf=ACQVn08TbCW6LI94nj_vZ_DDuJxgUnpHrg%3A1711077084425&ei=3Pb8Zb3AGf_lseMP452zgAg&ved=0ahUKEwi9nrPu8oaFAxX_cmwGHePODIAQ4dUDCBA&uact=5&oq=kucin+persia&gs_lp=Egxnd3Mtd2l6LXNlcnAiDGt1Y2luIHBlcnNpYTIJEAAYgAQYGBgKSPkWUABY3xVwBHgAkAEAmAF1oAGjDKoBAzkuN7gBA8gBAPgBAZgCFKAC6gzCAgQQIxgnwgIFEAAYgATCAg4QABiABBiKBRixAxiDAcICBBAAGAPCAggQABiABBixA8ICBBAAGB7CAgYQABgFGB7CAgcQABiABBgYmAMAkgcEMTEuOaAHjzk&sclient=gws-wiz-serp#vhid=vjEFQ9NJsgjbMM&vssid=mosaic'
    },
    {
        jenis: 'British Shorthair',
        desc: 'Kucing bulu pendek britania adalah salah satu ras kucing tertua di inggris. Kucing ini adalah kucing berbadan sedang dengan bulu yang pendek.',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fbritish-short-hair--943152346949244706%2F&psig=AOvVaw3gQIr7OzIvW4AyR80Rbcnk&ust=1711163531953000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiN_oXzhoUDFQAAAAAdAAAAABAE'
    }
];

// Call the postData function to post data when needed
postData(kucingData);

// Call the getDataAndDisplay function to display data when the page loads
getDataAndDisplay();
