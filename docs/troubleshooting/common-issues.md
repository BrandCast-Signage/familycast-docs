---
title: Common Issues
---

# Common Issues

Quick solutions to the most frequently encountered problems with FamilyCast. Find your issue below for step-by-step troubleshooting.

## Getting Started Issues

### Can't Create Account

**Issue:** "Email already in use" or signup fails

**Solutions:**

1. **Email Already Registered:**
   - Use **Forgot Password** to reset
   - Check if you created account previously
   - Try signing in instead of signing up

2. **Invalid Email:**
   - Verify email address spelled correctly
   - No spaces or extra characters
   - Valid email format (name@domain.com)

3. **Password Requirements:**
   - Minimum 8 characters
   - At least one uppercase letter
   - At least one number
   - At least one special character

**Still Having Issues?**
- Try different browser
- Clear browser cache and cookies
- Contact support@familycast.app

### Can't Sign In

**Issue:** Password doesn't work or account not found

**Solutions:**

1. **Forgot Password:**
   - Click **Forgot Password** on login page
   - Enter email address
   - Check email for reset link
   - Create new password

2. **Account Not Found:**
   - Verify email address correct
   - Check if used different email to sign up
   - Try "Sign Up" - may not have account yet

3. **Locked Account:**
   - Too many failed login attempts
   - Wait 15 minutes, try again
   - Or use **Forgot Password** to reset

**Browser Issues:**
- Try different browser (Chrome, Safari, Firefox)
- Clear cookies and cache
- Disable browser extensions
- Check internet connection

---

## Display Issues

### Display Won't Register

**Issue:** Registration code doesn't work

**Quick Fixes:**

1. **Code Expired:**
   - Codes expire after 24 hours
   - Generate new code: **Displays** → **Add Display** → **New Code**
   - Use new code immediately

2. **Typo in Code:**
   - Codes are 6 characters
   - Case-sensitive (uppercase/lowercase matters)
   - No spaces or dashes
   - Try copying/pasting instead of typing

3. **Wrong URL:**
   - Use **display.familycast.app** (not app.familycast.app)
   - Check spelling
   - Use https:// not http://

**Still Not Working:**
- Check internet connection on display device
- Try different browser on display
- Restart display device
- Generate brand new code

### Display Shows "Offline"

**Issue:** Dashboard says display is offline

**Check:**

1. **Internet Connection:**
   - Display device connected to WiFi?
   - Test by opening another website on display
   - Restart WiFi router if needed

2. **Browser Closed:**
   - Display must keep browser open
   - Don't close the display.familycast.app tab
   - Set browser to never sleep/close

3. **Device Went to Sleep:**
   - Display device may have powered off
   - Wake device
   - Adjust power settings (never sleep)
   - Reload display.familycast.app

**Reconnect:**
- Refresh browser on display device
- If still offline after 5 minutes, re-register display

### Display Shows Wrong Content

**Issue:** Wrong layout or calendar showing

**Check:**

1. **Assigned Layout:**
   - Go to **Displays** → Select display
   - Verify correct layout assigned
   - Change layout if needed
   - Wait 2-3 minutes for update

2. **Family Member Assignment:**
   - Check which family member display is assigned to
   - Kids' displays should be assigned to child
   - Shows that person's content

3. **Safe Mode:**
   - If kids' display shows adult content, enable Safe Mode
   - **Displays** → Select display → **Safe Mode On**
   - Filters inappropriate content automatically

**Force Refresh:**
- Refresh browser on display device (F5 or Ctrl+R)
- Wait 2-3 minutes
- Display should update

### Display Not Updating

**Issue:** Changes made in dashboard don't appear on display

**Solutions:**

1. **Wait for Update:**
   - Displays update every 5 minutes automatically
   - Wait 5 minutes after making changes
   - Don't refresh too quickly

2. **Force Update:**
   - Refresh browser on display device
   - Should load new content immediately

3. **Clear Cache:**
   - Close display browser completely
   - Reopen display.familycast.app
   - Re-register if needed (use existing code if still valid)

**Check Settings:**
- Verify changes saved in dashboard
- Check if applied to correct display
- Ensure display is online

---

## Calendar Issues

### Events Not Showing on Calendar

**Issue:** Calendar is empty or missing events

**Check:**

1. **Calendar Connected?**
   - Go to **Integrations** → **Calendars**
   - Verify Google Calendar or Cozi connected
   - Status should be "Connected" (green)

