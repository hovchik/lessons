CREATE TABLE `item_ratings` (
	`item_id` text PRIMARY KEY NOT NULL,
	`difficulty` real NOT NULL,
	`answers` integer DEFAULT 0 NOT NULL,
	`updated_at` text DEFAULT (current_timestamp) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `skill_ratings` (
	`user_id` text NOT NULL,
	`skill_id` text NOT NULL,
	`ability` real NOT NULL,
	`answers` integer DEFAULT 0 NOT NULL,
	`updated_at` text DEFAULT (current_timestamp) NOT NULL,
	PRIMARY KEY(`user_id`, `skill_id`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `answer_events_item` ON `answer_events` (`item_id`);