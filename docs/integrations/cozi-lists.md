---
title: Cozi Lists Integration
---

# Cozi Lists Integration

Display shared family task lists and shopping lists from Cozi on your FamilyCast display. Perfect for keeping the whole family coordinated with chores, errands, and to-dos.

## Overview

The Cozi Lists integration syncs your family's lists from the Cozi Family Organizer app and displays them on your FamilyCast screen. Keep everyone on the same page with shared shopping lists, to-do lists, and chore assignments.

**Use Cases:**
- Shared shopping lists for grocery runs
- Weekly chore assignments by family member
- To-do lists for household tasks
- Errand lists organized by location
- Project lists for home improvements
- Meal prep ingredient lists
- Back-to-school supply lists

**Available In:** FamilyCast only (all tiers)

---

## Features

### What Displays

**List Information:**
- List name (e.g., "Grocery Shopping", "Weekly Chores")
- List items with checkboxes
- Item notes and details
- Assigned family member (color-coded)
- Completion status
- Due dates (if set)

**List Types Supported:**
- **Shopping Lists**: Grocery, errands, stores
- **To-Do Lists**: Household tasks, chores
- **Custom Lists**: Any list created in Cozi

**Display Modes:**
- **All Lists**: Show all family lists together
- **Specific Lists**: Choose which lists to display
- **Today's Tasks**: Only items for today
- **By Person**: Filter by assigned family member
- **Uncompleted Only**: Hide checked-off items

### Real-Time Sync

**Automatic Updates:**
- Syncs with Cozi every 15 minutes (default)
- Shows new items added by family members
- Updates completion status
- Reflects list changes immediately
- Works across all devices

**Smart Refresh:**
- Only updates when lists change
- Cached for offline reliability
- Manual refresh available
- Status indicator shows last sync

---

## Setup

### Step 1: Connect Cozi Account

**Prerequisites:**
- Cozi Family Organizer account (free or Gold)
- Lists created in Cozi app or web
- Internet connection on FamilyCast display

**Connection Process:**

1. Navigate to **Settings** → **Integrations** in FamilyCast
2. Select **Cozi Lists**
3. Click **Connect Cozi Account**
4. Cozi login page appears:
   - Enter your Cozi email and password
   - Click **Sign In**
5. Grant FamilyCast permissions:
   - **Read lists** - View your family lists
   - **Read list items** - View items and checkboxes
   - **Read assignments** - See who's assigned to tasks
6. Click **Allow Access**
7. Redirected back to FamilyCast
8. Connection confirmed ✓

**Account Types:**
- **Cozi Free**: Full access to lists integration
- **Cozi Gold**: Same features (Gold benefits apply in Cozi app)

### Step 2: Select Lists to Display

After connecting, you'll see all your Cozi lists:

**Choose Display Options:**
1. **All Lists** - Show every list (default)
2. **Specific Lists** - Select individual lists:
   - ☑ Grocery Shopping
   - ☑ Weekly Chores
   - ☑ Home Projects
   - ☐ Gift Ideas (hidden)
   - ☐ Vacation Planning (hidden)

**List Organization:**
- Drag to reorder lists (display priority)
- Assign colors to lists (visual distinction)
- Show/hide list names
- Collapse completed items

### Step 3: Configure Display Settings

**Filtering Options:**

**Show Completed Items:**
- **Yes** - Show all items with checkboxes
- **No** - Hide checked-off items (default)
- **Auto-hide after**: 1 hour, 4 hours, 24 hours, 1 week

**Due Date Filter:**
- **All items** - No date filter
- **Today only** - Items due today
- **This week** - Next 7 days
- **Overdue** - Past due items only

**Assignment Filter:**
- **All family members** - Everyone's tasks
- **Specific person** - Filter by assignee
- **Unassigned** - Items without assignee

**Display Limits:**
- Max items per list: 5, 10, 20, Unlimited
- Max lists shown: All, or limit to top N
- Prioritize by: Order in Cozi, Due date, Assignee

