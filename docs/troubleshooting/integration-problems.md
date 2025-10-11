---
title: Integration Problems
---

# Integration Problems

Troubleshooting guide for calendar and photo integration issues including Google Calendar, Google Photos, Cozi, and iCal sync problems.

## Google Calendar Issues

### Can't Connect Google Calendar

**Issue:** "Connection failed" or "Authorization error" when connecting

**Troubleshooting:**

**1. Google Account Access:**
- Are you signing in to the correct Google account?
- Account must have access to Google Calendar
- Personal accounts work; some workspace accounts restricted

**2. Permissions Not Granted:**
- Must grant all requested permissions
- Don't skip permission screens
- Grant "View and edit" calendar permissions

**Fix:**
1. **Integrations** → **Google Calendar**
2. Click **Connect Google Calendar**
3. Sign in to Google account
4. **Allow all permissions** when prompted:
   - ✅ View calendar events
   - ✅ Edit calendar events
   - ✅ Create new events
   - ✅ Manage calendar settings
5. Click **Allow**

**3. Popup Blocker:**
- Google authorization opens in popup
- Popup blockers prevent this
- Browser must allow popups from familycast.app

**Fix:**
- Browser settings → Allow popups from app.familycast.app
- Try again
- Click popup icon in address bar if blocked

**4. Third-Party Cookies:**
- Google OAuth requires third-party cookies
- Some browsers block by default

**Fix:**
- Browser settings → Cookies → Allow third-party cookies
- Or: Allow cookies from accounts.google.com
- Try connecting again

**5. Browser Issues:**
- Old browser version
- Incognito mode sometimes causes issues
- Extensions interfering

**Solutions:**
- Update browser to latest version
- Try different browser (Chrome recommended)
- Disable browser extensions temporarily
- Exit incognito mode, use normal browsing

**Still Failing:**
- Clear browser cache and cookies
- Wait 15 minutes and try again
- Try from different device
- Contact support with error message

### Google Calendar Events Not Syncing

**Issue:** Created event in Google Calendar but doesn't appear in FamilyCast

**Expected Sync Time:**
- Google Calendar → FamilyCast: 1-2 minutes
- FamilyCast → Google Calendar: 30 seconds

**Check:**

**1. Connection Status:**
- **Integrations** → **Google Calendar**
- Status should be "Connected" (green dot)
- If red "Disconnected", reconnect

**2. Last Sync Time:**
- Check "Last Synced" timestamp
- Should be within 2-5 minutes
- If older, click **Sync Now**

**3. Calendar Selected:**
- Multiple Google calendars?
- Verify event added to calendar that's syncing
- **Integrations** → **Google Calendar** → Check selected calendars

**4. Date Range:**
- FamilyCast syncs events within date range
- Default: 3 months back, 12 months forward
- Event outside range won't sync

**5. Event Not Deleted:**
- Event may have been deleted
- Check Google Calendar trash
- Restore if accidentally deleted

**Solutions:**
- Force sync: **Integrations** → **Google Calendar** → **Sync Now**
- Wait 5 minutes for automatic sync
- Verify event in correct calendar
- Check event date within sync range
- Reconnect Google Calendar if needed

### Can't Edit Google Calendar Events in FamilyCast

**Issue:** Edit button greyed out or changes don't save

**Check Permissions:**

**1. Two-Way Sync Enabled:**
- **Integrations** → **Google Calendar** → Select calendar
- **Sync Direction**: Should be "Two-way"
- If "Google → FamilyCast only", change to "Two-way"

**2. Google Permissions:**
- FamilyCast may not have edit permission
- Need "Make changes to events" permission
- Reconnect with full permissions

**Fix:**
1. **Integrations** → **Google Calendar**
2. **Disconnect** calendar
3. **Reconnect** with fresh authorization
4. Grant all permissions (including edit/create)

**3. Calendar Ownership:**
- Can only edit calendars you own or have edit access to
- Shared calendars: Owner must grant "Make changes" permission

**4. User Role in FamilyCast:**
- Account role restrictions
- Teens/children may have limited edit permissions
- Check **Family** → **Members** → Your role

**Event-Specific Issues:**

**1. Recurring Event:**
- Editing recurring events sometimes fails
- Try editing single occurrence vs all occurrences
- Or edit in Google Calendar directly

**2. Event with Attachments:**
- Attachments not editable in FamilyCast
- Edit in Google Calendar for attachment changes

### Duplicate Calendar Events

**Issue:** Same event appears twice (or more) on calendar

**Causes:**

**1. Multiple Calendar Connections:**
- Same calendar connected twice
- Calendar synced via both Google and iCal
- Event appears for each connection

**Check:**
- **Integrations** → **Google Calendar**
- Look for duplicate calendar names
- Remove duplicates

