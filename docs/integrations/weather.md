---
title: Weather Integration
---

# Weather Integration

Display real-time weather conditions and forecasts to help your family plan their day, prepare for outdoor activities, and know what to wear before heading out.

## Overview

The Weather integration shows current conditions, hourly forecasts, and multi-day forecasts right on your family display. Perfect for morning routines, weekend planning, and helping everyone in the family prepare for the day ahead.

**Key Features:**
- Real-time weather updates (refreshed automatically)
- Current temperature and conditions at a glance
- 24-hour hourly forecasts for planning your day
- 7-day forecasts for weekend and week-ahead planning
- Automatic location detection from your home address
- Simple or detailed display modes
- Fahrenheit and Celsius support
- Weather icons everyone can understand
- Weather alerts for severe conditions

**Data Provider:** [WeatherAPI.com](https://www.weatherapi.com/)

## Family Use Cases

**Morning Routine:**
- Check temperature before getting kids dressed
- Know if they need jackets, umbrellas, or rain boots
- Plan extra time for icy morning drives
- See if outdoor recess will happen at school

**School Day Prep:**
- Help kids choose appropriate clothing
- Pack umbrellas if rain expected
- Check for weather-related school delays
- Plan indoor vs. outdoor activities

**Weekend Planning:**
- Check Saturday weather for outdoor plans
- Plan park visits or indoor activities
- Know best times for outdoor play
- Prepare for sports games and practices

**Activity Planning:**
- Pool weather (temperature and sun)
- Beach day conditions
- Hiking and outdoor adventure planning
- Barbecue and outdoor party weather

**Daily Planning:**
- Commute conditions (rain, snow, ice)
- Lunchtime outdoor play feasibility
- After-school outdoor activity planning
- Evening walk conditions

**Travel Preparation:**
- Check weather at vacation destinations
- Pack appropriate clothing
- Plan road trip timing
- Prepare for weather delays

## Setup

### Prerequisites

- FamilyCast account (Weather included on all plans)
- Home location configured (or manual location entry)
- Internet connection on display device

### Step 1: Enable Weather Integration

Weather integration is included with all FamilyCast plans at no extra cost. No external account setup required.

**Verify Availability:**
1. Log into FamilyCast dashboard
2. Navigate to **Integrations** → **Weather**
3. Status should show "Available"

### Step 2: Create Weather Content Source

**From Dashboard:**

1. Navigate to **Content** → **Add Content Source**
2. Select **Weather** from available integrations
3. Click **Configure Weather**

**Configuration Options:**

**Location:**
Choose how to set your location:
- **Automatic** (recommended): Uses your home address
- **ZIP code**: Enter your ZIP (e.g., "10001")
- **City name**: Enter city and state (e.g., "Seattle, WA")
- **Full address**: Enter complete address
- **Coordinates**: Latitude and longitude (advanced)

**Forecast Type:**
Choose what weather information to display:
- **Current Conditions Only**: Just temperature and current weather
- **Hourly Forecast**: Next 24 hours for detailed planning
- **Daily Forecast**: 1-7 day outlook for week planning

**Display Mode:**
Pick the detail level that works for your family:
- **Simple**: Temperature, icon, and basic conditions (great for quick glances)
- **Detailed**: Everything - humidity, wind, UV index, and more

**Units:**
Choose temperature and measurement units:
- **Fahrenheit**: °F, mph, inches (US standard)
- **Celsius**: °C, km/h, mm (metric/international)

**Refresh Interval:**
How often to update weather:
- **Every 5 minutes**: Nearly real-time (for active weather monitoring)
- **Every 15 minutes**: Frequent updates (good default)
- **Every 30 minutes**: Standard updates (recommended)
- **Every 60 minutes**: Hourly updates (weather changes slowly)

### Step 3: Add to Your Display Layout

**Drag-and-Drop:**

1. Open the layout editor
2. Create or select an area for weather
3. Drag the **Weather** source to the area
4. Resize and position where family will see it

**Recommended Display Sizes:**

**Simple Mode (Quick Glance):**
- **Small corner**: 300x150 (top corner of display)
- **Sidebar widget**: 400x200 (side of display)
- **Header/footer bar**: 600x150 (across top or bottom)

**Detailed Mode (Full Information):**
- **Medium panel**: 500x400 (side panel)
- **Large section**: 800x600 (main content area)
- **Full display**: 1200x800 (dedicated weather display)

### Step 4: Customize Display Options

**Weather Display Elements:**

Choose what information to show:
- Temperature (always shown)
- Weather description (sunny, cloudy, rainy, etc.)
- Weather icon
- "Feels like" temperature (with wind chill or heat index)
- Humidity percentage
- Wind speed and direction
- UV index (for sun exposure)
- Visibility
- Air pressure
- Sunrise and sunset times

**Visual Styling:**
Customize appearance to match your display:
- Temperature text size (make it big and readable!)
- Icon size
- Background color or transparency
- Text color (light or dark)
- Border style

**Forecast Display Options:**
For hourly and daily forecasts:
- Number of hours to show (6, 12, or 24)
- Number of days to show (1, 3, 5, or 7)
- Show high/low temperatures
- Show chance of rain/snow
- Compact or detailed forecast view

## Configuration Examples

### Simple Morning Check

Perfect for quick morning routine glances:

```javascript
{
  "location": "AUTO",  // Uses your home address
  "forecastType": "current",
  "displayMode": "simple",
  "units": "fahrenheit",
  "refreshInterval": 30
}
```

**What It Shows:**
- Current temperature (big and readable)
- Weather icon
- Brief description ("Sunny", "Rainy", etc.)

**Best For:**
- Kitchen displays during morning rush
- Hallway displays before leaving home
- Quick outfit decisions

### Daily Planning Weather

Great for planning your entire day:

```javascript
{
  "location": "AUTO",
  "forecastType": "hourly",
  "hours": 24,
  "displayMode": "simple",
  "units": "fahrenheit",
  "refreshInterval": 30
}
```

**What It Shows:**
- Current conditions
- Hour-by-hour forecast for next 24 hours
- Temperature trends throughout day
- Weather changes (rain moving in/out)

**Best For:**
- Morning planning sessions
- Deciding when to schedule outdoor activities
- Knowing best time for afternoon walk

### Week-Ahead Family Planning

Ideal for weekend and week planning:

```javascript
{
  "location": "AUTO",
  "forecastType": "daily",
  "forecastDays": 7,
  "displayMode": "detailed",
  "units": "fahrenheit",
  "refreshInterval": 60
}
```

**What It Shows:**
- Current conditions with all details
- 7-day forecast with highs and lows
- Rain/snow chances
- Full weather details for each day

**Best For:**
- Living room family command center
- Weekly planning sessions
- Scheduling outdoor activities
- Travel preparation

### Outdoor Activity Planning

Comprehensive weather for active families:

```javascript
{
  "location": "AUTO",
  "forecastType": "daily",
  "forecastDays": 5,
  "displayMode": "detailed",
  "units": "fahrenheit",
  "refreshInterval": 30,
  "showDetails": true
}
```

**What It Shows:**
- Current temperature and "feels like"
- Humidity (comfort level)
- Wind speed (for outdoor play)
- UV index (sun safety)
- Hourly and daily forecasts
- Sunrise/sunset (daylight planning)

**Best For:**
- Families with outdoor hobbies
- Pool and beach planning
- Hiking and camping preparation
- Sports and recreation scheduling

## Weather Data Explained

### Current Conditions

**Temperature:**
- The actual air temperature
- Look for this first when deciding what to wear

**Feels Like:**
- How the temperature actually feels on your skin
- Accounts for wind chill (makes it feel colder)
- Accounts for heat index (humidity makes it feel hotter)
- More accurate for outfit decisions

**Humidity:**
- Amount of moisture in the air (percentage)
- High humidity (70%+): Feels muggy and uncomfortable
- Low humidity (30%-): Feels dry, chapped lips
- Affects how hot or cold it feels

**Wind Speed & Direction:**
- How fast the wind is blowing
- Light (0-5 mph): Barely noticeable
- Moderate (6-15 mph): Leaves rustle, you feel it
- Strong (16-25 mph): Difficult to use umbrella
- Very strong (25+ mph): Outdoor play may be difficult

**Weather Description:**
Simple explanation of conditions:
- Sunny, Partly Cloudy, Cloudy
- Light Rain, Rain, Heavy Rain
- Snow, Light Snow, Heavy Snow
- Thunderstorms, Fog, Mist

**UV Index:**
Sun strength for outdoor activity safety:
- 0-2 (Low): Minimal sun protection needed
- 3-5 (Moderate): Wear sunscreen if outside 30+ min
- 6-7 (High): Sunscreen and hat recommended
- 8-10 (Very High): Extra protection needed
- 11+ (Extreme): Avoid midday sun if possible

### Hourly Forecast

Shows weather for each of the next 24 hours:

**Use It To:**
- Plan outdoor activities at best times
- Know when rain will start or stop
- Find warmest/coolest parts of the day
- Schedule outdoor play, walks, errands
- Time trips to park, pool, or beach

**Example:** "It's cool now (50°F) but will warm to 68°F by 2pm - perfect time for playground!"

### Daily Forecast

Shows weather for the next 1-7 days:

**High/Low Temperatures:**
- High: Warmest temperature during the day
- Low: Coolest temperature (usually overnight/morning)
- Use to plan clothing for entire day

**Chance of Precipitation:**
- Probability it will rain or snow
- 0-20%: Unlikely (safe to plan outdoor activities)
- 30-50%: Possible (have backup plans)
- 60-70%: Likely (plan for rain)
- 80-100%: Very likely (indoor activities)

**Day-by-Day Planning:**
Use 7-day forecast for:
- Weekend activity planning
- Scheduling outdoor sports/events
- Travel preparation
- Week-ahead school outfit planning

## Display Layout Ideas

### Kitchen Morning Command Center

**Location:** Kitchen wall or counter display
**Configuration:** Simple current conditions + hourly
**Size:** Medium (400x300)

**Layout:**
```
┌─────────────────────────┐
│  Tuesday, October 15    │
│                         │
│      ☀️  68°F           │
│      Sunny              │
│   Feels like: 66°F      │
│                         │
│  Today's Forecast:      │
│  9am  66° ☀️            │
│  12pm 72° ☀️            │
│  3pm  75° ☀️            │
│  6pm  70° 🌤️           │
└─────────────────────────┘
```

**Perfect For:**
- Quick morning check before school
- Helping kids choose outfits
- Planning after-school activities
- Deciding on lunch plans

### Family Room Planning Center

**Location:** Living room or family room display
**Configuration:** Detailed 7-day forecast
**Size:** Large (800x600)

**Layout:**
```
┌────────────────────────────────────────────┐
│  Weather for Seattle, WA                   │
│                                            │
│  Right Now: ☀️ 68°F  Feels like: 66°F     │
│  Sunny and clear                           │
│                                            │
│  Details:                                  │
│  Humidity: 55%      Wind: W 5 mph         │
│  UV Index: 4        Sunrise: 7:15 AM      │
│                                            │
│  This Week:                                │
│  Tuesday   ☀️   75/58  Sunny              │
│  Wednesday 🌤️   73/56  Partly Cloudy     │
│  Thursday  ☁️   68/54  Cloudy             │
│  Friday    🌧️   64/52  Rain (70%)         │
│  Saturday  🌧️   62/50  Showers (60%)      │
│  Sunday    🌤️   66/52  Partly Cloudy     │
│  Monday    ☀️   70/55  Sunny              │
└────────────────────────────────────────────┘
```

**Perfect For:**
- Weekly family planning sessions
- Weekend activity decisions
- Travel preparation
- School week outfit planning

### Entryway Quick Reference

**Location:** Near front door or mudroom
**Configuration:** Simple current + 3-day
**Size:** Medium (500x250)

**Layout:**
```
┌──────────────────────────────┐
│  68°F  ☀️  Sunny             │
│  Perfect weather for outside!│
│                              │
│  Today:    75/58  ☀️         │
│  Tomorrow: 73/56  🌤️        │
│  Thursday: 68/54  ☁️         │
└──────────────────────────────┘
```

**Perfect For:**
- Last check before leaving house
- Grabbing jacket or umbrella
- Quick outfit verification
- Commute preparation

### Kids' Room Morning Display

**Location:** Children's bedroom display
**Configuration:** Simple current with big text
**Size:** Small (350x200)

**Layout:**
```
┌─────────────────┐
│                 │
│   ☀️            │
│   68°F          │
│   Sunny         │
│                 │
│   Jacket: No    │
│   Umbrella: No  │
│                 │
└─────────────────┘
```

**Perfect For:**
- Kids learning to check weather
- Morning outfit decisions
- Building weather awareness
- Independence in getting ready

## Integration with Other FamilyCast Features

### Weather + Calendar

**Use Together:**
- See weather for upcoming calendar events
- Plan outdoor activities on nice days
- Reschedule outdoor events if rain forecast
- Prepare for weather-dependent appointments

**Example:** Calendar shows "Soccer Game - Saturday 10am" and weather shows "Saturday: 🌧️ 65° Rain 80%" - time to bring rain gear!

### Weather + Photos

**Mood Matching:**
- Sunny weather: Show bright, cheerful family photos
- Rainy weather: Show cozy indoor memories
- Snowy weather: Show winter fun photos
- Seasonal coordination: Display season-appropriate memories

### Weather + Chores

**Weather-Aware Chores:**
- Sunny forecast: "Great day for washing car!"
- Rain expected: "Close windows before leaving"
- Windy weather: "Bring in outdoor toys"
- Snow forecast: "Get shovel ready"

### Weather + Meal Planning

**Weather-Appropriate Meals:**
- Cold days: Suggest warm soups and stews
- Hot days: Suggest salads and cold dishes
- Rainy days: Comfort food ideas
- Sunny days: Grilling and outdoor dining

### Weather + Shopping Lists

**Weather-Based Reminders:**
- Cold snap coming: "Check if kids need winter gear"
- Hot week ahead: "Buy sunscreen and cold drinks"
- Rain forecast: "Do we have umbrellas?"
- Snow expected: "Ice melt and shovels?"

## Family Weather Tips

### Morning Routine Integration

**Make Weather Part of Getting Ready:**

1. **First thing to check:** Before choosing clothes
2. **Involve kids:** Teach them to read temperature
3. **Plan ahead:** Check hourly forecast for after-school
4. **Weather station:** Make it a morning routine stop

**Temperature Decision Guide for Kids:**

```
80°F+:    Shorts, t-shirt, sunscreen
70-79°F:  Light clothes, may need light layer
60-69°F:  Long pants, light jacket
50-59°F:  Jacket or hoodie needed
40-49°F:  Coat, hat, gloves recommended
Below 40°F: Heavy coat, winter gear
```

**Rain/Snow Decision Guide:**

```
Rain 70%+:     Bring umbrella, rain jacket
Rain 30-60%:   Have umbrella ready
Snow forecast: Boots, warm coat, gloves
Windy:         Avoid umbrellas, use hood
```

### Teaching Weather Awareness

**Help Kids Learn:**

**Temperature Understanding:**
- "If it's below 60, you need a jacket"
- "Above 75 is shorts weather"
- "Below 40 means winter coat"

**Weather Pattern Recognition:**
- Clouds usually mean cooler temperatures
- Wind makes it feel colder (wind chill)
- Humidity makes it feel hotter
- UV index tells how strong the sun is

**Planning Skills:**
- Check weather before making outdoor plans
- Have backup indoor activities if rain expected
- Prepare day-before for weather changes
- Pack appropriate clothing for school day

### Weekend Planning Strategy

**Friday Night Planning Session:**

1. **Check 3-day forecast:** Friday-Sunday outlook
2. **Plan outdoor activities:** Best weather days
3. **Schedule indoor backup:** If rain expected
4. **Prepare gear:** Get outdoor equipment ready
5. **Coordinate with family:** Everyone knows the plan

**Example Session:**
- "Saturday is 75° and sunny - perfect for park and picnic!"
- "Sunday shows 60% rain - plan indoor activities or morning-only outdoor"
- "Let's do zoo Saturday, museum or movie Sunday if it rains"

### Activity Planning by Weather

**Ideal Weather for Common Activities:**

**Park/Playground:**
- Temperature: 60-80°F
- Rain: Less than 30%
- Wind: Under 15 mph
- Best: Sunny or partly cloudy

**Pool/Water Activities:**
- Temperature: 75°F+
- Rain: None
- UV: Check index for sunscreen needs
- Best: Sunny, low wind

**Hiking/Nature:**
- Temperature: 50-75°F
- Rain: Less than 30%
- Visibility: Good (no fog)
- Best: Clear, mild temperatures

**Beach Day:**
- Temperature: 75°F+
- Wind: Under 15 mph (sand blowing)
- Rain: Less than 20%
- UV: Bring sun protection

**Outdoor Sports:**
- Temperature: 55-85°F
- Rain: Less than 30%
- Wind: Moderate or less
- Best: Partly cloudy (not too hot)

**Bike Riding:**
- Temperature: 60-80°F
- Rain: None
- Wind: Under 10 mph
- Best: Dry, calm conditions

## Troubleshooting

### Weather Not Showing

**If weather isn't displaying:**

**Check Internet Connection:**
- Is your display connected to WiFi?
- Try loading another integration to test
- Restart display device if needed

**Verify Location:**
- Go to Settings → Location
- Make sure home address is correct
- Try entering ZIP code manually
- Test location works in Google Maps

**Check Configuration:**
- Weather content source is active
- Location field is filled in
- Forecast type is selected
- Display mode is chosen

**Try These Fixes:**
- Switch to automatic location detection
- Use ZIP code instead of city name
- Increase refresh interval to 30 minutes
- Contact FamilyCast support if still not working

### Wrong Location Weather

**If weather shows wrong city:**

**Why This Happens:**
- ZIP code typo
- City name is ambiguous (many cities with same name)
- Home address incomplete or incorrect
- Location detection using old data

**How to Fix:**
1. Use **automatic detection** (easiest - uses your home address)
2. Verify home address in Settings → Profile
3. Use **ZIP code** (most reliable manual method)
4. Use **City, State** format (not just city name)
5. Test your location in Google Maps first

**Examples:**
- ❌ "Springfield" (30+ cities named Springfield!)
- ✅ "Springfield, IL" (specific state)
- ✅ "62701" (ZIP code - unambiguous)

### Temperature Seems Wrong

**If temperature doesn't match what you feel:**

**Remember "Feels Like":**
- Actual temperature is just air temperature
- "Feels like" accounts for wind and humidity
- On windy days, "feels like" is much colder
- On humid days, "feels like" is much hotter
- Use "feels like" for clothing decisions

**Check Weather Station Location:**
- Weather data comes from nearby weather stations
- May be slight difference from your exact location
- Microclimates can vary (near water, hills, urban areas)
- Usually within 5°F of actual local conditions

**Time of Day Matters:**
- Temperature shown is current reading
- May have changed since you last checked
- Morning is coolest, afternoon is warmest
- Check hourly forecast for temperature trends

### Weather Not Updating

**If weather seems stuck:**

**Check Refresh Interval:**
- Go to Weather settings
- Check refresh interval (should be 15-30 min)
- If set to 60 min, weather updates only hourly
- Change to 15 or 30 minutes for more frequent updates

**Verify Display is Online:**
- Check display connection status
- Look for "last updated" time
- If hours old, display may be offline
- Restart display if needed

**Weather Changes Slowly:**
- Remember: Weather doesn't change minute-to-minute
- Temperature changes slowly throughout day
- 30-minute refresh is sufficient for most needs
- If monitoring active weather, use 5-15 minute refresh

### Display Performance Issues

**If weather section loads slowly:**

**Reduce Data Amount:**
- Switch from "detailed" to "simple" mode
- Show fewer forecast days (3 instead of 7)
- Reduce from 24-hour to 12-hour forecast
- Increase refresh interval to 30-60 minutes

**Check Network Speed:**
- Test your internet speed
- Weather needs good connection for updates
- Slow WiFi can delay weather loading
- Move display closer to WiFi router if needed

**Optimize Settings:**
```
Best Performance Settings:
- Refresh: 30-60 minutes
- Display: Simple mode
- Forecast: 3 days or less
- Hourly: 12 hours or less
```

### Weather Alerts Not Showing

**Note:** Weather alerts for severe weather (storm warnings, winter advisories, extreme heat) are coming soon to FamilyCast. Currently showing standard forecast data only.

**Current Workaround:**
- Check local news for weather alerts
- Enable weather alerts on your phone
- Monitor NOAA weather radio
- Sign up for local emergency alerts

## Privacy and Data

**Location Privacy:**
- Weather only uses your location to fetch forecast
- Location not shared with third parties
- No tracking or location history stored
- Can use ZIP code instead of full address for extra privacy

**Data Usage:**
- Weather updates use minimal data
- Approximately 1-5 KB per update
- 30-minute refresh = ~50 KB per day
- Safe for metered connections

**Weather Data Source:**
- Powered by WeatherAPI.com
- Aggregates data from government weather services
- Same data used by major weather apps
- Updated in real-time from weather stations

## Advanced Tips

### Multiple Location Weather

**Track Weather for Multiple Locations:**

Great for:
- Vacation planning (check destination weather)
- Family in different cities (grandparents' weather)
- Travel preparation (check weather at destination)
- Seasonal homes (beach house, cabin, etc.)

**How to Set Up:**
1. Create multiple weather content sources
2. Name each by location (e.g., "Home Weather", "Grandma's Weather")
3. Configure each with different location
4. Add to layout in different areas or rotation

**Example Layout:**
```
┌────────────────────────────────┐
│  Home (Seattle)                │
│  68°F ☀️ Sunny                 │
└────────────────────────────────┘
┌────────────────────────────────┐
│  Vacation Spot (Orlando)       │
│  85°F ⛅ Partly Cloudy         │
└────────────────────────────────┘
```

### Seasonal Display Adjustments

**Optimize for Each Season:**

**Summer:**
- Emphasize UV index (sun safety)
- Show heat index (humidity impact)
- Larger hourly forecast (plan around heat)
- Highlight best outdoor activity times

**Winter:**
- Emphasize wind chill (feels like temp)
- Show sunrise/sunset (shorter days)
- Snow and ice warnings
- Morning temperature for outfit planning

**Spring/Fall:**
- Show rain forecast prominently
- Temperature swings during day
- Hourly forecast for variable weather
- Layer planning for temperature changes

### Weather for Special Needs

**Customize for Your Family:**

**Young Children:**
- Very large temperature display
- Simple weather icons
- "What to Wear" guidance
- Limited detail (avoid overwhelm)

**Teens:**
- More detailed data (driving conditions)
- Extended forecast (week planning)
- Feels-like temperature (personal comfort)
- Hourly for after-school activities

**Seniors:**
- Large, high-contrast text
- Simple language
- Fall hazards (ice, rain warnings)
- Health-related data (UV, humidity)

**Active Families:**
- Detailed outdoor conditions
- Extended hourly forecast
- UV index and visibility
- Wind speed and direction

## Next Steps

**Enhance Your Display:**
- **[Calendar Integration](/integrations/calendar)** - See weather for upcoming events
- **[Photos Integration](/integrations/photos)** - Match photos to weather mood
- **[Display Layouts](/features/layouts)** - Design your perfect layout
- **[Content Scheduling](/features/schedules)** - Rotate weather with other content

**Learn More:**
- **[Getting Started](/getting-started/setup)** - Initial FamilyCast setup
- **[All Integrations](/integrations/)** - Browse all available integrations
- **[Family Tips](/guides/family-tips)** - Make most of FamilyCast
- **[Troubleshooting](/support/troubleshooting)** - Get help with issues

**Get Help:**
- **[Support Center](/support/)** - FAQ and help articles
- **[Contact Support](/support/contact)** - Reach our support team
- **[Community Forum](/community/)** - Connect with other families
