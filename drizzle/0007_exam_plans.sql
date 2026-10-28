CREATE TABLE `exam_plans` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`exam_id` text NOT NULL,
	`exam_date` text NOT NULL,
	`minutes_per_day` integer NOT NULL,
	`start_date` text NOT NULL,
	`status` text NOT NULL,
	`state` text NOT NULL,
	`created_at` text DEFAULT (current_timestamp) NOT NULL,
	`updated_at` text DEFAULT (current_timestamp) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `exam_plans_user_exam` ON `exam_plans` (`user_id`,`exam_id`);