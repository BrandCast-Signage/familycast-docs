---
title: Browser Setup
---

# Browser Setup Guide

Learn how to configure your browser for optimal FamilyCast performance and navigate the link page to connect your displays.

## Overview

FamilyCast runs entirely in your web browser - no apps to install! This guide covers browser requirements, settings, and how to use the FamilyCast link page to select and display your family content.

**What You'll Learn:**
- Recommended browsers and settings
- Navigating the FamilyCast link page
- Setting up full-screen mode
- Configuring kiosk mode for permanent displays
- Troubleshooting browser issues

---

## Browser Requirements

### Recommended Browsers

**Best Performance:**
- **Chrome/Chromium** - Best compatibility and performance (recommended)
- **Firefox** - Excellent alternative with reliable performance
- **Safari** - Works well on Apple devices (iPad, Mac)
- **Edge** - Good performance on Windows devices

**Not Recommended:**
- Internet Explorer (not supported)
- Very old browser versions
- Browsers with aggressive ad blockers

### Required Browser Settings

For FamilyCast to work properly:

✅ **JavaScript** - Must be enabled (required for all features)
✅ **Cookies** - Must be enabled for your FamilyCast domain
✅ **Pop-up Blocker** - Should be disabled for FamilyCast domain
✅ **Auto-play** - Allow media auto-play for photos and videos
✅ **Hardware Acceleration** - Enable for smooth graphics (recommended)

### Checking Browser Compatibility

**To verify your browser is ready:**

1. Open your browser
2. Go to `familycast.app/browser-check` (coming soon)
3. See compatibility report
4. Fix any issues identified

**Manual Check:**
- Press F12 to open developer tools
- Go to Console tab
- Type: `navigator.userAgent`
- Verify modern browser version

---

## Understanding the Link Page

### What is the Link Page?

The FamilyCast link page is your family's central hub for accessing different displays. Instead of remembering multiple URLs, your family has one easy link that shows all available displays.

**URL Format:**
- Standard: `https://your-family-name.familycast.app`
- Custom Domain: `https://family.yourdomain.com` (if configured)

### Accessing the Link Page

**Step 1: Navigate to FamilyCast**

1. Open your web browser
2. Enter your family's FamilyCast URL
3. Press Enter to load

**Step 2: View Available Displays**

The link page shows:
- **Display Names** - Descriptive names like "Kitchen Display", "Living Room TV"
- **Display Icons** - Visual indicators of display type
- **Status Indicators** - Online (green), offline (gray), or updating (yellow)
- **Quick Info** - What each display shows (calendar, photos, etc.)
- **Last Updated** - When content was last refreshed

**Step 3: Select Your Display**

1. Find the display you want to view
2. Click or tap on the display name
3. Display loads and begins showing content
4. Enter full-screen mode (automatic or manual)

### Link Page Features

**Display Preview (Hover)**
- Hover over display name with mouse
- See thumbnail preview of current content
- Helps verify you're selecting the correct display

**Display Categories**
- **Family Hubs** - Central family information
- **Photo Displays** - Primarily photo slideshows
- **Kids Displays** - Child-focused content
- **Info Displays** - Weather, news, information

**Mobile-Friendly**
- Responsive design adapts to phone/tablet screens
- Touch-friendly buttons
- Swipe to browse displays
- Works with mobile browsers

---

## Full-Screen Mode

### Why Use Full-Screen?

Full-screen mode:
- Removes browser toolbars and address bar
- Maximizes content viewing area
- Looks more professional and polished
- Prevents accidental navigation away from display

### Automatic Full-Screen

Most FamilyCast displays automatically enter full-screen mode when loaded. You'll see:
1. Brief prompt: "Allow full-screen? (recommended)"
2. Click "Allow" or press Enter
3. Display enters full-screen immediately

**Note:** Browser may remember your choice for future visits.

### Manual Full-Screen

If automatic full-screen doesn't activate:

**Chrome/Edge (Windows/Linux):**
- Press `F11`
- OR Press `Ctrl + Shift + F`
- OR Click three-dot menu → Full screen icon

**Chrome/Edge (Mac):**
- Press `Cmd + Shift + F`
- OR Click View → Enter Full Screen

**Firefox (All Platforms):**
- Press `F11`
- OR Click menu → Full Screen

**Safari (Mac):**
- Press `Cmd + Shift + F`
- OR Click View → Enter Full Screen

### Exiting Full-Screen

**To exit full-screen mode:**
- Press `F11` (Windows/Linux)
- Press `Esc` key
- Press `Cmd + Shift + F` (Mac)
- Move mouse to top to reveal browser controls

**Note:** For permanent displays, you don't need to exit full-screen.

---

## Kiosk Mode (Advanced)

### What is Kiosk Mode?

Kiosk mode locks the browser to FamilyCast:
- Prevents users from navigating away
- Hides all browser controls
- Perfect for permanent display installations
- Requires command-line launch

**Use For:**
- Permanent wall-mounted displays
- Public family displays (entryway, kitchen)
- Kid-proof displays
- Dedicated devices

### Chrome Kiosk Mode

**Windows:**
```bash
chrome.exe --kiosk --disable-restore-session-state "https://your-family.familycast.app/display/kitchen"
```

**Mac:**
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --kiosk --disable-restore-session-state "https://your-family.familycast.app/display/kitchen"
```

**Linux:**
```bash
google-chrome --kiosk --disable-restore-session-state "https://your-family.familycast.app/display/kitchen"
```

**Creating Desktop Shortcut (Windows):**
1. Right-click desktop → New → Shortcut
2. Enter Chrome command above (with your URL)
3. Name shortcut "Kitchen Display"
4. Double-click to launch in kiosk mode

### Firefox Kiosk Mode

**All Platforms:**
```bash
firefox --kiosk "https://your-family.familycast.app/display/kitchen"
```

**Note:** Firefox kiosk mode is simpler but has fewer options than Chrome.

### Exiting Kiosk Mode

**Chrome:**
- Press `Alt + F4` (Windows/Linux)
- Press `Cmd + Q` (Mac)

**Firefox:**
- Press `Alt + F4` (Windows/Linux)
- Press `Cmd + Q` (Mac)

**Warning:** Make sure family members know how to exit in case of emergency!

---

## Bookmarks and Shortcuts

### Bookmarking Displays

**Option 1: Bookmark Link Page**
- Quick access to display selection
- Good for devices used for multiple displays
- Bookmark: `https://your-family.familycast.app`

**Option 2: Bookmark Specific Display**
- Direct link to individual display
- Skips link page selection
- Bookmark: `https://your-family.familycast.app/display/kitchen`

**Creating Bookmarks:**

**Chrome/Edge:**
1. Navigate to link page or display
2. Press `Ctrl + D` (Windows) or `Cmd + D` (Mac)
3. Name bookmark (e.g., "Family Displays" or "Kitchen Display")
4. Choose folder (Bookmarks Bar recommended)
5. Click Save

**Firefox:**
1. Navigate to link page or display
2. Click star icon in address bar
3. Name bookmark
4. Choose folder
5. Click Done

**Safari:**
1. Navigate to link page or display
2. Press `Cmd + D`
3. Name bookmark
4. Choose location
5. Click Add

### Mobile Home Screen Shortcuts

Add FamilyCast to your phone/tablet home screen for app-like experience:

**iOS (Safari):**
1. Navigate to FamilyCast link page
2. Tap Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Name shortcut "FamilyCast"
5. Tap Add

**Android (Chrome):**
1. Navigate to FamilyCast link page
2. Tap three-dot menu
3. Tap "Add to Home Screen"
4. Name shortcut "FamilyCast"
5. Tap Add

**Result:** Icon appears on home screen like a native app!

---

## Browser Configuration

