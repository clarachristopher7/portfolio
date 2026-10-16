// Everything the recipe needs at run time, in one function with no imports
// and no outside variables. The page calls it during the build to write the
// default amounts, and also prints its source into an inline script, so the
// controls work even on a copy of the site that has no React bundle.
// Keep it plain: no spread, destructuring, or classes, which Babel would
// replace with helpers that live outside the function.
export default function pieRuntime() {
  var FRACTIONS = [[0, ''], [0.125, '⅛'], [0.25, '¼'], [1 / 3, '⅓'], [0.5, '½'], [2 / 3, '⅔'], [0.75, '¾'], [1, '']];
  var PLURAL = {cup: 'cups', egg: 'eggs'};
  var KEY = 'cherry-pie';

  function fraction(n) {
    var whole = Math.floor(n), rest = n - whole, best = FRACTIONS[0];
    for (var i = 1; i < FRACTIONS.length; i++) {
      if (Math.abs(FRACTIONS[i][0] - rest) < Math.abs(best[0] - rest)) best = FRACTIONS[i];
    }
    if (best[0] === 1) { whole += 1; best = FRACTIONS[0]; }
    return ((whole ? String(whole) : '') + best[1]) || '0';
  }

  // Grams and millilitres round to something you can measure.
  function metricNumber(n) {
    return String(n < 20 ? Math.round(n) : Math.round(n / 5) * 5);
  }

  // item.us and item.m are [quantity, unit]. A quantity can be a [low, high]
  // range. Spoons stay spoons in metric, since metric kitchens use them too.
  function amount(item, pies, units) {
    var pair = units === 'metric' && item.m ? item.m : item.us;
    var q = pair[0], unit = pair[1];
    var metric = unit === 'g' || unit === 'ml';
    var fmt = function (n) { return metric ? metricNumber(n * pies) : fraction(n * pies); };
    var top = Array.isArray(q) ? q[1] * pies : q * pies;
    var text = Array.isArray(q) ? fmt(q[0]) + ' to ' + fmt(q[1]) : fmt(q);
    if (unit === 'g' && top >= 1000 && !Array.isArray(q)) {
      return String(Math.round(top / 100) / 10) + ' kg';
    }
    var label = top > 1 && PLURAL[unit] ? PLURAL[unit] : unit;
    return label ? text + ' ' + label : text;
  }

  function temp(f, units) {
    return units === 'metric' ? Math.round((f - 32) * 5 / 9 / 5) * 5 + '°C' : f + '°F';
  }

  function length(inches, units) {
    return units === 'metric' ? Math.round(inches * 2.54) + ' cm' : inches + '-inch';
  }

  function enhance(root) {
    if (!root || root.getAttribute('data-ready')) return;
    root.setAttribute('data-ready', '1');
    root.classList.add('pie--live');

    var state = {pies: 1, units: 'us', done: []};
    try {
      var saved = JSON.parse(window.localStorage.getItem(KEY) || '{}');
      if (saved.units === 'metric') state.units = 'metric';
      if (saved.pies >= 1 && saved.pies <= 3) state.pies = saved.pies;
      if (Array.isArray(saved.done)) state.done = saved.done;
    } catch (e) { /* Storage can be blocked. The page still works. */ }

    function save() {
      try { window.localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
    }
    function all(sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }

    function render() {
      all('[data-amt]').forEach(function (el) {
        el.textContent = amount(JSON.parse(el.getAttribute('data-amt')), state.pies, state.units);
      });
      all('[data-temp]').forEach(function (el) { el.textContent = temp(+el.getAttribute('data-temp'), state.units); });
      all('[data-len]').forEach(function (el) { el.textContent = length(+el.getAttribute('data-len'), state.units); });
      all('[data-pies]').forEach(function (b) { b.setAttribute('aria-pressed', String(+b.getAttribute('data-pies') === state.pies)); });
      all('[data-units]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-units') === state.units)); });
      all('[data-yield]').forEach(function (el) {
        el.textContent = state.pies === 1 ? 'One pie, about 8 slices.'
          : state.pies + ' pies, about ' + state.pies * 8 + ' slices. Make each one separately.';
      });
      all('input[data-id]').forEach(function (c) { c.checked = state.done.indexOf(c.getAttribute('data-id')) > -1; });
    }

    all('[data-pies]').forEach(function (b) {
      b.addEventListener('click', function () { state.pies = +b.getAttribute('data-pies'); save(); render(); });
    });
    all('[data-units]').forEach(function (b) {
      b.addEventListener('click', function () { state.units = b.getAttribute('data-units'); save(); render(); });
    });
    all('input[data-id]').forEach(function (c) {
      c.addEventListener('change', function () {
        var id = c.getAttribute('data-id');
        state.done = state.done.filter(function (d) { return d !== id; });
        if (c.checked) state.done.push(id);
        save();
      });
    });
    all('[data-reset]').forEach(function (b) {
      b.addEventListener('click', function () { state.done = []; save(); render(); });
    });
    all('[data-print]').forEach(function (b) {
      b.addEventListener('click', function () { window.print(); });
    });

    // Step timers. The chime is made with Web Audio, so there's no sound file.
    var audio = null;
    function chime() {
      if (!audio) return;
      [0, 0.25, 0.5].forEach(function (t, i) {
        var o = audio.createOscillator(), g = audio.createGain(), at = audio.currentTime + t;
        o.frequency.value = [880, 1175, 1568][i];
        g.gain.setValueAtTime(0.0001, at);
        g.gain.exponentialRampToValueAtTime(0.2, at + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, at + 0.6);
        o.connect(g); g.connect(audio.destination); o.start(at); o.stop(at + 0.65);
      });
    }
    function clock(s) {
      var h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), sec = s % 60;
      var mm = (h && m < 10 ? '0' : '') + m;
      return (h ? h + ':' : '') + mm + ':' + (sec < 10 ? '0' : '') + sec;
    }
    all('[data-timer]').forEach(function (b) {
      var label = b.textContent, end = 0, tick = null;
      function stop(text) { clearInterval(tick); tick = null; b.textContent = text; b.classList.remove('is-running'); }
      b.addEventListener('click', function () {
        if (tick) { stop(label); return; }
        try { audio = audio || new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { /* no sound */ }
        end = Date.now() + +b.getAttribute('data-timer') * 60000;
        b.classList.add('is-running');
        b.classList.remove('is-done');
        var step = function () {
          var left = Math.max(0, Math.round((end - Date.now()) / 1000));
          b.textContent = clock(left) + ' left. Tap to stop';
          if (!left) { stop('Time’s up'); b.classList.add('is-done'); chime(); }
        };
        step();
        tick = setInterval(step, 1000);
      });
    });

    // Keep the screen on while cooking, where the browser supports it.
    var lock = null;
    all('[data-wake]').forEach(function (b) {
      if (!('wakeLock' in navigator)) return;
      b.hidden = false;
      function show() { b.setAttribute('aria-pressed', String(!!lock)); }
      b.addEventListener('click', function () {
        if (lock) { lock.release(); lock = null; show(); return; }
        navigator.wakeLock.request('screen').then(function (l) {
          lock = l;
          l.addEventListener('release', function () { if (lock === l) { lock = null; show(); } });
          show();
        }).catch(function () { /* denied */ });
      });
    });

    render();
  }

  return {amount: amount, temp: temp, length: length, enhance: enhance};
}
