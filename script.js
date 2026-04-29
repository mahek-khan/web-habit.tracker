const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const EMOJI_CATS = [
  { label: '🏃 Fitness', emojis: [
    '💪','🏃','🚴','🏊','🧗','🤸','🏋️','🧘','🚶','🤾','🏄','⚽',
    '🏀','🏈','⚾','🎾','🏐','🏉','🎱','🏓','🏸','🥊','🥋','🤼',
    '🤺','🏇','⛷️','🏂','🪂','🏌️','🏹','🎿','🛷','🥌','🤿','🚣',
    '🧜','🏆','🥇','🥈','🥉','🎖️','🏅','⛹️','🤽','🚵','🤙','🦵'
  ]},
  { label: '📚 Learning', emojis: [
    '📚','📖','✍️','🎓','🧠','📝','🔬','💡','🗺️','📰','🖊️','📐',
    '📏','📌','📍','📎','🔭','🧪','🧫','🧬','💻','🖥️','🖨️','⌨️',
    '🖱️','📡','🔍','🔎','📓','📔','📒','📕','📗','📘','📙','📃',
    '📄','📑','🗒️','🗓️','📆','📇','🗃️','🗄️','📋','✂️','🖇️','📂'
  ]},
  { label: '🥗 Health', emojis: [
    '🥗','💧','🍎','🥦','🍵','😴','🧃','🥑','🦷','💊','🫀','🫁',
    '🧘','🏃','🛌','🩺','🩹','💉','🧬','🌡️','🫶','🤲','🧴','🧼',
    '🪥','🛁','🚿','🧖','🥤','🍇','🍓','🫐','🍒','🍋','🥝','🥕',
    '🥒','🌽','🫑','🧄','🧅','🥜','🌾','🍞','🥚','🥛','🍯','🫖'
  ]},
  { label: '🎨 Creative', emojis: [
    '🎨','🎵','🎸','✏️','📷','🎭','🎬','🖌️','🎹','📻','🎤','🧵',
    '🪡','🧶','🪢','🖼️','🎼','🎶','🎷','🎺','🪗','🥁','🪘','🎻',
    '🎙️','📸','📹','🎥','📽️','🎞️','📺','🎮','🕹️','🎲','♟️','🎯',
    '🎳','🎪','🤹','🪄','🎠','🎡','🎢','🎭','🎪','🖍️','🖋️','✒️'
  ]},
  { label: '💼 Work', emojis: [
    '💼','📅','✅','🗓️','📊','💻','📧','🗂️','⏱️','🤝','📌','🔧',
    '🔨','⚙️','🛠️','🔩','🪛','🔑','🗝️','🔐','🔒','📱','☎️','📞',
    '📟','📠','🖥️','🖨️','💾','💿','📀','🗜️','🖇️','📋','📁','📂',
    '🗃️','🗄️','🗑️','📤','📥','📦','📫','📬','📭','📮','🏷️','💰'
  ]},
  { label: '🌱 Mindful', emojis: [
    '🌱','🧘','🙏','☀️','🌙','🌊','🕯️','🌸','🌿','💬','❤️','🦋',
    '🌻','🌺','🌹','🌷','🪷','🌼','💐','🍀','🌾','🌵','🌴','🌳',
    '🌲','🪨','🪵','🌄','🌅','🌇','🌆','🌃','🌉','🌌','🌠','⭐',
    '🌟','✨','💫','🌈','🌤️','⛅','🌦️','🌧️','❄️','🌬️','🌀','🌈'
  ]},
  { label: '😊 Mood', emojis: [
    '😊','😄','🤩','😎','🥳','😌','🤗','💪','🧡','💛','💚','💙',
    '💜','🖤','🤍','🤎','❤️‍🔥','💖','💗','💓','💞','💝','💟','☮️',
    '🕊️','🌞','🌝','😇','🥰','😍','🤑','😤','🙃','🤪','😜','😏',
    '🫠','🥹','😢','😭','😤','😠','🤬','😱','😨','😰','😥','😓'
  ]},
  { label: '🏠 Daily Life', emojis: [
    '🏠','🛒','🍳','🧹','🧺','🪣','🧻','🚗','🚿','☕','🛏️','📺',
    '🪴','🐶','🐱','🐠','🐦','🌮','🍕','🍜','🥘','🍱','🥞','🧇',
    '🍔','🌯','🥪','🍣','🍩','🧁','🎂','🍰','🍫','🍬','🍭','🧋',
    '🥂','🍷','🍸','🎁','🛍️','🪞','🛋️','🪑','🚪','🪟','🛁','🪤'
  ]},
  { label: '✈️ Travel', emojis: [
    '✈️','🚂','🚢','🚀','🛸','🏖️','🏔️','🗼','🗽','🏯','🕌','⛩️',
    '🎡','🎢','🏕️','🌋','🏝️','🏜️','🌁','🌃','🏙️','🌄','🌅','🗺️',
    '🧭','⛺','🚁','🛶','🚤','⛵','🚠','🚡','🚟','🚃','🚋','🚞',
    '🚝','🚄','🚅','🚆','🚇','🚈','🚉','🚊','🚍','🚎','🚐','🚑'
  ]},
  { label: '💰 Finance', emojis: [
    '💰','💵','💴','💶','💷','💸','💳','🏦','📈','📉','📊','🪙',
    '💹','🤑','🏧','💲','🪙','📑','🧾','🗂️','📋','💼','🤝','✅',
    '🎯','🏆','🔑','🗝️','🔐','🔒','🔓','💡','🧩','⚖️','🛡️','🎪'
  ]},
];

