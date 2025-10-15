---
title: Google Tasks Integration
---

# Google Tasks Integration

Display task lists from Google Tasks on your FamilyCast display. Perfect for household chores, shopping lists, homework tracking, and family projects—keeping everyone accountable and organized.

## Overview

The Google Tasks integration syncs your family's task lists from Google Tasks and displays them on your FamilyCast screen with automatic updates. When tasks are visible to the whole family, they get done!

**Use Cases:**
- **Household chores** - Weekly cleaning tasks assigned by family member
- **Shopping lists** - Groceries, errands, and store-specific lists
- **Homework tracking** - Kids' assignments and project due dates
- **Home projects** - Room-by-room improvement tasks with progress tracking
- **Family goals** - Shared goals everyone works toward together
- **Pet care** - Feeding schedules, vet appointments, grooming reminders
- **Meal planning** - Ingredient lists and prep tasks

**Available In:** FamilyCast (all tiers)

**Works With:** Google Tasks app on iOS, Android, and web—changes sync across all devices

---

## Features

### What Shows on Your Display

**Task Information:**
- Task title and description
- Due date (if set)
- Completion status with checkboxes
- Task list name (color-coded)
- Subtasks (for multi-step projects)
- Notes attached to tasks

**Display Modes:**
- **List View**: Vertical list organized by task list
- **Board View**: Kanban-style columns by due date (Today, This Week, Later)
- **Today View**: Only tasks due today (great for focus)
- **This Week View**: Next 7 days of tasks
- **Compact View**: Minimal space, shows more tasks

### Filtering & Organization

**By Task List:**
- Display specific task lists only (e.g., just "Kids Chores")
- Combine multiple task lists (e.g., "Household" + "Shopping")
- Show all task lists together
- Color-code by task list for easy identification

**By Status:**
- Show only incomplete tasks (default—keeps display focused)
- Show completed tasks (celebrate progress!)
- Show both complete and incomplete
- Auto-hide completed after X hours (declutter automatically)

**By Due Date:**
- Tasks due today (immediate priorities)
- Tasks due this week (plan ahead)
- Overdue tasks only (catch up on missed items)
- All tasks regardless of due date

### Automatic Updates

**Sync Frequency:**
- **5 minutes** - Near real-time (for busy families)
- **15 minutes** - Default (recommended balance)
- **30 minutes** - Standard updates
- **60 minutes** - Low-priority displays

**Smart Refresh:**
- Only updates when tasks change (efficient)
- Cached data reduces data usage
- Offline fallback shows last sync if internet drops
- Manual refresh available anytime

---

## Setup

### Step 1: Connect Google Account

1. Navigate to **Settings** → **Integrations** in your FamilyCast app
2. Select **Google Tasks**
3. Click **Connect Google Account**
4. Google OAuth popup appears:
   - Sign in to your Google account (the one with your family tasks)
   - Review permissions requested:
     - `tasks.readonly` - Read your task lists and tasks
   - Click **Allow**
5. You'll be redirected back to FamilyCast
6. Connection confirmed ✓

**OAuth Permissions:**
- **Read-only access** - FamilyCast cannot create, edit, or delete tasks
- **Secure storage** - OAuth tokens encrypted at rest
- **Revocable** - Disconnect anytime in Google account settings or FamilyCast

**Which Google Account to Use?**
- Use the account where you manage family tasks
- Can be parent's personal account
- Or shared family Google account if you have one
- Each family member can add tasks via the Google Tasks app

### Step 2: Select Task Lists

1. After connecting, you'll see all your Google Task lists
2. Select which task lists to display:
   - **All task lists** - Show everything
   - **Specific lists** - Choose individual lists (recommended)
   - **My Tasks** - Default Google Tasks list
   - **Custom lists** - Any task lists you've created
3. Preview shows sample tasks from selected lists

**Recommended Task List Structure:**

**Option A: By Person**
- Mom's Tasks
- Dad's Tasks
- Kids' Tasks
- Family Tasks (everyone)

**Option B: By Category**
- Household Chores
- Shopping Lists
- Kids' Homework
- Home Projects
- Pet Care

**Option C: Hybrid**
- Weekly Chores (by person in notes)
- Shopping List
- Family Projects
- Kids' Activities

**Task List Options:**
- Assign colors to differentiate lists
- Set priority order for display
- Show/hide task list names
- Filter by keywords

### Step 3: Configure Display Settings

**Filtering:**
- **Show completed tasks**: Yes / No (default: No)
- **Hide completed after**: 1 hour, 4 hours, 24 hours, Never
- **Due date filter**: All, Today, This Week, Overdue Only
- **Max tasks shown**: 5, 10, 20, 50, Unlimited

**Display Style:**
- **Layout**: List, Board, Compact
- **Sort by**: Due date, Creation date, Custom order (from Google)
- **Group by**: Task list, Due date, None
- **Show due dates**: Yes / No
- **Show descriptions**: Yes / No / Truncate

**Refresh Settings:**
- **Update interval**: 5, 15, 30, 60 minutes
- **Smart refresh**: Only update when tasks change (recommended)
- **Manual refresh**: Allow on-screen refresh button

### Step 4: Design & Layout

**Positioning Options:**

**Full Screen:**
- Entire display dedicated to task lists
- Best for: Kitchen command center, dedicated chore board
- Shows: All lists with full details

**Split Screen:**
- Tasks alongside calendar or photos
- 50/50 or 60/40 split
- Coordinate schedule with tasks

**Sidebar:**
- 20-30% of screen for tasks
- 70-80% for other content
- Use compact view

**Footer:**
- Scrolling ticker of upcoming tasks
- Minimal space usage
- Quick reminders

**Styling:**
- **Theme**: Light, Dark, Auto (match your home)
- **Font size**: Small, Medium, Large, Extra Large
- **Checkbox style**: Checkmark, Circle, Square
- **Color scheme**: Match task list colors or custom

### Step 5: Save & Deploy

1. Click **Save Integration**
2. Integration appears in Content Sources
3. Add to layout:
   - Open **Layout Editor**
   - Add **Google Tasks** content area
   - Select your Google Tasks integration
   - Position and size the area
   - Save layout
4. Assign layout to display
5. Tasks appear within 15 minutes (or next refresh interval)

---

## Display Examples

### Example 1: Kitchen Command Center

**Setup:**
- Display: Full screen (1080×1920 portrait tablet)
- Display mode: Board View
- Task lists: "Household Chores", "Shopping List", "Meal Prep"
- Filter: Show incomplete tasks only
- Refresh: 15 minutes
- Layout: Full screen with weather widget at top