2. **Calendar Selected in Display?**
   - **Displays** → Select display → **Layout Settings**
   - Verify calendar enabled
   - Check which calendars are showing

3. **Events in Date Range?**
   - Calendar shows today + next 30 days typically
   - Check if events are outside this range
   - Adjust display date range if needed

**Solutions:**
- Reconnect calendar integration
- Force sync: **Integrations** → **Calendar** → **Sync Now**
- Wait 15-20 minutes for sync to complete
- Refresh display

### Events Showing Wrong Time

**Issue:** Calendar events appear 1-3 hours off

**Cause:** Time zone mismatch

**Fix:**

1. **FamilyCast Time Zone:**
   - **Account** → **Settings** → **Time Zone**
   - Set to your local time zone
   - Save changes

2. **Google Calendar Time Zone:**
   - Open Google Calendar settings
   - Verify time zone matches your location
   - Update if incorrect

3. **Force Re-Sync:**
   - After updating time zones
   - **Integrations** → **Calendars** → **Sync Now**
   - Events should correct

**Device Time:**
- Check display device time is correct
- Auto time zone enabled
- Manual adjustment if needed

### Can't Edit Calendar Events

**Issue:** Edit button greyed out or missing

**Reason:**

**Read-Only Integrations:**
- Cozi calendars: Cannot edit in FamilyCast
- iCal/Webcal: Cannot edit in FamilyCast
- Must edit in source app (Cozi, etc.)

**Google Calendar:**
- Should be editable if using Google Calendar integration
- Check permissions granted when connecting
- May need to reconnect with full permissions

**Permissions:**
- Check your role (Teen? Child?)
- Only Parents and above can edit family calendar
- Teens can edit own calendar only

**Fix:**
- Use correct integration for editing (Google Calendar)
- Or edit events in source app (Cozi)
- Verify account permissions

---

## Photo Issues

### Photos Not Showing on Display

**Issue:** Photo slideshow is blank or shows placeholder

**Check:**

1. **Google Photos Connected?**
   - **Integrations** → **Google Photos**
   - Status: "Connected" (green)
   - If red, reconnect

2. **Albums Selected?**
   - **Integrations** → **Google Photos**
   - At least one album must be selected
   - Albums must have photos (not empty)

3. **Album Assigned to Display?**
   - **Displays** → Select display → **Photo Settings**
   - Verify album assigned
   - Check if correct album selected

**Solutions:**
- Reconnect Google Photos integration
- Select albums to sync
- Assign album to display
- Wait 5-10 minutes for initial sync

### Photos Not Updating

**Issue:** New photos not appearing on display

**Check:**

1. **Photos in Synced Album?**
   - Open Google Photos
   - Verify new photos added to album that FamilyCast is syncing
   - Photos in library but not in album won't sync

2. **Last Sync Time:**
   - **Integrations** → **Google Photos**
   - Check "Last Synced" timestamp
   - Should sync every 6 hours automatically

**Force Sync:**
- **Integrations** → **Google Photos** → **Sync Now**
- Wait 2-5 minutes
- New photos should appear

**Wait for Auto-Sync:**
- Automatic sync every 6 hours
- New photos appear within 6 hours of adding to album

### Photos Loading Slowly

**Issue:** Slideshow stutters or takes long to load photos

**Causes:**
- Slow internet connection
- Large high-resolution photos
- Too many photos synced

**Solutions:**

1. **Reduce Photo Quality:**
   - **Displays** → **Photo Settings** → **Quality**: Medium
   - Smaller files load faster

2. **Smaller Albums:**
   - Use 50-100 photos instead of 500+
   - Split large albums into smaller ones

3. **Check Internet Speed:**
   - Run speed test on display device
   - Need minimum 5 Mbps
   - Upgrade internet or move closer to router

4. **Optimize Photos in Google:**
   - Google Photos → Settings → "High quality" vs "Original"
   - High quality = compressed, faster loading

---

## Message Issues

### Can't Send Messages

**Issue:** Send button greyed out or message doesn't appear

**Check Permissions:**

1. **Account Role:**
   - **Family** → **Members** → Your profile
   - Check role: Parent, Teen, Child?
   - Children cannot send messages
   - Teens have limited message access

2. **Display Assignment:**
   - Teens can only send to approved displays
   - Check **Message Settings** for approved displays list

3. **Message Content:**
   - Message cannot be blank
   - Maximum length: 500 characters
   - No special characters that might cause issues

