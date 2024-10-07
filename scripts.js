// ボタン要素を取得
const profileBtn = document.getElementById('profile-btn');
const researchBtn = document.getElementById('research-btn');
const projectsBtn = document.getElementById('projects-btn');
const youtubeBtn = document.getElementById('youtube-btn');
const contactBtn = document.getElementById('contact-btn');

// ボタンをクリックしたときにページ遷移させる関数
profileBtn.addEventListener('click', function() {
    window.location.href = 'profile.html'; // Profileページへ遷移
});

researchBtn.addEventListener('click', function() {
    window.location.href = 'research.html'; // Researchページへ遷移
});

projectsBtn.addEventListener('click', function() {
    window.location.href = 'projects.html'; // Projectページへ遷移
});

youtubeBtn.addEventListener('click', function() {
    window.location.href = 'youtube.html'; // YouTubeページへ遷移
});

contactBtn.addEventListener('click', function() {
    window.location.href = 'contact.html'; // Contactページへ遷移
});