**Visual:**
```
┌─────────────────────────────────────┐
│   Tuesday, Oct 15  ☀️ 72°F          │
├───────────┬───────────┬─────────────┤
│ Household │ Shopping  │ Meal Prep   │
│ Chores    │ List      │             │
├───────────┼───────────┼─────────────┤
│ ☐ Vacuum  │ ☐ Milk    │ ☐ Monday    │
│   (Emma)  │ ☐ Bread   │   Tacos     │
│   Due Wed │ ☐ Eggs    │ ☐ Tuesday   │
│           │ ☐ Cheese  │   Pasta     │
│ ☐ Laundry │ ☐ Apples  │ ☐ Wednesday │
│   (Dad)   │ ☐ Chicken │   Stir Fry  │
│   Due Thu │ ☐ Yogurt  │ ☐ Thursday  │
│           │ ☐ Coffee  │   Soup      │
│ ☐ Dishes  │           │             │
│   (Mom)   │           │             │
│   Due Thu │           │             │
└───────────┴───────────┴─────────────┘
```

**Use Case:** Family checks display before leaving for work/school, everyone knows their tasks for the week. Shopping list is always visible before grocery runs.

### Example 2: Kids' Homework & Chores Display

**Setup:**
- Display: Landscape (1920×1080)
- Display mode: List View
- Task lists: "Emma's Tasks", "Jake's Tasks"
- Filter: This week, incomplete
- Refresh: 5 minutes
- Layout: Split screen with calendar

**Visual:**
```
┌────────────────────────┬──────────────────┐
│   Kids' Tasks          │   This Week      │
│                        │                  │
│ Emma:                  │  Tuesday         │
│ ☐ Math homework        │  Oct 15, 2025    │
│   Due: Today           │                  │
│ ☐ Science project      │  3:30 PM         │
│   Due: Friday          │  Soccer Practice │
│   Note: Poster board   │                  │
│ ☐ Feed cat (today)     │  Wednesday       │
│ ☐ Clean room          │  3:30 PM         │
│   Due: Saturday        │  Dance Class     │
│                        │                  │
│ Jake:                  │  Friday          │
│ ☐ Reading log          │  7:00 PM         │
│   Due: Thursday        │  Pizza Night!    │
│ ☐ Spelling practice    │                  │
│   Due: Friday          │  Saturday        │
│ ☐ Take out trash       │  10:00 AM        │
│   Due: Tonight         │  Emma: Soccer    │
│ ☐ Practice piano       │  Game            │
│   Due: Today           │                  │
└────────────────────────┴──────────────────┘
```

**Use Case:** Kids check display after school to see homework and chores. Parents use it to track project deadlines. Integrates with family calendar.

### Example 3: Weekly Chore Board

**Setup:**
- Display: Full screen (portrait)
- Display mode: List View grouped by person
- Task lists: "Weekly Chores"
- Filter: This week, show completed (celebrate progress!)
- Refresh: 15 minutes
- Style: Large checkboxes, color-coded by assignee

**Visual:**
```
┌─────────────────────────────────────┐
│      This Week's Chores             │
│      (Oct 15 - Oct 21)              │
├─────────────────────────────────────┤
│ Mom 💜                              │
│ ✅ Vacuum living room (Mon)         │
│ ✅ Grocery shopping (Tue)           │
│ ☐ Laundry (Wed)                     │
│ ☐ Meal prep (Thu)                   │
│ ☐ Clean bathrooms (Sat)             │
│                                      │
│ Dad 💙                              │
│ ✅ Mow lawn (Sat)                   │
│ ☐ Take out trash (Wed)              │
│ ☐ Water plants (Thu)                │
│ ☐ Car wash (Sat)                    │
│ ☐ Grill maintenance (Sun)           │
│                                      │
│ Emma 💗                             │
│ ✅ Make bed (daily)                 │
│ ✅ Feed cat (Mon-Tue)               │
│ ☐ Feed cat (Wed-Sun)                │
│ ☐ Clean room (Sat)                  │
│ ☐ Help with dinner (Thu)            │
│                                      │
│ Jake 💚                             │
│ ✅ Make bed (daily)                 │
│ ☐ Set table (Wed, Fri)              │
│ ☐ Take out recycling (Thu)          │
│ ☐ Walk dog (Sat, Sun)               │
│ ☐ Organize toys (Sat)               │
└─────────────────────────────────────┘
```

**Use Case:** Everyone sees their chores with clear deadlines. Completed tasks stay visible for a few hours to celebrate progress. Color-coding makes it easy to spot your own tasks.

### Example 4: Shopping List Sidebar

**Setup:**
- Display: Landscape with family photos
- Display mode: Compact List View
- Task lists: "Grocery Shopping" only
- Filter: Uncompleted, unlimited items
- Refresh: 15 minutes
- Layout: Right sidebar (25% of screen)

**Visual:**
```
┌──────────────────────┬────────────┐
│                      │ Shopping   │
│   Family Photos      │ List       │
│   (slideshow)        │────────────│
│                      │ ☐ Milk     │
│   [Photo 1]          │ ☐ Bread    │
│                      │ ☐ Eggs     │
│   [Photo 2]          │ ☐ Cheese   │
│                      │ ☐ Apples   │
│                      │ ☐ Bananas  │
│   [Photo 3]          │ ☐ Chicken  │
│                      │ ☐ Yogurt   │
│                      │ ☐ Cereal   │
│                      │ ☐ Juice    │
│                      │ ☐ Butter   │
│                      │ ☐ Coffee   │
│                      │ ☐ Pasta    │
│                      │ ☐ Sauce    │
└──────────────────────┴────────────┘
```

**Use Case:** Always-visible shopping list for quick reference. Family members add items throughout the week via Google Tasks app. Before grocery runs, check the display.

### Example 5: Family Project Board

**Setup:**
- Display: Full screen (landscape)
- Display mode: Board View (Kanban)
- Task lists: "Home Projects", "Family Goals"
- Filter: All tasks, show completed
- Refresh: 15 minutes
- Layout: Full screen

