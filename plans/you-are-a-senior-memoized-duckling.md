# Wedding Invitation App — Design Update Plan

## Context

The user restored the app to a previous state and imported 4 new Figma design files:
- `Mobile-1/index.tsx` — new mobile cover layout
- `Desktop-1/index.tsx` — new desktop cover layout  
- `MobilePage-1/index.tsx` — new mobile invitation page layout
- `DesktopPage-1/index.tsx` — new desktop invitation page layout

Goal: replace layout/padding/gap in existing components with the new Figma designs while keeping all interactive functionality (countdown, RSVP form + GAS submission, lightbox gallery, copy PromptPay, phone/Instagram links, Maps).

---

## File 1: `src/app/components/CoverMobile.tsx`

**Changes:**
- SVG import: `svg-61rifmbnww` → `svg-uls5h6iw1j` from `../../imports/Mobile-1/`
- Image import path: `../../imports/Mobile/` → `../../imports/Mobile-1/`
- Image container classes: old fixed `bottom-[-84px] top-[-25.95px]` → new centered:
  ```
  -translate-y-1/2 absolute aspect-[679.860824192594/983.9515976357807]
  flex items-center justify-center left-[-138.85px] right-[-139.01px] top-[calc(50%+29.03px)]
  ```
- Keep `onOpen` button handler, keep Halimun inline style, keep all text content

---

## File 2: `src/app/components/CoverDesktop.tsx`

**Changes:**
- SVG import: `svg-81ajdhz6pi` → `svg-dxxpenpsow` from `../../imports/Desktop-1/`
- Image import path: `../../imports/Desktop/` → `../../imports/Desktop-1/`
- Restructure layout into Frame1 wrapper pattern from Desktop-1 (keep `useArtboardScale()` hook)
- Keep `onOpen` button handler

**New layout (inside the scaled artboard div):**
```
Image container:
  -translate-y-1/2 absolute aspect-[1167.49.../1708.07...]
  left-[-201.72px] right-[314.23px] top-[calc(50%+46.46px)]

Frame1 wrapper:
  -translate-x-1/2 absolute bottom-[28.03%] left-[calc(50%+351.5px)] top-[28.03%] w-[433px]

Inside Frame1:
  Artboard logo: absolute right-[152px] size-[128px] top-0
  "The wedding of": right-[293px] top-[calc(50%-20px)] translate-x-full
  "Chonratid & Artitaya": right-[433px] top-[215px] translate-x-full (Halimun style)
  "14 . 11 . 2026": right-[291px] top-[calc(50%+82px)] translate-x-full
  Button: absolute bottom-0 right-[88px] w-[257px] h-[39px] (onClick={onOpen})
```

---

## File 3: `src/app/components/InvitationPage.tsx`

Largest change: full layout rewrite from MobilePage-1/DesktopPage-1 while preserving all functional logic.

### Import path changes

| Old | New |
|-----|-----|
| `../../imports/MobilePage/svg-xfleuz9cvx` | `../../imports/MobilePage-1/svg-l8zijv88h4` |
| `../../imports/DesktopPage/svg-ryrx6siuez` | `../../imports/DesktopPage-1/svg-rd0v9r7b5j` |
| `../../imports/MobilePage/svg-jfm2j` (QR) | `../../imports/MobilePage-1/svg-0wr14` |
| (new) desktop QR | `../../imports/DesktopPage-1/svg-fsotq` |
| `../../imports/MobilePage/*.png` | `../../imports/MobilePage-1/*.png` (same hash names) |
| `../../imports/DesktopPage/*.png` | `../../imports/DesktopPage-1/*.png` |
| `imgPreWedding` (3aeafa9c...) | REMOVE — not in MobilePage-1 |
| `imgDesktopBg` (old path) | `../../imports/MobilePage-1/54901fe9...png` (bottom hero bg, also used in desktop) |

### Functional logic to preserve (keep verbatim)
- `GAS_URL` constant
- `WEDDING_DATE` constant  
- `useCountdown()` hook
- All form state: `fullName`, `nickname`, `guestOf`, `willAttend`, `numGuests`, `specialNotes`, `submitState`, `errors`
- `handleSubmit()` function
- `handleCopy()` function
- Lightbox state: `lightboxOpen`, `lightboxIndex`
- `handlePhotoClick(index)` function
- `GALLERY_IMAGES` array (update import paths to MobilePage-1)
- `Lightbox` component import (unchanged)

### Functional wiring in new layout
Replace static placeholder values in MobilePage-1/DesktopPage-1 JSX with:
- Countdown boxes: static numbers → `{cd.days}`, `{cd.hours}`, `{cd.minutes}`, `{cd.seconds}`
- Gallery imgs: add `onClick={() => handlePhotoClick(index)}`
- RSVP inputs: static divs → `<input value={...} onChange={...}>` bound to state
- Send RSVP button div → `<button onClick={handleSubmit}>`
- Copy PromptPay button → `onClick={handleCopy}`
- Phone number elements → wrap with `<a href="tel:...">`
- Instagram handles → wrap with `<a href="https://instagram.com/...">`

### Mobile vs Desktop rendering
Keep same pattern as current App.tsx:
- Mobile layout: from MobilePage-1 (absolute positioned, full-width sections)
- Desktop layout: from DesktopPage-1 (fixed-width contact cards `w-[334px]`, button `w-[299.27px]`)
- Both rendered inside `InvitationPage` via `isDesktop` prop

---

## Execution Order

1. `CoverMobile.tsx` — import paths + image container classes
2. `CoverDesktop.tsx` — import paths + Frame1 structure + keep scale hook
3. `InvitationPage.tsx` — rebuild layout from new imports + wire functional logic

---

## Verification

1. Mobile cover: hero image centered at 50%+29px, button triggers transition
2. Desktop cover: text panel uses Frame1 structure, scaled artboard, logo at top-right of panel
3. Countdown ticks live on invitation page (both mobile and desktop)
4. Gallery photo opens lightbox
5. RSVP form validates and submits to GAS (check Network tab for the POST)
6. Copy button copies "0909703424" with toast confirmation
7. Phone links open dialer, Instagram links open Instagram
