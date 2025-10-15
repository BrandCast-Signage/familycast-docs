---
title: RSS Feeds
---

# RSS Feeds Integration Guide

Display news, blogs, recipes, and family-friendly content from across the web on your FamilyCast display.

## What are RSS Feeds?

RSS (Really Simple Syndication) is a web feed format that allows websites to publish frequently updated content in a standardized format. FamilyCast can display RSS feed content on your family display, automatically updating as new content is published.

**Perfect for families who want:**
- Morning news briefings
- Recipe inspiration
- Kids' educational content
- Local school and community updates
- Parenting tips and advice
- Family activity ideas

## Use Cases

**Morning Family Dashboard:**
- Local weather forecast
- School lunch menus
- News headlines (kid-safe)
- Today's family schedule

**Kitchen Display:**
- Recipe blogs (dinner ideas, meal prep)
- Cooking tips and techniques
- Grocery deals and coupons
- Nutrition and healthy eating

**Kids' Learning Corner:**
- Educational news (Newsela, Time for Kids)
- Science and nature facts
- Book recommendations
- Learning activities and crafts

**Family Room Display:**
- Parenting blogs and advice
- Local community events
- Sports team updates
- Family movie reviews

**Homework Helper:**
- Educational resources
- Study tips and strategies
- School announcements
- Assignment reminders

## Safety First: Kid-Friendly Content

**Important:** Not all RSS feeds are appropriate for children. FamilyCast provides tools to help ensure safe content.

### Content Safety Guidelines

**Before adding any feed:**
1. **Review feed content** - Read several recent posts
2. **Check for mature topics** - News feeds may include violence, politics, adult themes
3. **Test before displaying** - Preview feed in FamilyCast before showing to kids
4. **Monitor regularly** - Check what's being displayed weekly

**Recommended Safe Sources:**
- Educational sites (.edu domains)
- Kids' news services
- Family-focused blogs
- School and library feeds
- Trusted parenting sites

**Potentially Unsafe Sources:**
- General news sites (may show graphic content)
- Political blogs
- Unmoderated community feeds
- Unvetted social media conversions

### Content Filtering

*Available in all plans*

FamilyCast allows you to filter RSS content to keep displays kid-safe:

**Exclude Filters:**
Hide items containing specific words:
- Politics, violence, profanity
- Mature topics
- Controversial subjects

**Example Configuration:**
```
Exclude Keywords: politics, violence, crime, election, lawsuit, scandal
```

This helps filter out inappropriate content from general news feeds.

## Family-Friendly Feed Suggestions

### News & Current Events (Kid-Safe)

**Newsela**
- **URL**: Check Newsela website for RSS options
- **Description**: Current events written at different reading levels
- **Age**: Grades 2-12
- **Topics**: Science, history, current events, literacy

**Time for Kids**
- **URL**: `https://www.timeforkids.com/feed/`
- **Description**: News for elementary and middle school students
- **Age**: K-6
- **Topics**: World news, science, entertainment, sports

**CNN 10 (formerly CNN Student News)**
- **URL**: Check CNN website for RSS
- **Description**: 10-minute daily news show for teens
- **Age**: Middle and high school
- **Topics**: Daily news digest, current events

**Smithsonian TweenTribune**
- **URL**: Check TweenTribune website
- **Description**: Current events and learning
- **Age**: Grades 3-8
- **Topics**: Science, history, culture, current events

### Local Weather

**Weather.gov Local Forecast**
- **URL**: `https://forecast.weather.gov/MapClick.php?lat=YOUR_LAT&lon=YOUR_LON&FcstType=rss`
- **Description**: Official NOAA weather forecasts
- **Safe**: Yes (weather only)
- **Updates**: Every few hours

**Local News Weather Feeds**
- Check your local news station's website
- Most have separate weather RSS feeds
- Generally safe (weather-only content)

### Parenting & Family

**Scary Mommy**
- **URL**: `https://www.scarymommy.com/feed/`
- **Description**: Honest parenting humor and advice
- **Age**: Parents
- **Topics**: Parenting, family life, humor

**Parents Magazine**
- **URL**: `https://www.parents.com/feed/`
- **Description**: Parenting tips and advice
- **Age**: Parents
- **Topics**: Pregnancy, babies, toddlers, kids, teens