**Visual:**
```
┌─────────────────────────────────────────────┐
│         Family Projects & Goals             │
├──────────────┬──────────────┬───────────────┤
│ To Do        │ In Progress  │ Done          │
├──────────────┼──────────────┼───────────────┤
│ ☐ Paint      │ ☐ Organize   │ ✅ Clean out  │
│   guest room │   garage     │    basement   │
│              │   (Dad)      │               │
│ ☐ Fix        │              │ ✅ Plant      │
│   leaky      │ ☐ Declutter  │    garden     │
│   faucet     │   kids'      │               │
│              │   rooms      │ ✅ Replace    │
│ ☐ Replace    │   (Family)   │    air        │
│   light      │              │    filters    │
│   fixtures   │ ☐ Update     │               │
│              │   family     │ ✅ Set up     │
│ ☐ Install    │   photos     │    sprinklers │
│   new        │   (Mom)      │               │
│   shelving   │              │               │
└──────────────┴──────────────┴───────────────┘
```

**Use Case:** Family projects visualized as a Kanban board. Shows what's planned, what's in progress, and what's done. Great for family meetings to review progress.

---

## Family Use Cases: Making Tasks Work for Your Home

### Chore Tracking

**Weekly Chore System:**

**Setup:**
1. Create "Weekly Chores" task list in Google Tasks
2. Add tasks with clear assignees:
   - "Vacuum living room (Emma) - Wed"
   - "Mow lawn (Dad) - Sat"
   - "Laundry (Mom) - Thu"
3. Set due dates for each chore
4. Display on FamilyCast with "This Week" filter

**Color-Coded by Person:**
- Use subtasks or notes to indicate assignee
- Or create separate lists: "Emma's Chores", "Jake's Chores"
- Display side-by-side in board view

**Making Chores Fun:**
- Show completed tasks for 4 hours (celebrate!)
- Use encouraging language: "Great job, Emma!" in task notes
- Track weekly completion rates
- Reward consistent completion

### Shopping Lists

**Organized Shopping:**

**By Store:**
```
Google Task Lists:
  - Costco
  - Trader Joe's
  - Target
  - Home Depot
```

**By Category:**
```
Grocery Shopping Task List:
  Produce:
    ☐ Apples (2 lbs)
    ☐ Bananas (bunch)
    ☐ Carrots (bag)

  Dairy:
    ☐ Milk (2 gallons)
    ☐ Cheese (cheddar)
    ☐ Yogurt (variety pack)

  Pantry:
    ☐ Pasta (3 boxes)
    ☐ Sauce (marinara)
    ☐ Coffee (large)
```

**Family Participation:**
- Everyone adds items via Google Tasks app
- "Out of milk? Add it to the list!"
- Check display before grocery runs
- Check off items as you shop (if using phone)

### Homework Tracking

**For Parents:**

**Create Task Lists:**
- "Emma's Homework"
- "Jake's Homework"

**For Each Assignment:**
- Task: "Math worksheet - Chapter 5"
- Due date: Assignment deadline
- Notes: "Page 42-45, show work"
- Subtasks: For multi-step projects

**Display Setup:**
- Show kids' task lists on their display
- Today view for immediate priorities
- This week view for planning
- Color-code overdue assignments (red)

**Benefits:**
- Kids see their assignments clearly
- Parents track deadlines without nagging
- No "I forgot!" excuses
- Teaches time management

### Home Projects

**Room-by-Room Organization:**

**Create Projects:**
```
Home Projects Task List:

Basement:
  ☐ Clear out storage
  ☐ Organize shelves
  ☐ Paint walls
  ☐ Install lighting

Kitchen:
  ☐ Organize pantry
  ☐ Clean out fridge
  ☐ Fix leaky faucet

Kids' Rooms:
  ☐ Declutter toys
  ☐ Organize closets
  ☐ Hang new artwork
```

**Display Strategy:**
- Board view shows progress (To Do → In Progress → Done)
- Family works together on weekends
- Check off tasks together
- Before/after photos in notes

### Family Goals

**Shared Goals Everyone Works Toward:**

**Examples:**
- ☐ Save $5,000 for vacation (track progress in notes)
- ☐ Read 100 books as a family this year
- ☐ Reduce screen time by 30%
- ☐ Volunteer 50 hours together
- ☐ Complete home improvement projects

**Tracking Progress:**
- Update task notes with current progress
- Celebrate milestones together
- Display prominently for motivation
- Review during family meetings

### Pet Care

**Never Forget Pet Tasks:**

```
Pet Care Task List:

Daily:
  ☐ Feed Buddy (morning) - Emma
  ☐ Feed Buddy (evening) - Jake
  ☐ Walk Buddy (morning) - Dad
  ☐ Walk Buddy (evening) - Mom
  ☐ Refill water bowl - Kids

Weekly:
  ☐ Groom Buddy (Sat) - Dad
  ☐ Clean litter box (Wed, Sun) - Emma
  ☐ Wash pet bed (Sat) - Mom

Upcoming:
  ☐ Vet appointment - Oct 20 - Mom
  ☐ Buy dog food - Oct 18 - Dad
  ☐ Flea treatment - Oct 25 - Parents
```

**Display Setup:**
- Always visible in kitchen or mudroom
- Today view for daily tasks
- Color-code by person
- Checkboxes for accountability

---

## Task Organization Best Practices

### Creating Effective Task Lists

**By Category (Recommended for Most Families):**

**Pros:**
- Clear organization by type of task
- Easy to find what you need
- Natural grouping of similar tasks

**Structure:**
```
Task Lists:
  - Household Chores
  - Shopping & Errands
  - Kids' Activities
  - Home Projects
  - Pet Care
```

**By Family Member:**

**Pros:**
- Each person sees only their tasks
- Clear accountability
- Personal ownership

**Structure:**
```
Task Lists:
  - Mom's Tasks
  - Dad's Tasks
  - Emma's Tasks
  - Jake's Tasks
  - Family Tasks (everyone)
```

**Hybrid Approach (Best of Both):**

**Pros:**
- Flexibility for different types of tasks
- Personal lists + shared lists
- Adapts to family needs

**Structure:**
```
Task Lists:
  - Weekly Chores (by person in notes)
  - Shopping List (shared)
  - Mom's Work Tasks
  - Dad's Projects
  - Kids' Homework
  - Family Goals (shared)
```

### Writing Clear Task Titles

**Good Task Titles:**
- ✅ "Vacuum living room and hallway"
- ✅ "Buy milk (2 gallons)"
- ✅ "Math homework - Chapter 5 (due Thu)"
- ✅ "Call dentist to schedule Emma's checkup"
- ✅ "Water all indoor plants"

