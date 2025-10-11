---
title: Cozi Integration
---

# Cozi Integration

Connect your Cozi family calendar to FamilyCast to display your family's schedule on all your displays.

## Overview

Cozi is a popular family organization app with shared calendars, shopping lists, and to-do lists. FamilyCast integrates with Cozi to automatically sync your family calendar and display events on your home displays.

**What Syncs:**
- All family calendar events
- Individual family member calendars
- Event details (title, time, location, notes)
- Color-coding by family member
- Recurring events
- All-day events

**Update Frequency:** Every 15 minutes

---

## Setup Instructions

### Step 1: Get Your Cozi iCal Link

**In Cozi (Web or Mobile):**

1. Open Cozi app or go to cozi.com
2. Sign in to your account
3. Go to **Calendar**
4. Click **Settings** or **Share** (gear icon)
5. Find **Subscribe to Calendar** or **iCal Link**
6. Copy the iCal link (starts with `webcal://` or `https://`)

**Important:** Each family member calendar has its own iCal link. Copy the link for the calendar you want to sync (usually "Family Calendar").

### Step 2: Add to FamilyCast

**In FamilyCast Dashboard:**

1. Go to **Integrations** → **Calendars**
2. Click **Add Calendar**
3. Select **iCal / Webcal URL**
4. Paste your Cozi iCal link
5. Configure settings:
   - **Calendar Name**: "Cozi Family Calendar" (or custom name)
   - **Color**: Choose color for events
   - **Sync Frequency**: 15 minutes (recommended)
6. Click **Connect**

**Verification:**
- FamilyCast fetches events immediately
- Events appear in dashboard calendar view
- Check displays to confirm events showing

### Step 3: Sync Multiple Cozi Calendars (Optional)

If you have individual calendars for each family member in Cozi:

1. Repeat Step 1 for each family member's calendar
2. Get iCal link for Mom's calendar
3. Get iCal link for Dad's calendar
4. Get iCal link for each child's calendar
5. Add each as separate calendar in FamilyCast
6. Assign different colors to each calendar

**Result:** All family members' events display with individual colors

---

## Configuration

### Calendar Settings

**After Connecting:**

1. Go to **Integrations** → **Calendars** → **Cozi Family Calendar**
2. Configure:
   - **Display Name**: How calendar appears on displays
   - **Color**: Event color on calendar view
   - **Show on Displays**: Which displays show this calendar
   - **Event Filtering**: Show all, or filter by keyword
   - **Private Events**: Hide certain events (see below)

### Event Filtering

**Show Only Specific Events:**

**Filter by Keyword:**
- Include only events with specific words
- Example: "Soccer" → Only soccer events shown
- Useful for sports-only displays

**Exclude by Keyword:**
- Hide events containing certain words
- Example: Exclude "Work" → No work events on home displays
- Keeps personal events private

**Example Use Cases:**
- Kids' display: Show only events with their name
- Kitchen display: All family events except work
- Sports display: Only events with "Practice", "Game", "Tournament"

### Private Event Handling

**Sensitive Events:**

Some Cozi events may be private (doctor appointments, parent meetings, etc.)

**Options:**

1. **Show All Events** (default)
   - All Cozi events appear on FamilyCast
   - Good for fully shared family calendar

2. **Hide Private Keyword Events**
   - Set keyword like "PRIVATE" or "HIDE"
   - Add to Cozi event title: "Doctor Appt PRIVATE"
   - FamilyCast hides these events

3. **Show Time Block Only**
   - Display busy time without details
   - Shows "Busy" or "Unavailable" instead of event title
   - Protects privacy while showing schedule conflicts

**Setup:**
1. In FamilyCast: **Integrations** → **Cozi Calendar** → **Settings**
2. Enable **Private Event Filtering**
3. Set keyword: "PRIVATE" (or custom)
4. Choose display option: Hide completely or show time block

---

## Display Options

### Showing Cozi Events on Displays

**Automatic Display:**
- Once connected, Cozi events automatically appear on all displays with calendar layouts
- No additional configuration needed
- Events update every 15 minutes

**Per-Display Control:**

