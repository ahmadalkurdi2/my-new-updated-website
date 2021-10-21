let themeDots = document.getElementsByClassName('theme-dot');

let theme = localStorage.getItem('theme');
if (theme == null) {
  setTheme('light');
} else {
  setTheme(theme);
}

for (let i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener('click', function () {
    let mode = this.dataset.mode;
    console.log('Option clicked:', mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == 'light') {
    document.getElementById('theme-style').href = 'default.css';
  }

  if (mode == 'blue') {
    document.getElementById('theme-style').href = 'blue.css';
  }

  localStorage.setItem('theme', mode);
}

var appCache = window.applicationCache;

appCache.update(); //this will attempt to update the users cache and changes the application cache status to 'UPDATEREADY'.

if (appCache.status == window.applicationCache.UPDATEREADY) {
  appCache.swapCache(); //replaces the old cache with the new one.
}