**Poor Task Titles:**
- ❌ "Clean" (too vague)
- ❌ "Stuff" (not actionable)
- ❌ "Remember" (what?)
- ❌ "TODO" (not specific)

**Best Practices:**
- Start with action verb (Buy, Call, Clean, Complete, Schedule)
- Be specific (which room? how much? when?)
- Include assignee if not using person-based lists
- Add quantities for shopping items
- Set realistic due dates

### Using Due Dates Effectively

**When to Set Due Dates:**
- ✅ Time-sensitive tasks (appointments, deadlines)
- ✅ Weekly recurring chores (every Wednesday)
- ✅ School assignments (homework due dates)
- ✅ Shopping before events (need items by Friday)
- ✅ Seasonal tasks (winterize house by November)

**When NOT to Set Due Dates:**
- ❌ Ongoing tasks with no urgency
- ❌ "Someday" projects
- ❌ General ideas (move to separate list)

**Due Date Strategy:**
- **Today**: Immediate priorities (homework tonight, errands today)
- **This Week**: Regular chores, upcoming assignments
- **Specific Date**: Appointments, deadlines, events
- **No Due Date**: Ongoing tasks, ideas, low-priority items

### Adding Task Notes & Details

**Use Notes For:**
- Additional instructions: "Use organic apples"
- Context: "Vacuum before guests arrive Saturday"
- Progress updates: "50% complete - kitchen done"
- Links: "Recipe: [link]"
- Assignee details: "Emma's responsibility this week"

**Example:**
```
Task: Plan Jake's birthday party
Due: Oct 20
Notes:
  - Invite 12 kids from class
  - Theme: Dinosaurs
  - Order cake from Sweet Treats
  - Reserve park pavilion
  - Buy party supplies at Party City
  - Create guest list by Oct 15
```

### Using Subtasks for Complex Projects

**When to Use Subtasks:**
- Multi-step projects
- Breaking large tasks into smaller steps
- Tracking progress on big goals

**Example: "Organize Garage"**
```
☐ Organize Garage
  ☐ Clear everything out
  ☐ Sort into keep/donate/trash
  ☐ Clean floor and walls
  ☐ Install new shelving
  ☐ Put items back organized
  ☐ Label storage bins
```

**Display Benefit:**
- Subtasks show progress
- Family sees what's done vs. remaining
- Easy to split work among family members

---

## Configuration Deep Dive

### Task List Selection

**Show All Task Lists:**
- Simplest setup
- Everything visible
- Good for: Families just getting started

**Select Specific Lists:**
- Curated display
- Only relevant tasks shown
- Good for: Focused displays (just chores, just shopping)

**Multiple Integrations:**
- Create separate Google Tasks integrations
- Each shows different lists
- Use in different layouts
- Example: Kitchen shows shopping, kids' room shows homework

### Filtering Rules

**Completion Status Filters:**

**Show Incomplete Only (Default):**
- Keeps display focused
- Only active tasks shown
- Reduces clutter
- Best for: Most families

**Show Completed Tasks:**
- Celebrate progress
- See what's done this week
- Motivates family members
- Auto-hide after 4 hours (recommended)

**Show Both:**
- Full context
- See everything
- Can be cluttered
- Best for: Project tracking

**Auto-Hide Completed:**
- 1 hour: Quick celebrations, then hide
- 4 hours: Good balance for daily chores
- 24 hours: Weekly chore tracking
- Never: Always show (not recommended)

**Due Date Filters:**

**All Tasks:**
- No filter, everything shown
- Good for: Full context, long-term planning

**Today Only:**
- Immediate priorities
- Reduces overwhelm
- Good for: Morning routine displays

**This Week:**
- Short-term planning
- See what's coming up
- Good for: Weekly chore boards

**Overdue Only:**
- Catch-up mode
- Focus on missed tasks
- Good for: Accountability displays

### Display Formatting Options

**List View:**
- Traditional to-do list
- Vertical stacking
- Best for: Detailed task tracking
- Use when: You have 5-20 tasks per list
- Grouping options: By task list, by due date, by person

**Board View (Kanban):**
- Columns by due date or status
- Visual progress tracking
- Best for: Project management, home improvements
- Use when: You want to see workflow stages
- Columns: "Today", "This Week", "Later" OR "To Do", "In Progress", "Done"

**Compact View:**
- Minimal spacing
- Shows more tasks
- Task titles only (no descriptions)
- Best for: Sidebar displays, many tasks
- Use when: Screen space is limited

**Typography Settings:**
- **Font size**:
  - Small (16pt): Compact displays, many tasks
  - Medium (20pt): Default, good readability
  - Large (28pt): Full-screen dedicated task boards
  - Extra Large (36pt): Across-the-room visibility
- **Checkbox size**: Match font size for consistency
- **Line spacing**:
  - Compact: More tasks visible
  - Normal: Balanced (recommended)
  - Relaxed: Easy reading, fewer tasks

**Color Schemes:**

**Use Google Task List Colors:**
- Inherits colors from Google Tasks app
- Consistent across devices
- Automatic color-coding

**Custom Colors:**
- Override Google colors
- Match your home decor
- Themed displays (pastels, bold, minimalist)

**Due Date Color-Coding:**
- Overdue: Red (urgent!)
- Today: Orange (important)
- This Week: Blue (plan ahead)
- Later: Gray (low priority)

**Completed Task Styling:**
- Strikethrough: Classic done indicator
- Gray out: Subtle de-emphasis
- Hide: Remove from view

### Sync & Refresh Settings

**Update Frequency:**

**5 Minutes (Near Real-Time):**
- Best for: Busy families, shared shopping lists
- Updates quickly when anyone adds tasks
- Good for: Kitchen command centers, high-traffic displays
- Note: Uses more data

**15 Minutes (Default):**
- Balanced performance and freshness
- Good for: Most families
- Fast enough for daily use
- Efficient data usage

**30 Minutes:**
- Standard updates
- Good for: Low-priority displays, secondary screens
- Less frequent but still current

**60 Minutes:**
- Hourly updates
- Good for: Static displays, rarely-changing lists
- Minimal data usage

**Smart Refresh (Recommended):**
- Only updates when Google Tasks data actually changes
- Saves bandwidth
- Reduces unnecessary updates
- Enabled by default

**Manual Refresh:**
- On-screen refresh button
- Force immediate update
- Good for: After big family meetings, before big events
- Optional feature

**Offline Behavior:**
- Displays show last synced data
- No data loss
- Returns to normal when internet restored
- Status indicator shows offline state