**2. Event in Multiple Calendars:**
- Event actually exists in multiple Google calendars
- Not a sync issue, just event duplication

**Check:**
- Open Google Calendar
- View event details
- See which calendar(s) it's in
- Remove from duplicate calendars

**3. Sync Conflict:**
- Event created in both places simultaneously
- Rare, usually resolves automatically

**Fix:**
- Delete duplicate event (keep one)
- Wait for sync to settle
- Should resolve in 5-10 minutes

**Prevention:**
- Connect each calendar only once
- Don't use multiple sync methods for same calendar
- Check calendar before creating event

### Google Calendar Time Zone Issues

**Issue:** Events show 1-3 hours earlier or later than they should

**Causes:**

**1. FamilyCast Time Zone Wrong:**
- **Account** → **Settings** → **Time Zone**
- Should match your location
- Update if incorrect

**2. Google Calendar Time Zone Wrong:**
- Open Google Calendar settings
- Check time zone setting
- Update to your location

**3. Event Created in Wrong Time Zone:**
- Event may have been created while traveling
- Event time zone differs from calendar time zone

**Check Event Time Zone:**
- Google Calendar → Edit event → More options
- See "Time zone" setting
- Update if needed

**Fix:**
1. Update FamilyCast time zone: **Account** → **Settings** → **Time Zone**
2. Update Google Calendar time zone: Google Calendar Settings
3. Force re-sync: **Integrations** → **Google Calendar** → **Sync Now**
4. Events should correct within 2-3 minutes

**4. Display Device Time Wrong:**
- Display device clock incorrect
- Check device time settings
- Enable automatic time zone

---

## Google Photos Issues

### Can't Connect Google Photos

**Issue:** Authorization fails when connecting Google Photos

**Troubleshooting:**

**1. Google Account:**
- Sign in to correct Google account
- Account must have Google Photos enabled
- Some G Suite accounts may restrict Google Photos

**2. Permissions:**
- Must grant "View your Google Photos library" permission
- Don't skip permission screens
- Click "Allow" on all prompts

**Fix:**
1. **Integrations** → **Google Photos**
2. Click **Connect Google Photos**
3. Sign in to Google
4. Grant all permissions:
   - ✅ View photos
   - ✅ View albums
   - ✅ View shared albums
5. Click **Allow**

**3. Browser Issues:**
- Same as Google Calendar issues above
- Allow popups from familycast.app
- Enable third-party cookies
- Update browser

**4. Google Photos Not Set Up:**
- Google Photos must be set up in your Google account
- Go to photos.google.com and set up if needed

**Still Failing:**
- Try different browser
- Clear cache and cookies
- Wait 15 minutes and retry
- Contact support

### Photos Not Showing on Display

**Issue:** Photo slideshow is blank or shows placeholder image

**Check:**

**1. Google Photos Connected:**
- **Integrations** → **Google Photos**
- Status: "Connected" (green)
- If disconnected, reconnect

**2. Albums Selected:**
- At least one album must be selected to sync
- **Integrations** → **Google Photos**
- Check "Selected Albums" list
- Add albums if none selected

**3. Albums Have Photos:**
- Selected albums must not be empty
- Open Google Photos
- Verify albums have photos

**4. Sync Complete:**
- Initial sync takes 5-10 minutes for 50-100 photos
- Check **Sync Status**: Should say "Sync Complete"
- Wait for sync to finish

**5. Album Assigned to Display:**
- **Displays** → Select display → **Layout Settings** → **Photos**
- Verify album assigned
- Album must be selected from dropdown

**Solutions:**
- Reconnect Google Photos integration
- Select albums to sync (**Integrations** → **Google Photos**)
- Wait for sync to complete
- Assign album to display
- Refresh display browser

### New Photos Not Appearing

**Issue:** Added photos to Google Photos album but don't see on display

**Expected Sync:**
- Automatic sync every 6 hours
- New photos appear within 6 hours of adding to album

**Check:**

**1. Photos Added to Synced Album:**
- Verify photos added to album that FamilyCast is syncing
- Not just in library, must be in album
- Open Google Photos → Albums → Check album

**2. Last Sync Time:**
- **Integrations** → **Google Photos**
- Check "Last Synced" timestamp
- If over 6 hours ago, may be sync issue

**3. Album Still Selected:**
- Verify album still in "Selected Albums" list
- May have been deselected accidentally

**Force Sync:**
- **Integrations** → **Google Photos** → **Sync Now**
- Wait 2-5 minutes
- New photos should appear

**Manual Refresh:**
- Refresh browser on display device
- New photos should load

