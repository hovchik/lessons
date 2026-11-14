-- Multiple-choice options are shown in a mixed order from now on (src/lib/questions.ts displayForm).
-- Choices saved before this moment are in the written order, so the mistake notebook must not read them as shown positions.
INSERT OR IGNORE INTO `app_meta` (`key`, `value`) VALUES ('choice_shuffle_since', CAST(strftime('%s', 'now') AS INTEGER));
