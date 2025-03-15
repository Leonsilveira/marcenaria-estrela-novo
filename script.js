// Array com os nomes dos arquivos de imagem
const imagens = [
    'Imagem do WhatsApp de 2025-03-06 à(s) 08.40.57_1922fa97.jpg',
    'Imagem do WhatsApp de 2025-03-06 à(s) 08.41.04_005ac325.jpg',
    'Imagem do WhatsApp de 2025-03-06 à(s) 08.42.06_b26d04c5.jpg',
    'IMG-20250306-WA0004.jpg',
    'IMG-20250306-WA0011.jpg',
    'IMG-20250306-WA0014.jpg',
    'IMG-20250306-WA0017.jpg',
    'IMG-20250306-WA0020.jpg',
    'IMG-20250306-WA0023.jpg',
    'IMG-20250306-WA0026.jpg',
    'IMG-20250306-WA0029.jpg',
    'IMG-20250306-WA0032.jpg',
    'IMG-20250306-WA0035.jpg',
    'IMG-20250306-WA0038.jpg',
    'IMG-20250306-WA0041.jpg',
    'IMG-20250306-WA0044.jpg',
    'IMG-20250306-WA0049.jpg',
    'IMG-20250306-WA0052.jpg',
    'IMG-20250306-WA0055.jpg',
    'IMG-20250306-WA0058.jpg',
    'IMG-20250306-WA0061.jpg',
    'IMG-20250306-WA0064.jpg',
    'IMG-20250306-WA0067.jpg',
    'IMG-20250306-WA0070.jpg',
    'IMG-20250306-WA0073.jpg',
    'lavanderia.jpeg',
    'raque.jpg',
    'cozinha.jpeg',
    'cozinha2.jpeg',
    'Imagem do WhatsApp de 2025-03-06 à(s) 08.41.03_8770f32a.jpg',
    'Imagem do WhatsApp de 2025-03-06 à(s) 08.41.04_4ff7477a.jpg',
    'Imagem do WhatsApp de 2025-03-06 à(s) 08.41.04_dfc8dfd6.jpg',
    'Imagem do WhatsApp de 2025-03-06 à(s) 08.42.05_47bb02ef.jpg',
    'IMG-20250306-WA0002.jpg',
    'IMG-20250306-WA0003.jpg',
    'IMG-20250306-WA0005.jpg',
    'IMG-20250306-WA0006.jpg',
    'IMG-20250306-WA0012.jpg',
    'IMG-20250306-WA0013.jpg',
    'IMG-20250306-WA0015.jpg',
    'IMG-20250306-WA0016.jpg',
    'IMG-20250306-WA0018.jpg',
    'IMG-20250306-WA0019.jpg',
    'IMG-20250306-WA0021.jpg',
    'IMG-20250306-WA0022.jpg',
    'IMG-20250306-WA0024.jpg',
    'IMG-20250306-WA0025.jpg',
    'IMG-20250306-WA0027.jpg',
    'IMG-20250306-WA0028.jpg',
    'IMG-20250306-WA0030.jpg',
    'IMG-20250306-WA0031.jpg',
    'IMG-20250306-WA0033.jpg',
    'IMG-20250306-WA0034.jpg',
    'IMG-20250306-WA0036.jpg',
    'IMG-20250306-WA0037.jpg',
    'IMG-20250306-WA0039.jpg',
    'IMG-20250306-WA0040.jpg',
    'IMG-20250306-WA0042.jpg',
    'IMG-20250306-WA0043.jpg',
    'IMG-20250306-WA0045.jpg',
    'IMG-20250306-WA0046.jpg',
    'IMG-20250306-WA0050.jpg',
    'IMG-20250306-WA0051.jpg',
    'IMG-20250306-WA0053.jpg',
    'IMG-20250306-WA0054.jpg',
    'IMG-20250306-WA0056.jpg',
    'IMG-20250306-WA0057.jpg',
    'IMG-20250306-WA0059.jpg',
    'IMG-20250306-WA0060.jpg',
    'IMG-20250306-WA0062.jpg',
    'IMG-20250306-WA0063.jpg',
    'IMG-20250306-WA0065.jpg',
    'IMG-20250306-WA0066.jpg',
    'IMG-20250306-WA0068.jpg',
    'IMG-20250306-WA0069.jpg',
    'IMG-20250306-WA0071.jpg',
    'IMG-20250306-WA0072.jpg',
    'IMG-20250306-WA0074.jpg',
    'IMG-20250306-WA0075.jpg',
    'quarto.jpg',
    'sala-planejada.jpg'
];

// Array com os nomes dos arquivos de vídeo
const videos = [
    'VID-20250306-WA0001.mp4',
    'VID-20250306-WA0002.mp4',
    'VID-20250306-WA0003.mp4',
    'VID-20250306-WA0005.mp4',
    'VID-20250306-WA0006.mp4',
    'VID-20250306-WA0007.mp4',
    'VID-20250306-WA0009.mp4',
    'VID-20250306-WA0011.mp4',
    'VID-20250306-WA0013.mp4',
    'Vídeo do WhatsApp de 2025-03-06 à(s) 08.41.09_0b0d8f8b.mp4',
    'Vídeo do WhatsApp de 2025-03-06 à(s) 08.41.09_e01f3cbb.mp4',
    'Vídeo do WhatsApp de 2025-03-06 à(s) 08.41.12_4ec35faa.mp4'
];

// Seleciona os elementos da galeria
const galeria = document.getElementById('galeria');
const galeriaVideos = document.getElementById('galeria-videos');

// Função para carregar as imagens
function carregarImagens() {
    imagens.forEach(imagem => {
        const caminhoCompleto = `Midia_Marcenaria/imagem/${imagem}`;
        const link = document.createElement('a');
        const img = document.createElement('img');

        link.href = caminhoCompleto;
        link.setAttribute('data-lightbox', 'galeria');
        img.src = caminhoCompleto;
        img.alt = `Imagem da galeria: ${imagem}`;
        img.classList.add('panel-image');

        // Tratamento de erro para imagens
        img.onerror = () => {
            console.error(`Erro ao carregar a imagem: ${caminhoCompleto}`);
        };

        link.appendChild(img);
        galeria.appendChild(link);
    });
}

// Função para carregar os vídeos
function carregarVideos() {
    videos.forEach(video => {
        const caminhoCompleto = `Midia_Marcenaria/videos/${video}`;
        const link = document.createElement('a');
        const videoElement = document.createElement('video');

        link.href = caminhoCompleto;
        link.setAttribute('data-lightbox', 'galeria-videos');
        videoElement.src = caminhoCompleto;
        videoElement.controls = true;
        videoElement.width = 320;
        videoElement.classList.add('panel-video');

        // Tratamento de erro para vídeos
        videoElement.onerror = () => {
            console.error(`Erro ao carregar o vídeo: ${caminhoCompleto}`);
        };

        link.appendChild(videoElement);
        galeriaVideos.appendChild(link);
    });
}

// Chama as funções para carregar as imagens e vídeos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarImagens();
    carregarVideos();
});
