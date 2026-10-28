CREATE TABLE `game_scores` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`game_id` text NOT NULL,
	`mode` text NOT NULL,
	`score` integer NOT NULL,
	`total` integer NOT NULL,
	`created_at` text DEFAULT (current_timestamp) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `game_scores_user_game` ON `game_scores` (`user_id`,`game_id`,`mode`);--> statement-breakpoint
CREATE TABLE `puzzle_results` (
	`user_id` text NOT NULL,
	`day` text NOT NULL,
	`level` text NOT NULL,
	`puzzle_id` text NOT NULL,
	`tries` integer DEFAULT 0 NOT NULL,
	`solved` integer DEFAULT false NOT NULL,
	`updated_at` text DEFAULT (current_timestamp) NOT NULL,
	PRIMARY KEY(`user_id`, `day`, `level`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `unit_reflections` (
	`user_id` text NOT NULL,
	`unit_id` text NOT NULL,
	`text` text NOT NULL,
	`updated_at` text DEFAULT (current_timestamp) NOT NULL,
	PRIMARY KEY(`user_id`, `unit_id`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `user_cards` (
	`user_id` text NOT NULL,
	`card_id` text NOT NULL,
	`skill_id` text NOT NULL,
	`created_at` text DEFAULT (current_timestamp) NOT NULL,
	`seen_at` text,
	PRIMARY KEY(`user_id`, `card_id`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_cards_user_skill` ON `user_cards` (`user_id`,`skill_id`);