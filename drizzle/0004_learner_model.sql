CREATE TABLE `answer_events` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`item_id` text NOT NULL,
	`source` text NOT NULL,
	`ref_id` text NOT NULL,
	`course_id` text,
	`correct` integer NOT NULL,
	`choice` integer,
	`confidence` integer,
	`ms` integer,
	`hint_used` integer DEFAULT false NOT NULL,
	`created_at` text DEFAULT (current_timestamp) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `answer_events_user_item` ON `answer_events` (`user_id`,`item_id`,`created_at`);--> statement-breakpoint
CREATE INDEX `answer_events_user_time` ON `answer_events` (`user_id`,`created_at`);--> statement-breakpoint
CREATE TABLE `lesson_skills` (
	`lesson_id` text NOT NULL,
	`skill_id` text NOT NULL,
	PRIMARY KEY(`lesson_id`, `skill_id`),
	FOREIGN KEY (`lesson_id`) REFERENCES `lessons`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`skill_id`) REFERENCES `skills`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `lesson_skills_skill` ON `lesson_skills` (`skill_id`);--> statement-breakpoint
CREATE TABLE `review_cards` (
	`user_id` text NOT NULL,
	`item_id` text NOT NULL,
	`source` text NOT NULL,
	`ref_id` text NOT NULL,
	`course_id` text,
	`due` text NOT NULL,
	`card` text NOT NULL,
	`reps` integer DEFAULT 0 NOT NULL,
	`lapses` integer DEFAULT 0 NOT NULL,
	`last_correct` integer NOT NULL,
	`updated_at` text DEFAULT (current_timestamp) NOT NULL,
	PRIMARY KEY(`user_id`, `item_id`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `review_cards_user_due` ON `review_cards` (`user_id`,`due`);--> statement-breakpoint
CREATE INDEX `review_cards_user_course` ON `review_cards` (`user_id`,`course_id`);--> statement-breakpoint
CREATE TABLE `skill_prereqs` (
	`skill_id` text NOT NULL,
	`prereq_id` text NOT NULL,
	PRIMARY KEY(`skill_id`, `prereq_id`),
	FOREIGN KEY (`skill_id`) REFERENCES `skills`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`prereq_id`) REFERENCES `skills`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `skill_prereqs_prereq` ON `skill_prereqs` (`prereq_id`);--> statement-breakpoint
CREATE TABLE `skills` (
	`id` text PRIMARY KEY NOT NULL,
	`course_id` text NOT NULL,
	`unit_id` text,
	`position` integer NOT NULL,
	`title` text NOT NULL,
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`unit_id`) REFERENCES `units`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `skills_course` ON `skills` (`course_id`,`position`);