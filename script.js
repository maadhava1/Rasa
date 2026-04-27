/* ============================================================
   RASA CATERERS — script.js
   ============================================================ */

(function () {
  'use strict';

  /* --- MOBILE NAV ----------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const overlay   = document.getElementById('nav-overlay');
  const navClose  = document.getElementById('nav-close');

  function openNav() {
    document.body.classList.add('nav-open');
    overlay.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('aria-hidden', 'false');
    navClose && navClose.focus();
  }

  function closeNav() {
    document.body.classList.remove('nav-open');
    overlay.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
    hamburger.focus();
  }

  hamburger && hamburger.addEventListener('click', function () {
    overlay.classList.contains('open') ? closeNav() : openNav();
  });
  navClose && navClose.addEventListener('click', closeNav);

  overlay && overlay.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeNav();
  });

  /* --- SCROLL HEADER --------------------------------------- */
  const header = document.getElementById('site-header');
  const hero   = document.getElementById('hero');

  if (hero && header) {
    const observer = new IntersectionObserver(
      function (entries) {
        header.classList.toggle('scrolled', !entries[0].isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(hero);
  }

  /* --- SMOOTH SCROLL --------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* --- ENTRANCE ANIMATIONS --------------------------------- */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    const revealObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.section-reveal').forEach(function (el) {
      revealObs.observe(el);
    });
  } else {
    document.querySelectorAll('.section-reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* --- COUNTER ANIMATION ----------------------------------- */
  function animateCounter(el, target, duration) {
    var start = 0;
    var startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.floor(eased * target).toLocaleString('en-IN');
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-num[data-target]').forEach(function (num) {
          var target = parseInt(num.getAttribute('data-target'), 10);
          animateCounter(num, target, 1800);
          num.removeAttribute('data-target');
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  var statsBand = document.querySelector('.stats-band');
  if (statsBand) statsObserver.observe(statsBand);

  /* --- CONTACT FORM VALIDATION ---------------------------- */
  var form        = document.getElementById('contact-form');
  var formSuccess = document.getElementById('form-success');

  if (!form) return;

  function setError(fieldId, errorId, msg) {
    var field = document.getElementById(fieldId);
    var error = document.getElementById(errorId);
    if (error) error.textContent = msg;
    field && field.closest('.form-field') && field.closest('.form-field').classList.add('has-error');
  }

  function clearError(fieldId, errorId) {
    var field = document.getElementById(fieldId);
    var error = document.getElementById(errorId);
    if (error) error.textContent = '';
    field && field.closest('.form-field') && field.closest('.form-field').classList.remove('has-error');
  }

  function validate() {
    var ok = true;
    var fields = [
      { id: 'name',       err: 'name-error'  },
      { id: 'phone',      err: 'phone-error' },
      { id: 'event-type', err: 'event-error' },
      { id: 'message',    err: 'message-error' }
    ];
    fields.forEach(function (f) { clearError(f.id, f.err); });

    var name = document.getElementById('name');
    if (!name || !name.value.trim()) {
      setError('name', 'name-error', 'Please enter your full name.');
      ok = false;
    }

    var phone = document.getElementById('phone');
    var phoneVal = phone ? phone.value.replace(/\s+/g, '') : '';
    if (!phoneVal) {
      setError('phone', 'phone-error', 'Please enter your phone number.');
      ok = false;
    } else if (!/^[6-9]\d{9}$/.test(phoneVal)) {
      setError('phone', 'phone-error', 'Enter a valid 10-digit Indian mobile number.');
      ok = false;
    }

    var evt = document.getElementById('event-type');
    if (!evt || !evt.value) {
      setError('event-type', 'event-error', 'Please select an event type.');
      ok = false;
    }

    var msg = document.getElementById('message');
    if (!msg || !msg.value.trim()) {
      setError('message', 'message-error', 'Please tell us a bit about your event.');
      ok = false;
    }

    return ok;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) {
      var firstError = form.querySelector('.has-error');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Build WhatsApp message from form fields
    var name      = document.getElementById('name').value.trim();
    var phone     = document.getElementById('phone').value.trim();
    var eventType = document.getElementById('event-type');
    var eventLabel = eventType.options[eventType.selectedIndex].text;
    var date      = document.getElementById('event-date').value;
    var guests    = document.getElementById('guests').value;
    var message   = document.getElementById('message').value.trim();

    var text =
      'Hello Rasa Caterers! 🙏\n\n' +
      '📋 *New Enquiry*\n' +
      '👤 Name: ' + name + '\n' +
      '📞 Phone: ' + phone + '\n' +
      '🎉 Event: ' + eventLabel + '\n' +
      (date    ? '📅 Date: ' + date + '\n'          : '') +
      (guests  ? '👥 Guests: ' + guests + '\n'      : '') +
      '💬 Details: ' + message;

    var waURL = 'https://wa.me/918454931283?text=' + encodeURIComponent(text);
    window.open(waURL, '_blank');

    form.hidden = true;
    formSuccess.hidden = false;
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  // Clear error on input
  ['name', 'phone', 'event-type', 'message'].forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    var errMap = { 'name': 'name-error', 'phone': 'phone-error', 'event-type': 'event-error', 'message': 'message-error' };
    el.addEventListener('input', function () { clearError(id, errMap[id]); });
  });

})();