**If Still Not Appearing:**
- Verify photos actually in Google Photos album (not just library)
- Check if photos are Live Photos or videos (may not display if disabled)
- Ensure photos are not corrupt or unsupported format

### Wrong Photos Showing

**Issue:** Photos from wrong album or unwanted photos appearing

**Check:**

**1. Display Album Assignment:**
- **Displays** → Select display → **Photo Settings**
- Verify correct album assigned
- May be set to "All Albums" (shows everything)

**2. Multiple Albums Selected:**
- Display may be showing multiple albums
- Check which albums assigned to display
- Remove unwanted albums

**3. Album Contents in Google Photos:**
- Open Google Photos
- Review album contents
- Remove unwanted photos from album

**4. Photo Filters:**
- Check if filters applied (timeframe, people, etc.)
- May be showing photos outside expected range

**Solutions:**
- Assign specific album to display (not "All Albums")
- Curate album in Google Photos (remove unwanted photos)
- Check and adjust photo filters
- Force sync after making changes

### Photos Loading Slowly or Not Loading

**Issue:** Slideshow stutters, photos take long to load, or show broken image icons

**Causes:**

**1. Slow Internet Connection:**
- Photos stream from Google Photos
- Need good connection on display device
- Run speed test (need 5+ Mbps)

**2. High-Resolution Photos:**
- 4K or original quality photos are large
- Slow to download
- Consume bandwidth

**3. Too Many Photos Synced:**
- Large albums (500+ photos) slow sync
- More photos = more data to manage

**4. Google Photos API Issues:**
- Rarely, Google Photos service has issues
- Usually temporary

**Solutions:**

**1. Lower Photo Quality:**
- **Displays** → Select display → **Photo Settings**
- **Quality**: Change from "High" to "Medium" or "Low"
- Smaller files load faster

**2. Smaller Albums:**
- Use albums with 50-100 photos
- Split large albums into smaller ones
- Less data to sync

**3. Improve Internet:**
- Move display closer to WiFi router
- Use Ethernet connection if possible
- Upgrade internet speed

**4. Wait and Retry:**
- If Google Photos issue, wait 30 minutes
- Try force sync again
- Should resolve automatically

---

## Cozi Integration Issues

### Can't Connect Cozi Calendar

**Issue:** iCal link doesn't work or connection fails

**Troubleshooting:**

**1. Correct iCal Link:**
- Link must be specific iCal/webcal URL from Cozi
- Not just cozi.com or login page
- Should start with `webcal://` or `https://`

**Get iCal Link:**
1. Open Cozi app or cozi.com
2. Go to Calendar
3. Settings/Share (gear icon)
4. Find "Subscribe to Calendar" or "iCal Link"
5. Copy full link

**2. Link Format:**
- FamilyCast accepts both `webcal://` and `https://` formats
- If one doesn't work, try converting:
  - `webcal://calendar.cozi.com/...` → `https://calendar.cozi.com/...`

**3. Copy/Paste Correctly:**
- No extra spaces before or after link
- Full link (often very long)
- Don't truncate link

**Fix:**
1. **Integrations** → **Calendars** → **Add Calendar**
2. Select **iCal / Webcal URL**
3. Paste complete Cozi iCal link
4. Name calendar (e.g., "Cozi Family Calendar")
5. Click **Connect**

**4. Cozi Account Active:**
- Must have active Cozi account
- Free or paid Cozi account works
- Calendar sharing must be enabled in Cozi

**Still Failing:**
- Try getting fresh iCal link from Cozi
- Wait 15 minutes and retry
- Contact Cozi support if link generation fails

### Cozi Events Not Syncing

**Issue:** Events in Cozi don't appear in FamilyCast

**Expected Sync:**
- iCal feeds update every 15-20 minutes
- Not real-time like Google Calendar

**Check:**

**1. Connection Status:**
- **Integrations** → **Calendars**
- Find Cozi calendar
- Status: "Connected" (green)

**2. Last Sync:**
- Check "Last Synced" timestamp
- Should be within 15-20 minutes
- If older, may be connection issue

**3. Events Exist in Cozi:**
- Open Cozi app
- Verify events actually on Cozi calendar
- Check date range (FamilyCast shows today + next 30 days)

**4. iCal Feed Updated:**
- Cozi may take 5-10 minutes to update iCal feed after event creation
- Total delay: Cozi update (5 min) + FamilyCast sync (15 min) = 20-25 minutes

**Solutions:**
- Wait 30 minutes after creating event in Cozi
- Force sync: **Integrations** → **Calendars** → **Cozi** → **Sync Now**
- Verify events in Cozi app first
- Reconnect Cozi integration if persistent issues

### Can't Edit Cozi Events in FamilyCast

**Issue:** Cozi events are read-only in FamilyCast

