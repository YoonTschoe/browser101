const body = document.body;
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");


// body. 좌표 제대로 찍히지 않음
document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    tag.innerHTML = `${x}px, ${y}px`;
    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    target.style.left = `${x}px`;
    tag.style.left = `${x}px`;
    target.style.top = `${y}px`;
    tag.style.top = `${y}px`;
});

