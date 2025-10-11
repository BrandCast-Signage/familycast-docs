---
title: Google Calendar
---

# Google Calendar Integration

Connect Google Calendar to FamilyCast for two-way sync of family schedules, instant updates, and powerful calendar management.

## Overview

Google Calendar is FamilyCast's most advanced calendar integration, offering two-way sync, real-time updates, and the ability to create and edit events directly in FamilyCast.

**Key Features:**
- **Two-way sync**: Edit events in FamilyCast or Google Calendar
- **Real-time updates**: Changes appear within 1-2 minutes
- **Multiple calendars**: Connect multiple Google accounts
- **Event creation**: Create events directly in FamilyCast
- **Rich event details**: Location, attachments, attendees
- **Reminders**: Google Calendar reminders sync to FamilyCast

**Best For:** Families who want full calendar management with the fastest sync

---

## Setup Instructions

### Step 1: Connect Google Account

1. Go to **Integrations** → **Google Calendar**
2. Click **Connect Google Calendar**
3. Sign in with your Google account
4. Grant FamilyCast permissions:
   - ✅ View and edit calendar events
   - ✅ Create new events
   - ✅ Access calendar settings
5. Click **Allow**

**Privacy:** FamilyCast only accesses calendars, not email or other Google services.

### Step 2: Select Calendars

**After Connecting:**

1. Choose which Google calendars to sync:
   - ✅ Primary calendar
   - ✅ Family calendar (if you have one)
   - ✅ Kids' calendars
   - ⬜ Work calendar (optional)
   - ⬜ Other calendars

2. Configure each calendar:
   - **Display Name**: How it appears in FamilyCast
   - **Color**: Event color on displays
   - **Sync Direction**: Two-way, Google → FamilyCast, or FamilyCast → Google
   - **Show on Displays**: Which displays show this calendar

3. Click **Save**

**Result:** Selected calendars now appear in FamilyCast calendar view and on displays.

### Step 3: Configure Sync Settings

**Per Calendar Settings:**

1. Go to **Integrations** → **Google Calendar** → Select calendar
2. Configure:
   - **Sync Frequency**: Real-time (recommended) or Every 5/15/30 minutes
   - **Event Range**: How far back and forward to sync (default: 3 months back, 12 months forward)
   - **Private Events**: How to handle private events (see below)
   - **Reminders**: Sync Google reminders to FamilyCast notifications

---

## Two-Way Sync

### What is Two-Way Sync?

**Bidirectional Updates:**
- Create events in FamilyCast → Appear in Google Calendar
- Edit events in Google Calendar → Update in FamilyCast
- Delete events either place → Removed from both
- Changes sync within 1-2 minutes

**Versus Cozi/iCal:**
- Cozi/iCal: One-way only (Google/Cozi → FamilyCast)
- Cannot edit in FamilyCast
- Google Calendar: Full two-way sync

### Creating Events in FamilyCast

**Add Event:**

1. In FamilyCast dashboard, go to **Calendar**
2. Click **+ New Event**
3. Fill in details:
   - **Title**: Event name
   - **Calendar**: Choose which Google calendar
   - **Date & Time**: When event occurs
   - **Location**: Where (optional)
   - **Description**: Additional details (optional)
   - **Attendees**: Family members (optional)
   - **Reminders**: Set notifications (optional)
4. Click **Create Event**

**Result:**
- Event appears in FamilyCast immediately
- Syncs to Google Calendar within 30 seconds
- Appears on displays within 1-2 minutes
- Visible in Google Calendar app

### Editing Events

**Edit in FamilyCast:**

1. Click event in calendar view
2. Click **Edit**
3. Change any details
4. Click **Save**

**Sync Behavior:**
- Update appears in FamilyCast immediately
- Syncs to Google Calendar within 30 seconds
- All devices update automatically

**Edit in Google Calendar:**

1. Open Google Calendar app or web
2. Edit event
3. Save changes

**Sync Behavior:**
- FamilyCast receives update within 1-2 minutes
- Displays update automatically
- No manual refresh needed

### Deleting Events

**Delete in Either Place:**
- FamilyCast: Click event → **Delete** → Confirm
- Google Calendar: Delete event as normal

**Sync:**
- Deleted from both systems
- Removed from displays
- Cannot undo (unless Google Calendar restore available)

---

## Managing Multiple Google Calendars

### Why Multiple Calendars?

**Use Cases:**
- **Mom's Calendar**: Mom's personal schedule
- **Dad's Calendar**: Dad's personal schedule
- **Family Calendar**: Shared family events
- **Kids' School Calendar**: School events, homework
- **Sports Calendar**: Games, practices, tournaments

**Benefits:**
- Separate work from family
- Individual privacy control
- Color-coding by person or category
- Selective display on different screens

### Connecting Multiple Accounts

**Multiple Google Accounts:**