---

## Syncing Across Devices

### How Cross-Device Sync Works

**Add Tasks Anywhere:**

1. **Mom adds task on iPhone** (Google Tasks app)
   - "Buy milk" → Grocery Shopping list
2. **Task syncs to Google cloud** (instant)
3. **FamilyCast fetches update** (next refresh interval: 15 min)
4. **Task appears on display** (visible to whole family)
5. **Dad sees it before leaving for store**

**Check Off Tasks Anywhere:**

1. **Dad checks off "Buy milk" in Google Tasks app** (in store)
2. **Google Tasks updates completion status** (instant)
3. **FamilyCast fetches update** (next refresh: 15 min)
4. **Task checked off on display** (auto-hides after 4 hours)
5. **Everyone knows milk is purchased**

### Family Coordination Strategies

**Everyone Has Google Tasks App:**
- Install on all family members' phones
- Log into same Google account OR share lists
- Anyone can add tasks anytime
- Changes sync to display automatically

**Shared Google Account:**
- Create family Gmail account (e.g., smithfamily@gmail.com)
- All family members log into Google Tasks with this account
- Everyone sees all tasks
- Perfect for: Families with younger kids without their own accounts

**Individual Accounts with Shared Lists:**
- Each family member has own Google account
- Share specific task lists between accounts
- More privacy for personal tasks
- Good for: Families with teens

### Real-World Family Workflows

**Morning Routine:**
1. Family checks display while having breakfast
2. Everyone sees their tasks for the day
3. Kids know homework due today
4. Parents see errands to run
5. Everyone starts day aligned

**After School:**
1. Kids add homework to their task lists (on phone/tablet)
2. Tasks appear on display within 15 minutes
3. Parents see what's due when they get home
4. No "I forgot to tell you" excuses

**Grocery Shopping:**
1. Throughout the week, family adds items to "Shopping List"
2. "Out of cereal" → Add to list immediately
3. Before shopping, Mom checks display
4. All items captured, nothing forgotten
5. Check off items as shopping (on phone)

**Weekend Projects:**
1. Friday family meeting: Plan weekend tasks
2. Add tasks to "Home Projects" list
3. Assign to family members
4. Display shows everyone's responsibilities
5. Check off together as work is completed

**Evening Wind-Down:**
1. Check display for tomorrow's tasks
2. Prep for morning (pack backpacks, lay out clothes)
3. Review completed tasks (celebrate wins!)
4. Add any new tasks for tomorrow
5. Family aligned for next day

---

## Troubleshooting

### Tasks Not Showing

**Possible Causes:**
1. Google account not connected
2. No task lists selected in settings
3. Filters hiding all tasks (too restrictive)
4. Task lists empty in Google Tasks
5. Refresh interval too long

**Solutions:**

**1. Check Connection Status:**
- Go to Settings → Integrations
- Find Google Tasks
- Status should be 🟢 **Connected**
- If not, reconnect account

**2. Verify Task List Selection:**
- Open Google Tasks integration settings
- Check that at least one task list is selected
- Click "Refresh List" to reload from Google
- Save changes

**3. Remove Filters Temporarily:**
- Change filter to "All tasks"
- Change completion filter to "Show both"
- If tasks appear, filters were too restrictive
- Adjust filters to appropriate settings

**4. Check Google Tasks App:**
- Open Google Tasks on phone or web
- Verify tasks exist in the selected lists
- Add a test task
- Wait for refresh interval (15 min)
- Check if test task appears

**5. Force Manual Refresh:**
- Click refresh button on display (if enabled)
- Or go to integration settings → "Sync Now"
- Wait 30 seconds
- Check display again

### Tasks Not Updating

**Possible Causes:**
1. Refresh interval too long
2. Network connectivity issue on display device
3. Google API rate limit (very rare)
4. OAuth token expired
5. Smart refresh not detecting changes

**Solutions:**

**1. Reduce Refresh Interval:**
- Go to integration settings
- Change refresh interval to 5 or 15 minutes
- Save changes
- Wait for next refresh cycle

**2. Check Display Internet Connection:**
- Go to Settings → Network
- Verify Wi-Fi connected
- Test internet (open web browser)
- Reconnect Wi-Fi if needed
- Restart FamilyCast app

**3. Verify Google Tasks App:**
- Open Google Tasks on another device
- Confirm changes saved there
- Wait 15-20 minutes
- Check FamilyCast display again

**4. Reconnect Google Account:**
- Go to Google Tasks integration settings
- Click "Disconnect Account"
- Click "Connect Google Account"
- Re-authorize access
- Re-select task lists
- Save

**5. Check Last Update Time:**
- Integration settings show "Last synced: [time]"
- If >30 minutes ago with 15-min refresh, there's an issue
- Try manual refresh
- Check error logs in Settings → System → Logs

### Wrong Task Lists Showing

**Possible Causes:**
1. Incorrect task lists selected in settings
2. Using wrong Google account
3. Task lists renamed in Google Tasks
4. Cached data from previous configuration

**Solutions:**

**1. Review Task List Selection:**
- Open integration settings
- Check which lists are selected
- Verify list names match Google Tasks app
- Re-select correct lists
- Save changes

**2. Verify Google Account:**
- Integration settings show connected email
- Confirm this is the correct Google account
- If wrong account, disconnect and reconnect with correct one

**3. Refresh Task List Names:**
- If you renamed lists in Google Tasks
- Go to integration settings
- Click "Refresh Lists from Google"
- Re-select lists (with new names)
- Save

**4. Clear Cache:**
- Go to Settings → Advanced
- Click "Clear Integration Cache"
- Confirm
- Wait 1 minute
- Integration re-syncs automatically

### Display Formatting Issues

**Problem: Tasks Overlapping or Cut Off**

**Causes:**
- Too many tasks for screen size
- Font size too large
- Layout area too small

**Solutions:**
- Enable compact view (Settings → Display Style → Compact)
- Reduce font size (Large → Medium or Small)
- Increase display area in Layout Editor
- Add max tasks limit (show only top 10)
- Use scrolling if available

**Problem: Tasks Too Small to Read**

**Causes:**
- Font size too small
- Display resolution low
- Viewing from too far away

**Solutions:**
- Increase font size (Medium → Large or Extra Large)
- Reduce number of tasks shown (add filters)
- Use full screen layout instead of sidebar
- Increase display resolution if possible

**Problem: Colors Not Showing**