1. Go to **Displays** → Select display
2. **Layout Settings** → **Calendar**
3. Configure:
   - **Show Cozi Calendar**: On/Off toggle
   - **Merge with Other Calendars**: Combine with Google Calendar, etc.
   - **Color Coding**: Use Cozi calendar color or family member colors

### Calendar Views

**Day View:**
- Today's events only
- Detailed schedule
- Best for kitchen or entryway

**Week View:**
- Next 7 days
- High-level overview
- Best for planning displays

**Month View:**
- Entire month at a glance
- Less detail, more context
- Best for large displays

### Event Details

**What's Displayed:**
- Event title (from Cozi)
- Start and end time
- Location (if set in Cozi)
- Family member (color-coded)
- Recurring indicator (if applicable)

**Not Displayed:**
- Cozi notes (private)
- Shopping lists (not calendar data)
- To-do lists (not calendar data)

---

## Syncing Behavior

### How Often Events Update

**Default Sync:**
- Every 15 minutes
- Automatic background sync
- No manual refresh needed

**Force Sync:**
1. Go to **Integrations** → **Calendars** → **Cozi Calendar**
2. Click **Sync Now**
3. Wait 30 seconds
4. Events update on displays within 1-2 minutes

**Real-Time Sync (Not Available):**
- Cozi iCal feeds don't support instant push
- 15-minute delay is typical for iCal integrations
- Plan for slight delay when adding last-minute events

### What Happens When...

**You Add Event in Cozi:**
1. Event saved in Cozi
2. Cozi updates iCal feed (usually within 1-5 minutes)
3. FamilyCast syncs feed (next 15-minute interval)
4. Event appears on displays within 20 minutes max

**You Edit Event in Cozi:**
- Same process as adding
- Changes appear on FamilyCast within 20 minutes
- Old event removed, updated event added

**You Delete Event in Cozi:**
- Removed from Cozi
- Removed from FamilyCast at next sync
- Disappears from displays within 20 minutes

**You Delete Event in FamilyCast:**
- ❌ **Not Allowed**
- Cozi is the source of truth
- Cannot edit Cozi events in FamilyCast
- Must make changes in Cozi app

---

## Troubleshooting

### Events Not Showing

**Check:**
1. **iCal Link Valid?**
   - Go to **Integrations** → **Calendars** → **Cozi Calendar**
   - Check connection status: Should say "Connected" with green dot
   - Last sync time should be recent (within 15 min)

2. **Events Exist in Cozi?**
   - Open Cozi app
   - Verify events are actually on the calendar
   - Check date range (FamilyCast shows current + future events)

3. **Display Has Calendar Layout?**
   - Go to **Displays** → Select display
   - Verify layout includes calendar component
   - Check if Cozi calendar is enabled for this display

**Solutions:**
- Reconnect Cozi integration if "Disconnected"
- Force sync: **Sync Now** button
- Verify date filter settings (not filtering out current events)
- Check display is online and refreshed

### Events Show Wrong Time

**Issue:** Cozi events appear 1-3 hours off

**Cause:** Time zone mismatch

**Fix:**
1. Go to **Integrations** → **Calendars** → **Cozi Calendar**
2. Check **Time Zone** setting
3. Should match your local time zone
4. Update if incorrect
5. Force sync

**Cozi App Time Zone:**
- Verify Cozi app has correct time zone
- Settings → Account → Time Zone
- Must match your location

### Duplicate Events

**Issue:** Same event appears twice on calendar

**Cause:** Calendar synced multiple times or synced to both Cozi and Google

**Fix:**
1. Check if event is in both Cozi AND another connected calendar (Google)
2. Remove duplicate calendar connection
3. Or: Filter one calendar to exclude duplicates

**Prevention:**
- Only connect each calendar source once
- Don't sync Cozi to Google Calendar AND FamilyCast separately

### Events Not Updating

**Issue:** Made changes in Cozi but FamilyCast still shows old version

**Check:**
1. **Last Sync Time:**
   - Go to **Integrations** → **Cozi Calendar**
   - Check "Last Synced" timestamp
   - Should be within 15 minutes

2. **Force Sync:**
   - Click **Sync Now**
   - Wait 30 seconds
   - Refresh display

3. **Cozi iCal Feed Updated?**
   - Cozi sometimes delays updating iCal feeds
   - Wait 5 minutes after making Cozi change
   - Then force sync in FamilyCast