1. Connect primary Google account (main setup)
2. Add additional account:
   - **Integrations** → **Google Calendar** → **Add Another Account**
   - Sign in with second Google account
   - Grant permissions
   - Select calendars from that account

3. Repeat for each family member's account

**Result:** All family members' Google calendars available in FamilyCast

### Sharing Calendars Between Accounts

**Alternative: Google Calendar Sharing**

Instead of connecting multiple accounts:

1. **In Google Calendar:** Share calendar with family member
   - Open calendar settings
   - Share with family@gmail.com
   - Grant "Make changes to events" permission

2. **In FamilyCast:** Connect single account
   - All shared calendars appear automatically
   - No need for multiple account connections

**Advantage:** Simpler setup, single FamilyCast connection

---

## Privacy and Filtering

### Private Events

**Google Calendar Private Events:**

**Options in FamilyCast:**

1. **Show All Details** (default)
   - All event information displayed
   - Including private events
   - Best for fully shared family account

2. **Hide Private Events Completely**
   - Events marked "Private" in Google Calendar hidden
   - Not shown on displays
   - Still synced, just not visible

3. **Show Time Block Only**
   - Display "Busy" instead of event title
   - Time slot marked, details hidden
   - Good for parent work meetings on family displays

**Setup:**
1. **Integrations** → **Google Calendar** → Select calendar
2. **Private Event Handling** dropdown
3. Choose option
4. Save

**Marking Events Private in Google:**
- Edit event in Google Calendar
- Click **Visibility**
- Select **Private**
- FamilyCast respects this setting

### Event Filtering

**Show Only Certain Events:**

**By Keyword:**
- Include events with specific words in title
- Example: "Soccer" → Only soccer events shown
- Useful for themed displays

**By Calendar:**
- Select which calendars to show on each display
- Kitchen display: All calendars
- Kids' room: Only their calendars
- Parents' office: Only work calendar

**By Time:**
- Show only upcoming events (hide past)
- Show only today's events
- Show next 7 days, etc.

**Setup:**
1. Go to **Displays** → Select display
2. **Layout Settings** → **Calendar**
3. Configure filters
4. Save

---

## Display Options

### Calendar Views

**Day View:**
- Today's schedule
- Detailed event list
- Time slots
- Best for: Kitchen, entryway

**Week View:**
- Next 7 days
- Overview of week
- Less detail per event
- Best for: Planning displays

**Month View:**
- Entire month
- Dots indicate events
- Minimal detail
- Best for: Long-term planning

**Agenda View:**
- Chronological list
- Next 10-20 events
- No calendar grid
- Best for: Simple displays

### Event Information Display

**What Displays Show:**
- ✅ Event title
- ✅ Start and end time
- ✅ Location (if set)
- ✅ Calendar color
- ✅ Family member (if tagged)
- ✅ Recurring indicator
- ⬜ Description (optional, can enable)
- ⬜ Attendees (optional, can enable)

**Customization:**
1. **Displays** → Select display → **Layout Settings**
2. **Calendar Detail Level**: Minimal, Standard, Detailed
3. Save

---

## Reminders and Notifications

### Google Calendar Reminders

**Sync Reminders:**
- Google Calendar reminders sync to FamilyCast
- Default: 10 minutes before event
- Can customize per event

**FamilyCast Notifications:**

**Where Notifications Appear:**
- Email notifications (optional)
- FamilyCast mobile app push (if installed)
- Display alerts (optional, shows on screen)

**Setup:**
1. **Account** → **Notifications**
2. Enable **Event Reminders**
3. Choose notification methods
4. Save

### Custom Reminders

**Set in FamilyCast:**

When creating/editing event:
1. Click **Add Reminder**
2. Choose time: 5 min, 10 min, 30 min, 1 hour, 1 day before
3. Choose notification type: Email, Push, Display alert
4. Save event

**Syncs to Google:**
- Custom reminders sync back to Google Calendar
- Appear in Google Calendar app
- Two-way reminder sync

---

## Advanced Features

### Recurring Events

**Full Support:**
- Daily, weekly, monthly, yearly recurrence
- Custom patterns (every 2 weeks, etc.)
- End date or number of occurrences
- Edit single instance or all occurrences

**Create Recurring Event:**
1. Create event in FamilyCast
2. Check **Repeats**
3. Choose pattern
4. Set end condition
5. Save

**Syncs to Google:**
- Full recurrence pattern synced
- Edit in either place
- Changes propagate to all instances (if "all occurrences" chosen)

### Event Attendees

**Invite Family Members:**

When creating event in FamilyCast:
1. Click **Add Attendees**
2. Select family members
3. Attendees receive:
   - Email invitation (if emails configured)
   - Event appears on their calendars
   - Can accept/decline

**Syncs to Google:**
- Attendees sync to Google Calendar
- RSVP status syncs back to FamilyCast
- Full attendee management

### Event Attachments

