const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
    noBtn.style.position = 'absolute';
    noBtn.style.top = Math.random() * window.innerHeight + 'px';
    noBtn.style.left = Math.random() * window.innerWidth + 'px';
});

document.getElementById('yesBtn').addEventListener('click', () => {
    alert('Gracias por llegar y quedarte, por hacer de mis dias un lienzo mejor, por escucharme y en calma abrazarme, por ser refujio, ternura y amor. tu presencia es el regalo mas sincero, la luz que disipa cualquier temor, en cada risa tuya, mi niño interior despierta, y en tu mano encuentro mi amor. Te amo sobre todo mi pidañita. ❤️');
});
document.getElementById('noBtn').addEventListener('click', () => {
    alert(' Te amo sobre todo ❤️');
});