**Today's Parent**
- **URL**: `https://www.todaysparent.com/feed/`
- **Description**: Canadian parenting resource
- **Age**: Parents
- **Topics**: Family activities, recipes, parenting advice

**Cool Mom Picks**
- **URL**: `https://coolmompicks.com/feed/`
- **Description**: Product reviews and family lifestyle
- **Age**: Parents
- **Topics**: Products, gear, activities, gifts

### Recipes & Cooking

**AllRecipes**
- **URL**: `https://www.allrecipes.com/rss/daily-inspiration/`
- **Description**: Daily recipe inspiration
- **Safe**: Yes (recipes only)
- **Topics**: Dinner, desserts, quick meals

**Budget Bytes**
- **URL**: `https://www.budgetbytes.com/feed/`
- **Description**: Affordable recipes with cost breakdowns
- **Safe**: Yes
- **Topics**: Budget-friendly cooking, meal prep

**The Pioneer Woman**
- **URL**: `https://www.thepioneerwoman.com/feed/`
- **Description**: Family-friendly recipes and ranch life
- **Safe**: Yes
- **Topics**: Comfort food, baking, family dinners

**Damn Delicious** (Note: name may not be school-appropriate)
- **URL**: `https://damndelicious.net/feed/`
- **Description**: Easy, delicious recipes
- **Safe**: Yes (content is family-friendly)
- **Topics**: Quick meals, one-pot dinners

**Kids' Cooking:**

**Super Healthy Kids**
- **URL**: `https://www.superhealthykids.com/feed/`
- **Description**: Healthy recipes kids will actually eat
- **Safe**: Yes
- **Topics**: Kid-friendly meals, healthy snacks

### Kids' Education & Learning

**NASA for Students**
- **URL**: Check NASA website for student RSS feeds
- **Description**: Space news for students
- **Age**: K-12
- **Topics**: Space, astronomy, STEM

**National Geographic Kids**
- **URL**: Check NatGeo Kids website
- **Description**: Animals, science, and nature
- **Age**: Elementary
- **Topics**: Wildlife, environment, science

**Highlights for Kids**
- **URL**: Check Highlights website
- **Description**: Stories, activities, and fun facts
- **Age**: 6-12
- **Topics**: Learning activities, stories, puzzles

**Scholastic News**
- **URL**: Check Scholastic website for RSS
- **Description**: Educational news and activities
- **Age**: K-8
- **Topics**: Current events, literacy, learning

### Books & Reading

**Common Sense Media Book Reviews**
- **URL**: Check CommonSenseMedia.org
- **Description**: Age-appropriate book reviews
- **Safe**: Yes (curated content)
- **Topics**: Book recommendations by age

**Nerdy Book Club**
- **URL**: `https://nerdybookclub.wordpress.com/feed/`
- **Description**: Children's and YA book recommendations
- **Age**: Teachers, parents, kids
- **Topics**: Book reviews, reading lists

### Sports (Kid-Focused)

**ESPN for Kids** (if available)
- Check for kid-specific sports feeds
- Age-appropriate sports news

**Local Youth Sports Organizations**
- Little League updates
- AYSO soccer news
- School sports calendars

### School & Local Community

**Your Child's School**
- Most schools have RSS feeds for:
  - Announcements
  - Lunch menus
  - Calendar events
  - School newsletter

**Local Library**
- Event calendars
- New book arrivals
- Storytime schedules
- Teen programs

**Parks & Recreation**
- Activity schedules
- Program registration
- Facility closures
- Community events

**Local Museums**
- Family programs
- Special exhibits
- Free admission days
- Educational workshops

## Setting Up RSS Feeds

### Step 1: Find Your RSS Feed URL

Most websites with regularly updated content offer RSS feeds:

**Common Locations:**
- Look for RSS icon (📰 or orange wave icon)
- Check website footer for "RSS" or "Feed" links
- Add `/feed`, `/rss`, or `/feed.xml` to blog URLs
- Check site's "Subscribe" page

**Testing Feed URLs:**
1. Paste URL into browser
2. Should see XML content (not formatted webpage)
3. Look for `<rss>` or `<feed>` tags at the top
4. Verify content appears recent
5. **Check first few items for appropriateness**

**Example Feed URLs:**
- `https://www.timeforkids.com/feed`
- `https://www.budgetbytes.com/feed/`
- `https://www.superhealthykids.com/feed/`
- `https://yourschool.edu/news/feed/`