**Visual Settings:**

**Layout:**
- **List View** - Vertical list of items
- **Board View** - Lists side-by-side as columns
- **Compact View** - Minimal spacing, more items

**Style:**
- **Theme**: Light, Dark, or Auto
- **Font size**: Small, Medium, Large
- **Checkbox style**: Checkmark, Circle, Square
- **Assignee colors**: Use Cozi colors or custom

**Refresh:**
- **Update interval**: 5, 15, 30, 60 minutes
- **Smart refresh**: Only update when lists change (recommended)
- **Manual refresh button**: Show on-screen refresh option

### Step 4: Position in Layout

**Where to Display:**

**Full Screen Display:**
- Entire screen dedicated to lists
- Best for: Kitchen command center
- Shows: All lists, all details

**Split Screen:**
- Lists alongside calendar
- 50/50 or 60/40 split
- Coordinate schedule with tasks

**Sidebar Panel:**
- 30% of screen for lists
- 70% for other content (calendar, photos)
- Compact view recommended

**Footer Ticker:**
- Scrolling list of today's tasks
- Minimal space usage
- Quick reminders

### Step 5: Save & Deploy

1. Click **Save Integration**
2. Lists appear in **Content Sources**
3. Add to layout:
   - Open **Layout Editor**
   - Add **Cozi Lists** widget
   - Position and size
   - Configure display options
4. Save layout
5. Lists appear on display within 15 minutes

---

## Display Examples

### Example 1: Kitchen Command Center

**Setup:**
- Display: Full screen (1080×1920 portrait)
- Lists: Grocery Shopping, Weekly Chores, Meal Prep
- Layout: Board view (3 columns)
- Filter: Uncompleted items only
- Refresh: 15 minutes

**Visual:**
```
┌─────────────────────────────────┐
│   Family Lists                  │
├───────────┬───────────┬─────────┤
│ Grocery   │ Chores    │ Meals   │
│ Shopping  │ This Week │ Prep    │
├───────────┼───────────┼─────────┤
│ ☐ Milk    │ ☐ Vacuum  │ ☐ Mon   │
│ ☐ Bread   │   (Emma)  │   Tacos │
│ ☐ Eggs    │ ☐ Laundry │ ☐ Tue   │
│ ☐ Cheese  │   (Dad)   │   Pasta │
│ ☐ Apples  │ ☐ Dishes  │ ☐ Wed   │
│ ☐ Bananas │   (Mom)   │   Soup  │
│ ☐ Chicken │ ☐ Trash   │ ☐ Thu   │
│           │   (Kids)  │   Stir  │
└───────────┴───────────┴─────────┘
```

**Use Case:** Family checks display before leaving for errands, everyone knows their tasks.

### Example 2: Family Dashboard

**Setup:**
- Display: Landscape (1920×1080)
- Lists: Today's Tasks only
- Layout: Split screen with calendar (60/40)
- Filter: Today + Overdue
- Refresh: 5 minutes (near real-time)

**Visual:**
```
┌────────────────────┬────────────────┐
│   Today's Tasks    │    Calendar    │
│                    │                │
│ Grocery Shopping:  │  Tuesday       │
│ ☐ Milk             │  Oct 15, 2025  │
│ ☐ Bread            │                │
│ ☐ Eggs             │  9:00 AM       │
│                    │  Dentist       │
│ Chores:            │  (Emma)        │
│ ☐ Vacuum (Emma)    │                │
│ ☐ Laundry (Dad)    │  3:30 PM       │
│ ☐ Dishes (Mom)     │  Soccer        │
│                    │  Practice      │
│ Overdue:           │  (Kids)        │
│ ⚠ Return library   │                │
│   books (Mom)      │  6:00 PM       │
│                    │  Family        │
└────────────────────┴────────────────┘
```

**Use Case:** Morning dashboard shows today's priorities alongside schedule.

