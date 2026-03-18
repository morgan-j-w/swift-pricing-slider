# Swift Digital Pricing Slider Package

This package contains a lightweight HTML/CSS/JS pricing calculator for dev review.

## Files
- `index.html` — standalone demo page
- `wordpress-embed.html` — embeddable markup for a WordPress Custom HTML block
- `assets/swift-pricing-calculator.css` — styles
- `assets/swift-pricing-calculator.js` — calculator logic
- `IMPLEMENTATION-NOTES.md` — tuning and integration notes

## Intended positioning
This calculator is designed to avoid a raw per-email comparison and instead frame Swift Digital around:
- audience size
- communication frequency
- smarter sending
- governance/compliance value

## Quick review
1. Open `index.html` in a browser.
2. Review and adjust the pricing assumptions in `assets/swift-pricing-calculator.js`.
3. For WordPress:
   - either inline the CSS/JS into the page
   - or enqueue the CSS/JS via theme/plugin and paste `wordpress-embed.html` markup into a Custom HTML block

## Current assumptions
These values are placeholders for optics testing and should be reviewed:
- `monthlyBaseFee = 1200`
- `perMessageRate = 0.005`
- `governmentBaseUplift = 500`
- `governmentPerMessageUplift = 0.001`

## Notes
- Currency is set to AUD.
- CTA currently points to `/contact/`.
- The component is scoped to `#swift-pricing-calculator` to reduce style collisions.