**Solution:**
- Usually resolves within 20-30 minutes
- If not: Disconnect and reconnect Cozi integration

### Connection Keeps Disconnecting

**Issue:** Cozi integration status shows "Disconnected" frequently

**Possible Causes:**
- Cozi iCal link expired or changed
- Cozi account password changed
- Network issues

**Fix:**
1. Get fresh iCal link from Cozi app
2. Disconnect old Cozi integration in FamilyCast
3. Add new integration with fresh link
4. Verify connection stable for 24 hours

---

## Cozi vs. Google Calendar

### When to Use Cozi Integration

**Use Cozi If:**
- ✅ Family already uses Cozi app
- ✅ Prefer Cozi's shopping lists + calendar combo
- ✅ Like Cozi's simple interface
- ✅ Want to keep using Cozi as primary

**Advantages:**
- No need to switch apps
- Shopping lists + to-dos in one place (Cozi app)
- Family already familiar with Cozi

**Limitations:**
- Cannot edit events in FamilyCast (read-only)
- 15-minute sync delay
- Less granular control than Google Calendar

### When to Use Google Calendar Instead

**Use Google Calendar If:**
- ✅ Need instant sync (push notifications)
- ✅ Want to edit events in FamilyCast
- ✅ Prefer Google ecosystem
- ✅ Need advanced calendar features

**Advantages:**
- Two-way sync (edit in FamilyCast or Google)
- Faster sync (near real-time)
- More configuration options
- Better integration with Google services

### Using Both

**You Can Connect Both:**
- Cozi calendar for family events
- Google Calendar for individual schedules
- Both display on FamilyCast
- Color-code to distinguish sources

**Example:**
- Cozi: Family activities, kids' schedules
- Google: Parents' work calendars
- FamilyCast displays both merged

---

## Advanced Setup

### Multiple Cozi Accounts

**If Multiple Families:**
- Each family has own Cozi account
- Example: Separated parents with different households

**Setup:**
1. Get iCal links from both Cozi accounts
2. Add both as separate calendars in FamilyCast
3. Label clearly: "Mom's House Calendar", "Dad's House Calendar"
4. Assign to appropriate displays

### Cozi + Google Calendar Combo

**Best of Both Worlds:**

1. Keep using Cozi for family planning
2. Sync Cozi → Google Calendar (via Cozi's Google sync)
3. Connect Google Calendar to FamilyCast
4. Result: Faster sync, edit capability, Cozi interface

**Setup:**
- In Cozi app: Enable Google Calendar sync
- Cozi pushes events to Google automatically
- Connect Google Calendar to FamilyCast (not Cozi directly)
- Edit events in either Cozi or Google, both sync

---

## Best Practices

**Keep Cozi as Source of Truth:**
- Make all calendar changes in Cozi app
- Don't edit events in FamilyCast (not possible anyway)
- Consistent workflow

**Use Clear Event Titles:**
- Specific: "Emma Soccer Practice" not just "Practice"
- Include names for multi-kid families
- Location helps: "Piano Lesson - Music School"

**Color Code Effectively:**
- Assign each family member a color in FamilyCast
- Match Cozi color coding if possible
- Visual quick reference on displays

**Sync Shopping Lists Separately:**
- Cozi shopping lists don't sync to FamilyCast
- Use Cozi app for lists
- Or: Use FamilyCast messages to post shopping lists on displays

**Plan for Sync Delay:**
- Add events at least 30 minutes before needing them on displays
- Don't rely on instant updates
- For last-minute changes, check Cozi app directly

---

## Next Steps

**Enhance Your Setup:**
- [Google Calendar Integration](./google-calendar.md) - Add Google calendars
- [Family Calendar](../features/family-calendar.md) - Manage all calendars together
- [Display Setup](../getting-started/display-setup.md) - Optimize calendar displays

**Troubleshooting:**
- [Integration Problems](../troubleshooting/integration-problems.md) - Fix sync issues
- [Common Issues](../troubleshooting/common-issues.md) - General troubleshooting

---

**Questions?** Contact support@familycast.app or check [Common Issues](../troubleshooting/common-issues.md)
