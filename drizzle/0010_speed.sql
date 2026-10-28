CREATE TABLE `app_meta` (
	`key` text PRIMARY KEY NOT NULL,
	`value` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `live_games` (
	`pin` text PRIMARY KEY NOT NULL,
	`state` text NOT NULL,
	`version` integer DEFAULT 0 NOT NULL,
	`touched_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `live_games_touched` ON `live_games` (`touched_at`);--> statement-breakpoint
CREATE INDEX `lessons_course_status` ON `lessons` (`course_id`,`status`);