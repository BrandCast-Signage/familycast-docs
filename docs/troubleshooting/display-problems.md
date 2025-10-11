---
title: Display Problems
---

# Display Problems

Comprehensive troubleshooting guide for FamilyCast display issues including registration, connectivity, hardware, and content display problems.

## Registration Issues

### Display Won't Accept Registration Code

**Issue:** Entering code on display.familycast.app shows error

**Common Errors:**

**"Invalid Code":**
- Code may have typo
- Codes are 6 characters, case-sensitive
- Try copying and pasting code
- No spaces before or after code

**"Code Expired":**
- Codes expire after 24 hours
- Generate new code in dashboard
- **Displays** → **Add Display** → **Generate New Code**
- Use new code immediately

**"Code Already Used":**
- Each code can only register one display
- Generate new code for additional displays
- Don't reuse codes

**Solutions:**
1. Go to dashboard: **Displays** → **Add Display**
2. Generate fresh registration code
3. Copy code exactly (use copy button)
4. On display device, go to display.familycast.app
5. Paste code
6. Click Register

**Still Failing:**
- Check internet connection on display device
- Try different browser on display
- Verify using display.familycast.app (not app.familycast.app)
- Clear browser cache and try again

### Wrong Display URL

**Issue:** Can't find registration page

**Correct URLs:**
- **Registration**: display.familycast.app
- **Dashboard**: app.familycast.app (don't use this for displays)

**Common Mistakes:**
- ❌ Using app.familycast.app on display
- ❌ Using familycast.com
- ❌ Using http:// instead of https://
- ❌ Typos in URL

**Correct Process:**
1. On display device, open web browser
2. Type: **display.familycast.app**
3. Press Enter
4. Should see registration page with code entry box

### Display Registers But Shows "Waiting for Configuration"

**Issue:** Code accepted but display doesn't show content

**Cause:** Display registered but not assigned a layout

**Fix:**
1. Go to dashboard: **Displays**
2. Find newly registered display
3. Click display name
4. **Assign Layout**: Choose layout (e.g., "Family Hub")
5. Click **Save**
6. Wait 2-3 minutes
7. Display should load content

**If Still Waiting:**
- Refresh browser on display device
- Check display is marked "Online" in dashboard
- Verify layout assigned correctly
- Try different layout

---

## Connectivity Issues

### Display Shows "Offline" in Dashboard

**Issue:** Dashboard shows display as offline (red dot)

**Troubleshooting Steps:**

**1. Check Internet Connection:**
- Display device connected to WiFi?
- Test: Open google.com on display browser
- If no internet, reconnect to WiFi

**2. Check Browser Still Open:**
- Display must keep display.familycast.app open
- Don't close browser or tab
- If closed, reopen display.familycast.app

**3. Device Went to Sleep:**
- Display device may have powered off screen
- Wake device
- Check power settings (set to never sleep)

**4. Check Display Status:**
- In dashboard, check "Last Seen" timestamp
- If over 10 minutes ago, display lost connection

**Reconnect:**
1. On display device, refresh browser (F5 or Ctrl+R)
2. Should reconnect within 30 seconds
3. Dashboard shows green "Online" dot
4. If not, may need to re-register display

### Display Keeps Going Offline

**Issue:** Display frequently disconnects (online/offline cycling)

**Causes:**

**1. Weak WiFi Signal:**
- Display too far from router
- Walls blocking signal
- Other devices interfering

**Test WiFi:**
- Check signal strength on display device
- Should be 3+ bars
- Run speed test (need 5+ Mbps)

**Solutions:**
- Move display closer to WiFi router
- Use WiFi extender/mesh system
- Connect via Ethernet (if display device supports)
- Upgrade WiFi router

**2. Device Power Saving:**
- Device sleeps to save power
- WiFi disconnects when sleeping

**Fix:**
- Display device settings → Power
- Set screen to never sleep
- Set WiFi to always connected (never sleep)
- Disable battery saver mode

**3. Browser Tab Management:**
- Browser may close inactive tabs
- Display tab closes when inactive

**Fix:**
- Pin display.familycast.app tab (browser settings)
- Set browser to not close inactive tabs
- Use kiosk mode (Chrome)
- Use fullscreen mode (F11)

**4. Router Issues:**
- Router disconnects devices periodically
- DHCP lease expiring
- Router rebooting

**Solutions:**
- Restart router
- Set static IP for display device
- Update router firmware
- Contact ISP if frequent router issues

### "Unable to Connect to Server" Error

**Issue:** Display shows error message about server connection

**Check:**

**1. Internet Connection:**
- Verify display device online
- Open other websites to test
- Check WiFi password correct

**2. Firewall/Network Restrictions:**
- Corporate or school networks may block FamilyCast
- Firewalls may block display.familycast.app
- Parental controls may restrict

**Test:**
- Try connecting to different network (phone hotspot)
- If works on different network, issue is network restriction
- Contact network administrator

**3. Browser Issues:**
- Old browser version
- Corrupted cache
- Extension blocking connection

**Solutions:**
- Update browser to latest version
- Clear browser cache and cookies
- Disable browser extensions
- Try different browser (Chrome recommended)

**4. Server Status:**
- Rarely, FamilyCast servers may have issues
- Check status.familycast.app (if available)
- Wait 15 minutes and try again

---

## Display Content Issues

### Display Shows Wrong Layout

**Issue:** Display shows different layout than expected

**Check:**

1. **Layout Assignment:**
   - Dashboard: **Displays** → Select display
   - Verify correct layout assigned
   - Change if needed
   - Click **Save**

2. **Display Identity:**
   - Multiple displays registered?
   - May be looking at wrong display in dashboard
   - Check display name
   - Each display has unique ID

3. **Family Member Assignment:**
   - Display assigned to specific family member?
   - Shows that person's content (calendar, photos, etc.)
   - Change assignment if incorrect

**Fix:**
1. Identify display: Note display device location/name
2. Dashboard: Find matching display in list
3. Assign correct layout
4. Save changes
5. Wait 2-3 minutes or refresh display browser

### Content Not Updating

**Issue:** Changes made in dashboard don't appear on display

**Expected Update Time:**
- Automatic update: Every 5 minutes
- After making changes, wait 5 minutes before expecting update

**Force Update:**
1. On display device, refresh browser
   - Windows/Linux: F5 or Ctrl+R
   - Mac: Cmd+R
   - Touch devices: Pull down to refresh
2. Content should update immediately

**If Still Not Updating:**

1. **Check Changes Saved:**
   - In dashboard, verify changes actually saved
   - Look for "Saved" confirmation message
   - Re-apply changes if needed

2. **Check Display Online:**
   - Display must be online (green dot in dashboard)
   - If offline, reconnect first

3. **Clear Cache:**
   - Close display browser completely
   - Clear browser cache
   - Reopen display.familycast.app
   - May need to re-enter registration code

### Display Shows Blank/White Screen

**Issue:** Display is white, black, or shows no content

**Troubleshooting:**

**1. Layout Issue:**
- Layout may have no components
- Go to **Displays** → Select display → **Layout**
- Verify layout has content (calendar, photos, etc.)
- Try assigning different layout

**2. Content Not Available:**
- Calendar not connected
- Photo album empty or not synced
- No messages to display

**Fix:**
- Connect integrations (Google Calendar, Google Photos)
- Ensure calendars have events
- Ensure photo albums have photos
- Test with pre-built "Family Hub" layout

**3. Browser Loading Issue:**
- Page failed to load
- JavaScript error

**Fix:**
- Refresh browser on display
- Check browser console for errors (F12)
- Try different browser
- Clear cache and reload

**4. Display Device Issue:**
- Device froze or crashed
- Out of memory

**Fix:**
- Restart display device
- Close other apps to free memory
- Update display device OS

### Photos Not Showing in Slideshow

**Issue:** Photo area is blank or shows placeholder

**Check:**

1. **Google Photos Connected:**
   - Dashboard: **Integrations** → **Google Photos**
   - Status should be "Connected" (green)
   - If disconnected, reconnect

2. **Album Selected:**
   - **Integrations** → **Google Photos**
   - At least one album must be selected
   - Albums must have photos (not empty)

3. **Album Assigned to Display:**
   - **Displays** → Select display → **Layout Settings** → **Photos**
   - Verify album assigned
   - Check correct album selected

4. **Sync Complete:**
   - Initial sync takes 5-10 minutes for 50-100 photos
   - Check sync status: **Integrations** → **Google Photos** → **Sync Status**
   - Wait for "Sync Complete" message

**Solutions:**
- Reconnect Google Photos
- Select albums to sync
- Assign album to display
- Force sync: **Sync Now** button
- Wait for sync to complete

### Calendar Events Not Showing

**Issue:** Calendar section is blank

**Check:**

1. **Calendar Connected:**
   - **Integrations** → **Calendars**
   - Google Calendar or Cozi connected?
   - Status "Connected" (green)

2. **Events Exist:**
   - Open Google Calendar or Cozi
   - Verify events exist for today/this week
   - Events may be outside display date range

3. **Calendar Selected in Display:**
   - **Displays** → Select display → **Layout Settings** → **Calendar**
   - Verify calendar enabled
   - Check correct calendar selected

4. **Sync Complete:**
   - Calendars sync every 15 minutes (Cozi) or 1-2 minutes (Google)
   - Wait for sync
   - Force sync: **Integrations** → **Calendar** → **Sync Now**

**Solutions:**
- Connect calendar integration
- Create test events in calendar
- Assign calendar to display
- Wait for sync (up to 20 minutes)

### Weather Widget Not Showing

**Issue:** Weather section is blank or shows error

**Check:**

1. **Layout Includes Weather:**
   - **Displays** → Select display → **Layout**
   - Verify layout has weather widget
   - Some layouts don't include weather

2. **Location Set:**
   - **Displays** → Select display → **Layout Settings** → **Weather**
   - Location must be set (zip code or city)
   - Verify location correct

3. **Weather Service Status:**
   - Rarely, weather data providers have outages
   - Wait 30 minutes and check again

**Solutions:**
- Add weather widget to layout
- Set location (zip code)
- Try different location format (city name vs zip)
- Refresh display

---

## Hardware Issues

### Display Device Overheating

**Issue:** Tablet or display device gets very hot

**Causes:**
- Device running 24/7
- Poor ventilation
- Intensive content (videos, animations)
- Device not designed for continuous use

**Solutions:**

1. **Improve Ventilation:**
   - Don't cover vents
   - Use stand with airflow space
   - Position away from heat sources
   - Add small fan if needed

2. **Reduce Load:**
   - Lower photo quality setting
   - Increase photo duration (fewer transitions)
   - Simpler layouts (fewer widgets)
   - Disable video clips in slideshows

3. **Scheduled Breaks:**
   - Set display to turn off at night
   - Display schedule: On at 6 AM, Off at 10 PM
   - Gives device time to cool

4. **Better Hardware:**
   - Consider purpose-built digital signage hardware
   - Tablets may not be ideal for 24/7 use
   - Desktop computers handle heat better

### Display Screen Stays Dark

**Issue:** Display device powered on but screen black

**Check:**

1. **Screen Saver:**
   - Device screen saver may have activated
   - Touch screen or move mouse to wake

2. **Power Saving:**
   - Screen turned off to save power
   - Press power button to wake
   - Adjust settings to keep screen always on

3. **Display Settings:**
   - Brightness turned all the way down
   - Increase brightness
   - Check display settings

4. **Hardware Failure:**
   - Screen may be broken
   - Connect to external monitor to test
   - Contact device manufacturer

**Fix Screen Sleeping:**
- Device settings → Display → Screen timeout: Never
- Device settings → Power → Sleep: Never
- Disable screen saver

### Touch Screen Not Responding

**Issue:** Can't interact with display (for touch devices)

**Causes:**

1. **Kiosk/Fullscreen Mode:**
   - Display may be in kiosk mode
   - Touch input disabled for security
   - Intentional for public displays

2. **Screen Protector Issue:**
   - Cheap screen protector interfering
   - Dirt or moisture under protector

3. **Hardware Issue:**
   - Digitizer malfunction
   - Screen needs replacement

**Solutions:**
- Exit kiosk mode (keyboard shortcut, varies by device)
- Remove screen protector
- Clean screen thoroughly
- Restart device
- Connect mouse/keyboard for control

**Note:** For family displays, touch interaction usually not needed. Display should run fullscreen without requiring input.

---

## Layout and Formatting Issues

### Content Doesn't Fit Screen

**Issue:** Content cut off, too small, or wrong aspect ratio

**Causes:**

1. **Wrong Layout for Screen Size:**
   - Portrait layout on landscape screen
   - Layout designed for different resolution

2. **Browser Zoom:**
   - Browser zoomed in or out
   - Should be 100% zoom

3. **Display Resolution:**
   - Layout optimized for 1920x1080
   - Very high or low resolution may have issues

**Fix:**

1. **Choose Appropriate Layout:**
   - **Displays** → Select display → **Layout**
   - Portrait layouts for vertical displays
   - Landscape layouts for horizontal displays
   - Match layout to screen orientation

2. **Reset Browser Zoom:**
   - Windows/Linux: Ctrl+0 (zero)
   - Mac: Cmd+0
   - Sets zoom to 100%

3. **Fullscreen Mode:**
   - Press F11 for fullscreen
   - Hides browser toolbar
   - Maximizes content area

4. **Display Settings:**
   - Check display device resolution
   - 1920x1080 (Full HD) recommended
   - Adjust display scaling if needed

### Text Too Small or Too Large

**Issue:** Can't read text from normal viewing distance

**Check:**

1. **Display Size:**
   - 10" tablet: 6-8 feet viewing distance
   - 24" monitor: 10-12 feet viewing distance
   - 40"+ TV: 15-20 feet viewing distance

2. **Layout Choice:**
   - Some layouts have larger text
   - "Simple" layouts typically larger text
   - "Detailed" layouts smaller text

**Solutions:**
- Choose layout with appropriate text size
- Move display closer to viewing area
- Use larger display device
- Increase browser zoom (Ctrl/Cmd +)

**Accessibility:**
- Request larger text layout from support
- Adjust display device accessibility settings
- Use voice features if available

---

## Performance Issues

### Display Lagging or Stuttering

**Issue:** Content jumps, freezes, or loads slowly

**Causes:**

1. **Underpowered Device:**
   - Old tablet or computer
   - Insufficient RAM or CPU
   - Too much content to handle

2. **Network Issues:**
   - Slow or unstable internet
   - WiFi interference
   - Bandwidth congestion

3. **Too Much Content:**
   - Large photo albums (500+ photos)
   - High-resolution photos (4K)
   - Multiple videos

**Solutions:**

**Optimize Content:**
- Smaller photo albums (50-100 photos)
- Lower photo quality setting
- Increase photo duration (fewer transitions)
- Simpler layouts (fewer widgets)

**Improve Device:**
- Close other apps running on device
- Restart device
- Update browser
- Upgrade to newer hardware

**Improve Network:**
- Move closer to WiFi router
- Use Ethernet connection if possible
- Reduce other network usage (pause downloads)
- Upgrade internet speed

### Browser Crashes or Freezes

**Issue:** Display browser crashes or becomes unresponsive

**Immediate Fix:**
- Force close browser
- Reopen display.familycast.app
- Display should reload automatically

**Prevent Future Crashes:**

1. **Update Browser:**
   - Use latest version of Chrome, Safari, or Firefox
   - Chrome recommended for best stability

2. **Clear Cache:**
   - Browser settings → Clear cache and cookies
   - Restart browser
   - Reload display

3. **Reduce Load:**
   - Use smaller photo albums
   - Lower quality settings
   - Simpler layouts
   - Disable video clips

4. **More RAM:**
   - Display device needs 2+ GB RAM
   - Close other apps
   - Restart device to free memory

5. **Better Hardware:**
   - Older devices may struggle
   - Consider upgrading display device
   - Purpose-built signage hardware recommended

---

## Best Practices for Reliable Displays

### Hardware Selection

**Good Display Devices:**
- ✅ Modern tablets (last 3-5 years)
- ✅ Desktop computers (low-end OK)
- ✅ Purpose-built digital signage players
- ✅ Raspberry Pi 4 (advanced users)
- ⬜ Smart TVs (some work, some don't)
- ❌ Very old tablets (pre-2018)
- ❌ Low-end budget tablets (less than $100)

**Requirements:**
- 2+ GB RAM
- Stable WiFi connection
- Modern browser support
- Ability to disable sleep mode

### Display Positioning

**Optimal Placement:**
- Near WiFi router (strong signal)
- Eye level for viewing
- Not in direct sunlight (screen glare + heat)
- Good ventilation (not enclosed)
- Accessible for occasional interaction (if needed)

**Power:**
- Always plugged in (not battery powered)
- Surge protector recommended
- Cable management for safety

### Maintenance

**Weekly:**
- ✅ Check display still online
- ✅ Clean screen (dust, fingerprints)
- ✅ Verify content displaying correctly

**Monthly:**
- ✅ Restart display device
- ✅ Update browser
- ✅ Clear browser cache
- ✅ Check WiFi signal strength

**Quarterly:**
- ✅ Update display device OS
- ✅ Review layout and content
- ✅ Refresh photo albums
- ✅ Physical inspection (heat, wear)

---

## Getting Help

### When to Contact Support

**Contact support@familycast.app for:**
- Display registration problems not solved here
- Persistent connectivity issues
- Content not displaying after troubleshooting
- Suspected bugs or system issues
- Hardware recommendation questions

**Include in Email:**
- Display device type and model
- Browser and version
- Description of problem
- Steps already tried
- Screenshots if applicable
- Registration code (if relevant)

### Additional Resources

**Related Guides:**
- [Display Setup](../getting-started/display-setup.md) - Complete setup guide
- [Common Issues](./common-issues.md) - General troubleshooting
- [Integration Problems](./integration-problems.md) - Calendar/photo sync issues

**Feature Documentation:**
- [Family Calendar](../features/family-calendar.md)
- [Photo Sharing](../features/photo-sharing.md)
- [Weather and Info](../features/weather-and-info.md)

---

**Need More Help?** Contact support@familycast.app with details about your display issue.