### Step 2: Add RSS Feed to FamilyCast

1. Navigate to **Content Sources** → **Integrations**
2. Click **Add Integration**
3. Select **RSS Feed**
4. Enter feed details:

**Required Fields:**
- **Feed URL**: Full RSS feed URL
- **Name**: Descriptive name (e.g., "Recipe Ideas", "School News")

**Optional Fields:**
- **Priority**: Display order (0 = highest, default: 0)
- **Max Items**: How many items to cache (default: 20)
- **Update Interval**: Fetch frequency in seconds (default: 300 = 5 minutes)

5. Click **Test Feed** to verify connection
6. **Review content preview** - Check for appropriate content
7. Click **Save**

### Step 3: Configure Content Filters (Recommended)

For general news feeds, set up content filters:

1. After saving feed, click **Edit Filters**
2. Add **Exclude Keywords**:
   ```
   politics, election, violence, crime, murder, assault,
   scandal, lawsuit, controversial, explicit
   ```
3. Add custom keywords based on your family's preferences
4. Save filters

### Step 4: Configure Display Settings

**Update Interval:**
- **5 minutes (300 sec)**: Weather, local news
- **15 minutes (900 sec)**: Recipe blogs, parenting tips
- **30 minutes (1800 sec)**: School announcements
- **60 minutes (3600 sec)**: Book reviews, seasonal content

**Max Items:**
- **5-10 items**: School news, weather
- **15-20 items**: Recipe blogs, parenting tips (recommended)
- **25-50 items**: Only for comprehensive news feeds

**Priority:**
- **0**: Most important (school announcements, weather)
- **50**: Regular content (recipes, tips)
- **100**: Optional content (entertainment, extras)

## Adding RSS Feeds to Layouts

### Method 1: RSS Content Area

1. Open Layout Editor
2. Add content area to canvas
3. Set **Content Type** to "RSS"
4. Select your RSS feed from **Content Source**
5. Configure display options:
   - **Display Style**: Ticker, list, cards, full
   - **Items to Show**: How many items visible at once
   - **Rotation Speed**: How long each item shows (recommend 10-15 sec for reading with kids)
6. Preview to verify content appropriateness
7. Save layout

### Method 2: Multiple Feed Rotation

Display multiple RSS feeds in rotation:

1. Create content area
2. Add multiple RSS feeds as sources
3. Set rotation interval (e.g., 15 seconds per feed)
4. Feeds alternate automatically
5. Use priority to control order

**Example: Morning Dashboard**
```
Feed 1: Weather (Priority 0) - 15 seconds
Feed 2: School News (Priority 1) - 15 seconds
Feed 3: Daily Recipe (Priority 2) - 15 seconds
Rotation: 45 seconds total, then repeats
```

## Display Styles

### Ticker Style

**Appearance:**
- Scrolling text across bottom or side
- Continuous horizontal scroll
- Classic news ticker look

**Best For:**
- Weather updates
- School announcements
- Quick headlines
- Date/time/temperature combo

**Configuration:**
```
Display Style: Ticker
Scroll Speed: Slow (kids need time to read)
Direction: Left-to-right
Height: 80-120px (larger text for kids)
Font Size: 20-24px
```

**Family Example:**
- Position: Bottom of screen
- Content: "Today's lunch: Pizza and salad • High: 72°F • Soccer practice 4pm"
- Scrolls continuously
- Large, readable text

### List Style

**Appearance:**
- Vertical list of headlines
- One headline per line
- Clean, readable format

**Best For:**
- Recipe lists ("This Week's Dinners")
- School announcements
- Chore lists
- Activity schedules

**Configuration:**
```
Display Style: List
Items Visible: 5-7
Font Size: 22-28px (readable from across room)
Line Height: 1.6
Item Duration: 8-12 seconds each
```

**Family Example:**
- Position: Side panel (40% width)
- Content: School events this week
- Shows: 6 items at once
- Rotates every 10 seconds
- Color-coded by importance

### Card Style

**Appearance:**
- Individual cards with image
- Title + excerpt + metadata
- Visual, magazine-style layout

**Best For:**
- Recipe ideas with photos
- Book recommendations with covers
- Activity suggestions with images
- Learning content with visuals

**Configuration:**
```
Display Style: Cards
Cards Per Row: 1-2 (larger for visibility)
Image Size: Large
Show Excerpt: Yes (2-3 lines)
Card Duration: 15-20 seconds (time to read and discuss)
```