### Example 3: Compact Sidebar

**Setup:**
- Display: Landscape with photos/calendar
- Lists: Grocery Shopping only
- Layout: Right sidebar (30%)
- Filter: Uncompleted, top 10 items
- Style: Compact view

**Visual:**
```
┌──────────────────┬──────────┐
│                  │ Shopping │
│   Family Photos  │ List     │
│   (70% screen)   │──────────│
│                  │ ☐ Milk   │
│   [Photo 1]      │ ☐ Bread  │
│                  │ ☐ Eggs   │
│   [Photo 2]      │ ☐ Cheese │
│                  │ ☐ Apples │
│                  │ ☐ Yogurt │
│                  │ ☐ Cereal │
│                  │ ☐ Juice  │
│                  │ ☐ Butter │
│                  │ ☐ Coffee │
└──────────────────┴──────────┘
```

**Use Case:** Always-visible shopping list for quick reference.

### Example 4: Chore Board

**Setup:**
- Display: Full screen
- Lists: Weekly Chores (by person)
- Layout: Board view by assignee
- Filter: This week, uncompleted
- Refresh: 15 minutes

**Visual:**
```
┌─────────────────────────────────────┐
│      This Week's Chores             │
├──────────┬──────────┬──────────────┤
│ Mom      │ Dad      │ Kids         │
├──────────┼──────────┼──────────────┤
│ ☐ Vacuum │ ☐ Mow    │ ☐ Make beds  │
│ ☐ Laundry│   lawn   │ ☐ Feed pets  │
│ ☐ Grocery│ ☐ Trash  │ ☐ Homework   │
│ ☐ Meal   │ ☐ Water  │ ☐ Clean      │
│   prep   │   plants │   rooms      │
│          │ ☐ Car    │ ☐ Set table  │
│          │   wash   │              │
└──────────┴──────────┴──────────────┘
```

**Use Case:** Everyone sees their chores, visual accountability.

---

## Using Cozi Lists Effectively

### Best Practices for Family Organization

**Shopping Lists:**
- Keep one master grocery list
- Add items as you run out
- Organize by store section (produce, dairy, etc.)
- Include quantities ("2 gallons milk")
- Add notes for specifics ("organic apples")

**To-Do Lists:**
- Break large tasks into smaller items
- Set realistic due dates
- Assign tasks clearly
- Include notes with details
- Prioritize with due dates

**Chore Lists:**
- Create weekly recurring lists
- Assign by person or rotate
- Set daily/weekly cadence
- Use color-coding by person
- Celebrate completions!

### Encouraging Family Participation

**Make It Visual:**
- Place display in high-traffic area (kitchen, hallway)
- Use large, readable fonts
- Color-code by person
- Show progress (completed items)

**Set Expectations:**
- Review list together during family meeting
- Everyone checks display daily
- Encourage self-assignment
- Celebrate when lists complete

**Gamify Chores:**
- Track completion rates
- Weekly chore champion
- Rewards for consistent completion
- Make checking off satisfying

### Syncing with Cozi App

**How Sync Works:**
1. Family member adds item in Cozi app
2. Item syncs to Cozi cloud
3. FamilyCast fetches update (15 min interval)
4. Item appears on display

**Cross-Device Updates:**
- Add items on phone → Shows on display
- Check off on display → Updates in app (if interactive)
- Delete on tablet → Removed from display
- Edit on web → Changes reflect everywhere

**Offline Behavior:**
- Display shows last synced data
- Returns to normal when connection restored
- No data loss

---

## Managing the Integration

### Viewing Status

1. Go to **Settings** → **Integrations**
2. Find **Cozi Lists**
3. Status indicators:
   - 🟢 **Connected** - Syncing normally
   - 🟡 **Warning** - Sync issue or timeout
   - 🔴 **Error** - Connection lost, needs attention

### Updating Settings