**This is Normal:**
- iCal integrations are read-only
- Cannot edit events synced via iCal/webcal
- Must edit in source app (Cozi)

**How to Edit:**
1. Open Cozi app
2. Edit event in Cozi
3. Wait 20-25 minutes for sync
4. Changes appear in FamilyCast

**Alternative: Use Google Calendar:**
- Cozi can sync to Google Calendar
- Connect Google Calendar to FamilyCast instead
- Allows editing in FamilyCast (two-way sync)

**Setup:**
1. In Cozi: Enable Google Calendar sync
2. Cozi syncs events to Google Calendar
3. In FamilyCast: Connect Google Calendar (not Cozi iCal)
4. Result: Can edit events in FamilyCast, changes sync to Google, then to Cozi

---

## General Integration Issues

### Integration Keeps Disconnecting

**Issue:** Integration status shows "Disconnected" frequently

**Causes:**

**1. Password Changed:**
- Changed Google account password?
- OAuth tokens invalid after password change
- Must reconnect integration

**2. Permissions Revoked:**
- May have revoked FamilyCast permissions in Google
- Check Google Account → Security → Third-party apps
- FamilyCast should be in list

**3. Expired Tokens:**
- OAuth tokens expire (usually 6+ months)
- Normal, but annoying
- Reconnecting refreshes tokens

**Fix:**
1. **Integrations** → Select integration
2. **Disconnect**
3. **Reconnect** with fresh authorization
4. Grant all permissions
5. Should stay connected for months

**Prevent Future Disconnects:**
- Don't revoke permissions in Google
- Don't change Google password frequently
- Keep FamilyCast in "allowed apps" list in Google

### Events/Photos Deleted in FamilyCast But Still in Source

**Issue:** Deleted event/photo in FamilyCast but still exists in Google Calendar/Photos

**This is Normal:**
- Deleting in FamilyCast only removes from FamilyCast
- Does not delete from source (Google Calendar, Google Photos)
- One-way deletion (FamilyCast only)

**To Delete from Source:**

**Events:**
- Google Calendar: Delete in Google Calendar app
- Cozi: Delete in Cozi app
- Changes sync to FamilyCast

**Photos:**
- Google Photos: Remove from album or delete photo
- Changes sync to FamilyCast

**Two-Way Deletion (Google Calendar Only):**
- If using Google Calendar integration with two-way sync
- Deleting event in FamilyCast can delete from Google (if enabled)
- **Settings** → **Google Calendar** → **Two-Way Deletion**: Enable

### Sync Taking Too Long

**Issue:** Sync status stuck on "Syncing..." for over 30 minutes

**Normal Sync Times:**
- Google Calendar: 1-2 minutes for 100 events
- Google Photos: 5-10 minutes for 100 photos, 30-60 minutes for 1000+ photos
- Cozi: 15-20 minutes for 100 events

**If Stuck:**

**1. Check Sync Status:**
- **Integrations** → Select integration
- See progress: "Syncing 150/500 photos"
- Large albums take time

**2. Network Issues:**
- Slow internet slows sync
- Check internet speed
- Wait for sync to complete

**3. Cancel and Retry:**
- If stuck over 1 hour with no progress:
- **Cancel Sync** button
- Wait 5 minutes
- Try **Sync Now** again

**4. Reduce Sync Size:**
- Too many photos/events
- Select fewer albums (photos)
- Reduce date range (calendars)
- Sync smaller batches

**5. Reconnect Integration:**
- If repeatedly stuck:
- Disconnect integration
- Reconnect fresh
- Start new sync

---

## Getting Help

### When to Contact Support

**Contact support@familycast.app for:**
- ✅ Integration connection failures not solved here
- ✅ Persistent sync issues after troubleshooting
- ✅ Permission errors
- ✅ Data not syncing after 24+ hours
- ✅ Suspected bugs or system issues

**Include in Email:**
- Which integration (Google Calendar, Google Photos, Cozi)
- Account email address
- Description of problem
- Steps already tried
- Error messages (exact text)
- Screenshots if applicable

### Additional Resources

**Integration Guides:**
- [Google Calendar Integration](../integrations/google-calendar.md) - Complete setup guide
- [Google Photos Integration](../integrations/google-photos.md) - Photo sync guide
- [Cozi Integration](../integrations/cozi-integration.md) - Cozi calendar sync

**Related Troubleshooting:**
- [Common Issues](./common-issues.md) - General troubleshooting
- [Display Problems](./display-problems.md) - Display-specific issues

**Feature Documentation:**
- [Family Calendar](../features/family-calendar.md) - Calendar feature guide
- [Photo Sharing](../features/photo-sharing.md) - Photo feature guide

---

**Still Need Help?** Contact support@familycast.app with integration issue details.