**Family Example:**
- Position: Main content area (70%)
- Content: "Dinner Ideas for the Week"
- Shows: Recipe photo + title + prep time
- Rotates every 18 seconds
- Large, appetizing photos

### Full Content Style

**Appearance:**
- Single article at a time
- Full headline, content, image
- Immersive reading experience

**Best For:**
- Educational content (read together)
- Recipe of the day
- Family announcement
- Learning article

**Configuration:**
```
Display Style: Full Content
Content Lines: 8-12 lines
Image Position: Top
Font Size: 24-32px (very readable)
Duration: 30-45 seconds (time to read as family)
Transitions: Slow fade
```

**Family Example:**
- Position: Full screen
- Content: "Science fact of the day"
- Shows: Large image + full text
- Stays for 40 seconds
- Family reads together

## Example Layouts

### Morning Family Dashboard

**Configuration:**
```
Top Section (20%): Weather ticker
Middle Section (60%): Today's schedule + school announcements (list)
Bottom Section (20%): Recipe of the day (card)
```

**Feeds:**
1. Weather.gov RSS - Ticker style, update every 5 min
2. School announcements - List style, update every 30 min
3. Budget Bytes recipes - Card style, update every 60 min

**Priority:**
- Weather: 0 (always shows)
- School: 1 (important)
- Recipe: 2 (nice to have)

### Kitchen Recipe Display

**Configuration:**
```
Full screen: Recipe cards
Rotation: Every 20 seconds
```

**Feeds:**
1. Budget Bytes (weeknight dinners)
2. Super Healthy Kids (kid-friendly meals)
3. AllRecipes (family favorites)

**Display:**
- Large recipe photos
- Recipe title + prep time
- Star rating visible
- 20 seconds per recipe
- Cycles through 15 recipes

### Kids' Learning Corner

**Configuration:**
```
Left Panel (60%): Educational article (full content)
Right Panel (40%): Fun facts list
```

**Feeds:**
1. Newsela kid-friendly news - Full content, 45 sec each
2. NASA space facts - List style, 12 sec each
3. National Geographic Kids - Rotating content

**Safety:**
- All feeds pre-approved by parents
- Content filters enabled
- Reviewed weekly
- Educational focus

### Homework Helper

**Configuration:**
```
Top: Today's assignments (list)
Middle: Study tips article (full content)
Bottom: School calendar (ticker)
```

**Feeds:**
1. School assignment RSS
2. Study tips blog
3. School calendar feed

**Features:**
- Homework due dates highlighted
- Study tips rotate
- Test reminders appear

## Best Practices

### Content Selection

**Choose Feeds That:**
- Update regularly (daily or more)
- Are age-appropriate for your children
- Have consistent, quality content
- Include engaging images when possible
- Match your family's interests and values

**Avoid Feeds That:**
- Contain mature or controversial content
- Update rarely (stale content)
- Have inconsistent quality
- Include advertisements or clickbait
- Require login/paywall

### Safety Practices

**Before Adding Any Feed:**
1. **Review personally** - Read through at least 10 recent posts
2. **Check for sensitive topics** - Look for politics, violence, mature themes
3. **Test feed** - Run for a week with adult supervision
4. **Set up filters** - Add exclude keywords for questionable terms
5. **Monitor regularly** - Check displayed content weekly

**Red Flags:**
- ⚠️ General news sites (may show graphic content)
- ⚠️ Unmoderated blogs or forums
- ⚠️ Feeds with comment sections visible
- ⚠️ Political or controversial topic feeds
- ⚠️ Sites with ads or pop-ups

**Safe Bets:**
- ✅ .edu domains (schools, universities)
- ✅ Kids' news services (Time for Kids, Newsela)
- ✅ Recipe blogs focused on family meals
- ✅ Your child's school official feeds
- ✅ Local library and museum feeds

### Age-Appropriate Configuration

**Elementary Age (5-10):**
```
Display Style: Cards (large images)
Font Size: 28-32px (very large)
Duration: 20-30 seconds (time to read slowly)
Content: Picture books, simple recipes, weather
Filters: Strict (exclude most news)
```

**Middle School (11-13):**
```
Display Style: List or cards
Font Size: 22-26px
Duration: 15-20 seconds
Content: Educational news, study tips, activities
Filters: Moderate (exclude politics, violence)
```

