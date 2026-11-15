CREATE TABLE `reminders` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`kind` text NOT NULL,
	`entry_id` text,
	`minutes_before` integer,
	`title` text DEFAULT '' NOT NULL,
	`days` integer DEFAULT 0 NOT NULL,
	`date` text,
	`time` text,
	`enabled` integer DEFAULT true NOT NULL,
	`created_at` text DEFAULT (current_timestamp) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`entry_id`) REFERENCES `schedule_entries`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `reminders_user` ON `reminders` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `reminders_entry` ON `reminders` (`entry_id`);--> statement-breakpoint
CREATE TABLE `schedule_entries` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`day` integer NOT NULL,
	`start` text NOT NULL,
	`end` text NOT NULL,
	`subject_id` text,
	`title` text DEFAULT '' NOT NULL,
	`place` text DEFAULT '' NOT NULL,
	`note` text DEFAULT '' NOT NULL,
	`created_at` text DEFAULT (current_timestamp) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `schedule_entries_user` ON `schedule_entries` (`user_id`,`day`,`start`);