**Solutions:**
- Ask account owner to adjust permissions
- Verify display selection
- Try shorter message
- Refresh dashboard and try again

### Messages Not Showing on Display

**Issue:** Sent message doesn't appear

**Check:**

1. **Correct Display Selected?:**
   - When sending message, verify display selection
   - Message only goes to selected displays
   - Check all displays to find message

2. **Message Approved?:**
   - If teen sent message, may require parent approval
   - **Messages** → **Pending** → Approve message
   - Then appears on display

3. **Display Layout Includes Messages?:**
   - **Displays** → Select display → **Layout**
   - Verify layout has message component
   - Some layouts don't show messages

4. **Message Schedule:**
   - Check if message scheduled for future
   - Scheduled messages don't appear until scheduled time

**Solutions:**
- Resend message to correct display
- Approve pending message (parents)
- Change display layout to include messages
- Check message schedule time

---

## Integration Issues

### Integration Won't Connect

**Issue:** "Connection failed" when connecting Google Calendar, Google Photos, or Cozi

**Solutions:**

1. **Google Account:**
   - Verify you're signing in to correct Google account
   - Account must have access to calendars/photos
   - Grant all requested permissions
   - Don't skip any permission screens

2. **Cozi iCal Link:**
   - Verify iCal link copied correctly
   - No extra spaces
   - Full link (starts with webcal:// or https://)
   - Link not expired

3. **Browser Issues:**
   - Disable popup blockers
   - Allow cookies from familycast.app
   - Try different browser
   - Clear cache and try again

4. **Network:**
   - Check internet connection
   - Firewall not blocking familycast.app
   - Try from different network (phone hotspot)

**Still Failing:**
- Wait 15 minutes and try again
- Contact support with error message

### Integration Keeps Disconnecting

**Issue:** Integration status shows "Disconnected" frequently

**Causes:**

1. **Password Changed:**
   - Changed Google account password?
   - FamilyCast needs to reconnect
   - Disconnect and reconnect with new credentials

2. **Permissions Revoked:**
   - Check Google account → Connected Apps
   - Verify FamilyCast still has permissions
   - Re-grant if revoked

3. **Expired Credentials:**
   - OAuth tokens expire periodically
   - Reconnect integration
   - Should stay connected for months

**Fix:**
- Disconnect integration
- Reconnect fresh
- Grant all permissions
- Verify stable for 24+ hours

---

## Performance Issues

### Dashboard Slow or Unresponsive

**Issue:** Dashboard takes long to load or buttons don't work

**Solutions:**

1. **Clear Browser Cache:**
   - Browser settings → Clear cache
   - Close all FamilyCast tabs
   - Reopen familycast.app

2. **Too Many Browser Tabs:**
   - Close unnecessary tabs
   - FamilyCast works best with fewer tabs open

3. **Old Browser:**
   - Update browser to latest version
   - Chrome, Safari, Firefox recommended
   - Avoid Internet Explorer

4. **Device Performance:**
   - Restart computer/phone
   - Close memory-intensive apps
   - Check device has 2+ GB free RAM

**Network:**
- Slow internet connection
- Run speed test (need 5+ Mbps)
- Connect via Ethernet instead of WiFi if possible

### Display Performance Issues

**Issue:** Display lags, freezes, or content jumps

**Check:**

1. **Display Device:**
   - Old tablet or computer?
   - Check CPU usage (should be less than 50%)
   - Restart display device

2. **Too Much Content:**
   - Large photo albums (500+ photos) slow down
   - Use smaller albums (50-100 photos)
   - Reduce slideshow quality

3. **Internet Connection:**
   - Display device needs stable WiFi
   - Minimum 5 Mbps, 10+ Mbps recommended
   - Move closer to WiFi router
   - Use Ethernet adapter if available

4. **Browser:**
   - Update browser on display device
   - Chrome recommended for best performance
   - Clear browser cache

**Optimize Display:**
- Lower photo quality setting
- Increase photo duration (less frequent changes)
- Reduce number of widgets on layout
- Simpler layouts perform better

---

## Subscription and Billing

### Can't Upgrade Account

**Issue:** Upgrade to paid plan fails

**Check:**

1. **Payment Method:**
   - Valid credit/debit card
   - Card not expired
   - Billing address correct
   - Sufficient funds

2. **Browser:**
   - Popup blockers disabled
   - Cookies enabled
   - Try different browser
   - Incognito/private mode

3. **Stripe Payment:**
   - Payment processed by Stripe
   - Check if Stripe blocked by firewall/VPN
   - Disable VPN temporarily

**Solutions:**
- Try different payment method
- Contact your bank (may be blocking charge)
- Wait 24 hours and try again
- Contact support@familycast.app

### Billing Issues

**Issue:** Unexpected charge or subscription not active

**Check:**

1. **Subscription Status:**
   - **Account** → **Billing**
   - Verify plan status (Active, Cancelled, Expired)
   - Check renewal date

2. **Payment Failed:**
   - Card expired or declined
   - Update payment method
   - Subscription may be suspended

3. **Free Trial Ended:**
   - Free trial is 14 days
   - Automatic charge after trial
   - Cancel before trial ends to avoid charge

**Solutions:**
- Update payment method
- Review subscription plan
- Contact support for refund requests
- Cancel subscription if no longer needed

---

## Account Issues

### Can't Delete Account

**Issue:** No delete account option or delete fails

**Process:**

1. **Cancel Subscription First:**
   - **Account** → **Billing** → **Cancel Subscription**
   - Wait for subscription period to end
   - Then delete account

2. **Remove Displays:**
   - Unregister all displays
   - **Displays** → Each display → **Delete**

3. **Delete Account:**
   - **Account** → **Settings** → **Delete Account**
   - Confirm deletion
   - Account permanently deleted

**Warning:**
- Account deletion is permanent
- All data lost (calendars, messages, settings)
- Cannot be undone
- Displays stop working immediately

### Can't Add Family Member

**Issue:** Invitation fails or family member can't join

**Check:**

1. **Subscription Limit:**
   - Free plan: 4 family members max
   - Plus plan: 8 family members max
   - Premium plan: Unlimited
   - Upgrade if at limit

2. **Email Address:**
   - Valid email required (except young kids)
   - No duplicate emails
   - Check spam folder for invitation

3. **Invitation Expired:**
   - Invitations expire after 7 days
   - Resend invitation
   - Family member must accept within 7 days

**Solutions:**
- Upgrade plan if at member limit
- Resend invitation
- Verify email address correct
- Contact support if issues persist

---

## Data and Privacy

### Data Not Syncing

**Issue:** Changes in one place don't appear elsewhere

**Expected Behavior:**
- Calendar sync: 15 minutes (Cozi) or 1-2 minutes (Google)
- Photo sync: Up to 6 hours
- Message delivery: 1-2 minutes
- Display updates: 5 minutes

**If Not Syncing:**
- Force sync via integration settings
- Wait for next automatic sync cycle
- Check integration connection status
- Verify internet connection on all devices

### Privacy Concerns

**What Data Does FamilyCast Access?**

**Google Calendar:**
- Calendar events only (not email or other Google services)
- Only selected calendars
- Two-way access (read and write)

**Google Photos:**
- Only selected albums
- Photo links (not copies stored)
- Read-only access

**Cozi:**
- Calendar data via iCal link
- No direct Cozi account access
- Read-only

**Data Storage:**
- Encrypted in transit (HTTPS)
- Stored securely on servers
- Not shared with third parties
- Deleted when account deleted

**Control Your Data:**
- Disconnect integrations anytime
- Delete account to remove all data
- Export data before deleting (if needed)

---

## Getting Help

### When to Contact Support

**Contact support@familycast.app if:**
- ✅ Can't solve problem with this guide
- ✅ Account access issues
- ✅ Billing problems
- ✅ Bug reports
- ✅ Feature requests
- ✅ Privacy questions

**Include in Support Email:**
- Account email address
- Description of problem
- Steps to reproduce
- Screenshots (if applicable)
- Browser and device info
- Error messages (exact text)

**Response Time:**
- Typically 24-48 hours
- Urgent issues prioritized
- Billing issues resolved quickly

### Additional Resources

**Documentation:**
- [Display Setup Guide](../getting-started/display-setup.md)
- [Display Problems](./display-problems.md)
- [Integration Problems](./integration-problems.md)

**Feature Guides:**
- [Family Calendar](../features/family-calendar.md)
- [Photo Sharing](../features/photo-sharing.md)
- [Family Messages](../features/family-messages.md)

**Integrations:**
- [Google Calendar](../integrations/google-calendar.md)
- [Google Photos](../integrations/google-photos.md)
- [Cozi Integration](../integrations/cozi-integration.md)

---

**Still Need Help?** Contact support@familycast.app with details about your issue.