**High School (14-18):**
```
Display Style: List or full content
Font Size: 20-24px
Duration: 12-18 seconds
Content: Current events, college prep, deeper learning
Filters: Light (exclude explicit content)
```

**Adults/Parents:**
```
Display Style: Any
Font Size: 18-22px
Duration: 10-15 seconds
Content: News, recipes, parenting, lifestyle
Filters: Minimal or custom
```

### Multiple Feed Strategy

**Priority System:**
```
0-25: Critical info (weather, school closures, urgent)
26-50: Important (school news, schedules, assignments)
51-75: Helpful (recipes, tips, activities)
76-100: Optional (entertainment, extras)
```

**Balanced Morning Dashboard:**
```
1. Weather (Priority 0): Every 5 min, 5 items
2. School news (Priority 10): Every 30 min, 10 items
3. Recipe ideas (Priority 50): Every 60 min, 8 items
4. Parenting tips (Priority 75): Every 120 min, 5 items
```

**Total**: 4 feeds, good variety, not overwhelming

### Reading Time Considerations

**Kids reading speeds:**
- **Early readers (K-2)**: 60-100 words per minute
- **Elementary (3-5)**: 100-150 words per minute
- **Middle school (6-8)**: 150-250 words per minute
- **Adults**: 200-300 words per minute

**Display duration formula:**
```
Word Count ÷ Reading Speed × 60 = Seconds needed
```

**Example:**
- Headline: 10 words
- Slowest reader: 60 wpm
- Time needed: (10 ÷ 60) × 60 = 10 seconds
- **Recommended**: 15 seconds (buffer for comprehension)

### Update Frequency Guidelines

**Weather:**
- Update every 5-15 minutes
- Critical for daily planning

**School News:**
- Update every 30-60 minutes
- Important but not urgent

**Recipes/Tips:**
- Update every 1-4 hours
- Content doesn't change rapidly

**Educational Content:**
- Update daily or weekly
- Evergreen content

## Content Filtering

*Available in all FamilyCast plans*

### Exclude Keywords

Prevent items containing specific words from displaying:

**Configuration:**
1. Edit RSS feed
2. Go to **Filters** section
3. Add **Exclude Keywords** (comma-separated):
   ```
   politics, election, vote, senator, congress, republican, democrat,
   violence, murder, assault, shooting, crime, arrest, lawsuit,
   scandal, controversy, protest, riot,
   explicit, mature, adult, graphic,
   divorce, affair, addiction
   ```
4. Save changes

**How It Works:**
- FamilyCast checks each RSS item's title and description
- If any exclude keyword is found, item is skipped
- Filtering happens before display (invisible to family)
- Case-insensitive matching

**Testing Filters:**
1. Add feed without filters
2. Preview content for 24 hours
3. Note any inappropriate terms
4. Add those terms to exclude list
5. Verify filtered content is appropriate

### Include Keywords (Optional)

Only show items containing specific words:

**Use Cases:**
- Show only recipes tagged "family-friendly"
- Show only school news about your child's grade
- Show only local events in your city

**Example:**
```
Include Keywords: family, kid-friendly, children, parenting
```

**Note:** Include filters are more restrictive—use carefully.

### Custom Filter Strategies

**For General News Feeds:**
```
Exclude: politics, election, violence, crime, scandal,
         controversial, graphic, mature, adult, lawsuit
```

**For Food Blogs:**
```
Exclude: alcohol, wine, beer, cocktail, liquor (if desired)
Include: family, kid-friendly, healthy (if desired)
```

**For Local News:**
```
Exclude: crime, murder, assault, arrest, violence
Include: school, education, family, community, event
```

## Troubleshooting

### Feed Not Updating

**Symptoms:**
- Content shows old items
- New posts don't appear
- "Last updated" timestamp is old

**Solutions:**

1. **Check Feed URL**:
   - Paste feed URL in browser
   - Verify XML loads (not error page)
   - Feed may have moved or been removed
   - Contact website if feed is broken

2. **Verify Update Interval**:
   - May be set too long (e.g., 4 hours)
   - Reduce to 5-15 minutes for news
   - Force manual refresh in feed settings
   - Click "Refresh Now" button