const EMOJIS = EMOJI_CATS.flatMap(c => c.emojis);
let selectedEmoji = '💪';
let pickerOpen = false;

let today = new Date();
let curYear = today.getFullYear();
let curMonth = today.getMonth();

let habits = JSON.parse(localStorage.getItem('ht_habits') || '[]');
let logs   = JSON.parse(localStorage.getItem('ht_logs')   || '{}');

// Default habits on first load
if (!habits.length) {
  habits = [
    { id: 1, name: 'Exercise',  emoji: '🏋️' },
    { id: 2, name: 'Read',      emoji: '📚' },
    { id: 3, name: 'code,       emoji: '💻' }
  ];
  saveHabits();
}

function saveHabits() {
  localStorage.setItem('ht_habits', JSON.stringify(habits));
}

function saveLogs() {
  localStorage.setItem('ht_logs', JSON.stringify(logs));
}

function key(y, m, d) {
  return `${y}-${m + 1}-${d}`;
}

function daysInMonth(y, m) {
  return new Date(y, m + 1, 0).getDate();
}

function togglePicker() {
  pickerOpen = !pickerOpen;
  document.getElementById('emojiPickerDrop').style.display = pickerOpen ? 'block' : 'none';
  document.getElementById('emojiPickerDrop').innerHTML = pickerOpen ? buildPicker() : '';
}

function buildPicker() {
  return `<div class="picker-inner">` +
    EMOJI_CATS.map(cat => `
      <div class="picker-cat-label">${cat.label}</div>
      <div class="picker-grid">
        ${cat.emojis.map(e => `
          <div class="picker-emoji${e === selectedEmoji ? ' sel' : ''}" onclick="selectEmoji('${e}')">${e}</div>
        `).join('')}
      </div>
    `).join('') +
  `</div>`;
}

function selectEmoji(e) {
  selectedEmoji = e;
  document.getElementById('emojiBtn').textContent = e;
  document.getElementById('emojiPickerDrop').innerHTML = buildPicker();
}

function addHabit() {
  const inp  = document.getElementById('habitInput');
  const name = inp.value.trim();
  if (!name) return;
  habits.push({ id: Date.now(), name, emoji: selectedEmoji });
  saveHabits();
  inp.value = '';
  pickerOpen = false;
  document.getElementById('emojiPickerDrop').style.display = 'none';
  render();
}

// Close picker when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.emoji-picker-wrap')) {
    pickerOpen = false;
    const drop = document.getElementById('emojiPickerDrop');
    if (drop) drop.style.display = 'none';
  }
});

function delHabit(id) {
  habits = habits.filter(h => h.id != id);
  saveHabits();
  render();
}

function toggle(hid, y, m, d) {
  const k = key(y, m, d);
  if (!logs[k]) logs[k] = {};
  logs[k][hid] = !logs[k][hid];
  saveLogs();
  render();
}

