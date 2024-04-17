const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const countdown = document.getElementById('countdown');
const birthdayTime = document.getElementById('birthdayTime');
const redirectButton = document.getElementById('redirectButton');

const currentYear = new Date().getFullYear();

const birthday = new Date(`Apr 19 ${currentYear} 00:00:00`);

const today = new Date();
const currentDateTime = new Date(`${today.getMonth()} ${today.getDate()} ${currentYear}`);

const age = currentDateTime < birthday ? currentYear - 2002 - 1 : currentYear - 2003;

document.getElementById('dateyear').innerText = currentYear;

const s = 1000;
const m = s * 60;
const h = m * 60;
const d = h * 24;

let timerId;

function updateCountdown() {
    const now = new Date();
    const nextBirthday = new Date(`Apr 19 ${currentYear + 1} 00:00:00`);
    const timeSpan = birthday < now ? nextBirthday - now : birthday - now;
    const nextAge = birthday < now ? age + 1 : age;

    const day = Math.floor(timeSpan / d);
    const hour = Math.floor((timeSpan % d) / h);
    const minute = Math.floor((timeSpan % h) / m);
    const second = Math.floor((timeSpan % m) / s);

    const April = now.getMonth() === birthday.getMonth() && now.getDate() === birthday.getDate();

    if (April) {
        clearInterval(timerId);
        document.getElementById('message').innerHTML = 'Thanks for always being there for me. Love You ';
        countdown.style.display = 'none';
        birthdayTime.style.display = 'none';
        redirectButton.disabled = false; // Enable the button
    } else if (timeSpan <= 0) {
        showBirthdayVideo();
        clearInterval(timerId);
        return;
    } else {
        days.innerHTML = day;
        hours.innerHTML = hour < 10 ? '0' + hour : hour;
        minutes.innerHTML = minute < 10 ? '0' + minute : minute;
        seconds.innerHTML = second < 10 ? '0' + second : second;
        yearold.innerText = `${nextAge}st Birthday!`;
    }
}

function showBirthdayVideo() {
    const video = document.getElementById('birthdayVideo');
    video.classList.remove('hidden');
    video.play();
    countdown.style.display = 'none';
    birthdayTime.style.display = 'none';
    redirectButton.disabled = false; 
}

timerId = setInterval(updateCountdown, 1000);

redirectButton.addEventListener('click', function() {
    window.open('birthday-video.html', '_blank');
});
