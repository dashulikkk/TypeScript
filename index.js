import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

const fileInput = document.getElementById('file-input');
const previewImg = document.getElementById('preview');
const resultImg = document.getElementById('result');
const cropBtn = document.getElementById('cut');
const saveBtn = document.getElementById('save');

let cropper;
let lastCroppedImage = null;

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > 300 * 1024) {
        alert('Файл слишком большой. Максимум 300 Кб.');
        fileInput.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        previewImg.src = e.target.result;
        previewImg.style.display = 'block';
        resultImg.style.display = 'none';
        lastCroppedImage = null;

        previewImg.onload = () => {
            if (cropper) {
                cropper.destroy();
            }
            cropper = new Cropper(previewImg, {
                aspectRatio: NaN,
                viewMode: 1,
                autoCrop: false,
                autoCropArea: 1,
                movable: true,
                zoomable: true,
                rotatable: true,
                scalable: true,
            });
        };
    };
    reader.readAsDataURL(file);
});

cropBtn.addEventListener('click', () => {
    if (!cropper) return;

    const croppedCanvas = cropper.getCroppedCanvas();
    if (!croppedCanvas) return;

    lastCroppedImage = croppedCanvas.toDataURL('image/png');
    resultImg.src = lastCroppedImage;
    resultImg.style.display = 'block';

    cropper.clear();
});

saveBtn.addEventListener('click', () => {
    if (!lastCroppedImage) return;

    const link = document.createElement('a');
    link.href = lastCroppedImage;
    link.download = 'cropped-image.png';
    document.body.appendChild(link);
    link.click();
    link.remove();
});