function changeMonth(delta) {
  curMonth += delta;
  if (curMonth > 11) { curMonth = 0; curYear++; }
  if (curMonth < 0)  { curMonth = 11; curYear--; }
  render();
}

function getStreak(hid) {
  const y = curYear, m = curMonth;
  const isThisMonth = (y === today.getFullYear() && m === today.getMonth());
  const endDay = isThisMonth ? today.getDate() : daysInMonth(y, m);
  let streak = 0;
  for (let d = endDay; d >= 1; d--) {
    const k = key(y, m, d);
    if (logs[k] && logs[k][hid]) streak++;
    else break;
  }
  return streak;
}

function bestStreak() {
  if (!habits.length) return 0;
  const y = curYear, m = curMonth;
  const tot = daysInMonth(y, m);
  const allDays = [];
  for (let d = 1; d <= tot; d++) {
    const k = key(y, m, d);
    const done = habits.filter(h => logs[k] && logs[k][h.id]).length;
    allDays.push(done > 0);
  }
  let best = 0, cur = 0;
  for (const b of allDays) {
    if (b) { cur++; best = Math.max(best, cur); }
    else cur = 0;
  }
  return best;
}

function render() {
  const y = curYear, m = curMonth;
  const tot = daysInMonth(y, m);
  const isThisMonth = (y === today.getFullYear() && m === today.getMonth());
  const todayD = today.getDate();

  document.getElementById('monthLabel').textContent = MONTHS[m] + ' ' + y;

  // Visible days (7 days around today for this month, else start from 1)
  const startDay = isThisMonth ? Math.max(1, todayD - 3) : 1;
  const visibleDays = [];
  for (let d = startDay; d < startDay + 7 && d <= tot; d++) visibleDays.push(d);

  const dh = document.getElementById('dayHeaderDots');
  dh.innerHTML = visibleDays.map(d => `<div class="dot-label-head">${d}</div>`).join('');

  const list = document.getElementById('habitsList');
  if (!habits.length) {
    list.innerHTML = '<div class="empty-state">Add your first habit above</div>';
  } else {
    list.innerHTML = habits.map(h => {
      const dots = visibleDays.map(d => {
        const k    = key(y, m, d);
        const done = logs[k] && logs[k][h.id];
        const isTod = isThisMonth && d === todayD;
        return `<div class="dot${done ? ' done' : ''}${isTod ? ' today' : ''}"
          onclick="toggle(${h.id},${y},${m},${d})" title="Day ${d}"></div>`;
      }).join('');
      const streak = getStreak(h.id);
      return `<div class="habit-row">
        <div class="habit-emoji">${h.emoji}</div>
        <div class="habit-name">${h.name}</div>
        <div class="dots">${dots}</div>
        <div class="habit-streak">${streak > 0 ? streak + 'd' : ''}</div>
        <button class="del-btn" onclick="delHabit(${h.id})">&#215;</button>
      </div>`;
    }).join('');
  }

  let totalChecks = 0;
  const possibleChecks = habits.length * tot;
  for (let d = 1; d <= tot; d++) {
    const k = key(y, m, d);
    habits.forEach(h => { if (logs[k] && logs[k][h.id]) totalChecks++; });
  }
  const rate = possibleChecks ? Math.round(totalChecks / possibleChecks * 100) : 0;
  const todK = key(y, m, todayD);
  const doneToday = isThisMonth ? habits.filter(h => logs[todK] && logs[todK][h.id]).length : '-';

  document.getElementById('statRate').textContent   = rate + '%';
  document.getElementById('statStreak').textContent = bestStreak() + 'd';
  document.getElementById('statDone').textContent   = doneToday + '/' + habits.length;
  document.getElementById('statMonth').textContent  = totalChecks;

  const circ   = 2 * Math.PI * 44;
  const offset = circ * (1 - rate / 100);
  document.getElementById('ringFill').style.strokeDashoffset = offset;
  document.getElementById('ringPct').textContent  = rate + '%';
  document.getElementById('ringSubLabel').textContent = totalChecks + ' / ' + possibleChecks + ' checks';

  const bars = document.getElementById('habitBars');
  bars.innerHTML = habits.map(h => {
    let cnt = 0;
    for (let d = 1; d <= tot; d++) {
      const k = key(y, m, d);
      if (logs[k] && logs[k][h.id]) cnt++;
    }
    const p = Math.round(cnt / tot * 100);
    return `<div class="hbar">
      <div class="hbar-name">${h.emoji} ${h.name}</div>
      <div class="hbar-track"><div class="hbar-fill" style="width:${p}%"></div></div>
      <div class="hbar-pct">${p}%</div>
    </div>`;
  }).join('');

  renderCal(y, m, tot);

  renderChart(y, m, tot);

  loadThoughts();
}

