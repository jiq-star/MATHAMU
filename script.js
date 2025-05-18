const kelasMenu = document.getElementById("kelas-menu");

for (let i = 1; i <= 12; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `materi/kelas${i}.html`;
  a.textContent = `Kelas ${i}`;
  li.appendChild(a);
  kelasMenu.appendChild(li);
}