3. **Review Error Logs**:
   - Go to feed settings
   - Check "Last Fetch Status"
   - Read error message
   - Common errors:
     - 404: Feed removed
     - 403: Access blocked
     - Timeout: Slow server

4. **Test Feed Connection**:
   - Click "Test Connection" in feed settings
   - Verify successful response
   - Check returned items
   - Ensure feed has recent content

5. **API/Rate Limits**:
   - Some feeds limit how often you can fetch
   - Increase update interval if hitting limits
   - Contact feed provider if blocked

### No Content Displaying

**Symptoms:**
- Feed connected but nothing shows
- Blank content area
- Error message on display

**Solutions:**

1. **Verify Content Source**:
   - Layout has RSS feed assigned?
   - Correct feed selected?
   - Content type set to "RSS"?
   - Edit layout to confirm

2. **Check Feed Items**:
   - Does feed have content?
   - View feed XML in browser
   - Count how many `<item>` entries
   - Some feeds may be empty

3. **Review Feed Status**:
   - Is feed active (not disabled)?
   - Check toggle in feed settings
   - Enable if disabled

4. **Check Filters**:
   - Are filters too restrictive?
   - Temporarily disable filters
   - Test if content appears
   - Adjust filter keywords

5. **Preview Layout**:
   - Use layout preview before deploying
   - Check for JavaScript errors (browser console)
   - Verify display device has internet connection

### Inappropriate Content Showing

**Symptoms:**
- Feed displays mature or sensitive content
- Kids see something concerning
- Content doesn't match expectations

**Immediate Actions:**

1. **Disable Feed Immediately**:
   - Go to feed settings
   - Toggle "Active" to OFF
   - Content stops showing immediately

2. **Review Displayed Content**:
   - Check what was shown
   - Document inappropriate items
   - Determine if feed should be used at all

**Long-Term Solutions:**

1. **Add Content Filters**:
   - List inappropriate words found
   - Add to Exclude Keywords
   - Test filters thoroughly

2. **Switch to Safer Feed**:
   - Find alternative source
   - Use kid-specific news services
   - Avoid general news feeds

3. **Increase Monitoring**:
   - Check displayed content daily
   - Set up alerts for new content
   - Review feeds weekly

4. **Curate Feed List**:
   - Remove questionable feeds
   - Only use .edu and verified kid-safe sources
   - When in doubt, leave it out

**Prevention:**
- Always preview feeds before displaying to kids
- Start with strict filters
- Use kid-specific news services
- Monitor displayed content regularly
- Keep exclude keyword list updated

### Images Not Showing

**Symptoms:**
- Headlines appear but no images
- Broken image placeholders
- Inconsistent image display

**Solutions:**

1. **Check Feed Format**:
   - Not all RSS feeds include images
   - View feed XML in browser
   - Look for `<enclosure>` or `<media:content>` tags
   - If no image tags, images won't display

