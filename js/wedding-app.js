/**
 * FOREVER LOVE - LUXURY WEDDING & EVENT MANAGEMENT
 * Modern Interactive Engine (Navigation, Calculator, Tabs, BGM Synthesizer, RSVP)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Drawer Navigation
  initMobileDrawer();

  // 2. Header Scroll Effect
  initHeaderScroll();

  // 3. Cuisine Tabs Switcher
  initCuisineTabs();

  // 4. Budget Calculator
  initBudgetCalculator();

  // 5. Wedding Countdown Timer
  initCountdownTimer();

  // 6. Ambient Romantic BGM Synthesizer
  initBgmAudio();

  // 7. RSVP & Booking Form Handler
  initRsvpForm();

  // 8. Gallery Category Filter
  initGalleryFilters();

  // 9. Styling Studio Tabs (Makeup, Hair, Dress Fitting)
  initStylingTabs();
});

/* -------------------------------------------------------------
 * Styling Studio Tabs Switcher
 * ------------------------------------------------------------- */
function initStylingTabs() {
  const tabBtns = document.querySelectorAll('.styling-tab-btn');
  const tabPanes = document.querySelectorAll('.styling-tab-pane');

  if (!tabBtns.length || !tabPanes.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(targetId);
      if (activePane) {
        activePane.classList.add('active');
      }
    });
  });
}

/* -------------------------------------------------------------
 * 1. Mobile Drawer
 * ------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const closeBtn = document.querySelector('.drawer-close-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const drawerLinks = document.querySelectorAll('.drawer-links a');

  if (!toggleBtn || !drawer || !backdrop) return;

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* -------------------------------------------------------------
 * 2. Header Scroll State
 * ------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.luxury-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* -------------------------------------------------------------
 * 3. Cuisine Tabs Switcher
 * ------------------------------------------------------------- */
function initCuisineTabs() {
  const tabBtns = document.querySelectorAll('.cuisine-tab-btn');
  const tabPanes = document.querySelectorAll('.cuisine-content-pane');

  if (!tabBtns.length || !tabPanes.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(targetId);
      if (activePane) {
        activePane.classList.add('active');
      }
    });
  });
}

/* -------------------------------------------------------------
 * 4. Interactive Wedding Budget & Cost Estimator Calculator
 * ------------------------------------------------------------- */
function initBudgetCalculator() {
  const weddingTypeSelect = document.getElementById('calc-wedding-type');
  const guestSlider = document.getElementById('calc-guests');
  const guestDisplay = document.getElementById('calc-guests-val');
  const cateringSelect = document.getElementById('calc-catering');
  const djCheckbox = document.getElementById('calc-add-dj');
  const dholCheckbox = document.getElementById('calc-add-dhol');
  const photoCheckbox = document.getElementById('calc-add-photo');
  const decorCheckbox = document.getElementById('calc-add-decor');

  const totalCostEl = document.getElementById('calc-total-cost');
  const breakdownCateringEl = document.getElementById('bd-catering');
  const breakdownVenueEl = document.getElementById('bd-venue');
  const breakdownMusicEl = document.getElementById('bd-music');
  const breakdownMediaEl = document.getElementById('bd-media');

  if (!guestSlider || !totalCostEl) return;

  function calculate() {
    const guests = parseInt(guestSlider.value, 10) || 200;
    if (guestDisplay) guestDisplay.textContent = guests.toLocaleString();

    // Base type multipliers / venue base cost
    const weddingType = weddingTypeSelect ? weddingTypeSelect.value : 'royal';
    let venueBase = 150000;
    if (weddingType === 'destination') venueBase = 350000;
    if (weddingType === 'intimate') venueBase = 80000;
    if (weddingType === 'ballroom') venueBase = 250000;
    if (weddingType === 'cocktail') venueBase = 120000;

    // Catering cost per guest
    const cateringPlan = cateringSelect ? cateringSelect.value : 'multi';
    let perPlate = 1400;
    if (cateringPlan === 'standard') perPlate = 850;
    if (cateringPlan === 'platinum') perPlate = 2200;

    const totalCatering = guests * perPlate;

    // Music & DJ
    let musicCost = 0;
    if (djCheckbox && djCheckbox.checked) musicCost += 65000;
    if (dholCheckbox && dholCheckbox.checked) musicCost += 35000;

    // Media & Decor
    let mediaCost = 0;
    if (photoCheckbox && photoCheckbox.checked) mediaCost += 95000;
    if (decorCheckbox && decorCheckbox.checked) venueBase += 120000;

    const grandTotal = venueBase + totalCatering + musicCost + mediaCost;

    totalCostEl.textContent = '₹ ' + grandTotal.toLocaleString('en-IN');
    if (breakdownCateringEl) breakdownCateringEl.textContent = '₹ ' + totalCatering.toLocaleString('en-IN');
    if (breakdownVenueEl) breakdownVenueEl.textContent = '₹ ' + venueBase.toLocaleString('en-IN');
    if (breakdownMusicEl) breakdownMusicEl.textContent = '₹ ' + musicCost.toLocaleString('en-IN');
    if (breakdownMediaEl) breakdownMediaEl.textContent = '₹ ' + mediaCost.toLocaleString('en-IN');
  }

  // Bind Events
  if (guestSlider) guestSlider.addEventListener('input', calculate);
  if (weddingTypeSelect) weddingTypeSelect.addEventListener('change', calculate);
  if (cateringSelect) cateringSelect.addEventListener('change', calculate);
  if (djCheckbox) djCheckbox.addEventListener('change', calculate);
  if (dholCheckbox) dholCheckbox.addEventListener('change', calculate);
  if (photoCheckbox) photoCheckbox.addEventListener('change', calculate);
  if (decorCheckbox) decorCheckbox.addEventListener('change', calculate);

  calculate();
}

