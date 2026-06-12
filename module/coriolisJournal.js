function isCustomJournal(entity) {
  const importPath = entity.getFlag("yzecoriolis", "customJournal");
  if (!importPath) {
    return false;
  }
  return true;
}

/// handles injecting coriolis classes into journal entries so that compendiums
/// can use them for custom styling
// eslint-disable-next-line no-unused-vars
Hooks.on("renderJournalEntrySheet", (app, html, options) => {
  if (app.document && isCustomJournal(app.document)) {
    $(html)
      .find(".entryContent")
      .parents(".journal-entry-content")
      .addClass("coriolis-core");
  }
});

// const JournalPageSheetV1 = foundry.appv1.sheets.JournalPageSheet;
// Hooks.on("renderJournalEntryPageSheet", (app, html) => {
//   console.log("rendering sheet 2", app, html);
//   if (app instanceof JournalPageSheetV1) {
//     //do some thing
//     console.log("found another sheet", app, html);
//   }
// });
