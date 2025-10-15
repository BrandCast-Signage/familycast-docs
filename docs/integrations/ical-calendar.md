---
title: iCal Calendar Integration
---

# iCal Calendar Integration - Keep Your Family Organized

Display your family's events, activities, and appointments on your FamilyCast information center using the industry-standard iCal protocol.

![iCal Universal Compatibility](/diagrams/ical-universal-compatibility-diagram.png)

## What is iCal?

**iCal (iCalendar)** is a universal calendar format that **works with every major calendar provider**. It's the `.ics` file format that lets your calendar data work anywhere.

**Why It Matters for Families:**
- ✅ **No vendor lock-in** - Switch calendar apps anytime without losing data
- ✅ **Universal compatibility** - Works with Google Calendar, Apple Calendar, Outlook, Cozi, Yahoo, and any calendar service
- ✅ **Industry standard** - Proven, reliable technology used by millions
- ✅ **Multiple calendars** - Combine calendars from different providers (Dad's work calendar + Kids' school calendar + Family events)

**How It Works:**
1. Your calendar provider generates an iCal feed URL (`.ics` file)
2. FamilyCast fetches and displays your calendar events
3. Events update automatically throughout the day
4. Works identically regardless of which calendar app you use

## Overview

The iCal Calendar integration lets you show your family's schedule on your information center display. See everyone's activities, appointments, and events in one place—no more "Did you know...?" moments!

**Key Features:**
- Multiple calendar feeds in one display
- Automatic event updates
- Color-coded calendars by family member
- All-day and timed events
- Today's schedule and week-ahead view
- Timezone-aware event display
- Instant updates when calendar changes
- Works with calendars you already use

**Integration Type:** ICAL_CALENDAR

## Use Cases for Families

### Family Coordination
- **Master family calendar** - Everyone's events in one place
- **Morning schedule** - Know who needs to be where when
- **Weekly planning** - See the week ahead at a glance
- **Event reminders** - Visual reminder of upcoming activities

### Kids' Activities
- **Sports schedules** - Soccer games, practice times, tournaments
- **Music lessons** - Piano, guitar, band practice
- **Dance classes** - Ballet, tap, recitals
- **School events** - Field trips, parent-teacher conferences, early dismissals
- **Extracurriculars** - Scouts, clubs, volunteer activities

### Household Management
- **Meal planning** - Weekly dinner menu, grocery shopping trips
- **Chore schedule** - Whose turn for dishes, trash, yard work
- **Cleaning schedule** - Deep cleaning days, service appointments
- **Maintenance reminders** - HVAC filter changes, car service
- **Subscription renewals** - Streaming services, memberships

### Important Dates
- **Birthdays** - Family birthdays, friend birthdays, send cards
- **Anniversaries** - Wedding anniversaries, special milestones
- **Holidays** - School holidays, work holidays, vacation days
- **Medical appointments** - Doctor, dentist, orthodontist, therapy
- **Pet care** - Vet appointments, grooming, medication reminders

### Work-Life Balance
- **Parent work schedules** - Travel, late meetings, work-from-home days
- **Childcare coordination** - Daycare, babysitter, nanny schedule
- **Carpool schedule** - Who's driving when
- **After-school care** - Who picks up kids, when they're home

## What is iCal? (Why It Works with Everything)

**iCal is a universal standard, not a specific app.**

Think of it like email: You can use Gmail, Outlook, Yahoo Mail, or any email service, and they all work together because they use the same standard. iCal is the same thing for calendars.

**What This Means for Your Family:**
- **Already using Google Calendar?** It works.
- **Prefer Cozi Family Calendar?** It works.
- **Some family members use Apple Calendar, others use Outlook?** They all work together.
- **Switch calendar apps next year?** No problem—iCal moves with you.

**The Technical Part (Simple):**
- Your calendar app creates an "iCal feed URL"
- That URL points to an `.ics` file (the universal calendar format)
- FamilyCast reads that file and displays your events
- When you add/change events in your calendar app, the `.ics` file updates automatically

**No Special Setup Required:**
- You don't need a FamilyCast account in your calendar app
- You don't need to install anything
- You don't need to change how you manage your calendar
- Just get the iCal feed URL and paste it into FamilyCast

## Supported Calendar Providers

**Any calendar service that provides an iCal/ICS feed URL works with FamilyCast.** Here are the most popular for families:

### Google Calendar

**Why It Works:** Google Calendar natively supports iCal export

**Best For:**
- Most common choice for families
- Free and widely used
- Easy sharing among family members
- Works on all devices
- Excellent mobile apps

