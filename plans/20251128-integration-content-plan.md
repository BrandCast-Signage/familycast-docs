# FamilyCast Integration Content Plan
**Date:** 2025-11-28 (Revised)
**Reference:** GitHub Issue #2 (Canonical Feature List)

## Objective
Align the current documentation with the canonical feature set defined for the alpha release, incorporating clarified terminology and workflow.

## 1. Core Terminology & Workflow Clarification
*   **Integration:** A connection to an external service (e.g., Google Calendar, RSS Feeds). These power Content Sources.
*   **Library Import:** A special type of integration (Canva, Google Photos) that brings media *into the Media Library*. These are accessed via the Library UI, not as direct Content Source options. Direct Upload is also a Library Import.
*   **Content Type:** A classification layer (e.g., CALENDAR, TASKS, IMAGE) for Integrations/Library Imports. Used for organizing options in the Admin UI.
*   **Native Widget:** A content type (e.g., Clock, Countdown, Text) that is configured directly in the Layout Editor, without needing an external integration or Content Source.
*   **Content Source:** Configured instance of an Integration (e.g., "My Family Calendar" sourced from Google Calendar). Options are set here.
*   **Layout Area:** A designated space within a Layout where a Content Source (or Native Widget) is displayed.
*   **Display:** The physical screen showing the content.
*   **Schedules/Playlists:** Mechanisms for dynamically changing Layouts on a Display.

## 2. Deletions / Archives
The following pages should be removed or marked as deprecated:
*   `docs/integrations/gmail.md` (Explicitly excluded)
*   `docs/integrations/zoomshift.md` (BrandCast Exclusive)
*   `docs/integrations/google-business-reviews.md` (BrandCast Exclusive)
*   `docs/integrations/photo-slideshow.md` (Redundant, use Google Photos and Media Library)

## 3. Content Type Categorization & Documentation Strategy
The following content types need proper distinction in documentation:

### Native Widgets (Configured Directly in Layout Area)
*   **Clock**: New doc needed, placed under a 'Content Types' or 'Features' section.
*   **Countdown**: New doc needed, placed under a 'Content Types' or 'Features' section.
*   **Text**: New doc needed, placed under a 'Content Types' or 'Features' section.

### Library Imports (Integrations populating Media Library)
*   **Image/Video**: Handled through the Media Library. Documentation should cover how Canva/Google Photos populate this.
*   `docs/integrations/canva.md`: **Create this doc**, detailing its function as a Library Import.
*   `docs/integrations/google-photos.md`: Ensure its documentation reinforces its role in populating the Media Library, not live embedding.

### Integrations (Powering Content Sources)
*   **Calendar**: Google Calendar, Cozi Calendar (iCal sync), iCal / .ics
*   **Task List**: Google Tasks, Cozi Lists
*   **RSS Feed**
*   **Stock Ticker**, **Stock Chart**: Stock Market
*   **Slides**: Google Slides
*   **Quotes**: New doc needed.
*   **Dad Joke**: Refactor `dad-jokes.md` to ensure it's categorized as a Content Type.
*   **Weather**

## 4. Integration & Content Type Gap Analysis

### Missing Docs (Create)
*   `docs/integrations/canva.md` (Library Import for FamilyCast)
*   `docs/features/content-types/clock.md` (Native Widget)
*   `docs/features/content-types/countdown.md` (Native Widget)
*   `docs/features/content-types/quotes.md` (Content Type driven by a simple internal source)
*   `docs/features/content-types/text.md` (Native Widget)
*   `docs/features/content-types/social-embed.md` (Content Type, although BrandCast exclusive, ensure FamilyCast explicitly excludes this if needed)

### Updates Needed (Existing Docs)
*   `docs/integrations/cozi-integration.md`: Ensure this maps clearly to "Cozi Calendar" and integrates well with the "CALENDAR" Content Type. Rename to `cozi-calendar.md` for consistency.
*   `docs/integrations/dad-jokes.md`: Refactor/move under `docs/features/content-types/` and align with Content Type definition.
*   `docs/integrations/google-photos.md`: Update to clearly state it's a "Library Import" and "NOT live embed".

## 5. Execution Plan
1.  **Prune**: Delete `docs/integrations/gmail.md`. Delete `docs/integrations/photo-slideshow.md`.
2.  **Refactor & Relocate**:
    *   Rename `docs/integrations/cozi-integration.md` to `docs/integrations/cozi-calendar.md`.
    *   Refactor `dad-jokes.md` and move to `docs/features/content-types/`.
3.  **Create New Docs**: Draft the missing guides for `canva.md` (Library Import), and the Native Widgets/Content Types (`clock.md`, `countdown.md`, `quotes.md`, `text.md`, `social-embed.md` - if applicable). Ensure these are placed in appropriate `docs/features/content-types/` or similar structure.
4.  **Update Existing Docs**: Specifically update `google-photos.md` to reinforce its "Library Import" role.
5.  **Sidebar Updates**: Ensure `sidebars.ts` is updated for all moves and new docs.
6.  **Review**: Perform a final review against Issue #2's canonical lists and terminology.