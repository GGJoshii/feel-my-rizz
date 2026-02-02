// script.js

// Get references to elements
const playMusicButton = document.getElementById('play-music-button');
const backgroundMusic = document.getElementById('background-music');
const musicOverlay = document.getElementById('music-overlay');
const mainContent = document.getElementById('main-content');

// Add event listener to the button
playMusicButton.addEventListener('click', () => {
    // Attempt to play the music (this works because it's a direct result of user action)
    const playPromise = backgroundMusic.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Music started, hide the overlay and show the main content
            musicOverlay.style.display = 'none';
            mainContent.classList.remove('hidden');
        }).catch(error => {
            // Autoplay was prevented for some reason, maybe show a message or proceed without music
            console.error("Music playback failed:", error);
            musicOverlay.style.display = 'none';
            mainContent.classList.remove('hidden');
        });
    }
});

function toggleMute() {
    var audio = document.getElementById('background-music');
    audio.muted = !audio.muted;
    
    // Optional: Change button text
    var btn = document.getElementById('mutebtn');
    btn.innerHTML = audio.muted ? "Unmute" : "Mute";
}

