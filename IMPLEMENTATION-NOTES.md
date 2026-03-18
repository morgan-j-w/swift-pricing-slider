# Implementation Notes

## Why this version exists
This package is optimized for evaluation by the dev team rather than immediate production deployment.

## Recommended dev review checklist
- Validate responsiveness in your WordPress theme
- Check for CSS collisions with theme button styles and typography
- Decide whether CSS/JS should be inline, enqueued, or bundled into your theme/plugin
- Confirm pricing assumptions with commercial stakeholders
- Review copy tone for brand alignment

## Suggested production changes
- Replace `/contact/` with the real enquiry/demo URL
- Consider tracking interactions with analytics events:
  - contact volume change
  - frequency change
  - mode change
  - CTA click
- Consider exposing assumptions from a CMS field or JSON config instead of hardcoding them

## Where to tune values
In `assets/swift-pricing-calculator.js`:

- `monthlyBaseFee`
- `perMessageRate`
- `governmentBaseUplift`
- `governmentPerMessageUplift`

## Potential enhancement ideas
- Add "annual billing" toggle
- Add "multi-channel" option
- Add a comparison block below the calculator
- Add hidden form fields to prefill the selected scenario into a lead form