**Google Calendar Attachments:**
- Attachments added in Google Calendar
- Sync to FamilyCast
- View in FamilyCast dashboard
- Not displayed on displays (space limits)

**Use Cases:**
- Directions to location
- Tickets for event
- Permission slips
- Event flyers

**Access:**
- Click event in FamilyCast dashboard
- Click attachment link
- Opens in new tab

### All-Day Events

**Full Support:**
- Birthdays
- Holidays
- Vacation days
- School breaks

**Display:**
- Appear at top of day
- No time shown
- Different visual style
- Labeled "All Day"

---

## Troubleshooting

### Events Not Syncing

**Check:**
1. **Connection Status:**
   - **Integrations** → **Google Calendar**
   - Should say "Connected" with green dot
   - If red "Disconnected", reconnect

2. **Last Sync Time:**
   - Should be within 2-5 minutes
   - If older, click **Sync Now**

3. **Calendar Selected:**
   - Verify calendar is enabled in FamilyCast
   - Check which calendars are syncing

**Solutions:**
- Click **Sync Now** to force sync
- Disconnect and reconnect Google account
- Check Google Calendar permissions (Settings → Connected Apps)

### Changes Not Appearing

**If edited in Google Calendar:**
1. Wait 2-3 minutes for sync
2. Force sync: **Integrations** → **Google Calendar** → **Sync Now**
3. Refresh display browser if needed

**If edited in FamilyCast:**
1. Should appear in FamilyCast immediately
2. Syncs to Google within 30 seconds
3. Check Google Calendar app to confirm

### Duplicate Events

**Cause:** Same calendar connected multiple times

**Check:**
- **Integrations** → **Google Calendar**
- Look for duplicate calendar names
- Remove duplicates

**Prevention:**
- Connect each Google account only once
- Don't sync same calendar via multiple methods (iCal + OAuth)

### Permission Errors

**"FamilyCast needs permission" message:**

1. Go to **Integrations** → **Google Calendar**
2. Click **Reconnect**
3. Sign in to Google
4. Grant all requested permissions
5. Try again

**If persists:**
- Check Google account security settings
- May need to enable "Less secure app access" (not recommended)
- Or: Create app-specific password for FamilyCast

### Time Zone Issues

**Events show wrong time:**

**Check:**
1. **FamilyCast time zone:**
   - **Account** → **Settings** → **Time Zone**
   - Should match your location

2. **Google Calendar time zone:**
   - Google Calendar settings
   - Verify time zone correct

**Fix:**
- Update time zone in both places
- Force sync
- Events should correct automatically

---

## Google Calendar vs. Other Integrations

### Comparison

| Feature | Google Calendar | Cozi | iCal/Webcal |
|---------|----------------|------|-------------|
| Sync Speed | 1-2 minutes | 15-20 minutes | 15-20 minutes |
| Two-Way Sync | ✅ Yes | ❌ No (read-only) | ❌ No (read-only) |
| Create Events | ✅ In FamilyCast | ❌ Cozi app only | ❌ Source app only |
| Edit Events | ✅ Both places | ❌ Cozi app only | ❌ Source app only |
| Reminders | ✅ Full sync | ⬜ Limited | ⬜ Limited |
| Attendees | ✅ Full support | ⬜ Basic | ⬜ Basic |
| Attachments | ✅ Sync | ❌ No | ❌ No |
| Setup Difficulty | Easy | Very Easy | Easy |

**Recommendation:** Use Google Calendar if you want the most features and fastest sync.

---

## Best Practices

**Use Google as Primary:**
- If switching from Cozi, migrate events to Google
- Better integration with FamilyCast
- More features and flexibility

**Organize with Multiple Calendars:**
- Create separate calendars for different purposes
- Color-code effectively
- Easier filtering on displays

**Leverage Two-Way Sync:**
- Edit events wherever convenient
- FamilyCast dashboard for quick edits
- Google Calendar app for detailed planning

**Set Appropriate Reminders:**
- Important events: Multiple reminders
- Daily routines: No reminders needed
- Don't over-notify family

**Use Shared Calendars:**
- Share family calendar with all family members
- Everyone can add/edit
- Single source of truth
- No duplicate account connections needed

**Regular Cleanup:**
- Delete old events periodically
- Remove outdated calendars
- Keep sync fast and efficient

---

## Next Steps

**Other Integrations:**
- [Cozi Integration](./cozi-integration.md) - Migrate from Cozi
- [Google Photos](./google-photos.md) - Add family photos to displays

**Calendar Features:**
- [Family Calendar](../features/family-calendar.md) - Manage all calendars
- [Kids Schedules](../features/kids-schedules.md) - Visual schedules for children

**Setup:**
- [Display Setup](../getting-started/display-setup.md) - Optimize calendar displays
- [Quick Start](../getting-started/quick-start.md) - Initial setup guide

---

**Questions?** Contact support@familycast.app or check [Common Issues](../troubleshooting/common-issues.md)