/* -------------------------------------------------------------
 * 5. Wedding Countdown Timer (1500 Days Reverse Countdown)
 * ------------------------------------------------------------- */
function initCountdownTimer() {
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  const TOTAL_DAYS = 1500;
  const STORAGE_KEY = 'wedding_countdown_target_1500';
  let savedTarget = localStorage.getItem(STORAGE_KEY);
  let targetDate;

  // Initialize or retrieve persistent 1500 days target
  if (!savedTarget || isNaN(Number(savedTarget)) || Number(savedTarget) <= Date.now()) {
    targetDate = Date.now() + TOTAL_DAYS * 24 * 60 * 60 * 1000;
    localStorage.setItem(STORAGE_KEY, String(targetDate));
  } else {
    targetDate = Number(savedTarget);
  }

  function update() {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(d);
    hoursEl.textContent = String(h).padStart(2, '0');
    minsEl.textContent = String(m).padStart(2, '0');
    secsEl.textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* -------------------------------------------------------------
 * 6. Ambient Romantic BGM Synthesizer (Web Audio API)
 * ------------------------------------------------------------- */
function initBgmAudio() {
  const audioBtn = document.getElementById('audio-bgm-toggle');
  if (!audioBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let timerId = null;

  // Romantic pentatonic chord notes for wedding chime
  const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
  let noteIndex = 0;

  function playChimeNote(freq) {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.8);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 1.8);
    } catch (e) {
      console.warn('Audio note error:', e);
    }
  }

  function startMelody() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isPlaying = true;
    audioBtn.classList.add('playing');
    audioBtn.innerHTML = '<i class="fa-solid fa-music"></i> <span>Music: Playing</span>';

    // Loop through gentle harmony
    timerId = setInterval(() => {
      const melodyPattern = [0, 2, 4, 7, 5, 4, 2, 1];
      const freq = notes[melodyPattern[noteIndex % melodyPattern.length]];
      playChimeNote(freq);
      noteIndex++;
    }, 450);
  }

  function stopMelody() {
    isPlaying = false;
    audioBtn.classList.remove('playing');
    audioBtn.innerHTML = '<i class="fa-solid fa-play"></i> <span>Wedding Music</span>';
    if (timerId) clearInterval(timerId);
  }

  audioBtn.addEventListener('click', () => {
    if (!isPlaying) {
      startMelody();
    } else {
      stopMelody();
    }
  });
}

/* -------------------------------------------------------------
 * 7. VIP RSVP & Booking Form Handler
 * ------------------------------------------------------------- */
function initRsvpForm() {
  const form = document.getElementById('luxury-rsvp-form');
  const toast = document.getElementById('luxury-toast');
  const toastMsg = document.getElementById('toast-msg');

  if (!form) return;

  function showToast(message) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = form.querySelector('input[name="fullname"]');
    const phoneInput = form.querySelector('input[name="phone"]');

    if (!nameInput || !nameInput.value.trim()) {
      showToast('Please enter your full name.');
      return;
    }

    if (!phoneInput || !phoneInput.value.trim()) {
      showToast('Please enter your phone number.');
      return;
    }

    showToast('✨ Thank you, ' + nameInput.value.trim() + '! Your VIP Wedding Consultation has been booked. Our master event planner will call you shortly!');
    form.reset();
  });
}

/* -------------------------------------------------------------
 * 8. Gallery Filter Tags Switcher
 * ------------------------------------------------------------- */
function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.cuisine-tabs-nav [data-filter]');
  const galleryItems = document.querySelectorAll('.photo-card-item[data-category]');

  if (!filterBtns.length || !galleryItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          item.style.animation = 'fadeInPane 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}