**Change Display Options:**
1. Click on Cozi Lists integration
2. Modify settings:
   - List selection (show/hide lists)
   - Filters (completed items, due dates)
   - Refresh interval
   - Display style
3. Click **Save**
4. Changes apply immediately to display

**Re-select Lists:**
- Check/uncheck lists to show
- Drag to reorder
- Changes save automatically

### Reconnecting Account

**If connection expires or password changes:**

1. Go to integration settings
2. Click **Disconnect Account**
3. Click **Connect Cozi Account**
4. Log in with current credentials
5. Re-authorize FamilyCast
6. Lists re-sync automatically

### Deactivating Integration

**Pause without deleting:**

1. Go to integration settings
2. Toggle **Is Active** to Off
3. Click **Save**

Lists stop updating but settings remain. Display shows last cached data. Re-enable anytime.

### Deleting Integration

**Permanent removal:**

1. Click on integration
2. Click **Delete Integration**
3. Confirm deletion

**Warning:** Lists removed from all layouts using this integration. Update layouts first.

---

## Troubleshooting

### Lists Not Showing

**Possible Causes:**
1. Cozi account not connected
2. No lists selected in settings
3. All items filtered out (completed, wrong date)
4. Cozi account has no lists

**Solutions:**
1. Check connection status (Settings → Integrations)
2. Verify at least one list selected
3. Temporarily remove all filters
4. Create lists in Cozi app first
5. Try disconnecting and reconnecting account

### Lists Not Updating

**Possible Causes:**
1. Refresh interval too long
2. Network connection issue
3. Cozi API down (rare)
4. Account credentials expired