**Causes:**
- Theme set to monochrome
- Display color settings
- Custom colors not saved

**Solutions:**
- Check theme (Settings → Display Style → Theme)
- Enable "Use task list colors" option
- Set custom colors per list
- Verify display color settings (not grayscale)

### Authentication Errors

**Error: "Authorization Failed"**

**Step-by-Step Fix:**
1. Disconnect Google account (Settings → Integrations → Google Tasks → Disconnect)
2. Clear browser cache and cookies (if using web interface)
3. Restart FamilyCast app
4. Reconnect Google account
5. Ensure popup blockers disabled during OAuth flow
6. Grant all requested permissions
7. Try different browser if web-based (Chrome vs. Firefox)
8. Check Google account security settings (allow third-party apps)

**Error: "Token Expired"**

**Fix:**
- This is normal after 1-3 months
- Simply reconnect Google account
- OAuth tokens expire for security
- No data loss, just need to re-authorize

**Error: "Access Denied"**

**Possible Reasons:**
- Google account locked or suspended
- Two-factor authentication issue
- Admin restrictions (G Suite/Google Workspace)

**Solutions:**
- Verify you can log into Google Tasks directly
- Check Google account security settings
- Temporarily disable 2FA during connection (re-enable after)
- Contact Google support if account issues

---

## Privacy & Security

### What FamilyCast Can Access

**Permissions Granted to FamilyCast:**
- ✅ **Read task lists** - View list names you've created
- ✅ **Read tasks** - View task titles, descriptions, due dates, completion status
- ✅ **Read subtasks** - View subtasks and notes

**Permissions NOT Granted (Cannot Do):**
- ❌ **Create tasks** - FamilyCast cannot add new tasks
- ❌ **Edit tasks** - FamilyCast cannot modify task content
- ❌ **Delete tasks** - FamilyCast cannot remove tasks
- ❌ **Access other Google services** - Only Google Tasks (no Gmail, Drive, etc.)

**Read-Only Access:**
FamilyCast has view-only permissions to your Google Tasks. Your task data is safe and cannot be modified through FamilyCast. All task management happens in the Google Tasks app.

### How Your Data is Stored

**OAuth Tokens:**
- Encrypted at rest using AES-256 encryption
- Stored securely in FamilyCast database
- Never shared with third parties
- Automatically expire after 60 days (renewable)

**Task Data:**
- Cached temporarily (15-60 minutes depending on refresh interval)
- Stored in memory only, not permanently saved
- Automatically cleared when cache expires
- No persistent storage of task content

**Logs:**
- System logs contain no task details
- Only sync timestamps and status codes
- No personal information logged
- Logs retained 30 days for troubleshooting

**Data Transmission:**
- All communication encrypted (HTTPS/TLS 1.3)
- Direct connection to Google APIs (no intermediary)
- No data sent to third-party servers

### Data Retention Policy

**While Integration Active:**
- OAuth tokens: Stored encrypted until you disconnect
- Task data: Cached 15-60 minutes, then cleared
- Integration settings: Stored indefinitely

**After Disconnecting:**
- OAuth tokens: Immediately deleted
- Cached task data: Cleared within 1 hour
- Integration settings: Retained (for easy reconnection)
- No task content retained

**Account Deletion:**
- Deleting FamilyCast account removes all data
- OAuth tokens revoked automatically
- Google notified of revocation
- No data recoverable after 30 days

### Revoking Access

**In FamilyCast:**
1. Go to **Settings** → **Integrations**
2. Click **Google Tasks**
3. Click **Disconnect Account**
4. Confirm disconnection
5. OAuth token immediately revoked

**In Google Account:**
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click **Third-party apps with account access**
3. Find **FamilyCast** in the list
4. Click **Remove Access**
5. Confirm revocation

**Effect of Revocation:**
- FamilyCast can no longer access your Google Tasks
- Tasks disappear from display within 15 minutes
- Integration shows disconnected status
- Can reconnect anytime

### Family Privacy Considerations

**Who Sees What:**
- Everyone who views the FamilyCast display sees displayed tasks
- Consider display placement (kitchen vs. bedroom vs. office)
- Use filters to hide personal tasks from shared displays
- Consider separate Google accounts for personal vs. family tasks

**Recommendations:**
- **Public displays (kitchen, living room)**: Show family tasks, chores, shopping
- **Private displays (bedroom, office)**: Show personal task lists
- **Kids' displays**: Show only their tasks and family tasks
- **Guest mode**: Hide sensitive task lists when guests visit

---

## Comparing Google Tasks to Cozi Lists

### Feature Comparison

| Feature | Google Tasks | Cozi Lists |
|---------|--------------|------------|
| **Best For** | Tech-savvy families, Google users | Family-first features |
| **Sharing** | Manual list sharing | Built-in family sharing |
| **Assignments** | Basic, via notes | Color-coded by person |
| **Shopping Lists** | Good (generic task lists) | Excellent (purpose-built) |
| **Calendar Integration** | Google Calendar | Cozi Calendar |
| **Meal Planning** | Not built-in | Built-in meal planner |
| **Mobile Apps** | iOS, Android, Web | iOS, Android, Web |
| **Cost** | Free | Free (Cozi Gold optional) |
| **Privacy** | Google account | Cozi account |

### When to Use Google Tasks

**Choose Google Tasks if:**
- ✅ Your family already uses Google ecosystem
- ✅ You want tasks to sync with Google Calendar
- ✅ You prefer clean, minimalist interface
- ✅ You're comfortable with task list management
- ✅ You want individual task lists per person (separate accounts)
- ✅ You need integration with Google Workspace

**Pros:**
- Free, no premium tier
- Works with Google Calendar
- Cross-platform (iOS, Android, Web)
- Simple, focused interface
- Reliable Google infrastructure
- Integrates with Gmail (email tasks)

**Cons:**
- Not family-specific (generic task app)
- Sharing requires manual setup
- No built-in assignment colors
- Less intuitive for non-tech family members

### When to Use Cozi Lists

**Choose Cozi Lists if:**
- ✅ You want purpose-built family list features
- ✅ You need color-coded assignments built-in
- ✅ You want shopping lists optimized for groceries
- ✅ You plan to use Cozi Calendar and Meal Planner
- ✅ Your family is less tech-savvy (easier onboarding)
- ✅ You want one account for the whole family

**Pros:**
- Built specifically for families
- Color-coded assignments out of the box
- Shopping list optimization
- Integrates with Cozi ecosystem
- Meal planner included
- Easier for less technical family members