2. **Image URL Issues**:
   - Some feeds use relative URLs (won't load)
   - Image URLs may expire
   - HTTPS/HTTP mixed content issues
   - Try different feed from same source

3. **Display Settings**:
   - Verify "Show Images" is enabled in layout
   - Check image size settings (may be too small)
   - Allow time for images to load on first display
   - Slow internet may delay image loading

4. **Alternative Solutions**:
   - Use text-only display style
   - Switch to card style without images
   - Find feed with better image support
   - Add placeholder image for feed

### Slow Performance

**Symptoms:**
- Feeds load slowly
- Display feels sluggish
- Content updates lag
- Family notices delays

**Solutions:**

1. **Reduce Max Items**:
   - Lower from 30 to 10-15
   - Less content to fetch and cache
   - Faster load times
   - Still enough variety

2. **Increase Update Interval**:
   - Fetch less frequently
   - Reduces network usage
   - Improves performance
   - Content still fresh enough

3. **Optimize Display**:
   - Reduce number of feeds (max 3-4 per layout)
   - Use simpler display styles (list vs. cards)
   - Reduce image sizes
   - Limit concurrent content sources

4. **Check Internet Speed**:
   - Test internet speed at display location
   - Minimum 5 Mbps recommended
   - Upgrade internet if needed
   - Move display closer to WiFi router

5. **Device Performance**:
   - Older devices may struggle
   - Close other apps on display device
   - Restart device weekly
   - Consider upgrading hardware

### Content Not Kid-Friendly

**Problem:** Feed occasionally shows questionable content despite filters

**Solutions:**

1. **Strengthen Filters**:
   - Add more exclude keywords
   - Review what slipped through
   - Add variants of problematic terms
   - Test filters after updates

2. **Use Curated Sources**:
   - Switch to kid-specific news (Time for Kids, Newsela)
   - Use .edu sources
   - Avoid general news feeds entirely
   - Stick to recipe, learning, and school feeds

3. **Manual Curation**:
   - Create custom RSS feed with tools like RSS.app
   - Hand-pick articles to include
   - Update manually weekly
   - Complete control over content

4. **Whitelist Approach**:
   - Instead of excluding bad terms, include only good terms
   - Example: Only show items with "kids", "family", "children"
   - More restrictive but safer
   - Less content variety

## Advanced Configuration

### Multiple Display Zones

Create different zones for different family members:

**Family Room Layout:**
```
Top Left (40%): Mom's recipe feeds
Top Right (30%): Dad's sports feeds
Bottom (30%): Kids' educational feeds
```

**Configuration:**
- Each zone has own feeds
- Separate priorities
- Different update intervals
- Age-appropriate content per zone

### Time-Based Content

*Available in Growth and Premium plans*

Display different feeds at different times:

**Morning (6am-9am):**
- Weather forecast
- School announcements
- Breakfast recipes

**Afternoon (3pm-6pm):**
- Homework tips
- After-school activities
- Dinner recipes

**Evening (6pm-9pm):**
- Family activity ideas
- Tomorrow's schedule
- Relaxation content

**Configuration:**
1. Create multiple layouts
2. Schedule layouts by time of day
3. Assign different feeds to each
4. Automatic rotation

### Custom RSS Parsing

*Premium plan only*

For feeds with unusual formats:

**Custom Field Mapping:**
- Map non-standard XML fields
- Extract custom metadata
- Parse special tags
- Handle unique formats

**Example:**
```
Standard field: <title>
Your feed uses: <headline>
Custom mapping: headline → title
```

Contact support for custom parsing assistance.

### Webhook Notifications

*Premium plan only*

Get notified when specific content appears:

**Use Cases:**
- School emergency alerts
- Weather warnings
- Important announcements

**Configuration:**
1. Set up webhook URL
2. Define trigger keywords
3. Receive instant notification
4. Take action (call school, prepare for weather)

## Privacy & Safety

### Data Handling

**What FamilyCast Does:**
- Fetches RSS feed content from public URLs
- Caches items temporarily (typically 24 hours)
- Displays content on your family's devices
- No personal data collected from feeds

**What FamilyCast Doesn't Do:**
- Share your feed choices with third parties
- Track what your family reads
- Collect data from feed sources
- Retain feed content long-term

### Third-Party Content

**Important:**
- RSS feeds are controlled by external websites
- FamilyCast cannot control source content
- Content may change without notice
- Sources may add inappropriate content at any time

**Your Responsibility:**
- Review feeds regularly
- Monitor displayed content
- Update filters as needed
- Remove problematic feeds immediately

### Child Safety Recommendations

**Best Practices:**
1. **Preview First**: Always preview new feeds for 24-48 hours before showing to kids
2. **Start Strict**: Begin with tight filters, relax if needed
3. **Use Kid Sources**: Prefer kid-specific news and educational sites
4. **Regular Reviews**: Check displayed content weekly
5. **Family Conversations**: Discuss questionable content if it appears

**Red Flags:**
- Content you wouldn't want kids to see
- Political or controversial topics
- Violence or mature themes
- Inappropriate advertising
- Unmoderated comments

**When in Doubt:**
If you're unsure about a feed's appropriateness, don't add it. There are thousands of safe, family-friendly feeds available.

## Next Steps

- **[Integrations Overview](../features/integrations.md)** - Other integration options for families
- **[Layouts](../features/layouts.md)** - Design layouts with RSS content
- **[Content Association](../workflows/content-association.md)** - Deploy RSS feeds to displays
- **[Content Safety](../guides/content-safety.md)** - Keep content kid-friendly
- **[Troubleshooting](../troubleshooting/integration-problems.md)** - Fix RSS issues

## Support

Need help setting up RSS feeds safely?

- **Email**: support@familycast.app
- **Community**: community.familycast.app
- **Safety Concerns**: safety@familycast.app (immediate response)

We're here to help you create a safe, informative display for your family.
