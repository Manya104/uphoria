document.addEventListener("DOMContentLoaded", function () {
    const sounds = [
        { id: "waterfall" },
        { id: "birds" },
        { id: "trees" },
        { id: "rain" },
        { id: "wind" },
        { id: "thunder" },
        { id: "ocean" },
        { id: "crickets" },
        { id: "campfire" },
        { id: "river" },
        { id: "treefrogs" },
        { id: "leaves" },
        { id: "night" },
        { id: "stream" },
        { id: "naturebliss" }
    ];

    sounds.forEach(sound => {
        const audio = document.getElementById(`${sound.id}-audio`);
        const volumeSlider = document.getElementById(`${sound.id}`);
        const playButton = document.getElementById(`${sound.id}-btn`);

        // Set the initial volume to match the slider value
        audio.volume = volumeSlider.value;

        volumeSlider.addEventListener("input", function () {
            audio.volume = this.value;
            console.log(`${sound.id} volume changed to: ${audio.volume}`);
        });

        playButton.addEventListener("click", function () {
            if (audio.paused) {
                audio.play();
                playButton.querySelector("img").src = "./assets/pause.png"; // Change to pause icon
                console.log(`${sound.id} is now playing`);
            } else {
                audio.pause();
                playButton.querySelector("img").src = "./assets/play.png"; // Change to play icon
                console.log(`${sound.id} is now paused`);
            }
        });
    });
});


         