**Family Features:**
- Share calendars with family members
- Color-code by person
- Multiple calendars (Dad's, Mom's, Kids' activities)
- Mobile notifications
- Event attachments

**iCal Features:**
- Easy URL generation (Settings → Integrate calendar → Secret address in iCal format)
- Automatic updates when events change
- All-day and recurring events
- Timezone support
- Event reminders and descriptions

**Website:** [calendar.google.com](https://calendar.google.com)

### Cozi Family Calendar

**Why It Works:** Cozi provides iCal export specifically for family schedules

**Best For:**
- Families wanting a dedicated family app
- Households with kids and busy schedules
- Families wanting integrated shopping lists
- Simple, family-focused interface

**Family Features:**
- Built specifically for families
- Separate color per family member
- Shopping list integration (not via iCal)
- To-do lists (not via iCal)
- Recipe storage
- Simple, non-technical interface

**iCal Features:**
- Family calendar export
- Individual member calendars
- Color-coded per person
- School/work/activities separation
- Easy event creation

**Note:** Cozi is designed for families and makes family coordination simple. The iCal export works great with FamilyCast!

**Website:** [cozi.com](https://cozi.com)

### Apple Calendar (iCloud)

**Why It Works:** Apple Calendar invented the iCal format

**Best For:**
- Families using Apple devices (iPhone, iPad, Mac)
- iCloud users
- Families wanting privacy-focused calendars
- Seamless Apple ecosystem integration

**Family Features:**
- Family Sharing integration
- Shared family calendar
- Private and shared calendars
- iCloud sync across all Apple devices
- Siri integration

**iCal Features:**
- Native iCal format (it's named after this!)
- Public calendar sharing
- Subscription calendars
- Event attachments
- Travel time calculations

**Website:** [icloud.com/calendar](https://icloud.com/calendar)

### Microsoft Outlook / Office 365

**Why It Works:** Outlook exports calendars in iCal format

**Best For:**
- Families with Outlook.com accounts
- Office 365 subscribers
- Parents using Outlook for work
- Mixed device households

**Family Features:**
- Calendar sharing within family
- Meeting scheduling
- Event categories
- Multiple calendars
- Mobile app support

**iCal Features:**
- Publish calendar to internet
- Meeting attachments
- Recurring events
- Timezone support
- Event reminders

**Website:** [outlook.com](https://outlook.com)

### Yahoo Calendar

**Why It Works:** Yahoo supports iCal export

**Best For:**
- Yahoo Mail users
- Simple calendar needs
- Free calendar service
- Basic event tracking

**Family Features:**
- Calendar sharing
- Event notifications
- Mobile access
- Email integration

**iCal Features:**
- Calendar export via settings
- Event sharing
- Basic iCal feed
- Standard event types

**Website:** [calendar.yahoo.com](https://calendar.yahoo.com)

### Any Other iCal-Compatible Service

**These also work with FamilyCast:**
- **TimeTree** - Popular family calendar app
- **FamCal** - Family calendar with location tracking
- **Hub Family Organizer** - Family scheduling app
- **OurHome** - Chore and calendar app for families
- **School calendar systems** - Many schools publish iCal feeds
- **Sports team apps** - TeamSnap, LeagueApps, SportsEngine
- **Church calendars** - Service times, events, volunteer schedules
- **Community calendars** - Local events, library programs
- **Custom calendars** - Any service that exports `.ics` feeds

**The Rule:** If it exports an iCal/ICS URL, it works with FamilyCast.

## Setup

### Step 1: Get Your Calendar's iCal URL

#### From Google Calendar

1. Open [Google Calendar](https://calendar.google.com) on a computer
2. Find your calendar in the left sidebar (e.g., "Family" or "Smith Family")
3. Click the three dots (⋮) next to the calendar name
4. Select **Settings and sharing**
5. Scroll down to the **Integrate calendar** section
6. Copy the **Secret address in iCal format** URL

**What It Looks Like:**
```
https://calendar.google.com/calendar/ical/your-calendar-id/private-abc123/basic.ics
```

**Important Notes:**
- Use the **Secret address** (the private URL with a long code)
- Don't share this URL with others—it provides full access to your calendar
- If you accidentally share it, you can regenerate a new URL in settings

**Getting iCal URLs for Multiple Google Calendars:**

If your family uses separate calendars for different purposes (Dad's work calendar, Kids' school calendar, Family events), repeat these steps for each calendar:

1. **Dad's Work Calendar:**
   - Go to Dad's work calendar settings
   - Copy Secret address in iCal format
   - Add to FamilyCast with name "Dad's Work" and a blue color

2. **Kids' School Calendar:**
   - Go to school calendar settings (if you manage it)
   - Copy Secret address in iCal format
   - Add to FamilyCast with name "School Events" and a yellow color

3. **Family Events Calendar:**
   - Go to shared family calendar settings
   - Copy Secret address in iCal format
   - Add to FamilyCast with name "Family" and a green color

Now all three calendars will display together on your FamilyCast screen!

#### From Cozi Family Calendar

1. Open [Cozi.com](https://cozi.com) on a computer and log in
2. Click on **Calendar** in the top navigation
3. Click the **Settings** gear icon (top right)
4. Select **Export Calendar**
5. Choose which calendar to export:
   - **Family Calendar** (all family members)
   - **Individual member calendar** (just one person)
6. Copy the **iCal Feed URL** provided

**What It Looks Like:**
```
https://www.cozi.com/ical/export/calendar/abc123xyz
```

**Cozi Pro Tip:**
- Export the **Family Calendar** to show everyone's events
- Or export individual calendars for each family member
- Each family member's events will have their assigned color

**Note:** Cozi's shopping lists and to-do lists are NOT included in the iCal export (only calendar events). See the [Cozi Lists integration](./cozi-lists.md) for those features.

#### From Apple Calendar

1. Open the **Calendar** app on your Mac or go to [iCloud.com/calendar](https://icloud.com/calendar)
2. Find your calendar in the sidebar (e.g., "Family" or "Home")
3. Right-click (or Control-click) on the calendar name
4. Select **Share Calendar...**
5. Check the **Public Calendar** box
6. Copy the **Calendar Address** URL shown

**What It Looks Like:**
```
webcal://p01-caldav.icloud.com/published/2/ABC123XYZ
```

**Important:** Change `webcal://` to `https://`
```
https://p01-caldav.icloud.com/published/2/ABC123XYZ
```

**Why?** FamilyCast needs the `https://` version to fetch the calendar data.

**Privacy Note:**
- Making a calendar "Public" means anyone with the URL can view it
- Don't share the URL with people outside your family
- You can turn off public sharing anytime in calendar settings

#### From Microsoft Outlook

**Outlook.com (Web):**

1. Open [Outlook Calendar](https://outlook.com/calendar) and log in
2. Go to **Settings** (gear icon) → **View all Outlook settings**
3. Select **Calendar** → **Shared calendars**
4. Under **Publish a calendar**, choose your calendar
5. Click **Publish** and set permissions to **Can view all details**
6. Copy the **ICS** link provided

**What It Looks Like:**
```
https://outlook.live.com/owa/calendar/abc123/calendar.ics
```

**Outlook Desktop App:**

1. Right-click on your calendar in the folder list
2. Select **Properties**
3. Click **Publish to Internet**
4. Choose **iCal** format
5. Copy the generated URL

**Website:** [outlook.com](https://outlook.com)

### Step 2: Add Calendar to FamilyCast

**From Your FamilyCast Dashboard:**

1. Navigate to **Content Library** → **Add Content Source**
2. Select **Calendar** content type
3. Click **Add Calendar Feed**
4. Enter feed details:
   - **Name**: Descriptive name (e.g., "Family Calendar" or "Kids' Activities")
   - **iCal URL**: Paste the URL from Step 1
   - **Priority**: Keep default (explained below)
   - **Color**: Choose a color to visually identify this calendar (optional)
5. Click **Add Feed**
6. Repeat for additional calendars (Dad's work calendar, Kids' school calendar, etc.)

**Feed Configuration Example:**
```javascript
{
  "name": "Family Calendar",
  "icalUrl": "https://calendar.google.com/calendar/ical/.../basic.ics",
  "isActive": true,
  "priority": 100,
  "color": "#34A853"  // Green
}
```

**Understanding Priority:**
- Higher number = more important
- Useful when you have limited screen space
- Example: Family events (100) > Work calendar (50)
- Most families can ignore this and use the defaults

**Color Coding for Families:**
- **Dad's Calendar**: Blue (#4285F4)
- **Mom's Calendar**: Purple (#9C27B0)
- **Kids' Activities**: Yellow (#FBBC04)
- **School Events**: Red (#EA4335)
- **Family Events**: Green (#34A853)

Choose colors that make sense for your family!

### Step 3: Configure Display Settings

**Choose What You Want to See:**

**Date Range:**
- **Today only**: Just show today's schedule (good for morning routine displays)
- **This week**: See the week ahead (Sunday-Saturday)
- **Next 7 days**: Rolling 7-day window
- **Next 14 days**: Two-week overview
- **Custom range**: Choose specific start/end dates

**Event Limits:**
- **Max events**: How many total events to show (e.g., 20 events)
- **Max per calendar**: Limit each calendar individually (e.g., 10 events per calendar)
- Prevents one busy calendar from taking over the display

**Event Types:**
- **Include all-day events**: Show birthdays, holidays, "No School" days
- **Include past events**: Show events that already started today (e.g., "Soccer practice 3-5pm" shows even at 4pm)
- **Hide work events**: Filter out work meetings if display is for kids

**Display Format:**
- **Compact list**: Simple list of events (good for small displays)
- **Detailed view**: Full event info including location and description
- **Day view**: Events grouped by day (Today, Tomorrow, Wednesday...)
- **Week view**: 7-day calendar grid

**Configuration Example:**
```javascript
{
  "refreshInterval": 300,        // Update every 5 minutes
  "maxEvents": 15,               // Show 15 events total
  "maxEventsPerFeed": 10,        // Max 10 events per calendar
  "mergeStrategy": "chronological",  // Sort by time
  "dateRange": 7,                // Show next 7 days
  "includeAllDay": true,         // Show birthdays, holidays
  "includePast": false,          // Hide events that already ended
  "displayFormat": "day"         // Group events by day
}
```

**Recommended Settings for Families:**
- **Morning display**: Today only, detailed view, 5-10 events
- **Kitchen display**: Next 7 days, day view, 15-20 events
- **Command center**: Next 14 days, week view, all events

### Step 4: Add Calendar to Your Display Layout

**In Layout Editor:**

1. Open your existing layout or create a new one
2. Add a content area for the calendar
3. Set content type to **CALENDAR**
4. Select your calendar content source
5. Position and resize the calendar area
6. Save layout
7. Assign layout to your display

**Recommended Layout Sizes:**

**Small Display (e.g., old tablet):**
- Fullscreen calendar: 1024×600 or 800×480
- Show compact list view
- Today + tomorrow only
- 5-8 events visible

**Medium Display (e.g., 10-15" screen):**
- Calendar area: 800×600 or 960×540
- Detailed view with event locations
- Next 7 days
- 10-15 events visible
- Room for photos or other content

**Large Display (e.g., TV or monitor):**
- Calendar area: 1920×1080 (fullscreen) or split with photos
- Day view or week view
- Next 14 days
- 15-25 events visible
- Include event descriptions

**Example Family Layout:**
```
┌─────────────────────────────────────┐
│   Today: Monday, October 14, 2025   │  ← Header with date
├──────────────────┬──────────────────┤
│                  │  Family Calendar  │
│   Photo          │  ───────────────  │
│   Slideshow      │  9:00 AM          │
│                  │  School starts    │  ← Calendar events
│   (rotate        │                   │
│   family         │  3:00 PM          │
│   photos)        │  Soccer practice  │
│                  │  Greenfield Park  │
│                  │                   │
│                  │  6:00 PM          │
│                  │  Family dinner    │
└──────────────────┴──────────────────┘
```

**Layout Tips:**
- Leave room for family photos (makes it more personal!)
- Use large, readable fonts (minimum 18-24pt)
- High contrast colors (dark text on light background)
- Test readability from across the room

## Multiple Calendar Support

### Combining Calendars from Different People

One of the best features of FamilyCast is showing everyone's schedule in one place!

**Example: The Johnson Family**

**Dad's Work Calendar (Google Calendar):**
- Work meetings
- Business travel
- Work-from-home days
- Late nights at office

**Mom's Work Calendar (Outlook Calendar):**
- Work schedule
- Client meetings
- Conference calls
- Carpool duty days

**Kids' School Calendar (Apple Calendar):**
- School holidays
- Early dismissal days
- Field trips
- Parent-teacher conferences

**Family Events Calendar (Cozi Calendar):**
- Soccer games
- Piano lessons
- Birthday parties
- Doctor appointments
- Family activities

**How to Set It Up:**

1. **Get iCal URL from each calendar** (follow Step 1 for each service)
2. **Add each calendar to FamilyCast:**
   - Dad's Work: Priority 70, Blue color
   - Mom's Work: Priority 70, Purple color
   - Kids' School: Priority 90, Red color
   - Family Events: Priority 100, Green color
3. **Configure display:**
   - Show next 7 days
   - Color-code by person
   - Day view format
4. **Result:** Everyone sees the family's full schedule at a glance!

**Color Coding Strategy:**

Assign each person a unique color:
- **Dad**: Blue (#4285F4)
- **Mom**: Purple (#9C27B0)
- **Kids**: Yellow (#FBBC04)
- **School**: Red (#EA4335)
- **Family events**: Green (#34A853)

Now you can see at a glance who has what going on!

### Combining Calendars from Different Services

**Great news:** It doesn't matter which calendar app each person uses!

**Example Family Setup:**
- Dad uses **Google Calendar** for work
- Mom uses **Outlook Calendar** for work
- Kids' school publishes **Apple Calendar** feeds
- Family shared calendar is in **Cozi**

**They all display together beautifully!**

That's the power of iCal—it's a universal standard. FamilyCast fetches events from all calendars and displays them together, sorted by time and color-coded by source.

**Steps:**
1. Get iCal URL from Google Calendar (Dad's work)
2. Get iCal URL from Outlook Calendar (Mom's work)
3. Get iCal URL from Apple Calendar (School)
4. Get iCal URL from Cozi Calendar (Family)
5. Add all four to FamilyCast
6. Configure colors and priorities
7. Done!

**Visual Example:**
```
Monday, October 14
─────────────────────────────────────
🔵 8:00 AM  Dad - Team Meeting (Work)
🟣 9:00 AM  Mom - Client Call (Work)
🔴 9:00 AM  Kids - School Starts
🟡 3:00 PM  Kids - Soccer Practice
🟢 6:00 PM  Family - Dinner at Home

Tuesday, October 15
─────────────────────────────────────
🔴 No School - Teacher Workday
🔵 All Day  Dad - Business Travel
🟣 10:00 AM Mom - Doctor Appointment
🟢 2:00 PM  Family - Park Playdate
```

Each color represents a different calendar source!

## Family Use Cases (In Detail)

### Morning Routine Display

**The Problem:** Chaotic mornings with "Wait, what do I have today?"

**The Solution:** Kitchen display showing today's schedule

**Setup:**
- Display location: Kitchen or command center
- Calendar feeds: All family calendars
- Date range: Today only
- Display format: Detailed view with times and locations
- Event limit: 8-10 events

**What Family Members See:**
```
Today: Monday, October 14
─────────────────────────────
7:00 AM  ☀️ Wake up time
8:00 AM  🎒 School bus pickup
9:00 AM  💼 Dad - Team standup
10:00 AM 💼 Mom - Client meeting
3:00 PM  ⚽ Soccer practice (Greenfield Park)
         Drop-off: Dad picks up at 5pm
6:00 PM  🍝 Family dinner
7:00 PM  📚 Homework time
```

**Benefits:**
- Everyone knows the day's plan
- No surprises ("I forgot about practice!")
- Visual reminder of who's doing what
- Reduces morning stress

### Weekly Planning Display

**The Problem:** Can't see the full week ahead

**The Solution:** Living room or command center display with week view

**Setup:**
- Display location: Family room or entryway
- Calendar feeds: All family calendars
- Date range: Next 7 days
- Display format: Day view (events grouped by day)
- Event limit: 20-25 events

**What Family Members See:**
```
This Week: October 14-20
─────────────────────────────
Monday 14
  8:00 AM School
  3:00 PM Soccer practice
  6:00 PM Family dinner

Tuesday 15
  No School - Teacher workday
  10:00 AM Mom - Doctor appt
  2:00 PM Park playdate

Wednesday 16
  8:00 AM School
  4:00 PM Piano lesson
  7:00 PM PTA meeting

Thursday 17
  8:00 AM School
  3:30 PM Dentist (kids)
  6:00 PM Dad - Late meeting

Friday 18
  8:00 AM School
  5:00 PM Date night (parents)
  Babysitter: 5pm-9pm

Weekend
  Saturday: Birthday party 2pm
  Sunday: Church 10am, Brunch after
```

**Benefits:**
- Plan ahead for busy days
- Coordinate carpools and babysitters
- Meal planning around schedule
- Weekend activity planning

### Kids' Activity Tracking

**The Problem:** Multiple kids, multiple activities, "Where are we supposed to be?"

**The Solution:** Dedicated activity calendar display

**Setup:**
- Display location: Mudroom or entryway
- Calendar feeds: Kids' activity calendars only (soccer, dance, music, scouts)
- Date range: Next 14 days
- Display format: Day view with locations
- Color-coded by child

**Example: The Miller Family (3 kids)**

**Calendars:**
- Jake's Activities (blue): Soccer, piano
- Emma's Activities (purple): Dance, gymnastics
- Sophie's Activities (yellow): Soccer, art class

**Display:**
```
This Week's Activities
─────────────────────────────
Monday
  🔵 Jake - Soccer practice 4-5:30pm (Greenfield)
  🟣 Emma - Dance 5-6pm (Studio on Main St)

Tuesday
  🟡 Sophie - Art class 4-5pm (Community Center)
  🔵 Jake - Piano lesson 6-7pm (Teacher's home)

Wednesday
  🟣 Emma - Gymnastics 5-6:30pm (Gym on Oak Ave)

Thursday
  🔵 Jake - Soccer practice 4-5:30pm (Greenfield)
  🟡 Sophie - Soccer practice 4-5:30pm (Greenfield)
         [Same time! Carpool opportunity]

Saturday
  🔵 Jake - Soccer game 9am (Away at Lincoln Field)
  🟣 Emma - Dance recital 2pm (High School Auditorium)
  🟡 Sophie - Art show 4-6pm (Community Center)
```

**Benefits:**
- Never miss an activity
- Spot carpool opportunities (Jake & Sophie same practice time!)
- Plan for multiple drop-offs
- Visual reminder for kids to pack gear

### Meal Planning Integration

**The Problem:** "What's for dinner?" + "When do we need groceries?"

**The Solution:** Kitchen calendar with meal plan events

**Setup:**
- Display location: Kitchen
- Calendar feed: Family calendar with meal events
- Date range: This week
- Display format: Day view
- Include grocery shopping trips

**How to Set Up Meal Planning:**

1. **In your family calendar app**, create events for meals:
   - **Event title**: "Dinner: Spaghetti & Meatballs"
   - **Time**: 6:00 PM (or "All Day" for menu planning)
   - **Description**: Recipe link, ingredients needed
   - **Location**: Home (or restaurant name if eating out)

2. **Add grocery shopping trips:**
   - **Event title**: "Grocery Shopping"
   - **Time**: 10:00 AM Saturday
   - **Description**: Milk, eggs, pasta, ground beef, tomatoes

3. **Add meal prep reminders:**
   - **Event title**: "Defrost chicken for tomorrow"
   - **Time**: 6:00 PM today (night before)

**Display Result:**
```
This Week's Meals
─────────────────────────────
Monday
  6:00 PM Dinner: Spaghetti & Meatballs
          Recipe: [link in description]

Tuesday
  6:00 PM Dinner: Grilled Chicken & Vegetables
  🔔 Defrost chicken tonight!

Wednesday
  6:00 PM Dinner: Tacos
          Need: Ground beef, lettuce, tomatoes

Thursday
  6:00 PM Dinner: Leftovers night

Friday
  7:00 PM Dinner: Pizza (takeout)

Saturday
  10:00 AM 🛒 Grocery Shopping
           Check fridge before leaving!
  6:00 PM Dinner: Family BBQ

Sunday
  12:00 PM Meal Prep Sunday
           Prep lunches for the week
  6:00 PM Dinner: Pot roast (slow cooker)
```

**Benefits:**
- Answer "What's for dinner?" before anyone asks
- Plan grocery shopping around schedule
- Kids can see and help with meal prep
- Reduce food waste (planned meals = intentional shopping)

**Bonus:** Combine with [Cozi Lists integration](./cozi-lists.md) to show shopping list alongside meal plan!

### Birthday & Anniversary Reminders

**The Problem:** Forgetting important family dates

**The Solution:** Calendar with birthday and anniversary events

**Setup:**
- Display location: Kitchen or family room
- Calendar feed: Family calendar with birthdays/anniversaries
- Date range: Next 30 days
- Display format: List view
- Highlight upcoming birthdays

**Create Recurring Birthday Events:**

In your calendar app:
1. Create all-day event: "🎂 Emma's Birthday"
2. Set to repeat: **Annually** on October 14
3. Add reminder: 7 days before (to order/plan cake)
4. Add reminder: 1 day before (to wrap presents)

**Display:**
```
Upcoming Birthdays & Anniversaries
──────────────────────────────────
In 3 days: October 17
  🎂 Emma's Birthday (turns 8!)
  📝 To-do: Order cake, wrap presents

In 1 week: October 21
  💐 Anniversary (10 years!)
  📝 To-do: Book babysitter, make reservation

In 2 weeks: October 28
  🎂 Grandma's Birthday
  📝 To-do: Mail card, video call

Next month: November 5
  🎂 Jake's Birthday (turns 11!)
  📝 To-do: Plan party, send invitations
```

**Benefits:**
- Never forget family birthdays
- Advance planning time for parties
- Kids see upcoming celebrations
- Reminder to send cards to extended family

### Chore Schedule

**The Problem:** Whose turn is it to do dishes?

**The Solution:** Calendar with recurring chore events

**Setup:**
- Display location: Kitchen or command center
- Calendar feed: "Family Chores" calendar
- Date range: This week
- Display format: Day view
- Color-coded by person

**Create Chore Events:**

In your calendar app:
1. Create event: "Jake: Dishes"
2. Time: 7:00 PM (after dinner)
3. Repeat: Every Monday & Thursday
4. Color: Blue (Jake's color)

Repeat for each chore and family member.

**Display:**
```
This Week's Chores
─────────────────────────────
Monday
  7:00 PM 🔵 Jake - Dishes
  8:00 PM 🟣 Emma - Trash & Recycling

Tuesday
  7:00 PM 🟡 Sophie - Set table, clear table

Wednesday
  7:00 PM 🔵 Jake - Vacuum living room
  8:00 PM 🟣 Emma - Feed pets

Thursday
  7:00 PM 🟡 Sophie - Dishes
  8:00 PM 🔵 Jake - Trash & Recycling

Friday
  7:00 PM 🟣 Emma - Set table, clear table

Saturday
  10:00 AM 🔵 Jake - Mow lawn
  10:00 AM 🟣 Emma - Clean bathroom
  2:00 PM 🟡 Sophie - Organize toy room

Sunday
  5:00 PM 🟢 Family - Meal prep together
```

**Benefits:**
- No arguing about whose turn it is
- Visual reminder for kids
- Fair rotation (everyone sees they're taking turns)
- Build responsibility habits

**Bonus:** Link to [Cozi Lists](./cozi-lists.md) or [Google Tasks](./google-tasks.md) for detailed chore checklists!

### School Calendar Sync

**The Problem:** Missing school holidays, early dismissal days, events

**The Solution:** Subscribe to school's public calendar

**Many schools publish iCal calendars!**

**How to Find Your School's Calendar:**
1. Check school website for "Subscribe to Calendar" link
2. Look for "Add to Google Calendar" or "iCal" links
3. Contact school office for iCal feed URL
4. Check school app for calendar export

**Setup:**
- Calendar feed: School's public iCal URL
- Priority: High (so school events stand out)
- Color: Red (alerts/important)
- Include: Holidays, early dismissals, events, conferences

**Display:**
```
School Calendar
─────────────────────────────
Next Week:
  Monday 10/14 - Regular schedule
  Tuesday 10/15 - Teacher Workday (No School)
  Wednesday 10/16 - Early Dismissal (1:00 PM)
  Thursday 10/17 - Picture Day
  Friday 10/18 - Regular schedule

Later This Month:
  October 24 - Parent-Teacher Conferences (5-8pm)
  October 31 - Halloween Parade (2:00 PM)

Next Month:
  November 11 - Veterans Day (No School)
  November 27-29 - Thanksgiving Break
```

**Benefits:**
- Never surprised by school holidays
- Plan childcare for no-school days
- Remember early dismissal days
- Know about school events in advance

**Pro Tip:** Add school calendar to your personal family calendar, then export to FamilyCast. This way you can add notes like "Childcare needed" or "Pack lunch for field trip."

## Configuration Options Explained

### Date Range Options

**Today Only:**
- Shows: Only events happening today
- Best for: Morning routine display, quick schedule check
- Updates: Throughout the day as events pass

**This Week (Sunday-Saturday):**
- Shows: Sunday through Saturday of current week
- Best for: Weekly planning, overview display
- Updates: Resets each Sunday

**Next 7 Days (Rolling):**
- Shows: Today + next 6 days (rolling window)
- Best for: Always seeing a full week ahead
- Updates: Continuous (today changes daily)

**Next 14 Days:**
- Shows: Two weeks ahead
- Best for: Advance planning, busy families
- Updates: Continuous rolling window

**Custom Range:**
- Shows: Specific date range you choose
- Best for: Special planning (vacation prep, busy season)
- Updates: Static until you change it

**Recommendation for Families:**
- Morning display: **Today only**
- Kitchen display: **Next 7 days (rolling)**
- Command center: **Next 14 days**

### Event Display Formats

**Compact List View:**
```
┌────────────────────────┐
│ Today's Schedule       │
├────────────────────────┤
│ 8:00 AM School starts  │
│ 3:00 PM Soccer practice│
│ 6:00 PM Family dinner  │
└────────────────────────┘
```
- **Best for:** Small displays, sidebar widgets, quick glance
- **Shows:** Time + title only
- **Space:** 5-8 events visible

**Detailed View:**
```
┌────────────────────────────┐
│ Today's Schedule           │
├────────────────────────────┤
│ 8:00 AM - 3:00 PM          │
│ 🎒 School                  │
│    Washington Elementary   │
│                            │
│ 3:00 PM - 5:00 PM          │
│ ⚽ Soccer Practice         │
│    Greenfield Park         │
│    Coach: Mr. Smith        │
│                            │
│ 6:00 PM                    │
│ 🍝 Family Dinner           │
│    At home                 │
└────────────────────────────┘
```
- **Best for:** Medium/large displays, detailed information
- **Shows:** Time, title, location, description
- **Space:** 8-12 events visible

**Day View:**
```
┌──────────────────────────────┐
│ This Week                    │
├──────────────────────────────┤
│ Monday, October 14           │
│   8:00 AM School             │
│   3:00 PM Soccer practice    │
│   6:00 PM Family dinner      │
│                              │
│ Tuesday, October 15          │
│   No School - Teacher workday│
│   10:00 AM Doctor appt       │
│                              │
│ Wednesday, October 16        │
│   8:00 AM School             │
│   4:00 PM Piano lesson       │
└──────────────────────────────┘
```
- **Best for:** Weekly overview, planning ahead
- **Shows:** Events grouped by day
- **Space:** 15-25 events visible (depends on days shown)

**Week Grid View:**
```
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│ Mon │ Tue │ Wed │ Thu │ Fri │ Sat │ Sun │
├─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ 8AM │     │ 8AM │ 8AM │ 8AM │     │     │
│Schl │ No  │Schl │Schl │Schl │10AM │10AM │
│     │Schl │     │     │     │Game │Chrc │
│ 3PM │     │ 4PM │3:30P│     │     │     │
│Sccr │10AM │Pian │Dent │5PM  │ 2PM │     │
│     │Dr   │     │     │Date │Prty │     │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┘
```
- **Best for:** Visual week overview, large displays
- **Shows:** 7-day grid with abbreviated events
- **Space:** All events for the week (abbreviated)

**Recommendation:**
- **Portrait display (tablet)**: Day view or compact list
- **Landscape display (TV/monitor)**: Week grid or detailed view
- **Small display**: Compact list, today only
- **Large display**: Week grid, 7-14 days

### Color Coding Strategies

**By Person:**
- Dad: Blue
- Mom: Purple
- Kid 1: Yellow
- Kid 2: Green
- Kid 3: Orange

**By Calendar Type:**
- Work: Blue
- School: Red
- Activities: Yellow
- Family events: Green
- Medical: Purple

**By Priority:**
- Must-do: Red
- Important: Orange
- Nice-to-do: Yellow
- Optional: Green

**Recommendation for Families:** Color by person (easiest to see who's doing what at a glance)

### Filter Options

**Include All-Day Events:**
- ✅ **On**: Show birthdays, holidays, "No School" days
- ❌ **Off**: Hide all-day events (only show timed events)
- **Recommendation**: Keep ON for families (birthdays and holidays are important!)

**Include Past Events:**
- ✅ **On**: Show events that already started today (e.g., "School 8am-3pm" still shows at 2pm)
- ❌ **Off**: Hide events that already ended
- **Recommendation**: OFF for morning display, ON for all-day display

**Max Events:**
- Limit total number of events shown
- Prevents display from being overwhelming
- **Recommendation**: 15-20 events for most displays

**Max Events Per Calendar:**
- Limit each calendar individually
- Prevents one busy calendar from dominating
- **Example**: Max 10 events from Dad's work calendar, even if he has 30 meetings
- **Recommendation**: Use if one person's calendar is much busier than others

## Troubleshooting

### Events Not Showing Up

**Problem:** Calendar added to FamilyCast, but no events appear

**Check These:**

1. **iCal URL is correct:**
   - Copy the URL again from your calendar app
   - Paste it in a web browser address bar
   - It should download a `.ics` file
   - If browser shows error, URL is wrong

2. **Calendar is public/shared:**
   - **Google Calendar**: Settings → Calendar must be "Public" or use secret iCal link
   - **Cozi Calendar**: Must export Family Calendar (not private calendar)
   - **Apple Calendar**: Calendar must be "Public" in sharing settings
   - **Outlook Calendar**: Calendar must be "Published to Internet"

3. **Events are in the date range:**
   - If showing "Next 7 days" and all events are next month, nothing will show
   - Change date range to include your events

4. **Calendar feed is active:**
   - In FamilyCast content library, check feed status
   - Toggle "Active" to ON

5. **Internet connection:**
   - FamilyCast must fetch calendar from internet
   - Check display device has working internet

**Still not working?**
- Remove the calendar feed and add it again
- Wait 5 minutes (calendars refresh every 5 minutes)
- Try a different calendar to test (e.g., your personal Google Calendar)

### Calendar Not Updating

**Problem:** Added new events to calendar, but they don't show on FamilyCast display

**Check These:**

1. **Refresh interval:**
   - Default: Calendars refresh every 5 minutes
   - Wait a few minutes, then check again
   - Events should appear after next refresh

2. **Events added to correct calendar:**
   - Did you add event to your Google Calendar, but FamilyCast is showing your Cozi Calendar?
   - Make sure you added event to the calendar that's connected to FamilyCast

3. **Event date:**
   - If you added event for next month, but display shows "Next 7 days," it won't appear yet
   - Event must be within configured date range

4. **Browser cache:**
   - Refresh browser page (F5 or Ctrl+R)
   - Or close and reopen display

**Force Immediate Update:**
- In FamilyCast dashboard, go to Content Library
- Find your calendar content source
- Click "Refresh Now" button
- Events should update within 30 seconds

### Wrong Time Zone

**Problem:** Events showing at wrong time (e.g., 3pm event shows as 12pm)

**This is a timezone issue!**

**Solutions:**

1. **Set FamilyCast Store Timezone:**
   - Go to Settings → Store Settings
   - Set timezone to your local timezone
   - Example: "America/New_York" or "America/Los_Angeles"

2. **Check Calendar Timezone:**
   - **Google Calendar**: Settings → General → Timezone
   - **Apple Calendar**: System Preferences → Date & Time → Timezone
   - **Outlook Calendar**: Settings → Calendar → Timezone
   - Make sure it matches your location

3. **Check Display Device Timezone:**
   - If using tablet: Settings → Date & Time → Timezone
   - If using computer: System timezone settings
   - Should match FamilyCast store timezone

**Why This Happens:**
- Your calendar stores events in your timezone
- FamilyCast converts events to store timezone
- If timezones don't match, events show at wrong time

**Example:**
- You're in New York (Eastern Time)
- Calendar event: 3:00 PM Eastern
- FamilyCast store set to Los Angeles (Pacific Time)
- Result: Event shows as 12:00 PM (3 hours earlier)
- **Fix:** Set FamilyCast store timezone to Eastern Time

### Events from Wrong Calendar

**Problem:** Seeing events that shouldn't be on this display

**Check These:**

1. **Multiple calendar feeds:**
   - Did you add multiple calendars to FamilyCast?
   - Check Content Library → Your calendar content source → Feeds
   - Remove any calendars you don't want displayed

2. **Wrong iCal URL:**
   - Accidentally used iCal URL from wrong calendar?
   - Example: Used Dad's work calendar URL instead of Family calendar URL
   - **Fix:** Edit feed, paste correct iCal URL

3. **Calendar sharing:**
   - Is someone else sharing their calendar with you?
   - Their events might appear in your calendar
   - Check your calendar app's settings for shared calendars

4. **Duplicate calendars:**
   - Did you add same calendar twice?
   - Check for duplicate feeds in FamilyCast
   - Remove duplicates

### Display is Slow or Laggy

**Problem:** Calendar takes long time to load or display is slow

**Optimization Steps:**

1. **Reduce number of events:**
   - Change "Max events" from 50 to 15-20
   - Reduce date range from 30 days to 7 days
   - Set "Max events per feed" if using multiple calendars

2. **Increase refresh interval:**
   - Change from 1 minute to 5 minutes
   - Reduces how often calendar fetches updates
   - 5 minutes is plenty for most families

3. **Simplify display format:**
   - Switch from "Detailed view" to "Compact list"
   - Remove event descriptions
   - Use simpler layout

4. **Reduce number of calendar feeds:**
   - Using 10 different calendars? That's too many!
   - Combine calendars in your calendar app first
   - Then export single combined calendar to FamilyCast

5. **Check display device:**
   - Old tablet or computer may be slow
   - Close other apps running in background
   - Restart device

**Recommended Settings for Smooth Performance:**
- Max 3-5 calendar feeds
- Max 20 events total
- Refresh interval: 5 minutes
- Date range: 7-14 days
- Compact or day view (not detailed)

## Advanced Tips for Families

### Creating Separate Calendars for Different Purposes

**Instead of one giant family calendar, create separate calendars:**

**Benefits:**
- Easier to manage
- Can show/hide specific calendars
- Color-code by purpose
- Share specific calendars with specific people

**Example Calendar Structure:**

**1. Family Events Calendar**
- Birthday parties
- Family outings
- Vacations
- Holiday celebrations
- **Share with:** Whole family

**2. Kids' Activities Calendar**
- Soccer, dance, music lessons
- School events
- Playdates
- **Share with:** Both parents, kids can view

**3. Medical & Appointments Calendar**
- Doctor appointments
- Dentist visits
- Therapy sessions
- Prescription refills
- **Share with:** Both parents only (keep private from kids)

**4. Household Tasks Calendar**
- Chores
- Cleaning schedule
- Maintenance reminders
- Trash/recycling pickup
- **Share with:** Whole family

**5. Meal Planning Calendar**
- Dinner menu
- Grocery shopping trips
- Meal prep days
- **Share with:** Whole family

**How to Set Up (Google Calendar Example):**

1. Create separate calendars:
   - In Google Calendar, click "+" next to "Other calendars"
   - Select "Create new calendar"
   - Name it (e.g., "Smith Family Events")
   - Repeat for each calendar

2. Share calendars with family:
   - Calendar settings → "Share with specific people"
   - Add family members' email addresses
   - Set permissions ("Make changes" or "See all event details")

3. Get iCal URLs for each:
   - Go to each calendar's settings
   - Integrate calendar → Secret address in iCal format
   - Copy URL

4. Add to FamilyCast:
   - Add each calendar as separate feed
   - Assign colors (e.g., Family Events = green, Kids' Activities = yellow)
   - Set priorities if needed

5. Create different displays:
   - Kitchen display: All calendars
   - Kids' display: Family Events + Kids' Activities only (hide Medical)
   - Parents' display: All calendars including Medical

### Using Event Descriptions for Extra Info

**Make events more useful by adding details in description:**

**Example: Soccer Practice Event**
- **Title:** Soccer Practice
- **Time:** 3:00 PM - 5:00 PM
- **Location:** Greenfield Park, Field 3
- **Description:**
  ```
  Bring: Water bottle, cleats, shin guards, ball
  Coach: Mr. Smith (555-123-4567)
  Weather check: Cancel if lightning
  Pickup: Dad picking up at 5pm
  After practice: Stop at library for Jake
  ```

**FamilyCast can display descriptions in "Detailed View"!**

**Other Useful Description Content:**
- Contact phone numbers
- What to bring/pack
- Confirmation numbers
- Video call links (for virtual events)
- Recipe links (for meal planning events)
- Carpool arrangements
- Parking instructions
- Weather contingency plans

**Pro Tip:** Add emojis to descriptions for visual quick-reference:
- 🎒 Bring backpack
- 🍎 Pack lunch
- 💧 Bring water
- 🚗 Carpool with Johnsons
- 📱 Call if running late
- ☔ Indoor location if raining

### Recurring Events for Routine Activities

**Create recurring events for activities that happen regularly:**

**Weekly Activities:**
- Soccer practice: Every Monday & Thursday 3-5pm
- Piano lessons: Every Tuesday 6-7pm
- Dance class: Every Wednesday 5-6pm
- Church: Every Sunday 10am

**Bi-Weekly Activities:**
- Library visit: Every other Saturday 10am
- Game night: Every other Friday 7pm

**Monthly Activities:**
- Haircut reminder: First Saturday of month
- Pay allowance: Every 1st of month
- Extended family dinner: Last Sunday of month

**How to Create Recurring Events:**

**Google Calendar:**
1. Create event
2. Click "Does not repeat" dropdown
3. Select frequency (daily, weekly, monthly, annually)
4. Or choose "Custom" for complex patterns
5. Set end date (or never)

**Example: Soccer Practice**
- Event: "Soccer Practice"
- Repeat: Weekly
- On: Monday, Thursday
- Ends: November 15 (end of season)

**Benefits:**
- Create once, appears all season
- Edit one event, updates all future events
- Delete one event if practice is canceled
- Visual confirmation of routine commitments

**Pro Tip:** Color-code recurring events:
- Blue: School/education activities
- Green: Sports & physical activities
- Purple: Arts/music activities
- Yellow: Social activities

### Shared Family Calendar Best Practices

**If multiple family members manage the calendar:**

**1. Use Clear Event Titles**
- ❌ Bad: "Appointment"
- ✅ Good: "Emma - Dentist Appointment"
- ✅ Better: "Emma - Dr. Johnson Dentist Cleaning"

**2. Always Add Location**
- Include full address if going somewhere new
- For recurring locations, use consistent name ("Soccer Field 3")
- Add parking instructions in description if needed

**3. Include Contact Info**
- Phone numbers in description
- Emergency contacts
- Coach/teacher contact info

**4. Use Color Categories Consistently**
- Agree on color meanings with family
- Stick to the system
- Example: Blue = Dad, Purple = Mom, Yellow = Kids

**5. Set Notifications**
- Important events: 1 week, 1 day, 1 hour before
- Routine activities: 30 minutes before
- Birthdays: 7 days before (to plan), 1 day before (to remember)

**6. Add Travel Time**
- Google Calendar has "Add travel time" feature
- Shows departure time, not just event time
- Helps with "When do we need to leave?"

**7. Regular Calendar Review**
- Weekly family meeting: Review upcoming week
- Monthly: Look ahead at next month
- Before long weekends/vacations: Check schedule

### Integration with Other Family Tools

**Combine iCal calendar with other FamilyCast integrations:**

**Calendar + Photo Slideshow:**
- Split screen: Calendar on left, family photos on right
- Morning display: See schedule while enjoying family memories

**Calendar + Cozi Shopping Lists:**
- See meal plan calendar + grocery shopping list together
- Know what's for dinner + what you need to buy

**Calendar + Google Tasks:**
- Calendar shows events, tasks show to-dos
- Complete picture of what needs to be done

**Calendar + Weather:**
- See outdoor activities + weather forecast
- Know if soccer practice will be rained out

**Example Combined Display:**
```
┌─────────────────────────────────────────┐
│         Monday, October 14, 2025        │
├───────────────────┬─────────────────────┤
│                   │  Today's Schedule   │
│   Family Photos   │  ─────────────────  │
│                   │  8:00 AM School     │
│   (slideshow)     │  3:00 PM Soccer ⚽  │
│                   │  6:00 PM Dinner 🍝  │
│                   │                     │
├───────────────────┼─────────────────────┤
│  Weather Today    │  Shopping List      │
│  ☀️ 72°F Sunny   │  □ Milk             │
│                   │  □ Eggs             │
│  Good for soccer! │  □ Pasta            │
└───────────────────┴─────────────────────┘
```

## Privacy & Security

### Protecting Family Calendar Information

**Your family calendar contains sensitive information!**

**What's at Risk:**
- When your home is empty (easy target for burglary)
- Kids' locations and schedules (safety concern)
- Medical information (private health data)
- Financial information (bank appointments, etc.)

**Best Practices:**

**1. Use Secret/Private iCal URLs**
- Don't use public calendar URLs
- Use the "Secret address" option in Google Calendar
- Regenerate URL if accidentally shared

**2. Don't Share iCal URLs Publicly**
- ❌ Don't post on social media
- ❌ Don't email to large groups
- ❌ Don't put on public website
- ✅ Only add to FamilyCast (encrypted connection)

**3. Be Careful with Public Displays**
- If FamilyCast display is visible to visitors, consider what's shown
- Create separate "Guest Display" calendar with limited info
- Hide medical appointments, work schedules, vacation dates

**4. Use Separate Calendars**
- Keep sensitive info in private calendar (not exported to FamilyCast)
- Export only appropriate calendars to display
- Example: Don't display "Master Bedroom renovation budget meeting"

**5. Regenerate URLs if Compromised**
- If you accidentally shared iCal URL, regenerate new one
- Update FamilyCast with new URL
- Old URL stops working immediately

**6. Review Shared Calendar Permissions**
- Check who has access to shared family calendars
- Remove ex-babysitters, old friends, etc.
- Keep sharing list current

### Child Safety Considerations

**If your FamilyCast display shows kids' schedules:**

**1. Display Location Matters**
- ✅ **Private areas OK:** Kitchen, family room, bedrooms
- ⚠️ **Semi-private areas:** Near windows visible from street
- ❌ **Public areas:** Front porch, visible through front door

**2. What to Show / Not Show**
- ✅ Show: "Soccer practice 3pm" (general activity)
- ❌ Don't show: "Soccer at Greenfield Park, Field 3" (specific location)
- ✅ Show: "Home alone 3-5pm" (family knows)
- ❌ Don't show this if visible to visitors!

**3. Create "Public-Facing" Calendar Version**
- Use event titles without locations
- Don't include addresses
- Remove phone numbers from descriptions
- General times, not specific locations

**4. Visitor Mode**
- If display visible to guests, create "Safe Display" version
- Show only today's general events
- Hide future vacation dates
- Hide "Home alone" or "Parents traveling" events

**Example: Safe vs. Full Calendar**

**Full Calendar (Private Display):**
```
Monday
  8:00 AM - Kids to school (Washington Elementary)
  3:00 PM - Soccer practice (Greenfield Park, Field 3)
  5:00 PM - Home alone until Mom arrives
  6:00 PM - Family dinner
```

**Safe Calendar (Visible to Guests):**
```
Monday
  8:00 AM - School
  3:00 PM - After-school activity
  6:00 PM - Family time
```

**How to Set Up Safe Display:**
1. Create separate "Public Events" calendar in calendar app
2. Add events without sensitive details
3. Export only this calendar to guest-visible display
4. Keep full family calendar on private display (kitchen, parents' room)

## Related Features & Integrations

FamilyCast works great when you combine calendar with other features!

### Cozi Lists Integration
- [**Cozi Shopping Lists & To-Dos**](./cozi-lists.md)
- Show calendar + shopping lists together
- Meal plan + grocery list in one display
- See what needs to be done + when

### Google Tasks Integration
- [**Google Tasks & To-Do Lists**](./google-tasks.md)
- Calendar shows events, Tasks shows to-dos
- Complete picture of schedule + tasks
- Check off tasks as you complete them

### Photo Slideshows
- [**Photo Slideshow Content**](../features/photo-slideshows.md)
- Split screen: Calendar + family photos
- Functional + emotional connection
- Morning routine display with schedule + memories

### Weather Integration
- [**Weather Display**](./weather.md)
- See schedule + weather forecast
- Know if outdoor activities will happen
- Plan wardrobe for the day

### Layout Options
- [**Creating Layouts**](../features/layouts.md)
- Design custom display layouts
- Combine calendar with other content
- Different layouts for different rooms

## Frequently Asked Questions

### Can I use calendars from different providers together?

**Yes!** That's the beauty of iCal—it's universal.

You can mix:
- Dad's Google Calendar
- Mom's Outlook Calendar
- Kids' Apple Calendar
- Family Cozi Calendar
- School's published calendar

All in one display. FamilyCast fetches events from all calendars and shows them together.

### How often do events update?

**Default: Every 5 minutes**

You can configure this:
- Faster: 1-3 minutes (if you need real-time updates)
- Slower: 15-30 minutes (reduces server load)

For most families, 5 minutes is perfect. Events you add to your calendar appear on display within 5 minutes.

### Can I show only certain calendars on certain displays?

**Yes!** Create multiple calendar content sources.

**Example:**
- **Kitchen Display**: All calendars (parents + kids + family)
- **Kids' Room Display**: Only kids' activities + family events
- **Parents' Room Display**: All calendars including work schedules

**How:**
1. Create "Kitchen Calendar" content source → Add all calendar feeds
2. Create "Kids' Calendar" content source → Add only kids' and family calendar feeds
3. Create "Parents' Calendar" content source → Add all calendar feeds
4. Assign appropriate content source to each display layout

### Do I need a paid calendar service?

**No! Free calendars work great.**

- Google Calendar: Free
- Apple Calendar: Free (with iCloud account)
- Outlook Calendar: Free (with Outlook.com account)
- Cozi Family Calendar: Free (with ads) or paid (no ads)
- Yahoo Calendar: Free

All free tiers support iCal export.

### Can I edit calendar events from FamilyCast?

**No, FamilyCast is display-only.**

To add/edit/delete events:
1. Use your calendar app (Google Calendar, Cozi, etc.)
2. Changes sync automatically to FamilyCast within 5 minutes

**Why?** FamilyCast is designed for display, not calendar management. This keeps it simple and prevents accidental changes.

### What if my internet goes down?

**Last fetched events remain on display.**

FamilyCast caches calendar events locally. If internet goes down:
- Events already fetched continue to display
- New events added to online calendar won't appear until internet returns
- Display doesn't go blank

When internet returns, calendar updates automatically.

### Can I show events with specific keywords only?

**Not directly, but you can use separate calendars.**

**Example: "Show only soccer events"**

Instead of filtering keywords:
1. Create dedicated "Soccer" calendar in your calendar app
2. Add only soccer events to this calendar
3. Export only this calendar to FamilyCast

**Benefits:**
- More reliable than keyword filtering
- Easier to manage
- Can color-code by activity type

### How far in advance can I show events?

**Up to 90 days (3 months)**

Most families use:
- **7 days**: Most common, good balance
- **14 days**: See two weeks ahead
- **30 days**: Full month view

Showing more than 30 days gets overwhelming for display purposes. Use your calendar app for long-term planning.

### Can I hide certain events from display?

**Yes, use separate calendars.**

**Example:** Hide parents' work meetings from kids' display

1. Create separate calendars:
   - "Family Events" (shared with everyone)
   - "Parents' Work" (private)
2. Export only "Family Events" to kids' room display
3. Export both calendars to parents' room display

**Alternative:** Use event privacy settings:
- Google Calendar: Mark events as "Private"
- Most calendar apps: Private events can be excluded from iCal export

### Do recurring events work?

**Yes, perfectly!**

Create recurring events in your calendar app:
- Daily: Medication reminder
- Weekly: Soccer practice every Monday & Thursday
- Monthly: Haircut first Saturday of month
- Annually: Birthdays, anniversaries

Recurring events appear automatically on all future dates. Edit one, update all future events (or just one occurrence).

### Can I show multiple families' calendars?

**Yes, if they share their iCal URLs with you.**

**Example:** Grandparents' house display shows:
- Their own calendar
- Daughter's family calendar (visiting schedule)
- Son's family calendar (visiting schedule)

**Setup:**
1. Each family generates iCal URL from their calendar
2. Families share URLs with grandparents
3. Grandparents add all URLs to their FamilyCast display
4. Color-code by family

**Result:** Grandparents see when each family is visiting!

## Next Steps

**Get Started:**
1. Choose your calendar provider (or keep using what you have!)
2. Get iCal URL from your calendar
3. Add to FamilyCast
4. Create display layout
5. Enjoy family coordination!

**Explore Related Integrations:**
- [Cozi Lists](./cozi-lists.md) - Shopping lists & to-dos
- [Google Tasks](./google-tasks.md) - Task management
- [Photo Slideshows](../features/photo-slideshows.md) - Combine calendar + photos
- [Weather](./weather.md) - Add weather to your display
- [Layouts](../features/layouts.md) - Design custom displays

**Tips for Success:**
- Start simple: One calendar, today's schedule only
- Add complexity gradually: More calendars, longer date range
- Involve whole family: Show them the display, get feedback
- Iterate: Adjust colors, formats, date range until it feels right

**Need Help?**
- [Troubleshooting Guide](../help/troubleshooting.md)
- [Support Contact](../help/support.md)
- [Community Forum](../help/community.md)

---

**Welcome to coordinated family life with FamilyCast!** 📅✨