### Performance Optimization

**For Smooth Display Experience:**

**Disable Unnecessary Extensions:**
- Ad blockers can interfere with FamilyCast
- VPNs may slow connection
- Privacy extensions might block features
- Keep only essential extensions active

**Enable Hardware Acceleration:**

**Chrome/Edge:**
1. Go to `chrome://settings/system`
2. Enable "Use hardware acceleration when available"
3. Restart browser

**Firefox:**
1. Go to `about:preferences`
2. Scroll to Performance section
3. Uncheck "Use recommended performance settings"
4. Check "Use hardware acceleration when available"

**Clear Cache Periodically:**
- Prevents memory issues on long-running displays
- Do monthly for permanent displays
- Settings → Privacy → Clear browsing data

### Privacy Settings for Displays

**Adjust for Permanent Displays:**

**Disable Sync:**
- Don't sync browsing history from display devices
- Settings → Sync → Turn off sync

**Disable Password Manager:**
- Prevent auto-fill on family displays
- Settings → Passwords → Turn off auto sign-in

**Private Browsing Not Recommended:**
- FamilyCast needs to remember sessions
- Private/incognito mode will require re-login
- Use regular browsing for displays

**Notifications:**
- Disable browser notifications
- Prevents popups during display use
- Settings → Notifications → Block all

---

## Troubleshooting Browser Issues

### Page Won't Load

**Check:**
1. URL is correct (check spelling)
2. Internet connection is active
3. Browser is up to date
4. JavaScript is enabled

**Solutions:**
- Try different browser
- Clear browser cache and cookies
- Disable VPN temporarily
- Check if familycast.app is accessible

**To Clear Cache:**

**Chrome/Edge:**
1. Press `Ctrl + Shift + Delete`
2. Select "All time"
3. Check "Cached images and files"
4. Click Clear data

**Firefox:**
1. Press `Ctrl + Shift + Delete`
2. Select "Everything"
3. Check "Cache"
4. Click Clear Now

### Display Not Showing Content

**Check:**
1. JavaScript is enabled
2. Cookies are allowed
3. Browser console for errors (F12)
4. Network connection stable

**Solutions:**
- Refresh page (`F5` or `Ctrl + R`)
- Hard refresh (`Ctrl + F5` or `Ctrl + Shift + R`)
- Disable ad blockers for FamilyCast domain
- Try different browser

**Check Console for Errors:**
1. Press `F12` to open developer tools
2. Click Console tab
3. Look for red error messages
4. Contact support with error details if needed

### Content Not Updating

**Check:**
1. Internet connection active
2. Browser hasn't cached old content
3. Display is registered and online
4. Integration connections are active

**Solutions:**
- Hard refresh: `Ctrl + F5` / `Cmd + Shift + R`
- Clear cache for FamilyCast domain
- Verify stable network connection
- Wait a few minutes for updates to sync

### Browser Crashes or Freezes

**Common Causes:**
- Too many open tabs
- Memory leaks from long-running browser sessions
- Incompatible extensions
- Outdated browser version

**Solutions:**
- Close all other tabs
- Restart browser
- Update to latest browser version
- Disable extensions one by one to identify issue
- Enable auto-refresh (reloads page daily at 3 AM)

---

## Browser-Specific Tips

### Chrome Issues

**Hardware Acceleration Problems:**
- Try disabling: `chrome://settings/system`
- Some older devices work better without it

**Extensions Interfering:**
- Disable ad blockers for FamilyCast
- Test in Incognito mode (without extensions)
- Remove suspicious extensions

**Profile Corruption:**
- Create new Chrome profile
- Sign in and test FamilyCast
- Transfer bookmarks if it works

### Firefox Issues

**Enhanced Tracking Protection:**
- Disable for FamilyCast domain
- Settings → Privacy & Security → Enhanced Tracking Protection
- Click "Custom" and add FamilyCast exception