**Cons:**
- Requires separate Cozi account
- Premium features require Cozi Gold ($30/year)
- Smaller ecosystem than Google

### Using Both Together (Recommended!)

**Best of Both Worlds:**

**Use Google Tasks for:**
- Work tasks (if parents work from home)
- Personal projects
- Individual to-dos
- Integration with work calendar

**Use Cozi Lists for:**
- Family chores
- Shopping lists
- Kids' activities
- Household tasks

**Display Strategy:**
- **Kitchen display**: Cozi Lists (shopping, chores) + Google Tasks (today's priorities)
- **Home office**: Google Tasks (work) + minimal family tasks
- **Kids' display**: Combination (their homework + their chores)

**Example Layout:**
```
┌────────────────────────────────────┐
│   Family Command Center            │
├──────────────────┬─────────────────┤
│ Cozi Lists       │ Google Tasks    │
│                  │                 │
│ Shopping:        │ Today:          │
│ ☐ Milk           │ ☐ Work call     │
│ ☐ Bread          │   3pm           │
│ ☐ Eggs           │ ☐ Email client  │
│                  │ ☐ Prep for      │
│ Chores:          │   meeting       │
│ ☐ Vacuum (Emma)  │                 │
│ ☐ Laundry (Dad)  │                 │
└──────────────────┴─────────────────┘
```

---

## Advanced Tips & Tricks

### Multi-Display Strategy

**Different Displays, Different Views:**

**Kitchen Display:**
- Task lists: Shopping, Chores, Meal Prep
- Filter: This week
- Layout: Full screen with weather widget
- Purpose: Family command center

**Kids' Bedroom Display:**
- Task lists: Emma's Tasks, Jake's Tasks
- Filter: Today + Overdue
- Layout: Split with calendar
- Purpose: Homework and chore tracking

**Home Office Display:**
- Task lists: Work Tasks, Personal Projects
- Filter: Today only
- Layout: Sidebar with calendar
- Purpose: Personal productivity

**Mudroom/Entryway Display:**
- Task lists: Today's Errands
- Filter: Today only
- Layout: Compact list with weather
- Purpose: Quick check before leaving

### Recurring Tasks Setup

**Google Tasks Doesn't Have Built-in Recurring:**
- Workaround: Create weekly/monthly tasks manually
- Or use Google Calendar recurring events
- Display Google Calendar alongside Google Tasks

**Manual Recurring Setup:**
```
Weekly Chores:
  ☐ Vacuum (Emma) - every Wed
  ☐ Laundry (Dad) - every Thu
  ☐ Bathrooms (Mom) - every Sat
  ☐ Trash (Jake) - every Tue
```

- Set due date for next occurrence
- When completed, create next week's task
- Consider using Cozi Lists for better recurring support

### Integration with Google Calendar

**Combine Tasks + Events:**

**Display Strategy:**
- 60% screen: Google Calendar (events)
- 40% screen: Google Tasks (tasks)
- See schedule AND to-dos

**Workflow:**
- Appointments in Calendar
- Tasks in Tasks
- Complete view of the day

**Example:**
```
┌──────────────────────┬────────────┐
│   Today's Schedule   │   Tasks    │
│                      │            │
│  9:00 AM             │ ☐ Grocery  │
│  Dentist (Emma)      │   shopping │
│                      │            │
│  3:30 PM             │ ☐ Vacuum   │
│  Soccer Practice     │            │
│                      │ ☐ Laundry  │
│  6:00 PM             │            │
│  Family Dinner       │ ☐ Homework │
│                      │            │
└──────────────────────┴────────────┘
```

### Task Templates & Lists

**Create Reusable Task Lists:**

**Example: Weekly Cleaning Checklist**
1. Create "Cleaning Template" list
2. Add all weekly cleaning tasks
3. Don't set due dates
4. Each week, duplicate tasks to "This Week's Cleaning"
5. Set due dates
6. Display "This Week's Cleaning" on FamilyCast

**Example: Vacation Packing List**
1. Create "Vacation Packing" list
2. Add all items needed
3. Use before every trip
4. Check off as you pack
5. Uncheck all when trip is over (reuse next time)

**Example: Birthday Party Planning**
1. Create template with all party tasks
2. Duplicate for each birthday
3. Customize for specific child
4. Track progress on FamilyCast
5. Celebrate when all done!

### Family Meeting Integration

**Weekly Family Meeting Workflow:**

**Sunday Evening Routine:**
1. Gather family around FamilyCast display
2. Review last week's completed tasks (celebrate!)
3. Discuss upcoming week (what's due?)
4. Assign new tasks together
5. Set due dates collaboratively
6. Update Google Tasks as a group

**During Meeting:**
- Display shows current tasks
- Everyone adds their tasks via Google Tasks app
- Tasks appear on display (15-min refresh)
- Family sees changes in real-time
- Ensures everyone aligned

**After Meeting:**
- Tasks visible all week
- Everyone accountable
- Daily check-ins at breakfast
- Progress visible to all

### Gamification & Rewards

**Make Tasks Fun:**

**Chore Champion:**
- Track who completes most tasks each week
- Winner gets reward (pick movie, choose dessert)
- Display shows progress

**Completion Streaks:**
- Track consecutive weeks of task completion
- Celebrate milestones (1 month, 3 months, 6 months)
- Add notes with streak count

**Family Goals with Rewards:**
- "Complete 50 family tasks this month → Pizza party!"
- Track progress in task notes
- Display shows countdown
- Celebrate together when goal hit

**Visual Progress:**
- Use board view to show movement (To Do → Done)
- Take photos when big projects complete
- Share completion photos in family group chat

---

## Related Features

### Combine with Other Integrations

**[Cozi Calendar Integration](./cozi-calendar.md):**
- Show Google Tasks alongside Cozi Calendar
- Coordinate tasks with family schedule
- See who's available when for chores

**[Google Calendar Integration](./google-calendar.md):**
- Display Google Calendar events + Google Tasks
- Complete view of schedule and to-dos
- Time-block tasks around events

**[Google Photos Integration](./google-photos.md):**
- Display family photos with task lists
- Celebrate completed projects with before/after photos
- Make command center visually appealing

**[Weather Widget](./weather.md):**
- Plan outdoor chores based on weather
- "Mow lawn (Dad) - Sat if sunny"
- Schedule errands on nice days

**[Cozi Lists Integration](./cozi-lists.md):**
- Use both Google Tasks AND Cozi Lists
- Google Tasks for work/personal, Cozi for family
- Best of both worlds

### Layout Ideas

**[Layout Editor](../features/layouts.md):**
Design custom layouts combining tasks with other content:

**Kitchen Command Center:**
- 40% Google Tasks (shopping, chores)
- 40% Calendar (family schedule)
- 20% Weather widget

**Kids' Display:**
- 60% Google Tasks (homework, chores)
- 40% Calendar (their activities)

**Family Dashboard:**
- 30% Google Tasks (today's priorities)
- 50% Google Photos (family photos)
- 20% Weather and date/time

**Chore Board:**
- 100% Google Tasks (full screen)
- Board view by person
- Large fonts, high-contrast colors

**[Playlists](../workflows/playlists.md):**
- Rotate between different task views
- 30 seconds: Shopping list
- 30 seconds: This week's chores
- 30 seconds: Family goals

---

## Next Steps

### Get Started with Google Tasks

**1. Set Up Google Tasks:**
- Install Google Tasks app on your phone
- iOS: [App Store](https://apps.apple.com/app/google-tasks/id1353634006)
- Android: [Play Store](https://play.google.com/store/apps/details?id=com.google.android.apps.tasks)
- Web: [tasks.google.com](https://tasks.google.com)

**2. Create Your First Task Lists:**
- Start simple: "Shopping List", "Household Chores"
- Add a few tasks to each
- Set some due dates
- Get familiar with the app

**3. Connect to FamilyCast:**
- Follow [Setup Instructions](#setup) above
- Connect your Google account
- Select task lists to display
- Configure display settings

**4. Design Your Layout:**
- Use Layout Editor to create custom display
- Position Google Tasks widget
- Add other widgets (calendar, weather, photos)
- Save and deploy to your display

**5. Get Family On Board:**
- Show everyone how to add tasks
- Explain how sync works
- Set expectations for checking display daily
- Start with simple chores and shopping lists

### Resources & Support

**Google Tasks Help:**
- [Google Tasks Help Center](https://support.google.com/tasks/)
- [Create and edit tasks](https://support.google.com/tasks/answer/7675772)
- [Organize tasks into lists](https://support.google.com/tasks/answer/7675929)

**FamilyCast Support:**
- [FamilyCast Help Center](https://help.familycast.app)
- [Integration Troubleshooting Guide](../troubleshooting/integration-problems.md)
- [Contact Support](https://familycast.app/support)
- [Community Forum](https://community.familycast.app)

**Video Tutorials:**
- [Setting Up Google Tasks Integration](https://www.youtube.com/watch?v=example) (Coming soon)
- [Family Chore Board Setup](https://www.youtube.com/watch?v=example) (Coming soon)
- [Best Practices for Family Task Management](https://www.youtube.com/watch?v=example) (Coming soon)

---

## Frequently Asked Questions

### General Questions

**Q: Is Google Tasks free?**
A: Yes! Google Tasks is completely free with any Google account. No premium tiers or paid features.

**Q: Do we all need separate Google accounts?**
A: No. You can use one shared Google account for family tasks, or share task lists between individual accounts.

**Q: Can FamilyCast modify our tasks?**
A: No. FamilyCast has read-only access. All task management happens in the Google Tasks app.

**Q: How often do tasks update on the display?**
A: Default is 15 minutes. You can adjust to 5, 30, or 60 minutes in settings.

**Q: Can we use Google Tasks without FamilyCast?**
A: Yes! Google Tasks works great on its own. FamilyCast just makes tasks visible on a big display.

### Setup & Configuration

**Q: Do we need a separate Google account for FamilyCast?**
A: No. Use your existing Google account that has your family tasks.

**Q: Can we connect multiple Google accounts?**
A: Yes! Create separate integrations for each Google account, then display them side-by-side or on different displays.

**Q: What happens if we rename task lists in Google?**
A: Go to integration settings and click "Refresh Lists from Google" to sync the new names.

**Q: Can we display tasks from different Google accounts on one display?**
A: Yes! Create multiple Google Tasks integrations (one per account) and add both to your layout.

### Usage & Best Practices

**Q: What's the best way to organize tasks for a family?**
A: Start with category-based lists (Chores, Shopping, Homework) or person-based lists (Mom's Tasks, Dad's Tasks). See [Task Organization Best Practices](#task-organization-best-practices) section.

**Q: How do we handle recurring tasks (weekly chores)?**
A: Google Tasks doesn't have built-in recurring. Either create tasks manually each week, or consider Cozi Lists which has better recurring support.

**Q: Should we show completed tasks on the display?**
A: For chore boards, yes! Show completed tasks for 4 hours to celebrate progress. For shopping lists, no—hide completed to keep list focused.

**Q: How can we make task lists fun for kids?**
A: Use colors, large fonts, and celebrate completions! Show completed tasks briefly, create chore champion competitions, and reward consistent completion.

### Troubleshooting

**Q: Tasks aren't showing on the display. What do I do?**
A: Check connection status, verify task lists are selected, and ensure filters aren't too restrictive. See [Troubleshooting](#troubleshooting) section.

**Q: Tasks update in Google Tasks app but not on FamilyCast display. Why?**
A: Wait for the next refresh interval (default 15 min). Or try manual refresh, or reduce refresh interval to 5 minutes.

**Q: Can we check off tasks directly on the FamilyCast display?**
A: Not currently. Task management happens in the Google Tasks app. The display is view-only.

**Q: What if someone deletes a task by accident?**
A: Tasks deleted in Google Tasks app will disappear from display at next sync. There's no undo in Google Tasks, but you can recreate the task.

### Privacy & Security

**Q: Is our task data private?**
A: Yes. Data is encrypted in transit and cached temporarily. FamilyCast has read-only access and cannot modify tasks.

**Q: Can Google see our FamilyCast display?**
A: No. FamilyCast fetches data from Google Tasks API, but Google doesn't know what you're displaying or how.

**Q: What happens if we disconnect Google account?**
A: Tasks immediately stop updating and are removed from display. OAuth token is revoked. You can reconnect anytime.

**Q: Is it safe to display tasks in public areas of our home?**
A: Consider what guests might see. Use filters to hide personal tasks, or create separate task lists for public displays vs. private areas.

---

**Ready to transform your family's task management?** Connect your Google account and turn your FamilyCast display into your family's accountability center!

**[→ Set Up Google Tasks Integration Now](https://app.familycast.app/integrations/google-tasks)**