**Solutions:**
1. Reduce refresh interval to 15 minutes
2. Check display internet connection (Settings → Network)
3. Check [Cozi status page](https://status.cozi.com)
4. Reconnect Cozi account
5. Manually trigger refresh

### Items Missing or Wrong

**Possible Causes:**
1. Filters hiding items (completed, due date, assignee)
2. Display limit reached (showing top 10 only)
3. Lists renamed or deleted in Cozi
4. Caching delay (up to 15 min)

**Solutions:**
1. Check filter settings
2. Increase item limit or remove limit
3. Re-select lists in settings
4. Wait for next sync (check last update time)
5. Force manual refresh

### Display Formatting Issues

**Possible Causes:**
1. Too many items for screen size
2. Font size too large
3. Long item names truncated
4. Layout area too small

**Solutions:**
1. Enable compact view
2. Reduce font size
3. Increase display area size
4. Limit items shown per list
5. Use scrolling if supported

### Authentication Errors

**Error: "Cozi login failed"**

**Solutions:**
1. Verify Cozi email and password correct
2. Try logging into Cozi app or web separately
3. Reset Cozi password if needed
4. Clear browser cache/cookies
5. Try different browser or incognito mode
6. Check firewall not blocking cozi.com

---

## Privacy & Security

### What FamilyCast Accesses

**Permissions Granted:**
- ✅ **Read lists** - View list names
- ✅ **Read items** - View list items, checkboxes, notes
- ✅ **Read assignments** - See who's assigned to tasks
- ✅ **Read due dates** - View item deadlines
- ❌ **Cannot create** - FamilyCast cannot add lists or items
- ❌ **Cannot edit** - FamilyCast cannot modify lists
- ❌ **Cannot delete** - FamilyCast cannot remove lists

**Read-Only Access:** FamilyCast has view-only permissions. Your Cozi data is safe and cannot be modified through FamilyCast.

### Data Storage

**How Data is Stored:**
- Cozi credentials encrypted at rest (AES-256)
- List data cached temporarily (15-60 minutes)
- No permanent storage of list content
- Logs contain no list details or personal info

**Data Retention:**
- Cached list data expires after refresh interval
- Credentials stored until you disconnect
- Integration settings stored until deleted
- No data shared with third parties

### Revoking Access

**In FamilyCast:**
1. Go to **Settings** → **Integrations**
2. Click **Cozi Lists**
3. Click **Disconnect Account**
4. Confirm disconnection

**In Cozi:**
1. Log into [Cozi.com](https://www.cozi.com)
2. Go to **Settings** → **Connected Apps**
3. Find **FamilyCast**
4. Click **Remove Access**

---

## Comparing Cozi Lists to Other Options

### Cozi Lists vs. Google Tasks

| Feature | Cozi Lists | Google Tasks |
|---------|-----------|--------------|
| **Best For** | Family lists | Individual/team tasks |
| **Sharing** | Built-in family sharing | Manual sharing required |
| **Assignments** | Color-coded by person | Basic assignment |
| **Shopping Lists** | Excellent | Limited |
| **Calendar Integration** | Native in Cozi | Google Calendar |
| **Meal Planning** | Built-in | Not available |

**Choose Cozi Lists if:** You want family-focused features and built-in sharing.

**Choose Google Tasks if:** You prefer Google ecosystem or need team task management.

### Using Both Integrations

**Great Combination:**
- **Cozi Lists**: Family shopping, chores, household
- **Google Tasks**: Work tasks, personal projects

**Display Options:**
- Show both side-by-side
- Rotate between them (playlist)
- Cozi on main display, Google Tasks on personal device

---

## Advanced Tips

### Multi-List Management

**Organize by Context:**
```
Cozi Lists:
  - Grocery Shopping (Costco)
  - Grocery Shopping (Trader Joe's)
  - Weekend Errands
  - Home Projects
  - Kids Activities
```

**Display Strategy:**
- Show all lists: Full context
- Filter by due date: Today's priorities
- Rotate lists: Different list every 30 seconds

### Recurring Tasks

**Set Up in Cozi:**
1. Create task in Cozi app
2. Set as recurring (daily, weekly, monthly)
3. Cozi generates new instances automatically
4. FamilyCast shows current instance

**Examples:**
- Daily: "Feed pets", "Make beds"
- Weekly: "Take out trash", "Water plants"
- Monthly: "Pay bills", "Check smoke detectors"

### Location-Based Lists

**Organize by Where:**
```
Shopping Lists:
  - Costco
  - Trader Joe's
  - Target
  - Home Depot

Errands:
  - Post Office
  - Bank
  - Pharmacy
  - Dry Cleaner
```

**Display Strategy:** Show relevant list based on time of day or rotation.

### Family Meetings

**Weekly Review:**
1. Gather family around display
2. Review completed items from last week
3. Discuss upcoming tasks
4. Assign new items
5. Set due dates together
6. Update Cozi as a group

**Make It Fun:**
- Celebrate completions
- Recognize top contributor
- Plan rewards for family goals
- Take "before and after" photos of completed projects

---

## Related Features

**Coordinate with other FamilyCast features:**

**[Cozi Calendar Integration](./cozi-calendar.md):**
- Show calendar events alongside lists
- Coordinate tasks with schedule
- See who's available for chores

**[Google Photos Integration](./google-photos.md):**
- Display family photos
- Celebrate completed projects with photos
- Before/after project shots

**[Weather Widget](./weather.md):**
- Plan outdoor chores based on weather
- Schedule errands on nice days

**[Layout Editor](../features/layouts.md):**
- Design custom family dashboard
- Combine lists, calendar, photos, weather

---

## Next Steps

1. **[Download Cozi App](https://www.cozi.com/download/)** - Get started with Cozi
2. **[Create Family Lists](https://www.cozi.com/lists/)** - Set up your first lists
3. **[Connect to FamilyCast](#setup)** - Follow setup guide above
4. **[Design Your Layout](../features/layouts.md)** - Create family command center

**Need help?** Contact FamilyCast support or visit [Cozi Help Center](https://help.cozi.com).

---

**Ready to get organized?** Connect your Cozi account and turn your FamilyCast display into your family's command center!
