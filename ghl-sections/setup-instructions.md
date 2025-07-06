# GoHighLevel Website Setup Instructions

## Overview
This guide will help you recreate your Smart Solution Agency website using GoHighLevel's web builder with the provided HTML code blocks.

## Setup Process

### 1. Create Pages in GoHighLevel
Create these 4 pages in your GoHighLevel site:
- **Home** (main page)
- **About** 
- **Contact**
- **Pricing**

### 2. Header & Footer Setup

#### Header Code
- Go to **Settings > Website > Header**
- Copy and paste the code from `01-header.html`
- This will appear on all pages

#### Footer Code  
- Go to **Settings > Website > Footer**
- Copy and paste the code from `07-footer.html`
- This will appear on all pages

### 3. Home Page Setup
Add these sections in order to your Home page:

1. **Hero Section** - Copy from `02-hero.html`
2. **Services Section** - Copy from `03-services.html`  
3. **How It Works Section** - Copy from `04-how-it-works.html`
4. **Testimonials Section** - Copy from `05-testimonials.html`
5. **Call to Action Section** - Copy from `06-cta.html`

### 4. About Page Setup
- **Hero Section** - Copy from `02-hero.html` (modify title to "About Us")
- **Services Section** - Copy from `03-services.html`
- **Testimonials Section** - Copy from `05-testimonials.html`
- **Call to Action Section** - Copy from `06-cta.html`

### 5. Contact Page Setup
1. **Contact Form Section** - Copy from `08-contact-form.html`
2. **Calendar Section** - Copy from `09-calendar.html`

### 6. Pricing Page Setup
- Use the existing `pricing-ghl.html` file
- This is a complete standalone page with all sections included

## How to Add Code Blocks

1. In GoHighLevel page editor, click "Add Section"
2. Choose "Custom Code" or "HTML" 
3. Paste the HTML code from the corresponding file
4. Save and preview

## Important Notes

- All CSS is self-contained in each section
- Each section has unique class names (prefixed with `ghl-`) to avoid conflicts
- The calendar and contact form widgets are already configured with your GoHighLevel IDs
- Mobile responsive design is built-in
- All links between sections use anchor tags (#hero, #services, etc.)

## Customization

- Colors can be changed by modifying the CSS color values
- Text content can be edited directly in the HTML
- Add your logo by replacing the text logo in the header
- Update contact information and business details as needed

## Testing

After setup:
1. Test all navigation links
2. Verify contact form submission
3. Test calendar booking functionality  
4. Check mobile responsiveness
5. Ensure all sections display properly

## Support

If you need help with any section or encounter issues, refer back to the original React components for reference or contact support.