**Privacy Settings:**
- Allow cookies and site data
- Disable strict tracking protection

**Safe Mode Test:**
- Help → Troubleshoot Mode
- Test FamilyCast without extensions
- Identifies if extension is causing issues

### Safari Issues

**Privacy Settings:**
- Allow cross-site tracking for FamilyCast
- Safari → Preferences → Privacy
- Uncheck "Prevent cross-site tracking" for FamilyCast

**Content Blockers:**
- Disable for FamilyCast domain
- Safari → Preferences → Websites → Content Blockers

**Develop Menu:**
- Enable for advanced debugging
- Safari → Preferences → Advanced → Show Develop menu

---

## Advanced Configuration

### Auto-Refresh Setup

Some displays benefit from daily browser refresh to prevent memory issues:

**Chrome Extensions:**
- Install "Tab Reloader" or "Auto Refresh"
- Set to reload once daily at 3 AM
- Prevents browser memory leaks

**Firefox Extensions:**
- Install "Tab Reloader" addon
- Configure for daily refresh
- Good for long-running displays

**Built-in Option:**
- FamilyCast can handle auto-refresh automatically
- Enable in display settings: Auto-refresh daily
- No extension needed!

### Display Power Management

**Prevent Display Sleep:**

**Windows:**
1. Settings → Power & Sleep
2. Set Screen timeout to "Never"
3. Set Sleep to "Never" when plugged in

**Mac:**
1. System Preferences → Energy Saver
2. Set Display sleep to "Never"
3. Check "Prevent computer from sleeping when display is off"

**Linux:**
1. Settings → Power
2. Set Blank Screen to "Never"
3. Disable automatic suspend

### Performance Monitoring

**Check Display Performance:**
1. Press `F12` to open developer tools
2. Go to Performance tab
3. Click Record
4. Let run for 1 minute
5. Click Stop
6. Review CPU and memory usage

**Normal Usage:**
- CPU: 5-15% average
- Memory: 200-500MB
- Network: Minimal after initial load

**High Usage Indicates:**
- Too many browser extensions
- Memory leak (restart browser)
- Poorly optimized content
- Need hardware acceleration

---

## Best Practices

### For Permanent Displays

**Setup Checklist:**
- ✅ Use Chrome or Firefox (best compatibility)
- ✅ Enable kiosk mode or full-screen
- ✅ Disable display sleep/screensaver
- ✅ Clear cache monthly
- ✅ Keep browser auto-updated
- ✅ Bookmark direct display URL
- ✅ Enable auto-refresh (daily at 3 AM)
- ✅ Disable browser notifications

### For Temporary/Mobile Displays

**Quick Setup:**
- ✅ Bookmark link page
- ✅ Add to home screen (mobile)
- ✅ Enable full-screen manually
- ✅ Keep browser updated
- ✅ Clear cache after use

### Security Considerations

**For Shared Displays:**
- Don't save passwords in browser
- Disable sync to personal accounts
- Use guest/kiosk mode when possible
- Lock device when not in use
- Keep display software updated

**For Private Family Content:**
- Use kid-safe mode for appropriate displays
- Enable private mode for sensitive calendars
- Review what content appears where
- Limit access to admin dashboard

---

## Next Steps

**Complete Your Display Setup:**
- [Display Setup](./display-setup.md) - Full display configuration guide
- [Quick Start](./quick-start.md) - Create your first family display

**Configure Content:**
- [Family Calendar](../features/family-calendar.md) - Set up family schedules
- [Photo Sharing](../features/photo-sharing.md) - Display family photos
- [Weather and Info](../features/weather-and-info.md) - Add weather widgets

**Troubleshoot Issues:**
- [Display Problems](../troubleshooting/display-problems.md) - Fix display issues
- [Common Issues](../troubleshooting/common-issues.md) - General troubleshooting

---

**Questions?** Contact support@familycast.app or check [Common Issues](../troubleshooting/common-issues.md)
