const chords = ["a", "c", "d", "e", "f"];
      const note = document.getElementById("note");

      chords.forEach((chord) => {
        const tombol = document.createElement("button");
        tombol.innerText = chord;

        tombol.addEventListener("click", () => {
          const sound = new Audio(`assets/${chord}.wav`);
          sound.play();
        });

        note.appendChild(tombol);
      });