function renderCal(y, m, tot) {
  const firstDow = new Date(y, m, 1).getDay();
  const isThisMonth = (y === today.getFullYear() && m === today.getMonth());
  let cells = '';
  for (let i = 0; i < firstDow; i++) cells += `<div class="cal-cell empty"></div>`;
  for (let d = 1; d <= tot; d++) {
    const k    = key(y, m, d);
    const done = habits.filter(h => logs[k] && logs[k][h.id]).length;
    const pct  = Math.floor(done / (habits.length || 1) * 4);
    const isTod = isThisMonth && d === today.getDate();
    cells += `<div class="cal-cell${done > 0 ? ' has-data' : ''}${isTod ? ' today-cell' : ''}"
      data-pct="${pct}" title="Day ${d}: ${done}/${habits.length}">${d}</div>`;
  }
  document.getElementById('calGrid').innerHTML = cells;
}

function renderChart(y, m, tot) {
  document.getElementById('chartMonthLabel').textContent = MONTHS[m] + ' ' + y;

  const labels = [];
  const data = [];
  const isThisMonth = (y === today.getFullYear() && m === today.getMonth());
  const lastDay = isThisMonth ? today.getDate() : tot;

  for (let d = 1; d <= lastDay; d++) {
    labels.push(d);
    const k = key(y, m, d);
    const done = habits.filter(h => logs[k] && logs[k][h.id]).length;
    const pct = habits.length ? Math.round(done / habits.length * 100) : 0;
    data.push(pct);
  }

  const ctx = document.getElementById('trendChart').getContext('2d');

  if (trendChart) trendChart.destroy();

  trendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Completion %',
        data,
        fill: true,
        tension: 0.4,
        borderColor: '#2563eb',
        borderWidth: 2,
        pointRadius: data.length <= 14 ? 4 : 2,
        pointBackgroundColor: '#2563eb',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        backgroundColor: function(context) {
          const chart = context.chart;
          const { ctx: c, chartArea } = chart;
          if (!chartArea) return 'transparent';
          const gradient = c.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, 'rgba(37,99,235,0.20)');
          gradient.addColorStop(1, 'rgba(37,99,235,0.02)');
          return gradient;
        }
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.parsed.y}% completed`
          },
          backgroundColor: '#111',
          titleColor: '#fff',
          bodyColor: '#9FE1CB',
          padding: 10,
          cornerRadius: 8,
          displayColors: false
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: '#aaa',
            font: { family: 'DM Mono', size: 11 },
            maxTicksLimit: 10
          },
          border: { display: false }
        },
        y: {
          min: 0,
          max: 100,
          grid: { color: '#f0f0ee', lineWidth: 1 },
          ticks: {
            color: '#aaa',
            font: { family: 'DM Mono', size: 11 },
            callback: v => v + '%',
            stepSize: 25
          },
          border: { display: false }
        }
      },
      interaction: { mode: 'index', intersect: false }
    }
  });
}

function saveThoughts() {
  const text = document.getElementById('thoughtsInput').value;
  const k = `ht_thoughts_${curYear}_${curMonth}`;
  localStorage.setItem(k, text);
  const saved = document.getElementById('thoughtsSaved');
  saved.textContent = 'Saved ✓';
  setTimeout(() => saved.textContent = '', 2000);
}

function loadThoughts() {
  const k = `ht_thoughts_${curYear}_${curMonth}`;
  const text = localStorage.getItem(k) || '';
  document.getElementById('thoughtsInput').value = text;
  document.getElementById('thoughtsMonthLabel').textContent = MONTHS[curMonth] + ' ' + curYear;
  document.getElementById('thoughtsSaved').textContent = '';
}

let trendChart = null;

render();
