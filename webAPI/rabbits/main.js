const btn = document.querySelector("#btn");
const seokgawn = document.querySelector("#seokgawn");

btn.addEventListener('click', () => {
    seokgawn.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});;
});
