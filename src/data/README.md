# Editable Data Files

This folder contains data files that you can easily edit to customize your portfolio website.

## 📱 Prototypes (prototypes.ts)

This file controls the **Interactive Prototypes** section on your homepage.

### How to Edit

1. Open `/data/prototypes.ts`
2. Each prototype object has the following properties:

```typescript
{
  id: 1,                    // Unique number for each prototype
  title: 'Your Project',    // Project name
  category: 'Web App',      // Project category (appears as badge)
  description: 'Brief...',  // Short description
  desktopImage: 'https://...',  // Desktop version image URL
  tabletImage: 'https://...',   // Tablet version image URL
  mobileImage: 'https://...',   // Mobile version image URL
  color: 'from-blue-500 to-cyan-500',  // Gradient overlay
}
```

### Image Guidelines

**Desktop Images (desktopImage):**
- Best aspect ratio: 16:9 (landscape)
- Recommended size: 1920x1080px or 1600x900px
- Shows in browser-style frame with chrome buttons

**Tablet Images (tabletImage):**
- Best aspect ratio: 3:4 (portrait)
- Recommended size: 1536x2048px or 768x1024px
- Shows in tablet frame with home button

**Mobile Images (mobileImage):**
- Best aspect ratio: 9:19.5 (tall portrait)
- Recommended size: 1170x2532px or 390x844px
- Shows in modern phone frame with notch

### Available Color Gradients

Choose from these pre-configured gradients:

- `'from-blue-500 to-cyan-500'` - Blue to Cyan
- `'from-purple-500 to-pink-500'` - Purple to Pink
- `'from-orange-500 to-red-500'` - Orange to Red
- `'from-green-500 to-emerald-500'` - Green to Emerald
- `'from-indigo-500 to-purple-500'` - Indigo to Purple
- `'from-rose-500 to-pink-500'` - Rose to Pink
- `'from-yellow-500 to-orange-500'` - Yellow to Orange
- `'from-teal-500 to-cyan-500'` - Teal to Cyan

### Adding New Prototypes

To add more prototypes, copy an existing object and paste it at the end:

```typescript
export const prototypes: Prototype[] = [
  // ... existing prototypes
  {
    id: 5,  // Increment the ID
    title: 'New Project Name',
    category: 'Your Category',
    description: 'Your description here',
    desktopImage: 'your-desktop-image-url',
    tabletImage: 'your-tablet-image-url',
    mobileImage: 'your-mobile-image-url',
    color: 'from-blue-500 to-cyan-500',
  },
];
```

### Removing Prototypes

Simply delete the entire prototype object from the array.

### Tips

1. **Same Image for All Devices?** You can use the same image URL for all three device types if you don't have separate versions.

2. **Getting Images:** 
   - Use your actual project screenshots
   - Or use placeholder images from Unsplash
   - Upload to a CDN or image hosting service

3. **Order Matters:** Prototypes display in the order they appear in the array (top to bottom).

4. **Testing:** After making changes, check all three device views (Desktop, Tablet, Mobile) to ensure images look good.

---

## 🚀 Quick Example

Replace a prototype's images with your own:

```typescript
{
  id: 1,
  title: 'My E-commerce Dashboard',
  category: 'Web Application',
  description: 'Admin panel for managing online store',
  desktopImage: 'https://your-cdn.com/dashboard-desktop.png',
  tabletImage: 'https://your-cdn.com/dashboard-tablet.png',
  mobileImage: 'https://your-cdn.com/dashboard-mobile.png',
  color: 'from-blue-500 to-cyan-500',
}
```

That's it! Your changes will automatically appear on the website.
