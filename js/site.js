document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.loc-lightbox').forEach(function (lb) {
        var images  = lb.getAttribute('data-images').split(',');
        var prefix  = lb.getAttribute('data-prefix');
        var total   = images.length;
        var current = 0;

        // Parse captions JSON array; falls back to filenames if absent or malformed
        var captions = images; // default: filename as caption
        try {
            var raw = lb.getAttribute('data-captions');
            if (raw) captions = JSON.parse(raw);
        } catch (e) {}

        var imgEl     = lb.querySelector('.loc-lightbox-img');
        var captionEl = lb.querySelector('.loc-lightbox-caption');
        var counter   = lb.querySelector('.loc-lightbox-counter');

        // ── helpers ────────────────────────────────────────────────────
        function go(idx) {
            current = ((idx % total) + total) % total;
            imgEl.src = prefix + '/' + images[current];
            imgEl.alt = captions[current] || images[current];
            if (captionEl) captionEl.textContent = captions[current] || images[current];
            if (counter)   counter.textContent   = (current + 1) + ' / ' + total;
        }

        function open(idx) {
            go(idx);
            lb.removeAttribute('hidden');
            document.body.style.overflow = 'hidden';
            lb.focus();
        }

        function close() {
            lb.setAttribute('hidden', '');
            document.body.style.overflow = '';
        }

        // ── thumbnail clicks ───────────────────────────────────────────
        document.querySelectorAll('[data-lightbox="' + lb.id + '"]').forEach(function (th) {
            th.addEventListener('click', function () {
                open(parseInt(th.getAttribute('data-gallery-index') || '0', 10));
            });
        });

        // ── backdrop click ─────────────────────────────────────────────
        lb.addEventListener('click', function (e) {
            if (e.target === lb) close();
        });

        // ── close button ───────────────────────────────────────────────
        var closeBtn = lb.querySelector('.loc-lightbox-close');
        if (closeBtn) closeBtn.addEventListener('click', close);

        // ── left / right click zones ───────────────────────────────────
        var zoneL = lb.querySelector('.loc-lightbox-zone-left');
        var zoneR = lb.querySelector('.loc-lightbox-zone-right');
        if (zoneL) zoneL.addEventListener('click', function (e) { e.stopPropagation(); go(current - 1); });
        if (zoneR) zoneR.addEventListener('click', function (e) { e.stopPropagation(); go(current + 1); });

        // ── keyboard ───────────────────────────────────────────────────
        lb.addEventListener('keydown', function (e) {
            switch (e.key) {
                case 'ArrowLeft':  go(current - 1); e.preventDefault(); break;
                case 'ArrowRight': go(current + 1); e.preventDefault(); break;
                case 'ArrowUp':
                case 'ArrowDown':
                case 'Escape':     close();          e.preventDefault(); break;
            }
        });
    });
});
